import CustomButton from "@/components/CustomButton"
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link"
import DiscoverSectionCountUp from "./DiscoverSectionCountUp";
import { MotionDiv, MotionH1, MotionP, MotionSpan } from "@/animations/motion-provider";
import { charVariants } from "@/animations/motion-variants";

const DiscoverSection = ({ locale }: { locale: string }) => {

    const translateDiscover = useTranslations('Home-Discover');
    const language = useTranslations("language");

    const headerText = translateDiscover("title").split("");
    const paragraphText = translateDiscover("description").split("");

    return (
        <section className={`py-10 md:py-16 xl:py-20 | md:flex md:gap-8 |  | ${language("isEnglish") === "false" && "md:flex-row-reverse"}`}>
            <div className={` |  | flex flex-col items-center gap-[0.625rem] md:gap-5 md:basis-1/2 | `}>
                <MotionH1 
                    initial="hidden"
                    whileInView="reveal"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.02 }}
                    className={`max-md:mr-auto | text-nftCustom-text text-3xl md:text-4xl md:leading-[120%] font-semibold capitalize |  | ${language("isEnglish") === "true" ? "xl:text-[4.2rem]" : "text-end xl:text-[3.8rem]"}`}
                >
                    {headerText.map(char => (
                        <MotionSpan
                            key={char}
                            transition={{ duration: 0.5 }}
                            variants={charVariants}
                        >
                            {char}
                        </MotionSpan>
                    ))}
                </MotionH1>

                <MotionP
                    initial="hidden" 
                    whileInView="reveal" 
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.015 }}
                    className={`md:mb-1 xl:mb-3 | text-nftCustom-text text-base xl:text-2xl font-light |  | ${language("isEnglish") === "false" && "text-end"}`}
                >
                    {paragraphText.map(char => (
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
                    initial={{
                        x: "-10%",
                        opacity: 0,
                    }}
                    animate={{
                        x: "0%",
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    className={`md:hidden overflow-hidden my-6 |  |  | rounded-[20px] group`}
                >
                    <Link 
                        href={`/${locale}/nft/space-walking`} 
                        className={` | flex flex-col |  | `}
                    >
                        <div className={`overflow-hidden inline-block h-fit |  |  | `}>
                            <Image 
                                src="/space-walking.png"
                                alt="Space Walking"
                                width={315}
                                height={216}
                                className={`w-auto h-auto object-cover |  |  | group-hover:scale-110 duration-500 transition-transform`}
                            />
                        </div>

                        <div className={`py-[1.375rem] px-5 space-y-[0.625rem] | bg-nftCustom-background_secondary |  | `}>
                            <h5 className={` | text-nftCustom-text group-hover:text-nftCustom-cta text-[1.375rem] font-medium capitalize |  | main-transition-color ${language("isEnglish") === "false" && "text-end"}`}>
                                {translateDiscover("card-title")}
                            </h5>

                            <div className={` |  | flex items-center gap-3 | ${language("isEnglish") === "true" ? "justify-start" : "justify-end"}`}>
                                <Image 
                                    src="/animakid-avatar.png"
                                    alt="Animakid Avatar"
                                    width={24}
                                    height={24}
                                    className={`w-aut h-auto rounded-full |  |  | `}
                                />
                                
                                <span className={` | text-base font-light text-nftCustom-text |  | `}>
                                    Animakid
                                </span>
                            </div>
                        </div>
                    </Link>
                </MotionDiv>

                <MotionDiv
                    initial={{
                        y: "20%",
                        opacity: 0,
                    }}
                    animate={{
                        y: "0%",
                        opacity: 1,
                    }}
                    transition={{
                        delay: 1,
                        duration: 0.75,
                        ease: "easeInOut",
                    }}
                    className={`max-[425px]:w-full |  |  | ${language("isEnglish") === "true" ? "md:mr-auto" : "md:ml-auto"}`}
                >
                    <CustomButton 
                        locale={locale} 
                        translateButton={translateDiscover("button-text")} 
                        type="link" 
                        href="marketplace"
                        icon="rocket-launch"
                        className={` max-sm:px-20 sm:px-20 md:px-0 md:w-[14rem] md:py-[1rem] md:mb-2 xl:mb-6 border-4 border-nftCustom-cta bg-nftCustom-cta hover:bg-nftCustom-text text-nftCustom-text flex justify-center items-center rounded-[20px] py-[1.1875rem] group`}
                        textClass={`text-[1rem] leading-[140%] font-medium group-hover:text-nftCustom-cta ${language("isEnglish") === "true" ? "ml-3" : "mr-3 order-first"}`}
                    />
                </MotionDiv>

                <DiscoverSectionCountUp />
            </div>

            <MotionDiv 
                initial={{ x: "-10%", opacity: 0, }}
                animate={{ x: "0%", opacity: 1, }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut", }}
                viewport={{ once: true }}
                className={`max-md:hidden |  |  | md:basis-1/2`}
            >
                <Link 
                    href={`/${locale}/nft/space-walking`} 
                    className={`overflow-hidden my-6 md:my-0 xl:w-[31rem] xl:h-[31rem] | flex flex-col |  | rounded-[20px] group ${language("isEnglish") === "true" ? "xl:ml-auto" : "xl:mr-auto"}`}
                >
                    <div className={`overflow-hidden inline-block h-fit |  |  | `}>
                        <Image 
                            src="/space-walking.png"
                            alt="Space Walking"
                            width={315}
                            height={216}
                            className={`w-auto h-auto object-cover xl:w-full |  |  | group-hover:scale-110 duration-500 transition-transform`}
                        />
                    </div>

                    <div className={`py-[1.375rem] px-5 space-y-[0.625rem] | bg-nftCustom-background_secondary |  | `}>
                        <h5 className={` | text-nftCustom-text group-hover:text-nftCustom-cta text-[1.375rem] font-medium capitalize |  | main-transition-color ${language("isEnglish") === "true" ? "xl:ml-2" : "text-end xl:mr-2"}`}>
                            {translateDiscover("card-title")}
                        </h5>

                        <div className={` |  | flex items-center gap-3 | ${language("isEnglish") === "true" ? "justify-start xl:ml-2" : "justify-end xl:mr-2"}`}>
                            <Image 
                                src="/animakid-avatar.png"
                                alt="Animakid Avatar"
                                width={24}
                                height={24}
                                className={`w-aut h-auto rounded-full |  |  | `}
                            />
                            
                            <span className={` | text-base font-light text-nftCustom-text |  | `}>
                                Animakid
                            </span>
                        </div>
                    </div>
                </Link>
            </MotionDiv>
        </section>
    )

}

export default DiscoverSection