"use client";

import { MotionDiv } from "@/animations/motion-provider"
import useScreenSize from "@/hooks/useScreenSize";

const Clients = () => {

    const { xs, sm, md, lg, xl, xxl } = useScreenSize();

    return (
        <MotionDiv 
            initial={{ 
                y: `${((xs || sm) && "20%") || ((lg) && "-20%")}`, 
                x: `${((md) && "-20%") || ((lg || xl || xxl) && "20%")}`, opacity: 0 
            }}
            whileInView={{ y: "0%", x: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 1.25 , duration: 0.25, ease: "easeInOut" }}
            className={`card-main-features |  | max-md:row-start-4 | max-md:border-x-4 max-md:border-x-portfolio-card_border md:border-l-4 md:border-l-portfolio-card_border md:rounded-r-[20px] lg:border-l-0 lg:rounded-r-none lg:rounded-bl-[20px] lg:border-t-4 lg:border-t-portfolio-card_border lg:border-r-4 lg:border-r-portfolio-card_border xl:border-t-0 xl:rounded-tl-[20px]`}
        >
            <MotionDiv 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 1.5 , duration: 0.25, ease: "easeInOut" }}
                className={`py-4 md:py-6 lg:py-6 lg:px-6 | text-center |  | `}
            >
                <h4 className={`xl:mt-4 |  font-semibold | flex items-center justify-center gap-4 md:gap-6 lg:gap-2 xl:gap-2 |  | `}>
                    <span className={` | text-portfolio-text_secondary text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl |  | `}>
                        8+
                    </span>

                    <span className={` | text-portfolio-text_primary text-lg md:text-xl lg:text-2xl 2xl:text-3xl |  | `}>
                        Clients Delighted with <br className="" /> My Services 😍
                    </span>
                </h4>
            </MotionDiv>
        </MotionDiv>
    )

}

export default Clients