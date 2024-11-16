import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { Providers } from "@/providers/next-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { workSans } from "@/utils/fonts";
import { Toaster } from "@/components/ui/toaster"
import NFTLoadingSuspense from "@/components/NFTLoadingSuspense";
import { metadataValues, nftMarketplaceThemes } from "@/constant";
// import FixHydrationFailure from "@/components/FixHydrationFailure";

export const metadata: Metadata = {
    manifest: "/manifest.json",
    title: metadataValues.homeTitleEn,
    description: metadataValues.homeDescriptionEn,
    icons: {
        icon: '/icons/icon-192x192.png',
        apple: '/icons/icon-512x512.png',
    },
};

export const viewport: Viewport = {
    themeColor: "#000000",
};

export default async function RootLayout({
    children,
    params: {locale}
}: Readonly<{
    children: React.ReactNode;
    params: {locale: string};
}>) {

    const messages = await getMessages();

    return (
        <html lang={locale} className={` |  |  | scroll-smooth overflow-x-hidden`}>
            <body className={`relative | selection:text-portfolio-text_secondary selection:bg-portfolio-text_primary bg-portfolio-background ${workSans} |  | nft-scrollbar`}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider 
                        attribute="class"
                        disableTransitionOnChange
                        defaultTheme="default"
                        enableSystem={false}
                        themes={nftMarketplaceThemes}
                    >
                        <Providers>
                            <NFTLoadingSuspense>
                                {children}
                                <Toaster />
                            </NFTLoadingSuspense>
                        </Providers>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
    
}
