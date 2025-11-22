/** @type {import('next').NextConfig} */
const nextConfig = {
    // SSR mode for Cloudflare Workers
    images: {
        loader: 'custom',
        loaderFile: './image-loader.ts',
    },
    // Enable source maps in production for debugging
    productionBrowserSourceMaps: true,
};

export default nextConfig;
