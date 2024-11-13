import { MotionH1, MotionP, MotionSpan } from "@/animations/motion-provider"
import { charVariants } from "@/animations/motion-variants"
import { GlobalMotionMain } from "@/animations/MotionAnimations"
import { SectionToScroll } from "@/animations/ScrollAnimations"
import { IntegratedTechnologies } from "@/components"
import Navbar from "@/components/Navbar"
import { skillsInfo } from "@/constant"
import useLanguage from "@/hooks/useLanguage"
import { iranSans } from "@/utils/fonts"

const SkillsPage = () => {

    const { isEnglish, isFarsi } = useLanguage();

    return (
        <GlobalMotionMain className={`overflow-x-hidden |  |  | ${isFarsi && `${iranSans}`} border-2 border-rose-600`}>
            <Navbar place="skills" />

            <SectionToScroll className={`max-w-[380px] mt-28 mb-20 md:mt-32 md:max-w-[730px] lg:max-w-[900px] xl:w-[1200px] 2xl:w-[1500px] max-sm:px-4 mx-auto |  |  | ${isFarsi && "text-end"} border-2 border-yellow-500`}>
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

            <IntegratedTechnologies />
        </GlobalMotionMain>
    )

}

export default SkillsPage
