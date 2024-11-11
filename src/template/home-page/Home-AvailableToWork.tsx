"use client"

import { useToast } from "@/hooks/use-toast";
import useLanguage from "@/hooks/useLanguage";
import { iranSans } from "@/utils/fonts";
import { useState } from "react";

const AvailableToWork = () => {

    const { isEnglish, isFarsi } = useLanguage();

    const [copied, setCopied] = useState(false);

    const { toast } = useToast();

    const handleCopy = () => {
        const textToCopy = "FlashScript {⚡}";

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
        <div className={`card-main-features |  | lg:max-xl:row-start-1 lg:max-xl:col-start-1 | max-md:border-x-4 max-md:border-b-4 max-md:border-portfolio-card_border border-portfolio-card_border md:border-b-4 md:border-r-4 md:rounded-tl-[20px] lg:border-b-0 lg:border-r-0 lg:border-t-4 lg:border-l-4 lg:rounded-tl-none lg:rounded-br-[20px] xl:border-t-0 xl:border-l-0 xl:rounded-br-none xl:rounded-t-[20px] xl:border-b-4`}>
            <div className={`py-4 xl:py-6 space-y-3 md:space-y-4 lg:w-full lg:h-full |  | lg:grid lg:place-content-center | `}>
                <button 
                    onClick={handleCopy}
                    className={`w-fit mx-auto px-4 | bg-portfolio-card_background hover:bg-portfolio-background ${copied && ""} | grid | group rounded-2xl border-2 border-portfolio-card_border hover:border-portfolio-text_secondary main-transition-color`}
                >
                    <h4 className={`w-full | text-portfolio-text_secondary group-hover:text-portfolio-text_primary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold | flex items-center justify-center |  | main-transition-color`}>
                        Freelancer
                    </h4>
                </button>

                <div>
                    <p className={` | text-portfolio-background text-sm 2xl:text-lg text-center capitalize font-semibold |  | `}>
                        Currently Available To Work 🔔
                    </p>
                </div>
            </div>
        </div>
    )

}

export default AvailableToWork