import { MotionH1, MotionP, MotionSpan } from "@/animations/motion-provider";
import { charVariants } from "@/animations/motion-variants";
import { GlobalMotionMain } from "@/animations/MotionAnimations";
import { SectionToScroll } from "@/animations/ScrollAnimations";
import { metadataValues } from "@/constant";
import MarketplaceTabs from "@/template/marketplace-page/MarketplaceTabs";
import { iranSans } from "@/utils/fonts";
import { useTranslations } from "next-intl";

export const generateMetadata = async ({ params: { locale } }: MainPagePropsType) => {

    return {
        title: locale === "en" ? metadataValues.marketplaceTitleEn : metadataValues.marketplaceTitleFa,
    }
  
}

const MarketplacePage = ({ params: { locale } }: MarketplacePagePropsType) => {

    const translateMarketplace = useTranslations('Marketplace');
    const language = useTranslations("language");

    return (
        <GlobalMotionMain className={` | selection:text-nftCustom-cta selection:bg-nftCustom-text |  | ${language("isEnglish") === "false" && `${iranSans}`}`}>
            {/* <SectionToScroll className={`py-10 md:py-[3.75rem] xl:py-20 |  |  | border-b border-b-nftCustom-background_secondary`}>
                <div className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto |  |  | ${language("isEnglish") === "false" && "text-end"}`}>
                    <MotionH1 
                        initial="hidden"
                        whileInView="reveal"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ staggerChildren: 0.02, delay: 1.5 }} 
                        className={`mb-[0.625rem] | text-nftCustom-text text-[1.75rem] md:text-[2.375rem] xl:text-[3.1875rem] leading-[140%] md:leading-[120%] xl:leading-[110%] font-semibold |  | `}
                    >
                        {translateMarketplace("title").split("").map(char => (
                            <MotionSpan
                                key={char}
                                transition={{ duration: 1.75 }}
                                variants={charVariants}
                            >
                                {char}
                            </MotionSpan>
                        ))}
                    </MotionH1>

                    <MotionP 
                        initial="hidden"
                        whileInView="reveal"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ staggerChildren: 0.02, delay: 1.5 }}
                        className={` | text-nftCustom-text text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal |  | `}
                    >
                        {translateMarketplace("description").split("").map(char => (
                            <MotionSpan
                                key={char}
                                transition={{ duration: 1 }}
                                variants={charVariants}
                            >
                                {char}
                            </MotionSpan>
                        ))}
                    </MotionP>
                </div>
            </SectionToScroll>

            <MarketplaceTabs locale={locale} /> */}
            <div></div>
        </GlobalMotionMain>
    )

}

export default MarketplacePage