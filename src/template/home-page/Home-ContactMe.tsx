"use client";

import { MotionDiv } from '@/animations/motion-provider';
import useScreenSize from '@/hooks/useScreenSize';
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactMe = () => {

    const { xl } = useScreenSize();

    const contactIcons = [
        { 
            id: 1,
            icon: Github,
            href: "https://github.com/FlashScript-Main",
            classNames: "md:max-lg:-ml-[1rem] md:max-lg:-mt-[2.3rem] xl:-ml-[2rem] xl:-mt-[2.3rem] 2xl:-ml-[3rem]"
        },
        { 
            id: 2,
            icon: Linkedin,
            href: "https://www.linkedin.com/in/flashscript-main/",
            classNames: "md:max-lg:-ml-[1rem] md:max-lg:mt-[1.3rem] xl:ml-[3rem] xl:-mt-[2.3rem] 2xl:ml-[4rem]"
        },
        { 
            id: 3,
            icon: Mail,
            href: "mailto:flashscriptmain@gmail.com",
            classNames: "md:max-lg:ml-[2.5rem] md:max-lg:-mt-[0.3rem] xl:mt-[1rem] xl:ml-[0.6rem]"
        },
    ]
    return (
        <MotionDiv 
            initial={{ y: "20%", x: `${xl ? "20%" : "-20%"}`, opacity: 0 }}
            whileInView={{ y: "0%", x: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.25, duration: 0.5, ease: "easeInOut" }}
            className={`card-main-features |  | xl:col-span-2 | max-md:border-x-4 max-md:border-x-portfolio-card_border md:border-l-4 md:border-l-portfolio-card_border md:border-b-4 md:border-b-portfolio-card_border md:rounded-tr-[20px] lg:border-l-0 lg:rounded-tl-[20px] xl:rounded-tl-none xl:border-l-4 xl:border-l-portfolio-card_border`}
        >
            <div className={`py-4 md:py-6 md:px-6 space-y-4 lg:space-y-5 lg:w-full lg:h-full |  | md:max-lg:flex xl:flex md:max-lg:justify-between md:max-lg:items-center xl:items-center | `}>
                <h4 className={` | text-portfolio-text_secondary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold | flex flex-col xl:flex-row items-center justify-center gap-1 md:gap-3 |  | `}>
                    Ready to Talk?
                    <span className={` | text-portfolio-text_primary text-lg md:text-xl lg:text-2xl 2xl:text-3xl |  `}>
                        {"I'm"} All Ears 📞
                    </span> 
                </h4>

                <div className={`md:max-lg:relative xl:relative md:max-lg:w-fit xl:w-fit md:max-lg:mx-auto xl:mx-auto |  | flex justify-center items-center gap-4 lg:gap-6 | `}>
                    {contactIcons.map((icon) => (
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
            </div>
        </MotionDiv>
    )

}

export default ContactMe