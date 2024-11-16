import { MotionDiv, MotionH1, MotionP, MotionSpan } from "@/animations/motion-provider"
import { charVariants } from "@/animations/motion-variants"
import { GlobalMotionMain } from "@/animations/MotionAnimations"
import { SectionToScroll } from "@/animations/ScrollAnimations"
import { IntegratedTechnologies } from "@/components"
import Navbar from "@/components/Navbar"
import { metadataValues, skillsInfo } from "@/constant"
import useLanguage from "@/hooks/useLanguage"
import { iranSans, spaceMono } from "@/utils/fonts"

export const generateMetadata = async ({ params: { locale } }: MainPagePropsType) => {
    
    return {
        title: locale === "en" ? metadataValues.skillsTitleEn : metadataValues.skillsTitleFa,
    }
  
}

const SkillsPage = () => {

    const { isEnglish, isFarsi } = useLanguage();

    return (
        <GlobalMotionMain className={`overflow-x-hidden |  |  | ${isFarsi && `${iranSans}`}`}>
            <Navbar place="skills" />

            <SectionToScroll className={`max-w-[380px] mt-28 mb-12 md:mb-0 lg:mb-8 xl:mb-16 md:mt-32 md:max-w-[730px] lg:max-w-[900px] xl:w-[1200px] 2xl:w-[1500px] max-sm:px-4 mx-auto |  |  | ${isFarsi && "text-end"}`}>
                <MotionH1 
                    initial="hidden"
                    whileInView="reveal"
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ staggerChildren: 0.02, delay: 1.5 }} 
                    className={`mb-[0.625rem] md:mb-5 | text-portfolio-card_background text-[1.75rem] md:text-[2.375rem] lg:text-5xl xl:text-[3.1875rem] leading-[140%] md:leading-[120%] xl:leading-[110%] font-semibold |  | `}
                >
                    {(isEnglish ? skillsInfo.titleEn : skillsInfo.titleFa).split("").map(char => (
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
                    className={` | text-portfolio-text_primary text-[1rem] lg:text-lg xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal capitalize |  | `}
                >
                    {(isEnglish ? skillsInfo.descriptionEn : skillsInfo.descriptionFa).split("").map(char => (
                        <MotionSpan
                            key={char}
                            transition={{ duration: 0.25 }}
                            variants={charVariants}
                        >
                            {char}
                        </MotionSpan>
                    ))}
                </MotionP>
            </SectionToScroll>

            <MotionDiv 
                initial={{ x: "20%", opacity: 0 }}
                whileInView={{ x: "0%", opacity: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: 0.5, duration: 0.25, ease: "easeInOut" }}
                className={`md:hidden w-11/12 max-w-[380px] p-4 mx-auto mb-8 | bg-portfolio-card_background text-center |  | rounded-[20px]`}
            >
                <span className={` | text-base text-portfolio-card_border capitalize ${spaceMono} font-semibold |  | `}>
                    {isEnglish ? "The orbit is best viewed on desktop screen. Check it out there!" : "مدار به بهترین شکل روی دسکتاپ قابل مشاهده است. آن را آنجا بررسی کنید"}
                </span>
            </MotionDiv>

            <IntegratedTechnologies />
        </GlobalMotionMain>
    )

}

export default SkillsPage
