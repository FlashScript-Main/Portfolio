import createNextIntlPlugin from 'next-intl/plugin';
import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */

const withNextIntl = createNextIntlPlugin();

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
    reactStrictMode: true,

    // Disable "eslint" & "typescript" rules if "i18n" type was NOT detected
    // eslint: {
    //     ignoreDuringBuilds: true,
    // },
    // typescript: {
    //     ignoreBuildErrors: true,
    // },
    
    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: "https",
    //             hostname: "ipfs.io",
    //         },
    //     ]
    // }
};

export default isProduction ? withNextIntl(withPWA({
    dest: 'public',
})(nextConfig)) : withNextIntl(nextConfig);
