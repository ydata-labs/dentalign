"use client";

export default function FAQSchema() {
    const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What are the options for replacing missing teeth?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "At Dentalign, we offer several options for replacing missing teeth including dental implants, bridges, and dentures. Dental implants are the most permanent solution, offering a natural look and feel. The best option depends on your specific needs, budget, and oral health condition.",
                },
            },
            {
                "@type": "Question",
                name: "What is the difference between a crown and a filling?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "A filling is used to repair small to moderate cavities by filling the damaged area with composite resin or other materials. A crown is a cap that covers the entire visible portion of a tooth, used when there's extensive damage or after a root canal. Crowns provide more comprehensive protection and restoration.",
                },
            },
            {
                "@type": "Question",
                name: "How often should I brush and floss my teeth?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You should brush your teeth at least twice a day for two minutes each time, and floss once daily. Brushing removes plaque and food particles from tooth surfaces, while flossing cleans between teeth where your toothbrush can't reach. Regular brushing and flossing are essential for preventing cavities and gum disease.",
                },
            },
            {
                "@type": "Question",
                name: "When should my child have their first dental visit?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "We recommend bringing your child for their first dental visit by their first birthday or within six months after their first tooth appears. Early visits help establish good oral health habits and allow us to monitor dental development. These visits are usually quick and help your child become comfortable with the dentist.",
                },
            },
            {
                "@type": "Question",
                name: "How can I schedule or reschedule an appointment?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can schedule or reschedule an appointment by calling us at 0494 14 31 15 or using our online contact form at dentalign.be/contact. We offer flexible scheduling including emergency appointments. Our office is located at Dokter Haubenlaan 17, 3630 Maasmechelen.",
                },
            },
            {
                "@type": "Question",
                name: "What should I expect during my first appointment?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "During your first appointment at Dentalign, we'll conduct a comprehensive oral examination, take necessary X-rays, and discuss your dental history and any concerns. We'll create a personalized treatment plan and answer all your questions. The visit typically takes 45-60 minutes.",
                },
            },
            {
                "@type": "Question",
                name: "How does Invisalign compare to traditional braces?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Invisalign uses clear, removable aligners that are nearly invisible and can be taken out for eating and cleaning. Traditional braces use metal brackets and wires. Invisalign is more comfortable and convenient for many patients, though traditional braces may be better for complex cases. Both are effective orthodontic treatments.",
                },
            },
            {
                "@type": "Question",
                name: "What should I do if I have a toothache?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "If you have a toothache, rinse your mouth with warm salt water, gently floss to remove any trapped food, and take over-the-counter pain medication. Contact Dentalign immediately at 0494 14 31 15 for an appointment. Persistent toothaches may indicate infection or decay that requires professional treatment.",
                },
            },
            {
                "@type": "Question",
                name: "How do I handle a knocked-out tooth?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "If a tooth is knocked out, handle it by the crown (not the root), rinse gently if dirty, and try to reinsert it in the socket. If that's not possible, place it in milk or between your cheek and gum. Contact us immediately - time is critical. If treated within an hour, there's a good chance the tooth can be saved.",
                },
            },
            {
                "@type": "Question",
                name: "What is the process for getting dental implants?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "The dental implant process involves several steps: initial consultation and X-rays, surgical placement of the titanium implant into the jawbone, a healing period of 3-6 months for osseointegration, and finally attachment of the abutment and crown. The entire process typically takes 4-8 months but results in a permanent, natural-looking tooth replacement.",
                },
            },
            {
                "@type": "Question",
                name: "Are veneers the right choice for me?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Veneers are ideal if you want to improve the appearance of your teeth by correcting discoloration, chips, gaps, or minor misalignment. They're thin porcelain shells bonded to the front of teeth. Good candidates have healthy teeth and gums. During a consultation at Dentalign, we can determine if veneers or another cosmetic treatment is best for your smile goals.",
                },
            },
            {
                "@type": "Question",
                name: "Do you offer treatments for TMJ or jaw pain?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, at Dentalign we treat TMJ (temporomandibular joint) disorders. Treatment options may include custom night guards, physical therapy exercises, lifestyle modifications, and in some cases, orthodontic treatment. We'll conduct a thorough evaluation to determine the cause of your jaw pain and create an appropriate treatment plan.",
                },
            },
            {
                "@type": "Question",
                name: "How long does it take to recover from oral surgery?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Recovery time varies depending on the procedure. Simple tooth extractions typically heal in 3-5 days, while wisdom teeth removal may take 1-2 weeks. Dental implant surgery requires 3-6 months for complete osseointegration. We provide detailed post-operative instructions and are available for any questions during your recovery.",
                },
            },
            {
                "@type": "Question",
                name: "What foods should I avoid after a dental procedure?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "After dental procedures, avoid hard, crunchy, sticky, or very hot foods. Stick to soft foods like yogurt, mashed potatoes, smoothies, and soups for the first few days. Avoid alcohol and smoking as they can delay healing. Gradually reintroduce normal foods as recommended by your dentist at Dentalign.",
                },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
    );
}
