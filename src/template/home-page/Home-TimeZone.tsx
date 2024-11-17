"use client";

import { MotionDiv } from "@/animations/motion-provider";
import useLanguage from "@/hooks/useLanguage";
import useScreenSize from "@/hooks/useScreenSize";
import useTimeZone from "@/hooks/useTimeZone";
import { spaceMono } from "@/utils/fonts";

const TimeZone = () => {

    const { isEnglish } = useLanguage();

    const { formattedTime: Tehran } = useTimeZone({ location: "Asia/Tehran" });
    const { formattedTime: NewYork } = useTimeZone({ location: "America/New_York" });
    const { formattedTime: London } = useTimeZone({ location: "Europe/London" });
    const { formattedTime: Tokyo } = useTimeZone({ location: "Asia/Tokyo" });
    const { formattedTime: Sydney } = useTimeZone({ location: "Australia/Sydney" });

    const { xs, sm, md, lg, xl, xxl } = useScreenSize();

    return (
        <MotionDiv 
            initial={{ 
                y: `${((xs || sm) && "20%") || ((lg || xl || xxl) && "-20%")}`, 
                x: `${((md || xl || xxl) && "20%")}`, opacity: 0 
            }}
            whileInView={{ y: "0%", x: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 2 , duration: 0.25, ease: "easeInOut" }}
            className={`card-main-features |  | xl:col-span-2  | max-md:border-x-4 max-md:border-x-portfolio-card_border md:border-r-4 md:border-r-portfolio-card_border md:rounded-l-[20px] lg:border-r-0 lg:border-t-4 lg:border-t-portfolio-card_border lg:rounded-tl-none lg:rounded-br-[20px] xl:rounded-br-none xl:border-r-4 xl:border-r-portfolio-card_border`}
        >
            <MotionDiv 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 2.25, duration: 0.25, ease: "easeInOut" }}
                className={`py-4 |  |  | `}
            >
                <div className={`md:px-4 md:mb-3 xl:mb-3 |  | md:flex | ${isEnglish ? "lg:mb-1" : "lg:mb-2"}`}>
                    <div className={` |  | md:max-xl:basis-1/3 xl:basis-1/3 | `}>
                        <p className={` | text-portfolio-text_secondary font-semibold | flex flex-col items-center gap-0 | ${isEnglish ? "text-xl md:text-2xl 2xl:text-4xl" : "text-2xl md:text-2xl xl:text-3xl 2xl:text-4xl gap-1"}`}>
                            <span>
                                {isEnglish ? "Tehran" : "تهران"}
                                <span className={`hidden |  |  | `}>:</span>
                            </span>
                            <span className={` |  ${isEnglish && spaceMono} |  | `}>
                                {Tehran}
                            </span>
                        </p>
                    </div>

                    <div className={`md:w-full |  | xl:flex xl:flex-col md:max-xl:basis-2/3 xl:basis-2/3 xl:justify-around xl:items-center | `}>
                        <div className={`w-8/12 mx-auto mt-3 md:mt-0 xl:pr-10 2xl:pr-32 lg:w-full md:max-xl:h-full |  | flex flex-col sm:flex-row md:flex-col xl:flex-row justify-between lg:justify-between xl:justify-between items-center | `}>
                            <p className={` | text-portfolio-card_border font-semibold | flex items-center gap-2 | ${isEnglish ? "text-base md:text-lg" : "text-lg md:text-xl flex-row-reverse"}`}>
                                <span>
                                    {isEnglish ? "NewYork:" : ":نیویورک"}
                                </span>
                                <span className={` |  ${isEnglish && spaceMono} |  | `}>
                                    {NewYork}
                                </span>
                            </p>
                            
                            <p className={` | text-portfolio-card_border font-semibold | flex items-center gap-2 | ${isEnglish ? "text-base md:text-lg" : "text-lg md:text-xl flex-row-reverse"}`}>
                                <span>
                                    {isEnglish ? "London:" : ":لندن"}
                                </span>
                                <span className={` |  ${isEnglish && spaceMono} |  | `}>
                                    {London}
                                </span>
                            </p>
                        </div>

                        <div className={`w-8/12 xl:w-full mx-auto mb-3 xl:mb-0 xl:pr-10 2xl:pr-32 md:hidden xl:flex |  | flex flex-col sm:flex-row justify-between items-center | `}>
                            <p className={` | text-portfolio-card_border font-semibold | flex items-center gap-2 | ${isEnglish ? "text-base md:text-lg" : "text-lg md:text-xl flex-row-reverse"}`}>
                                <span>
                                    {isEnglish ? "Tokyo:" : ":توکیو"}
                                </span>
                                <span className={` |  ${isEnglish && spaceMono} |  | `}>
                                    {Tokyo}
                                </span>
                            </p>
                            
                            <p className={` | text-portfolio-card_border font-semibold | flex items-center gap-2 | ${isEnglish ? "text-base md:text-lg" : "text-lg md:text-xl flex-row-reverse"}`}>
                                <span>
                                    {isEnglish ? "Sydney:" : ":سیدنی"}
                                </span>
                                <span className={` |  ${isEnglish && spaceMono} |  | `}>
                                    {Sydney}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className={` | text-portfolio-background text-center capitalize font-semibold |  | ${isEnglish ? "max-md:px-4 lg:px-4 text-sm 2xl:text-lg" : "max-md:px-6 md:px-8 lg:px-8 xl:w-2/3 xl:mx-auto text-base 2xl:text-lg"}`}>
                        {isEnglish ? (
                            <>
                                I work between 7AM - 9PM, <br className="lg:hidden" /> so feel free to reach out during those hours
                            </>
                        ) : (
                            <>
                                ساعات کاری من بین ۷ صبح تا ۹ شب است، در این فاصله زمانی برای ارتباط با من تردید نکنید
                            </>
                        )}
                    </p>
                </div>
            </MotionDiv>
        </MotionDiv>
    )

}

export default TimeZone