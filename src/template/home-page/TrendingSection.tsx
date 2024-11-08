import { MotionDiv, MotionH2, MotionH5, MotionP, MotionSpan } from "@/animations/motion-provider"
import { charVariants } from "@/animations/motion-variants"
import { SectionToScroll } from "@/animations/ScrollAnimations"
import { trendingInfo } from "@/constant"
import { spaceMono } from "@/utils/fonts"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

const TrendingSection = ({ locale }: { locale: string }) => {

    const translateTrending = useTranslations('Home-trend');
    const language = useTranslations("language");

    return (
        <SectionToScroll className={`pt-10 pb-6 xl:py-20 |  |  | `}>
            <MotionH2 
                initial="hidden"
                whileInView="reveal"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ staggerChildren: 0.02, delay: 1 }}
                className={` | text-nftCustom-text text-[1.75rem] xl:text-[2.375rem] font-semibold capitalize |  | ${language("isEnglish") === "false" && "text-end"}`}
            >
                {translateTrending("title").split("").map(char => (
                    <MotionSpan
                        key={char}
                        transition={{ duration: 0.5 }}
                        variants={charVariants}
                    >
                        {char}
                    </MotionSpan>
                ))}
            </MotionH2>

            <MotionP 
                initial="hidden"
                whileInView="reveal"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ staggerChildren: 0.02, delay: 1 }}
                className={`mt-2 mb-10 xl:mb-12 | text-nftCustom-text text-base xl:text-[1.375rem] font-light |  | ${language("isEnglish") === "false" && "text-end"}`}
            >
                {translateTrending("description").split("").map(char => (
                    <MotionSpan
                        key={char}
                        transition={{ duration: 0.5 }}
                        variants={charVariants}
                    >
                        {char}
                    </MotionSpan>
                ))}
            </MotionP>

            <div className={` |  | grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-md:gap-10 | `}>
                {trendingInfo.map((trend, index) => (
                    <div
                        key={trend.id}
                        className={`max-w-[19.6875rem] md:max-w-[20.625rem] max-md:mx-auto |  |  | ${trend.className}`}
                    >
                        <MotionDiv
                            initial={{ y: "10%", opacity: 0 }}
                            whileInView={{ y: "0%", opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ staggerChildren: 0.02, delay: 0.25 * index, duration: 0.5 }}
                        >
                            <Image 
                                src={`/${trend.bigImage}`}
                                alt={trend.imageAlt}
                                width={315}
                                height={315}
                                className={`w-auto h-auto md:w-[330px] md:h-[330px] object-cover |  |  | rounded-[20px]`}
                            />
                        </MotionDiv>

                        <div className={`mt-4 |  | flex justify-between items-center | `}>
                            <MotionDiv
                                initial={{ y: "20%", opacity: 0 }}
                                whileInView={{ y: "0%", opacity: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ staggerChildren: 0.02, delay: 0.5 * (index + 0.5), duration: 0.25 }}
                            >
                                <Image 
                                    src={`/${trend.smallImageOne}`}
                                    alt={trend.imageAlt}
                                    width={95}
                                    height={95}
                                    className={`w-aut h-auto md:w-[100px] md:h-[100px] |  |  | rounded-[20px]`}
                                />
                            </MotionDiv>

                            <MotionDiv
                                initial={{ y: "20%", opacity: 0 }}
                                whileInView={{ y: "0%", opacity: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ staggerChildren: 0.02, delay: 0.5 * (index + 1), duration: 0.25 }}
                            >
                                <Image 
                                    src={`/${trend.smallImageTwo}`}
                                    alt={trend.imageAlt}
                                    width={95}
                                    height={95}
                                    className={`w-aut h-auto md:w-[100px] md:h-[100px] |  |  | rounded-[20px]`}
                                />
                            </MotionDiv>
                            
                            <Link 
                                href={`/${locale}/artist/${trend.href}`}
                                // className={`w-[95px] h-[95px] md:w-[100px] md:h-[100px] | bg-nftCustom-cta hover:bg-nftCustom-text | grid place-content-center | border-4 border-nftCustom-cta rounded-[20px] group main-transition-color`}
                            >
                                <MotionDiv
                                    initial={{ y: "20%", opacity: 0 }}
                                    whileInView={{ y: "0%", opacity: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ staggerChildren: 0.02, delay: 0.5 * (index + 1.5), duration: 0.25 }}
                                    className={`w-[95px] h-[95px] md:w-[100px] md:h-[100px] | bg-nftCustom-cta hover:bg-nftCustom-text | grid place-content-center | border-4 border-nftCustom-cta rounded-[20px] group main-transition-color`}
                                >
                                    <span className={` | text-nftCustom-text group-hover:text-nftCustom-cta text-base md:text-[1.375rem] font-bold ${spaceMono} |  | `}>
                                        {trend.numberImage}+
                                    </span>
                                </MotionDiv>
                            </Link>
                        </div>

                        <div className={`mt-[0.9375rem] |  |  | `}>
                            <MotionH5 
                                initial={{ x: "20%", opacity: 0 }}
                                whileInView={{ x: "0%", opacity: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ staggerChildren: 0.02, delay: 0.25 * index, duration: 0.5 }}
                                className={`mb-2 | text-nftCustom-text text-[1.375rem] font-medium |  | ${language("isEnglish") === "false" && "text-end" }`}
                            >
                                {language("isEnglish") === "true" ? trend.titleEn : trend.titleFa}
                            </MotionH5>

                            <MotionDiv
                                initial={{ y: "20%", opacity: 0 }}
                                whileInView={{ y: "0%", opacity: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ staggerChildren: 0.02, delay: 0.5 * (index + 1), duration: 0.25 }}
                            >
                                <Link 
                                    href={`/${locale}/artist/${trend.href}`} 
                                    className={`w-fit |  | flex items-center gap-3 | group ${language("isEnglish") === "true" ? "justify-start" : "ml-auto"}`}
                                >
                                    <Image 
                                        src={`/${trend.avatarImage}`}
                                        alt={`${trend.avatarName} Avatar`}
                                        width={24}
                                        height={24}
                                        className={`w-aut h-auto  |  |  | rounded-full`}
                                    />
                                    
                                    <span className={` | text-base font-light text-nftCustom-text group-hover:text-nftCustom-cta |  | main-transition-color`}>
                                        {trend.avatarName}
                                    </span>
                                </Link>
                            </MotionDiv>
                        </div>
                    </div>
                ))}
            </div>
        </SectionToScroll>
    )

}

export default TrendingSection