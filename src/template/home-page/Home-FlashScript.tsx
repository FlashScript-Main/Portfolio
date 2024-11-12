"use client";

import { MotionDiv } from "@/animations/motion-provider";
import useLanguage from "@/hooks/useLanguage";
import useScreenSize from "@/hooks/useScreenSize"
import Image from "next/image"

const FlashScript = () => {

    const { isEnglish, isFarsi } = useLanguage();

    const { xs, sm, md, lg } = useScreenSize();

    return (
        <MotionDiv 
            initial={{ y: `${(xs || sm || md) && "20%"}`, x: `${lg && "-20%"}`, opacity: 0 }}
            whileInView={{ y: "0%", x: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.5 , duration: 0.25, ease: "easeInOut" }}
            className={`card-main-features |  | max-lg:row-start-1 md:col-span-2 lg:max-xl:row-span-2 lg:max-xl:row-start-2 xl:col-start-2 xl:row-start-2 xl:col-end-4 xl:row-end-4 | lg:rounded-r-[20px] lg:rounded-bl-none xl:rounded-[20px] border-t-4 border-t-portfolio-card_border max-lg:border-x-4 max-lg:border-x-portfolio-card_border lg:border-t-0 lg:border-l-4 lg:border-l-portfolio-card_border xl:border-none`}
        >
            <MotionDiv 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.75 , duration: 0.25, ease: "easeInOut" }}
                className={`card-main-paddings lg:max-xl:w-full lg:max-xl:h-full |  |  | ${isEnglish ? "lg:max-xl:grid lg:max-xl:place-content-center" : "lg:max-xl:pt-12"}`}
            >
                <span className={`mb-2 md:mb-4 lg:mb-6 | text-portfolio-text_primary text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold | flex flex-col | ${isFarsi && "text-end"}`}>
                    {isEnglish ? "Hi 🖐🏻" : "🖐🏻 سلام"}
                </span>

                <div className={`absolute ${isEnglish ? "top-[0.8rem] md:top-[0.8rem] right-[1rem] md:right-[2rem] lg:max-xl:top-[2rem] lg:max-xl:right-[2rem] xl:top-[1.5rem] xl:right-[1.5rem]" : "top-[0.8rem] md:top-[0.8rem] left-[1rem] md:left-[2rem] lg:top-[1rem] lg:left-[1rem]"}  w-fit h-fit |  |  | `}>
                    <Image 
                        src={"/skills/flash-script.jpeg"}
                        alt="FlashScript"
                        width={1000}
                        height={1000}
                        className={`size-[6rem] md:size-[11rem] lg:size-[10rem] 2xl:size-[12rem] object-cover |  |  | rounded-full ${isFarsi && "max-sm:size-[4rem] sm:max-md:size-[5rem] lg:size-[7.5rem] xl:size-[6.5rem] 2xl:size-[8.5rem]"}`}
                    />
                </div>

                <div>
                    <h1 className={` | text-portfolio-text_primary text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold | flex items-center gap-2 2xl:gap-3 |  | ${isFarsi && "justify-end"}`}>
                        {isEnglish ? (
                            <>
                                <span>{"I'm"}</span>
                                <span className={`text-portfolio-text_secondary`}>FlashScript</span>
                            </>
                        ) : (
                            <>
                                <span>{"هستم"}</span>
                                <span className={`text-portfolio-text_secondary`}>فلش اسکریپت</span>
                                <span>{"من"}</span>
                            </>
                        )}
                    </h1>

                    <h2 className={`my-2 md:my-4 lg:my-6 | text-portfolio-text_primary text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold | flex gap-2 2xl:gap-3 |  | ${isFarsi && "justify-end"}`}>
                        {isEnglish ? (
                            <>
                                <span>a</span>
                                <span className={`text-portfolio-text_secondary`}>Front-End Developer</span>
                            </>
                        ) : (
                            <>
                                <span className={`text-portfolio-text_secondary`}>برنامه نویس فرانت اند</span>
                            </>
                        )}
                    </h2>

                    <p className={`mt-4 md:mt-6 | text-sm lg:text-base text-center text-portfolio-background capitalize | font-semibold |  | ${isEnglish ? "xl:mt-8 2xl:mt-10 2xl:text-lg" : "md:max-lg:text-lg lg:text-xl lg:mt-8 xl:mt-6 2xl:mt-8 2xl:text-2xl"}`}>
                        {isEnglish ? "Empowering innovation with lightning-fast, cutting-edge solutions" : "توانمندسازی نوآوری با راه‌حل‌های پیشرفته و فوق‌العاده سریع"}
                    </p>
                </div>
            </MotionDiv>
        </MotionDiv>
    )

}

export default FlashScript