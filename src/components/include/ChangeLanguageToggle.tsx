"use client";

import { iranSans } from "@/utils/fonts";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const ChangeLanguageToggle = ({ onClose }: { onClose: () => void }) => {

    const language = useTranslations("language");

    const pathName = usePathname();
    const router = useRouter();
  
    const path = pathName.split("/").slice(2).join("/");

    const handleLanguageChange = () => {
        onClose();
        if (language("isEnglish") === "true") {
            router.push(`/fa/${path}`)
        }
        else {
            router.push(`/en/${path}`)
        }
    }

    return (
        <div className={`py-3 md:py-4 px-4 md:px-6 | bg-nftCustom-text ${language("isEnglish") === "false" && `${iranSans}`} | ${language("isEnglish") === "false" && `md:col-start-2`} | rounded-[20px]`}>
            <div className={` |  | flex items-center justify-between gap-2 ${language("isEnglish") === "false" && "flex-row-reverse"} | `}>
                <h5 className={`my-auto | text-nftCustom-background text-base md:text-lg font-medium |  | ${language("isEnglish") === "false" && `text-end`}`}>
                    {language("isEnglish") === "true" ? "Change Language" : "زبان را تغییر دهید"}
                </h5>

                <button 
                    onClick={handleLanguageChange}
                    className={`p-2 px-4 | text-nftCustom-text hover:text-nftCustom-cta bg-nftCustom-cta hover:bg-nftCustom-text ${language("isEnglish") === "true" && `${iranSans}`} | grid place-content-center | border-2 border-nftCustom-cta rounded-[20px] main-transition-color`}
                >
                    {language("isEnglish") === "true" ? "فارسی" : "English"}
                </button>
            </div>
        </div>
    )

}

export default ChangeLanguageToggle