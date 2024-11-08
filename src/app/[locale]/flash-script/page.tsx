import { MotionH1, MotionP, MotionSpan } from "@/animations/motion-provider";
import { charVariants } from "@/animations/motion-variants";
import { GlobalMotionMain } from "@/animations/MotionAnimations";
import { SectionToScroll } from "@/animations/ScrollAnimations";
import { IntegratedTechnologies } from "@/components";
import { metadataValues } from "@/constant";
import { iranSans } from "@/utils/fonts";
import { useTranslations } from "next-intl";

export const generateMetadata = async ({ params: { locale } }: MainPagePropsType) => {

    return {
        title: locale === "en" ? metadataValues.flashScriptTitleEn : metadataValues.flashScriptTitleFa,
    }
  
}

const FlashScriptPage = () => {

    const translateFlashScript = useTranslations('FlashScript');
    const language = useTranslations("language");

    return (
        <GlobalMotionMain className={`overflow-x-hidden | selection:text-nftCustom-cta selection:bg-nftCustom-text |  | ${language("isEnglish") === "false" && `${iranSans}`}`}>
            <SectionToScroll className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto py-[1.875rem] md:py-10 xl:py-20 |  |  | ${language("isEnglish") === "false" && "text-end"}`}>
                <MotionH1 
                    initial="hidden"
                    whileInView="reveal"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ staggerChildren: 0.02, delay: 1.5 }} 
                    className={`mb-[0.625rem] md:mb-5 | text-nftCustom-text text-[1.75rem] md:text-[2.375rem] xl:text-[3.1875rem] leading-[140%] md:leading-[120%] xl:leading-[110%] font-semibold |  | `}
                >
                    {translateFlashScript("title").split("").map(char => (
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
                    {translateFlashScript("description").split("").map(char => (
                        <MotionSpan
                            key={char}
                            transition={{ duration: 1 }}
                            variants={charVariants}
                        >
                            {char}
                        </MotionSpan>
                    ))}
                </MotionP>
            </SectionToScroll>

            <IntegratedTechnologies />
        </GlobalMotionMain>
    )

}

export default FlashScriptPage