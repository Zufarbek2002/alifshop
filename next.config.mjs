/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "cdn.dummyjson.com"
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
