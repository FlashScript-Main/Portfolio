import { MotionA } from "@/animations/motion-provider"
import { DivToScroll } from "@/animations/ScrollAnimations"
import { skillsTechnologiesInfo } from "@/constant"
import { Tooltip } from "@nextui-org/react"
import Image from "next/image"

const IntegratedTechnologies = () => {

    return (
        <div className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto relative md:h-[75vh] xl:h-[80vh] mb-[1.875rem] md:mb-10 xl:mb-20 |  |  | border-2 border-green-500`}>
            <DivToScroll className={`md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 | text-white | max-md:grid max-md:grid-cols-2 max-md:place-content-center max-md:gap-4 | w-full h-full border-2 border-orange-500`}>
                {skillsTechnologiesInfo.map((tech, index) => (
                    <Tooltip 
                    key={tech.id}
                    showArrow={true} 
                    content={tech.tooltipContent}
                    placement="top"
                    offset={-15}
                    closeDelay={0}
                    classNames={{
                        base: "before:bg-nftCustom-cta max-md:before:invisible",
                        content: "text-nftCustom-text bg-nftCustom-cta"
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
                            ${tech.tooltipContent === "FlashScript" ? "max-md:w-20 max-md:h-20 md:w-40 md:h-40 md:xl:w-48 xl:h-48" : "max-md:w-20 max-md:h-20 max-md:mx-auto md:w-24 md:h-24 xl:w-28 xl:h-28"} 
                            group border-4 border-nftCustom-text hover:border-nftCustom-cta rounded-full main-transition-color
                        `}
                    >
                        <Image 
                            src={`/integrated/${tech.imageSrc}`}
                            alt={tech.tooltipContent}
                            width={500}  
                            height={500}
                            className={`w-full h-full object-cover |  |  | group-hover:scale-110 duration-500 transition-transform`}
                        />
                    </MotionA>
                </Tooltip>
                ))}

            </DivToScroll>
        </div>
    )

}

export default IntegratedTechnologies

/*
FlashScript
VSCode
HTML
CSS
Tailwind CSS
Sass
JavaScript
TypeScript
React JS
Vite
Next JS
Git & GitHub
Framer Motion
React Router
React Query
React Hook Form
Zustand
Axios
Redux
Material UI
ShadCN
daisyUI
Next UI
Zod Schema Validation
PWA
Figma (NOT a designer)
Adobe XD (NOT a designer)
Next Themes
Next Intl
Rapid API
Lucide React

*/