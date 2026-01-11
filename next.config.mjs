/** @type {import('next').NextConfig} */
const nextConfig = {
    // SSR mode for Cloudflare Workers
    images: {
        loader: 'custom',
        loaderFile: './image-loader.ts',
    },
};

export default nextConfig;
