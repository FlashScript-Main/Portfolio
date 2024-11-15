"use client";

import { MotionDiv } from "@/animations/motion-provider"
import { DivToScroll } from "@/animations/ScrollAnimations"
import { projectsInfo } from "@/constant"
import useLanguage from "@/hooks/useLanguage";
import { spaceMono } from "@/utils/fonts";
import { motion } from "framer-motion";
import { Github, Link, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const CreatedProjects = () => {

    const { isEnglish } = useLanguage();

    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const [nftCount, setNftCount] = useState(2);

    const handleMouseEnter = (index: number) => {
        setHoveredCard(index);
    };
    
    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    return (
        <div 
            className={`mt-[3.5rem] |  |  | `} 
            style={{ direction: `${isEnglish ? "ltr" : "rtl"}`}}
        >
            <DivToScroll className={`mt-4 md:mt-8 xl:mt-10 |  | grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1.875rem] | border-2 border-green-600`}>
                {projectsInfo.projects.slice(0, nftCount).map((card, index) => (
                    <MotionDiv
                        initial={{ y: "20%", opacity: 0, }}
                        whileInView={{ y: "0%", opacity: 1, }}
                        transition={{ delay: 0.25 * (index + 0.05), duration: 0.5, ease: "easeInOut", }}
                        viewport={{ once: true, margin: "-50px" }}
                        key={card.id}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        className={`overflow-hidden |  |  | rounded-[20px] group transition-all`}
                    >
                        <a 
                            href={`${card.websiteLink}`}
                            target="_blank"
                        >
                            <div className={`overflow-hidden relative w-full h-[20rem] object-top |  |  | `}>
                                <Image 
                                    src={`/projects/${card.image}`}
                                    alt={`${card.titleEn} Image`}
                                    width={1000}
                                    height={1000}
                                    className={`md:w-full h-full object-cover object-top |  |  | group-hover:scale-110 duration-500 transition-transform`}
                                />
                                {hoveredCard === index && (
                                    <video 
                                        className={`absolute top-0 left-0 w-full h-full object-cover z-30 |  |  | `}
                                        src={`/projects/${card.videoSrc}`}
                                        autoPlay
                                        loop
                                        muted
                                    />
                                )}
                            </div>

                            <div className={`w-full h-[5rem] xl:h-[5.75rem] relative | bg-portfolio-card_background | flex flex-col justify-center items-center gap-[1.5625rem] | `}>
                                <div className={` |  |  | group-hover:opacity-0 opacity-100 transition-all`}>
                                    <MotionDiv
                                        initial={{ x: "-20%", opacity: 0 }}
                                        whileInView={{ x: "0%", opacity: 1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ staggerChildren: 0.02, delay: 0.025 * (index + 0.075), duration: 0.5 }} 
                                        className={`px-4 |  | flex items-center justify-center gap-3 | `}
                                    >
                                        <Image 
                                            src={`/projects/${card.favicon}`}
                                            alt={`${card.titleEn} Favicon`}
                                            width={300}
                                            height={300}
                                            className={`size-10 object-cover rounded-full |  |  | `}
                                        />

                                        <span className={` | text-portfolio-text_secondary text-base xl:text-lg font-semibold ${spaceMono} line-clamp-1 capitalize |  | `}>
                                            {isEnglish ? card.titleEn : card.titleFa}
                                        </span>
                                    </MotionDiv>
                                </div>

                                <div className={`px-8 absolute inset-0 w-full h-full group-hover:opacity-100 opacity-0 transition-all |  | flex justify-between items-center | `}>
                                    <a 
                                        href={`${card.websiteLink}`}
                                        target="_blank"
                                        className={`py-2 px-4 | text-portfolio-background hover:text-portfolio-card_background bg-portfolio-text_primary hover:bg-portfolio-text_secondary text-base font-normal | flex items-center gap-2 | border-2 border-portfolio-card_border hover:border-portfolio-text_primary rounded-[20px] main-transition-color`}
                                    >
                                        <span><Link /></span>

                                        <span>{isEnglish ? "Website" : "وب‌سایت"}</span>
                                    </a>

                                    <a 
                                        href={`${card.githubLink}`}
                                        target="_blank"
                                        className={`py-2 px-4 | text-portfolio-background hover:text-portfolio-card_background bg-portfolio-text_primary hover:bg-portfolio-text_secondary text-base font-normal | flex items-center gap-2 | border-2 border-portfolio-card_border hover:border-portfolio-text_primary rounded-[20px] main-transition-color`}
                                    >
                                        <span><Github /></span>

                                        <span>{isEnglish ? "Github" : "گیت‌هاب"}</span>
                                    </a>
                                </div>
                            </div>
                        </a>
                    </MotionDiv>
                ))}
            </DivToScroll>

            <motion.button 
                initial={{ y: "10%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ staggerChildren: 0.02, delay: 0.75, duration: 0.25 }}
                onClick={() => setNftCount((value: number) => value + 7)}
                className={`max-md:w-full py-3 mt-10 md:mx-auto md:px-5 xl:px-6 ${nftCount >= 9 && "hidden"} | text-portfolio-background hover:text-portfolio-card_background bg-portfolio-text_primary hover:bg-portfolio-text_secondary text-base font-medium | flex items-center justify-center gap-3 | group border-2 border-portfolio-card_border hover:border-portfolio-text_primary rounded-[20px] main-transition-color`}
            >
                <Plus className={` | text-portfolio-background group-hover:text-portfolio-card_background |  | group-hover:rotate-180 transition-all`} />

                <span>
                    {isEnglish ? "Show More" : "نمایش بیشتر"}
                </span>
            </motion.button>

            <MotionDiv 
                initial={{ x: "20%", opacity: 0 }}
                whileInView={{ x: "0%", opacity: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: 0.5, duration: 0.25, ease: "easeInOut" }}
                className={`w-11/12 max-w-[380px] p-4 mx-auto mb-8 | bg-portfolio-text_secondary text-center | ${nftCount >= 9 ? "" : "hidden"} | rounded-[20px]`}
            >
                <span className={` | text-xs text-portfolio-text_primary capitalize font-semibold |  | `}>
                    {isEnglish ? "Hover over each card to reveal more details" : "بر روی هر کارت نگه دارید تا جزئیات بیشتری نشان داده شود"}
                </span>
            </MotionDiv>
        </div>
    )

}

export default CreatedProjects

/*

*/