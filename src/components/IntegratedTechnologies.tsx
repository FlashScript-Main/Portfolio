import { MotionA } from "@/animations/motion-provider"
import { DivToScroll } from "@/animations/ScrollAnimations"
import { skillsTechnologiesInfo } from "@/constant"
import { Tooltip } from "@nextui-org/react"
import Image from "next/image"

const IntegratedTechnologies = () => {

    return (
        <div className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto relative md:h-[75vh] xl:h-[80vh] mb-12 md:mb-16 xl:mb-24 |  |  | `}>
            <DivToScroll className={`md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 | text-white | max-md:grid max-md:grid-cols-2 max-md:place-content-center max-md:gap-4 | w-full h-full`}>
                {skillsTechnologiesInfo.map((tech, index) => (
                    <Tooltip 
                        key={tech.id}
                        showArrow={true} 
                        content={tech.tooltipContent}
                        placement="top"
                        offset={-15}
                        closeDelay={0}
                        classNames={{
                            base: "before:bg-portfolio-card_background max-md:before:invisible",
                            content: "text-portfolio-text_secondary bg-portfolio-card_background font-semibold"
                        }}
                        className={`max-md:hidden |  |  | `}
                    >
                        <MotionA 
                            href={tech.href}
                            target="_blank"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-20px" }}
                            transition={{ staggerChildren: 0.02, delay: 0.05 * (index + 0.25), duration: 0.25, ease: "easeInOut" }}
                            className={`
                                md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%] 
                                ${tech.classNames} overflow-hidden cursor-pointer | bg-white |  | 
                                ${tech.tooltipContent === "FlashScript" ? "max-md:hidden md:size-28 lg:size-36 xl:w-48 xl:h-48" : "max-md:w-20 max-md:h-20 max-md:mx-auto md:size-20 lg:size-24 xl:w-28 xl:h-28"} 
                                group border-4 border-portfolio-card_background hover:border-portfolio-text_secondary rounded-full main-transition-color
                            `}
                        >
                            <Image 
                                src={`/skills/${tech.imageSrc}`}
                                alt={tech.tooltipContent}
                                width={500}  
                                height={500}
                                className={`w-full h-full object-cover |  |  | ${tech.imageClassNames} duration-500 transition-transform`}
                            />
                        </MotionA>
                    </Tooltip>
                ))}

            </DivToScroll>
        </div>
    )

}

export default IntegratedTechnologies
