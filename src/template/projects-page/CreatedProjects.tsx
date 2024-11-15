import { MotionDiv } from "@/animations/motion-provider"
import { DivToScroll } from "@/animations/ScrollAnimations"
import { projectsInfo } from "@/constant"
import useLanguage from "@/hooks/useLanguage";
import { spaceMono } from "@/utils/fonts";
import { Github, Link } from "lucide-react";
import Image from "next/image";

const CreatedProjects = () => {

    const { isEnglish, isFarsi } = useLanguage();

    return (
        <div className={`mt-[3.5rem] h-screen |  |  | `}>
            <DivToScroll className={`mt-4 md:mt-8 xl:mt-10 |  | grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1.875rem] | border-2 border-green-600`}>
                    {projectsInfo.projects.map((card, index) => (
                        <MotionDiv
                            initial={{ y: "20%", opacity: 0, }}
                            whileInView={{ y: "0%", opacity: 1, }}
                            transition={{ delay: 0.025 * (index + 0.025), duration: 0.5, ease: "easeInOut", }}
                            viewport={{ once: true, margin: "-50px" }}
                            key={index}
                            className={`overflow-hidden |  |  | rounded-[20px] group transition-all`}
                        >
                            <a 
                                href={`${card.websiteLink}`}
                                target="_blank"
                            >
                                <div className={`overflow-hidden w-full h-[20rem] object-top |  |  | `}>
                                    <Image 
                                        src={`/projects/${isEnglish ? card.imageEn : card.imageFa}`}
                                        alt={`${card.titleEn} Image`}
                                        width={1000}
                                        height={1000}
                                        className={`md:w-full h-full object-cover object-top |  |  | group-hover:scale-110 duration-500 transition-transform`}
                                    />
                                </div>

                                <div className={`w-full h-[5rem] xl:h-[5.75rem] relative | bg-portfolio-card_background | flex flex-col justify-center items-center gap-[1.5625rem] | `}>
                                    <div className={` |  |  | group-hover:opacity-0 opacity-100 transition-all`}>
                                        <MotionDiv
                                            initial={{ x: "-20%", opacity: 0 }}
                                            whileInView={{ x: "0%", opacity: 1 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ staggerChildren: 0.02, delay: 0.025 * (index + 0.075), duration: 0.5 }} 
                                            className={`px-4 |  | flex items-center justify-center gap-3 | ${isEnglish ? "justify-start" : "justify-end flex-row-reverse"}`}
                                        >
                                            <Image 
                                                src={`/projects/${card.favicon}`}
                                                alt={`${card.titleEn} Favicon`}
                                                width={300}
                                                height={300}
                                                className={`size-10 object-cover rounded-full |  |  | `}
                                            />

                                            <span className={` | text-portfolio-text_secondary text-base xl:text-lg font-semibold ${spaceMono} line-clamp-1 |  | `}>
                                                {isEnglish ? card.titleEn : card.titleFa}
                                            </span>
                                        </MotionDiv>
                                    </div>

                                    <div className={`absolute inset-0 w-full h-full group-hover:opacity-100 opacity-0 transition-all |  | flex justify-center items-center ${isFarsi && "flex-row-reverse"} gap-4 | `}>
                                        <a 
                                            href={`${card.websiteLink}`}
                                            target="_blank"
                                            className={`py-2 px-4 | text-portfolio-background hover:text-portfolio-card_background bg-portfolio-text_primary hover:bg-portfolio-text_secondary text-base font-normal | flex ${isFarsi && "flex-row-reverse"} items-center gap-2 | border-2 border-portfolio-card_border hover:border-portfolio-text_primary rounded-[20px] main-transition-color`}
                                        >
                                            <span><Link /></span>

                                            <span>{isEnglish ? "Website" : "وب‌سایت"}</span>
                                        </a>

                                        <a 
                                            href={`${card.githubLink}`}
                                            target="_blank"
                                            className={`py-2 px-4 | text-portfolio-background hover:text-portfolio-card_background bg-portfolio-text_primary hover:bg-portfolio-text_secondary text-base font-normal | flex ${isFarsi && "flex-row-reverse"} items-center gap-2 | border-2 border-portfolio-card_border hover:border-portfolio-text_primary rounded-[20px] main-transition-color`}
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
        </div>
    )

}

export default CreatedProjects

/*

*/