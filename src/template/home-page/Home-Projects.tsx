"use client";

import { MotionDiv } from "@/animations/motion-provider"
import useScreenSize from "@/hooks/useScreenSize";

const Projects = () => {

    const { xs, sm, md, lg, xl, xxl } = useScreenSize();

    return (
        <MotionDiv 
            initial={{ 
                y: `${((xs || sm || lg) && "20%")}`, 
                x: `${((xl || xxl) && "-20%") || ((md || lg) && "20%")}`, opacity: 0 
            }}
            whileInView={{ y: "0%", x: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 1.5 , duration: 0.25, ease: "easeInOut" }}
            className={`card-main-features |  | max-md:row-start-5 lg:max-xl:row-start-4 lg:max-xl:col-start-3 | max-md:border-x-4 max-md:border-x-portfolio-card_border md:border-r-4 md:border-r-portfolio-card_border md:rounded-l-[20px] lg:rounded-bl-none lg:border-b-4 lg:border-b-portfolio-card_border xl:border-b-0 xl:border-r-0 xl:border-l-4 xl:border-l-portfolio-card_border xl:rounded-l-none xl:rounded-r-[20px]`}
        >
            <MotionDiv 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 1.75 , duration: 0.25, ease: "easeInOut" }}
                className={`py-4 md:py-6 xl:pt-3 lg:max-xl:w-full lg:max-xl:h-full 2xl:w-full 2xl:h-full | text-center | lg:max-xl:grid lg:max-xl:place-content-center 2xl:grid 2xl:place-content-center | `}
            >
                <h4 className={`xl:mt-4 |  font-semibold | flex flex-col items-center justify-center gap-3 lg:gap-4 2xl:gap-5 |  | `}>
                    <span className={` | text-portfolio-text_secondary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl |  | `}>
                        26+ Projects ✨
                    </span>

                    <span className={` | text-portfolio-text_primary text-lg md:text-xl lg:text-2xl 2xl:text-3xl |  | `}>
                        Bringing Ideas to Life
                    </span>
                </h4>
            </MotionDiv>
        </MotionDiv>
    )

}

export default Projects