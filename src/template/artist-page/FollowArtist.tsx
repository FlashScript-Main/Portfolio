"use client";

import { useToast } from "@/hooks/use-toast";
import { PlusSVG } from "@/interface";
import { iranSans } from "@/utils/fonts";
import { CheckCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react"
import { motion } from "framer-motion";

const FollowArtist = () => {

    const language = useTranslations("language");
    
    const [isFollowed, setisFollowed] = useState(false);

    const { toast } = useToast();
    
    const handleFollow = () => {
        setisFollowed(true);
        
        toast({
            title: (language("isEnglish") === "true" ? "Successfully Followed" : "با موفقیت دنبال شد"),
            className: `bg-green-600 text-white border-4 border-green-900 ${language("isEnglish") === "false" && `${iranSans} flex items-center justify-end`}`,
            duration: 4000
        })
    };

    const handleUnFollow = () => {
        setisFollowed(false);
        
        toast({
            title: (language("isEnglish") === "true" ? "Successfully Unfollowed" : "با موفقیت لغو دنبال گردید"),
            className: `bg-red-600 text-white border-4 border-red-900 ${language("isEnglish") === "false" && `${iranSans} flex items-center justify-end`}`,
            duration: 4000
        })
    };

    return (
        <motion.button 
            onClick={isFollowed ? handleUnFollow : handleFollow} 
            initial={{ y: "10%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.02, delay: 0.75, duration: 0.25 }}
            className={`max-md:w-full h-[3.75rem] md:px-6 | text-[1rem] leading-[140%] font-semibold ${isFollowed ? "bg-nftCustom-text" : "bg-nftCustom-background hover:bg-nftCustom-text"} | flex justify-center items-center gap-3 | border-4 border-nftCustom-cta rounded-[20px] main-transition-color group ${language("isEnglish") === "false" && "flex-row-reverse"}`}
        >
            <span>
                {
                    isFollowed ? 
                    <div className={`w-5 h-5 | text-nftCustom-cta ${!isFollowed && "group-hover:text-nftCustom-text"} | grid place-content-center | `}>
                        <CheckCheck />
                    </div> 
                    : <PlusSVG />
                }
            </span>

            <span className={` |  ${isFollowed ? "text-nftCustom-cta" : "text-nftCustom-text group-hover:text-nftCustom-cta"} |  | `}>
                {
                    isFollowed ? 
                    language("isEnglish") === "true" ? "Followed" : "دنبال گردید"
                    : language("isEnglish") === "true" ? "Follow" : "دنبال کنید"
                }
            </span>
        </motion.button>
    )

}

export default FollowArtist