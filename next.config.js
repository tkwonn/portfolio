/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.shields.io',
            },
        ],
        unoptimized: true,
    },
    output: 'export',
};

module.exports = nextConfig;
