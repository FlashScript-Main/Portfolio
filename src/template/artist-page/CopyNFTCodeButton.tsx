"use client";

import { useToast } from "@/hooks/use-toast";
import { CopySVG } from "@/interface";
import { iranSans } from "@/utils/fonts";
import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const CopyNFTCodeButton = () => {

    const language = useTranslations("language");

    const [copied, setCopied] = useState(false);

    const { toast } = useToast();

    const handleCopy = () => {
        const textToCopy = "FlashScript {⚡}";

        navigator.clipboard.writeText(textToCopy)
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
        <motion.button 
            onClick={handleCopy} 
            initial={{ y: "10%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.02, delay: 1, duration: 0.25 }}
            className={`max-md:w-full h-[3.75rem] md:px-6 | text-[1rem] leading-[140%] font-semibold bg-nftCustom-cta hover:bg-nftCustom-text | flex justify-center items-center gap-3 | border-4 border-nftCustom-cta rounded-[20px] main-transition-color group ${language("isEnglish") === "false" && "flex-row-reverse"}`}
        >
            <span>
                {
                    copied ? 
                    <div className={`w-5 h-5 | text-nftCustom-text group-hover:text-nftCustom-cta | grid place-content-center | `}>
                        <CheckCheck />
                    </div> 
                    : <CopySVG />
                }
            </span>

            <span className={` | text-nftCustom-text group-hover:text-nftCustom-cta  |  | `}>
                {language("isEnglish") === "true" ? "Copy NFT Code" : "کپی کد توکن"}
            </span>
        </motion.button>
    )

}

export default CopyNFTCodeButton