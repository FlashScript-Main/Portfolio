"use client";

import { useToast } from "@/hooks/use-toast";
import { CopySVG } from "@/interface";
import { iranSans } from "@/utils/fonts";
import { CheckCheck, QrCode } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import QRCodeGenerator from 'react-qr-code';

const ShareNFTMarketplace = () => {

    const language = useTranslations("language");

    const pathname = usePathname();

    const currentURL = `${window.location.origin}${pathname}`;

    const [copied, setCopied] = useState(false);

    const { toast } = useToast();

    const handleCopy = () => {
        navigator.clipboard.writeText(currentURL)
            .then(() => {
                setCopied(true);
                toast({
                    title: (language("isEnglish") === "true" ? "Copied to Clipboard" : "در کلیپ بورد کپی شد"),
                    className: `bg-green-600 text-white border-4 border-green-900 ${language("isEnglish") === "false" && `${iranSans} flex items-center justify-end`}`,
                    duration: 4000
                })
                setTimeout(() => setCopied(false), 2000);  // Reset after 2 seconds
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err);
            });
    };

    return (
        <div className={`py-3 md:py-4 px-4 md:px-6 md:mx-auto md:w-6/12 | bg-portfolio-background ${language("isEnglish") === "false" && `${iranSans}`} | md:col-span-2 | rounded-[20px]`}>
            <div className={` |  | flex items-center justify-between gap-2 ${language("isEnglish") === "false" && "flex-row-reverse"} | `}>
                <h5 className={`my-auto | text-portfolio-text_primary text-base md:text-lg font-medium |  | ${language("isEnglish") === "false" && `${iranSans} text-end`}`}>
                    <span className={`max-xl:hidden |  |  | `}>
                        {language("isEnglish") === "true" ? "Share My Portfolio" : "اشتراک گذاری نمونه کارهای من"}
                    </span>

                    <span className={`xl:hidden |  |  | `}>
                        {language("isEnglish") === "true" ? "Share" : "اشتراک گذاری"}
                    </span>
                </h5>
                
                <div className={` |  | flex items-center gap-2  | `}>
                    <button 
                        onClick={handleCopy}
                        className={`p-2 px-4 | text-[1rem] leading-[140%] font-semibold bg-portfolio-text_primary hover:bg-portfolio-text_secondary | flex justify-center items-center gap-2 | border-2 border-portfolio-card_border hover:border-portfolio-text_primary rounded-[20px] main-transition-color group ${language("isEnglish") === "false" && "flex-row-reverse"}`}
                    >
                        <span>
                        {
                            copied ? 
                            <div className={`w-5 h-5 | text-portfolio-background group-hover:text-portfolio-card_background | grid place-content-center | `}>
                                <CheckCheck />
                            </div> 
                            : <CopySVG />
                        }
                    </span>

                        <span className={` | text-portfolio-background group-hover:text-portfolio-card_background |  | `}>
                            {language("isEnglish") === "true" ? "Copy" : "کپی"}
                        </span>
                    </button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button 
                                className={`p-2 max-lg:hidden | text-portfolio-background hover:text-portfolio-card_background bg-portfolio-text_primary hover:bg-portfolio-text_secondary | grid place-content-center | border-2 border-portfolio-card_border hover:border-portfolio-text_primary rounded-[20px] main-transition-color`}
                            >
                                <QrCode />
                            </button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className={`py-4 px-3 | bg-white | flex justify-center items-center gap-4 | border-2 border-portfolio-text_secondary rounded-[20px]`}>
                            <QRCodeGenerator value={currentURL} />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )

}

export default ShareNFTMarketplace