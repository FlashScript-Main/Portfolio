"use client";

import { MotionDiv } from '@/animations/motion-provider';
import { home_contactIcons } from '@/constant';
import useScreenSize from '@/hooks/useScreenSize';

const ContactMe = () => {

    const { xs, sm, md, lg, xl, xxl } = useScreenSize();

    return (
        <MotionDiv 
            initial={{ 
                y: `${((xs || sm || md || lg || xl || xxl) && "20%")}`, 
                x: `${((md || xl || xxl) && "-20%")}`, 
                opacity: 0 
            }}
            whileInView={{ y: "0%", x: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: ((xs || sm) ? 0.75 : 2.25) , duration: 0.25, ease: "easeInOut" }}
            className={`card-main-features |  | xl:col-span-2 | max-md:border-x-4 max-md:border-x-portfolio-card_border md:border-l-4 md:border-l-portfolio-card_border md:border-b-4 md:border-b-portfolio-card_border md:rounded-tr-[20px] lg:border-l-0 lg:rounded-tl-[20px] xl:rounded-tl-none xl:border-l-4 xl:border-l-portfolio-card_border`}
        >
            <MotionDiv 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: ((xs || sm) ? 1 : 2.5) , duration: 0.25, ease: "easeInOut" }}
                className={`py-4 md:py-6 md:px-6 space-y-4 lg:space-y-5 lg:w-full lg:h-full |  | md:max-lg:flex xl:flex md:max-lg:justify-between md:max-lg:items-center xl:items-center | `}
            >
                <h4 className={` | text-portfolio-text_secondary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold | flex flex-col xl:flex-row items-center justify-center gap-1 md:gap-3 |  | `}>
                    Ready to Talk?
                    <span className={` | text-portfolio-text_primary text-lg md:text-xl lg:text-2xl 2xl:text-3xl |  `}>
                        {"I'm"} All Ears 📞
                    </span> 
                </h4>

                <div className={`md:max-lg:relative xl:relative md:max-lg:w-fit xl:w-fit md:max-lg:mx-auto xl:mx-auto |  | flex justify-center items-center gap-4 lg:gap-6 | `}>
                    {home_contactIcons.map((icon) => (
                        <a 
                            key={icon.id}
                            href={icon.href} 
                            target={"_blank"}
                            className={`p-[0.4rem] xl:p-2 md:max-lg:absolute xl:absolute md:max-lg:top-[50%] xl:top-[50%] md:max-lg:left-[50%] xl:left-[50%] md:max-lg:transform xl:transform md:max-lg:-translate-x-[50%] xl:-translate-x-[50%] md:max-lg:-translate-y-[50%] xl:-translate-y-[50%] ${icon.classNames} | bg-portfolio-background hover:bg-portfolio-text_primary text-portfolio-text_primary hover:text-portfolio-text_secondary | grid place-content-center | rounded-full border-2 border-portfolio-background main-transition-color`}
                        >
                            <icon.icon className={`xl:size-7 2xl:size-8 |  |  | `} />
                        </a>
                    ))}
                </div>
            </MotionDiv>
        </MotionDiv>
    )

}

export default ContactMe