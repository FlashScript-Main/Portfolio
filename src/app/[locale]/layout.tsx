// import type { Metadata } from "next";
// import "@/app/globals.css";
import NFTLoadingSuspense from "@/components/NFTLoadingSuspense";
import { nftMarketplaceThemes } from "@/constant";
import { Providers } from "@/providers/next-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { workSans } from "@/utils/fonts";
// import { workSans } from "@/utils/fonts";
// import NFTLoadingSuspense from "@/components/NFTLoadingSuspense";
// import { metadataValues, nftMarketplaceThemes } from "@/constant";

// export const metadata: Metadata = {
    // title: metadataValues.homeTitleEn,
    // description: metadataValues.homeDescriptionEn,
// };

export default async function RootLayout({
    children,
    params: {locale}
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {

    const messages = await getMessages();

    return (
        <html lang={locale} className={` |  |  | scroll-smooth overflow-x-hidden`}>
            <body className={`relative | bg-nftCustom-background ${workSans} |  | nft-scrollbar`}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider 
                        attribute="class"
                        disableTransitionOnChange
                        defaultTheme="nftDefault"
                        enableSystem={false}
                        themes={nftMarketplaceThemes}
                    >
                        <Providers>
                            <NFTLoadingSuspense>
                                {/* <Header locale={locale} /> */}
                                {children}
                            </NFTLoadingSuspense>
                        </Providers>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
    
}
