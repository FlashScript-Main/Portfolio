"use client";

import useLanguage from "@/hooks/useLanguage"
import { MotionDiv } from "@/animations/motion-provider"
import useScreenSize from "@/hooks/useScreenSize";

const Location = () => {

    const { isEnglish, isFarsi } = useLanguage();

    const { xs, sm, md, lg, xl, xxl } = useScreenSize();

    return (
        <MotionDiv 
            initial={{ 
                y: `${((xs || sm || lg) && "20%") || ((xl || xxl) && "-20%")}`, 
                x: `${((md || lg) && "-20%")}`, opacity: 0 
            }}
            whileInView={{ y: "0%", x: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 1.75 , duration: 0.25, ease: "easeInOut" }}
            className={`card-main-features |  | lg:max-xl:row-start-4 lg:max-xl:col-start-1 | max-md:border-x-4 max-md:border-x-portfolio-card_border md:border-l-4 md:border-l-portfolio-card_border md:rounded-r-[20px] lg:border-b-4 lg:border-b-portfolio-card_border lg:rounded-r-none lg:rounded-tr-[20px] xl:rounded-tr-none xl:rounded-b-[20px] xl:border-b-0 xl:border-l-0 xl:border-t-4 xl:border-t-portfolio-card_border`}
        >
            <MotionDiv 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 2 , duration: 0.25, ease: "easeInOut" }}
                className={`py-4 lg:py-6 2xl:pt-7 md:max-xl:w-full md:max-xl:h-full |  | flex flex-col items-center justify-center gap-4 md:max-lg:gap-5 lg:gap-6 | ${isFarsi && "xl:w-full xl:h-full xl:grid xl:place-content-center"}`}
            >
                <h4 className={` | text-portfolio-text_primary text-xl md:text-2xl font-semibold | flex items-center justify-center gap-[0.3rem] md:gap-2 |  | ${isEnglish ? "lg:text-3xl 2xl:text-4xl" : "lg:text-2xl 2xl:text-3xl"}`}>
                    {isEnglish ? (
                        <>
                            <span>
                                {"I'm from"}
                            </span>

                            <span className={` | text-portfolio-text_secondary |  | `}>
                                Iran 🌍
                            </span>
                        </>
                    ) : (
                        <div className={` |  |  | ${isFarsi && "flex flex-row-reverse items-center justify-center gap-2"}`}>
                            <span>
                                من متولد
                            </span>

                            <span className={` | text-portfolio-text_secondary |  | `}>
                                ایران
                            </span>

                            <span>
                                🌍 هستم
                            </span>
                        </div>
                    )}
                </h4>

                <p className={` | text-portfolio-background text-center capitalize font-semibold | flex justify-center items-center gap-1 lg:gap-[0.3rem] | ${isEnglish ? "text-sm lg:text-base 2xl:text-lg" : "text-sm md:text-base 2xl:text-lg"}`}>
                    {isEnglish ? (
                        <>
                            <span>View on</span>

                            <a 
                                href={`https://maps.app.goo.gl/2hSzVM8HvBZycnWP8`} 
                                className={` | hover:text-portfolio-text_primary |  | main-transition-color`}
                                target={"_blank"}
                            >
                                Maps
                            </a>

                            <span>and</span>

                            <a 
                                href={`https://earth.google.com/web/search/Shiraz,+Fars+Province/@29.56637203,52.70293871,1469.95616625a,124492.81517666d,35y,5.76458294h,0t,0r/data=CoQBGlYSUAolMHgzZmIyMGQwYzhjODVmMmUzOjB4NmQwYzViOGFlZjZiNGNmNhltuNlptZc9QCE5Daw-skpKQCoVU2hpcmF6LCBGYXJzIFByb3ZpbmNlGAIgASImCiQJvpUyF1BwNUARupUyF1BwNcAZ3DxJl2fgSUAh3DxJl2fgScBCAggBQgIIAEoNCP___________wEQAA`} 
                                className={` | hover:text-portfolio-text_primary |  | main-transition-color`}
                                target={"_blank"}
                            >
                                Earth
                            </a>
                        </>
                    ) : (
                        <div className={` |  |  | ${isFarsi && "flex flex-row-reverse items-center justify-center gap-1 xl:gap-[0.3rem]"}`}>
                            <span>
                                نمایش در
                            </span>

                            <a 
                                href={`https://maps.app.goo.gl/2hSzVM8HvBZycnWP8`} 
                                className={` | hover:text-portfolio-text_primary |  | main-transition-color`}
                                target={"_blank"}
                            >
                                نقشه گوگل
                            </a>

                            <span>
                                و
                            </span>

                            <a 
                                href={`https://earth.google.com/web/search/Shiraz,+Fars+Province/@29.56637203,52.70293871,1469.95616625a,124492.81517666d,35y,5.76458294h,0t,0r/data=CoQBGlYSUAolMHgzZmIyMGQwYzhjODVmMmUzOjB4NmQwYzViOGFlZjZiNGNmNhltuNlptZc9QCE5Daw-skpKQCoVU2hpcmF6LCBGYXJzIFByb3ZpbmNlGAIgASImCiQJvpUyF1BwNUARupUyF1BwNcAZ3DxJl2fgSUAh3DxJl2fgScBCAggBQgIIAEoNCP___________wEQAA`} 
                                className={` | hover:text-portfolio-text_primary |  | main-transition-color`}
                                target={"_blank"}
                            >
                                گوگل زمین
                            </a>
                        </div>
                    )}
                </p>
            </MotionDiv>
        </MotionDiv>
    )

}

export default Location