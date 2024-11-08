import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  
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
    //     ],
    // }
};

export default withNextIntl(nextConfig);
