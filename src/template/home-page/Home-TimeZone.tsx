"use client";

import { MotionDiv } from "@/animations/motion-provider";
import useScreenSize from "@/hooks/useScreenSize";
import useTimeZone from "@/hooks/useTimeZone";
import { spaceMono } from "@/utils/fonts";

const TimeZone = () => {

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
                transition={{ delay: 2.25 , duration: 0.25, ease: "easeInOut" }}
                className={`py-4 |  |  | `}
            >
                <div className={`md:px-4 md:mb-3 lg:mb-1 xl:mb-3 |  | md:flex | `}>
                    <div className={` |  | xl:basis-1/3 | `}>
                        <p className={` | text-portfolio-text_secondary text-xl md:text-2xl 2xl:text-4xl font-semibold | flex flex-col items-center gap-0 | `}>
                            <span>
                                Tehran
                                <span className={`hidden |  |  | `}>:</span>
                            </span>
                            <span className={` |  ${spaceMono} |  | `}>
                                {Tehran}
                            </span>
                        </p>
                    </div>

                    <div className={`md:w-full |  | xl:flex xl:flex-col xl:basis-2/3 xl:justify-around xl:items-center | `}>
                        <div className={`w-8/12 mx-auto mt-3 md:mt-0 xl:pr-10 2xl:pr-32 lg:w-full md:max-xl:h-full |  | flex flex-col sm:flex-row md:flex-col xl:flex-row justify-between lg:justify-between xl:justify-between items-center | `}>
                            <p className={` | text-portfolio-card_border text-base md:text-lg font-semibold | flex items-center gap-2 | `}>
                                <span>
                                    NewYork
                                    <span className={` |  |  | `}>:</span>
                                </span>
                                <span className={` |  ${spaceMono} |  | `}>
                                    {NewYork}
                                </span>
                            </p>
                            
                            <p className={` | text-portfolio-card_border text-base md:text-lg font-semibold | flex items-center gap-2 | `}>
                                <span>
                                    London
                                    <span className={` |  |  | `}>:</span>
                                </span>
                                <span className={` |  ${spaceMono} |  | `}>
                                    {London}
                                </span>
                            </p>
                        </div>

                        <div className={`w-8/12 xl:w-full mx-auto mb-3 xl:mb-0 xl:pr-10 2xl:pr-32 md:hidden xl:flex |  | flex flex-col sm:flex-row justify-between items-center | `}>
                            <p className={` | text-portfolio-card_border text-base md:text-lg font-semibold | flex items-center gap-2 | `}>
                                <span>
                                    Tokyo
                                    <span className={` |  |  | `}>:</span>
                                </span>
                                <span className={` |  ${spaceMono} |  | `}>
                                    {Tokyo}
                                </span>
                            </p>
                            
                            <p className={` | text-portfolio-card_border text-base md:text-lg font-semibold | flex items-center gap-2 | `}>
                                <span>
                                    Sydney
                                    <span className={` |  |  | `}>:</span>
                                </span>
                                <span className={` |  ${spaceMono} |  | `}>
                                    {Sydney}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className={`max-md:px-4 lg:px-4 | text-portfolio-background text-sm 2xl:text-lg text-center capitalize font-semibold |  | `}>
                        I work between 7AM - 9PM, <br className="lg:hidden" /> so feel free to reach out during those hours
                    </p>
                </div>
            </MotionDiv>
        </MotionDiv>
    )

}

export default TimeZone