"use client";

import { ADDRESS, EMAIL, PHONE } from "@/util/config";

export default function StructuredData() {
    // Get review data from environment variables if available
    const reviewCount = process.env.NEXT_PUBLIC_REVIEW_COUNT;
    const reviewRating = process.env.NEXT_PUBLIC_REVIEW_RATING;
    const hasReviews = reviewCount && reviewRating && parseInt(reviewCount) > 0;

    // Base dentist object
    const dentistObject: any = {
        "@type": "Dentist",
        "@id": "https://dentalign.be/#dentist",
        name: "Dentalign",
        image: "https://dentalign.be/assets/img/logo/logo.png",
        url: "https://dentalign.be",
        telephone: PHONE,
        email: EMAIL,
        address: {
            "@type": "PostalAddress",
            streetAddress: "Dokter Haubenlaan 17",
            addressLocality: "Maasmechelen",
            postalCode: "3630",
            addressCountry: "BE",
            addressRegion: "Limburg",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 50.963529,
            longitude: 5.697647,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                ],
                opens: "09:00",
                closes: "17:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "09:00",
                closes: "17:00",
            },
        ],
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Cash, Credit Card, Debit Card",
        areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 50.963529,
                longitude: 5.697647,
            },
            geoRadius: "50000", // 50km radius
        },
        sameAs: [
            "https://www.facebook.com/dentalign",
            "https://www.instagram.com/dentalign",
        ],
    };

    // Add aggregate rating if reviews are available
    if (hasReviews) {
        dentistObject.aggregateRating = {
            "@type": "AggregateRating",
            ratingValue: reviewRating,
            reviewCount: reviewCount,
            bestRating: "5",
            worstRating: "1",
        };
    }

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            // Local Business with optional review data
            dentistObject,
            // Medical Business
            {
                "@type": "MedicalBusiness",
                "@id": "https://dentalign.be/#medicalbusiness",
                name: "Dentalign Tandkliniek",
                description:
                    "Professionele tandheelkundige zorg inclusief cosmetische tandheelkunde, implantaten en preventieve zorg in Maasmechelen, België.",
                medicalSpecialty: [
                    "Dentistry",
                    "Cosmetic Dentistry",
                    "Oral Surgery",
                ],
            },
            // Organization
            {
                "@type": "Organization",
                "@id": "https://dentalign.be/#organization",
                name: "Dentalign",
                url: "https://dentalign.be",
                logo: {
                    "@type": "ImageObject",
                    url: "https://dentalign.be/assets/img/logo/logo.png",
                    width: 256,
                    height: 148,
                },
                contactPoint: {
                    "@type": "ContactPoint",
                    telephone: PHONE,
                    contactType: "customer service",
                    availableLanguage: ["Dutch", "English"],
                    areaServed: "BE",
                },
            },
            // Website
            {
                "@type": "WebSite",
                "@id": "https://dentalign.be/#website",
                url: "https://dentalign.be",
                name: "Dentalign",
                description:
                    "Moderne tandkliniek in Maasmechelen - Professionele tandheelkundige zorg",
                publisher: {
                    "@id": "https://dentalign.be/#organization",
                },
                inLanguage: "nl-BE",
            },
            // Service offerings
            {
                "@type": "Service",
                "@id": "https://dentalign.be/#services",
                serviceType: "Dental Services",
                provider: {
                    "@id": "https://dentalign.be/#dentist",
                },
                areaServed: {
                    "@type": "City",
                    name: "Maasmechelen",
                },
                hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Tandheelkundige Diensten",
                    itemListElement: [
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Algemene Tandheelkunde",
                                description:
                                    "Routinecontroles, vullingen, en preventieve zorg",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Cosmetische Tandheelkunde",
                                description:
                                    "Tanden bleken, veneers, smile makeovers",
                            },
                        },
                        {
                            "@type": "Offer",
                            itemOffered: {
                                "@type": "Service",
                                name: "Tandimplantaten",
                                description:
                                    "Permanente tandvervanging en implantologie",
                            },
                        },
                    ],
                },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
