import { MotionDiv, MotionH2, MotionSpan } from "@/animations/motion-provider";
import { charVariants } from "@/animations/motion-variants";
import { SectionToScroll } from "@/animations/ScrollAnimations";
import { CountDownTimer } from "@/components";
import CustomButton from "@/components/CustomButton"
import { useTranslations } from "next-intl";
import Image from "next/image"
import Link from "next/link"

const MagicMashroomsSection = ({ locale }: { locale: string }) => {

    const translateMagicMashrooms = useTranslations('Home-Magic-Mashrooms');
    const language = useTranslations("language");

    return (
        <SectionToScroll className={`w-full pt-[7.5rem] md:pt-[20.5rem] pb-10 md:pb-[3.75rem] mt-14 md:mt-16 xl:mt-20 relative |  |  | magic-mashrooms-background`}>
            <div className={`w-full h-full absolute inset-0 z-10 | bg-gradient-to-b from-transparent to-nftCustom-cta to-[110%] |  | `} />

            <div className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto relative z-20 |  | flex flex-col md:flex-row md:justify-between max-md:gap-[1.875rem] | ${language("isEnglish") === "false" && "md:flex-row-reverse"}`}>
                <div className={` |  | flex flex-col gap-[1.875rem] | `}>
                    <MotionDiv
                        initial={{ x: "-20%", opacity: 0, }}
                        whileInView={{ x: "0%", opacity: 1, }}
                        transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut", }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`w-[9.4375rem] | bg-nftCustom-background_secondary hover:bg-nftCustom-text |  | rounded-[20px] group main-transition-color ${language("isEnglish") === "false" && "ml-auto"}`}
                    >
                        <Link 
                            href={`/${locale}/artist/shroomie`}
                            className={`py-[0.625rem] |  | flex justify-center items-center gap-3 | `}
                        >
                            <Image 
                                src="/shroomie-avatar.jpg"
                                alt="Shroomie Avatar"
                                width={24}
                                height={24}
                                className={` |  |  | rounded-full`}
                            />

                            <span className={` | text-nftCustom-text group-hover:text-nftCustom-cta text-base font-normal |  | main-transition-color`}>
                                Shroomie
                            </span>
                        </Link>
                    </MotionDiv>

                    <MotionH2 
                        initial="hidden"
                        whileInView="reveal"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ staggerChildren: 0.02, delay: 1.5 }}
                        className={` | text-nftCustom-text text-[2.375rem] xl:text-[3.1875rem] font-semibold |  | ${language("isEnglish") === "false" && "text-end"}`}
                    >
                        {translateMagicMashrooms("title").split("").map(char => (
                            <MotionSpan
                                key={char}
                                transition={{ duration: 1 }}
                                variants={charVariants}
                            >
                                {char}
                            </MotionSpan>
                        ))}
                    </MotionH2>

                    <MotionDiv 
                        initial={{ x: "20%", opacity: 0, }}
                        whileInView={{ x: "0%", opacity: 1, }}
                        transition={{ delay: 0.75, duration: 0.5, ease: "easeInOut", }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`max-md:hidden |  |  | `}
                    >
                        <CustomButton
                            locale={locale} 
                            translateButton={translateMagicMashrooms("button-text")} 
                            type="link" 
                            href="nft/magic-mashrooms"
                            icon="magic-mashrooms-eye"
                            className={`py-[1.1875rem] md:py-[1.1rem] max-md:max-w-[315px] max-md:mx-auto border-4 border-nftCustom-text bg-nftCustom-text hover:border-nftCustom-cta flex justify-center items-center rounded-[20px] group main-transition-color ${language("isEnglish") === "true" ? "md:max-w-[198px]" : "ml-auto md:max-w-[250px]"}`}
                            textClass={`text-[1rem] leading-[140%] font-semibold text-nftCustom-background group-hover:text-nftCustom-cta ${language("isEnglish") === "true" ? "ml-3" : "mr-3 order-first"}`}
                        />
                    </MotionDiv>
                </div>

                <MotionDiv 
                    initial={{ y: "20%", opacity: 0, }}
                    whileInView={{ y: "0%", opacity: 1, }}
                    transition={{ delay: 1, duration: 0.75, ease: "easeIn", }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={` |  | md:flex md:justify-end md:items-end | `}
                >
                    <CountDownTimer />
                </MotionDiv>

                <MotionDiv 
                    initial={{ y: "20%", opacity: 0, }}
                    whileInView={{ y: "0%", opacity: 1, }}
                    transition={{ delay: 1.25, duration: 0.5, ease: "easeOut", }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`md:hidden max-md:mb-2 |  |  | `}
                >
                    <CustomButton
                        locale={locale} 
                        translateButton={translateMagicMashrooms("button-text")} 
                        type="link" 
                        href="nft/magic-mashrooms"
                        icon="magic-mashrooms-eye"
                        className="py-[1.1875rem] max-md:max-w-[315px] md:max-w-[247px] max-md:mx-auto border-4 border-nftCustom-text bg-nftCustom-text hover:border-nftCustom-cta flex justify-center items-center rounded-[20px] group main-transition-color"
                        textClass={`text-[1rem] leading-[140%] font-semibold text-nftCustom-background group-hover:text-nftCustom-cta ${language("isEnglish") === "true" ? "ml-3" : "mr-3 order-first"}`}
                    />
                </MotionDiv>
            </div>
        </SectionToScroll>
    )

}

export default MagicMashroomsSection