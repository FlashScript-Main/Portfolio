import { MotionDiv, MotionH2, MotionP, MotionSpan } from "@/animations/motion-provider";
import { charVariants } from "@/animations/motion-variants";
import { SectionToScroll } from "@/animations/ScrollAnimations";
import { JoinUsSubscribeForm } from "@/components"
import { useTranslations } from "next-intl";
import Image from "next/image"

const JoinUsSection = () => {

    const translateJoinUs = useTranslations('Home-Join-Us');
    const language = useTranslations("language");

    return (
        <SectionToScroll className={`pt-10 pb-10 md:pb-20 |  |  | `}>
            <div className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto md:py-10 md:px-[1.875rem] xl:p-[3.75rem] | md:bg-nftCustom-background_secondary | flex flex-col md:flex-row max-md:justify-between max-md:items-center md:gap-[1.875rem] xl:gap-20 | md:rounded-[20px] `}>
                <MotionDiv 
                    initial={{ x: "-20%", opacity: 0, }}
                    whileInView={{ x: "0%", opacity: 1, }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut", }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`max-md:mb-[1.875rem] |  | md:basis-1/2 | `}
                >
                    <Image 
                        src="/astronaut.jpg"
                        alt="Astronaut"
                        width={425}
                        height={425}
                        quality={100}
                        className={`w-full md:object-cover xl:w-[425px] xl:h-[310px] |  |  | rounded-[20px]`}
                    />
                </MotionDiv>

                <div className={`xl:pt-4 |  | md:basis-1/2 |`}>
                    <MotionH2 
                        initial="hidden"
                        whileInView="reveal"
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.02, delay: 0.5 }}
                        className={` | text-nftCustom-text text-[1.75rem] xl:text-[2.375rem] xl:leading-[120%] font-medium capitalize |  | ${language("isEnglish") === "false" && "text-end"}`}
                    >
                        {translateJoinUs("title").split("").map(char => (
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
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.02, delay: 0.25 }}
                        className={`mt-2 mb-10 | text-nftCustom-text text-base xl:text-[1.375rem] xl:leading-[160%] font-light xl:capitalize |  | ${language("isEnglish") === "false" && "text-end"}`}
                    >
                        {translateJoinUs("description").split("").map(char => (
                            <MotionSpan
                                key={char}
                                transition={{ duration: 0.5 }}
                                variants={charVariants}
                            >
                                {char}
                            </MotionSpan>
                        ))}
                    </MotionP>

                    <MotionDiv
                        initial={{ y: "20%", opacity: 0, }}
                        whileInView={{ y: "0%", opacity: 1, }}
                        transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut", }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <JoinUsSubscribeForm />
                    </MotionDiv>
                </div>
            </div>
        </SectionToScroll>
    )

}

export default JoinUsSection