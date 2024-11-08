import { MotionH2, MotionH6, MotionP, MotionSpan } from "@/animations/motion-provider";
import { charVariants } from "@/animations/motion-variants";
import { DivToScroll, SectionToScroll } from "@/animations/ScrollAnimations";
import { howItWorksInfo } from "@/constant"
import { useTranslations } from "next-intl";
import Image from "next/image"

const HowItWorksSection = () => {

    const translateHowItWorks = useTranslations('Home-How-it-works');
    const language = useTranslations("language");

    return (
        <SectionToScroll className={`py-10 xl:py-20 |  |  | `}>
            <MotionH2
                initial="hidden"
                whileInView="reveal"
                viewport={{ once: true, margin: "-200px" }}
                transition={{ staggerChildren: 0.02, delay: 1.5 }} 
                className={` | text-nftCustom-text text-[1.75rem] xl:text-[2.375rem] font-semibold capitalize |  | ${language("isEnglish") === "false" && "text-end"}`}
            >
                {translateHowItWorks("title").split("").map(char => (
                    <MotionSpan
                        key={char}
                        transition={{ duration: 1 }}
                        variants={charVariants}
                    >
                        {char}
                    </MotionSpan>
                ))}
            </MotionH2>

            <MotionP 
                initial="hidden"
                whileInView="reveal"
                viewport={{ once: true, margin: "-200px" }}
                transition={{ staggerChildren: 0.02, delay: 1.5 }} 
                className={`mt-1 mb-10 xl:mb-12 | text-nftCustom-text text-base xl:text-[1.375rem] font-light xl:capitalize |  | ${language("isEnglish") === "false" && "text-end"}`}
            >
                {translateHowItWorks("description").split("").map(char => (
                    <MotionSpan
                        key={char}
                        transition={{ duration: 0.75 }}
                        variants={charVariants}
                    >
                        {char}
                    </MotionSpan>
                ))}
            </MotionP>

            <DivToScroll className={` |  | grid grid-cols-1 max-md:gap-y-5 md:grid-cols-3 md:gap-x-[1.875rem] | `}>
                {howItWorksInfo.map((info, index) => (
                    <div key={info.id} className={`max-md:p-5 md:pt-2 md:px-5 md:pb-[1.875rem] xl:pt-3 xl:px-[1.875rem] | bg-nftCustom-background_secondary | flex md:flex-col justify-between items-center max-md:gap-2 md:gap-5 | rounded-[20px]`}>
                        <Image
                            src={`/${info.image}`}
                            alt={`${info.imageAlt} Icon`}
                            width={250}
                            height={250}
                            quality={100}
                            className={`w-[100px] h-[100px] md:w-[160px] xl:w-[250px] md:h-[160px] xl:h-[250px] object-contain |  |  | `}
                        />

                        <div className={`md:mb-auto | md:text-center |  | ${language("isEnglish") === "false" && "text-end"}`}>
                            <MotionH6 
                                initial={{ x: "20%", opacity: 0, }}
                                whileInView={{ x: "0%", opacity: 1, }}
                                transition={{ delay: 0.5 * (index + 0.25), duration: 0.5, ease: "easeInOut", }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`mb-2 | text-nftCustom-text text-base |  | ${language("isEnglish") === "true" ? "font-medium xl:text-[1.375rem]" : "md:text-[1.2rem] xl:text-[1.5rem] font-normal xl:font-bold xl:mb-3"}`}
                            >
                                {language("isEnglish") === "true" ? info.titleEn : info.titleFa}
                            </MotionH6>

                            <MotionP 
                                initial={{ y: "20%", opacity: 0, }}
                                whileInView={{ y: "0%", opacity: 1, }}
                                transition={{ delay: 0.5 * (index + 0.5), duration: 0.5, ease: "easeInOut", }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`xl:w-11/12 xl:mx-auto | text-nftCustom-text text-xs xl:text-base font-light |  | `}
                            >
                                {language("isEnglish") === "true" ? info.textEn : info.textFa}
                            </MotionP>
                        </div>
                    </div>
                ))}
            </DivToScroll>
        </SectionToScroll>
    )

}

export default HowItWorksSection