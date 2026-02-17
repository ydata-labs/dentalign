/** @type {import('next').NextConfig} */
const nextConfig = {
    // SSR mode for Cloudflare Workers
    images: {
        loader: 'custom',
        loaderFile: './image-loader.ts',
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "X-Frame-Options", value: "DENY" },
                    { key: "X-XSS-Protection", value: "1; mode=block" },
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
                    { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
                    {
                        key: "Content-Security-Policy",
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com https://cdn.jsdelivr.net https://www.googletagmanager.com https://www.google-analytics.com",
                            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net",
                            "font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net data:",
                            "img-src 'self' data: blob: https://cdn-cgi/ https://*.cloudflare.com",
                            "connect-src 'self' https://api.emailjs.com https://rapid-email-verifier.fly.dev https://cloudflareinsights.com https://static.cloudflareinsights.com",
                            "frame-src 'self' https://www.google.com",
                            "frame-ancestors 'none'",
                            "object-src 'none'",
                            "base-uri 'self'",
                            "form-action 'self'",
                        ].join("; "),
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
