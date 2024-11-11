"use client";

import { MotionDiv } from "@/animations/motion-provider"
import { home_SkillsIcons } from "@/constant"
import useLanguage from "@/hooks/useLanguage"
import useScreenSize from "@/hooks/useScreenSize"
import Image from "next/image"
import Link from "next/link"

const Skills = () => {

    const { isEnglish } = useLanguage();

    const { xs, sm, md, lg, xl, xxl } = useScreenSize();

    return (
        <MotionDiv 
            initial={{ 
                y: `${((xs || sm) && "20%") || ((xl || xxl) && "-20%")}`, 
                x: `${((md || xl || xxl) && "-20%") || (lg && "20%")}`, opacity: 0 
            }}
            whileInView={{ y: "0%", x: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.75 , duration: 0.25, ease: "easeInOut" }}
            className={`card-main-features |  | lg:max-xl:row-start-2 lg:max-xl:col-start-3 xl:row-span-2 | max-md:border-x-4 border-x-portfolio-card_border md:rounded-l-none md:rounded-r-[20px] md:border-l-4 md:border-l-portfolio-card_border lg:rounded-r-none lg:rounded-l-[20px] lg:border-l-0 lg:border-r-4 lg:border-r-portfolio-card_border xl:rounded-l-none xl:rounded-br-[20px] xl:border-r-0 xl:border-l-4 xl:border-t-4 xl:border-l-portfolio-card_border xl:border-t-portfolio-card_border`}
        >
            <MotionDiv 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 1 , duration: 0.25, ease: "easeInOut" }}
                className={`mt-4 xl:mt-[3rem] 2xl:mt-[3.5rem] lg:max-xl:mb-4 |  |  | `}
            >
                <div className={`relative w-fit mx-auto |  | flex items-center | `}>
                    <h4 className={`w-full max-md:mt-[3.5rem] mt-11 lg:mt-[3.5rem] 2xl:mt-[4rem] | text-portfolio-text_secondary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold | flex items-center justify-center |  | `}>
                        <span>
                            Skills 💪🏻
                        </span>
                    </h4>
                    
                    <div>
                        {home_SkillsIcons.map((item) => (
                            <Image
                                key={item.id} 
                                src={`/skills/${item.src}`}
                                alt={item.alt}
                                width={500}
                                height={500}
                                className={`size-8 md:size-9 xl:size-10 2xl:size-12 object-cover absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] | ${item.classNames} | bg-portfolio-text_primary |  | rounded-full border-2 border-portfolio-background`}
                            />
                        ))}
                    </div>
                </div>

                <p className={`mt-4 xl:mt-16 2xl:mt-[5.5rem] max-lg:mb-6 | text-sm lg:text-base 2xl:text-lg text-center capitalize font-semibold |  | `}>
                    <Link 
                        href={`/${isEnglish ? "en" : "fa"}/skills`} 
                        className={` | text-portfolio-background hover:text-portfolio-text_primary |  | main-transition-color`}
                    >
                        and Much More!
                    </Link>
                </p>
            </MotionDiv>
        </MotionDiv>
    )

}

export default Skills