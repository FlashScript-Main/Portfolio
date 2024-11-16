"use client"

import { MotionDiv } from "@/animations/motion-provider";
import { useToast } from "@/hooks/use-toast";
import useLanguage from "@/hooks/useLanguage";
import useScreenSize from "@/hooks/useScreenSize";
import { iranSans } from "@/utils/fonts";
import { useState } from "react";

const AvailableToWork = () => {

    const { isEnglish, isFarsi } = useLanguage();

    const { xs, sm, md, lg, xl, xxl } = useScreenSize();

    const [copied, setCopied] = useState(false);

    const { toast } = useToast();

    const handleCopy = () => {
        const textToCopy = "contact.flashscript@gmail.com";

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopied(true);
                toast({
                    title: (isEnglish ? "Gmail Address Copied to Clipboard" : "آدرس ایمیل در کلیپ بورد کپی شد"),
                    className: `bg-green-600 text-white border-4 border-green-900 ${isFarsi && `${iranSans} flex items-center justify-end`}`,
                    duration: 4000
                })
                setTimeout(() => setCopied(false), 2000);  // Reset after 2 seconds
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err);
            });
    };

    return (
        <MotionDiv 
            initial={{ 
                y: `${((xs || sm || md || xl || xxl) && "20%") || ((lg) && "-20%")}`, 
                x: `${((lg) && "-20%")  || ((md) && "20%")}`, opacity: 0 
            }}
            whileInView={{ y: "0%", x: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: ((xs || sm) ? 1 : 2.5) , duration: 0.25, ease: "easeInOut" }}
            className={`card-main-features |  | lg:max-xl:row-start-1 lg:max-xl:col-start-1 | max-md:border-x-4 max-md:border-b-4 max-md:border-portfolio-card_border border-portfolio-card_border md:border-b-4 md:border-r-4 md:rounded-tl-[20px] lg:border-b-0 lg:border-r-0 lg:border-t-4 lg:border-l-4 lg:rounded-tl-none lg:rounded-br-[20px] xl:border-t-0 xl:border-l-0 xl:rounded-br-none xl:rounded-t-[20px] xl:border-b-4`}
        >
            <MotionDiv 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: ((xs || sm) ? 1.25 : 2.75) , duration: 0.25, ease: "easeInOut" }}
                className={`py-4 xl:py-6 space-y-3 md:space-y-4 md:w-full md:h-full |  | md:grid md:place-content-center | ${isFarsi && "lg:max-xl:space-y-6"}`}
            >
                <button 
                    onClick={handleCopy}
                    className={`w-fit mx-auto px-4 | bg-portfolio-card_background hover:bg-portfolio-background ${copied && ""} | grid | group rounded-2xl border-2 border-portfolio-card_border hover:border-portfolio-text_secondary main-transition-color ${isFarsi && "md:py-1"}`}
                >
                    <h4 className={`w-full | text-portfolio-text_secondary group-hover:text-portfolio-text_primary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold | flex items-center justify-center |  | main-transition-color`}>
                        {isEnglish ? "Freelancer" : "فریلنسر"}
                    </h4>
                </button>

                <div>
                    <p className={` | text-portfolio-background capitalize font-semibold |  | ${isEnglish ? "text-sm 2xl:text-lg text-center" : "text-base xl:text-[0.9rem] 2xl:text-lg text-center"}`}>
                        {isEnglish ? "Currently Available To Work 🔔" : "🔔 هم‌اکنون آماده پذیرش پروژه جدید هستم"}
                    </p>
                </div>
            </MotionDiv>
        </MotionDiv>
    )

}

export default AvailableToWork