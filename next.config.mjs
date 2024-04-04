/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'newtronic-solution.com',
            port: '',
            pathname: '/wp-content/uploads/**'
        }, {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            pathname: '/photos/**'
        }],
    }
};

export default nextConfig;
