"use client";

import { MotionDiv } from "@/animations/motion-provider";
import { home_MainProjectsIcons } from "@/constant";
import useLanguage from "@/hooks/useLanguage";
import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image";
import Link from "next/link"

const MainProjects = () => {

    const { isEnglish, isFarsi } = useLanguage();

    const { xs, sm, md, lg, xl, xxl } = useScreenSize();

    return (
        <MotionDiv 
            initial={{ 
                y: `${((xs || sm || xl || xxl) && "20%")}`, 
                x: `${((md || lg || xl || xxl) && "20%")}`, opacity: 0 
            }}
            whileInView={{ y: "0%", x: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 1 , duration: 0.25, ease: "easeInOut" }}
            className={`card-main-features |  | max-md:row-start-3 md:max-lg:row-start-2 md:max-lg:col-start-2 lg:max-xl:row-start-3 lg:max-xl:col-start-3 xl:row-span-2 | max-md:border-x-4 max-md:border-x-portfolio-card_border md:border-r-4 md:border-r-portfolio-card_border md:rounded-l-[20px] xl:rounded-bl-none xl:border-b-4 xl:border-b-portfolio-card_border`}
        >
            <MotionDiv 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 1.25 , duration: 0.25, ease: "easeInOut" }}
                className={`my-4 xl:mt-8 xl:mb-0 |  |  | ${isFarsi && "2xl:mt-12"}`}
            >
                <div className={`relative w-fit mx-auto |  | flex items-center | `}>
                    <h4 className={`w-full xl:mx-auto | text-portfolio-text_secondary text-xl md:text-2xl lg:text-[1.625rem] xl:text-3xl 2xl:text-4xl font-semibold | flex items-center justify-center |  | ${isEnglish ? "xl:w-3/4" : "xl:w-full xl:mt-6"}`}>
                        <span>
                            {isEnglish ? "Project Highlights 🚀" : "🚀 پروژه های برجسته"}
                        </span>
                    </h4>
                    
                    <div>
                        {home_MainProjectsIcons.map((item) => (
                            <Image
                                key={item.id} 
                                src={`/projects/${item.src}`}
                                alt={item.alt}
                                width={500}
                                height={500}
                                className={`size-10 md:size-12 xl:size-16 object-cover absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] | ${item.classNames} | bg-portfolio-text_primary |  | rounded-full border-2 border-portfolio-background`}
                            />
                        ))}
                    </div>
                </div>

                <p className={`mt-16 md:mt-[4.5rem] | text-center capitalize font-semibold |  | ${isEnglish ? "xl:mt-[8rem] text-sm lg:text-base 2xl:text-lg" : "xl:mt-[8.5rem] text-base xl:text-lg 2xl:text-xl"}`}>
                    <Link 
                        href={`/${isEnglish ? "en" : "fa"}/projects`} 
                        className={` | text-portfolio-background hover:text-portfolio-text_primary |  | main-transition-color`}
                    >
                        {isEnglish ? "Check Them Now!" : "!همین حالا بررسی کنید"}
                    </Link>
                </p>
            </MotionDiv>
        </MotionDiv>
    )

}

export default MainProjects