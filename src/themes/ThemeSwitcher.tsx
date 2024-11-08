"use client";

import { customThemes } from "@/constant";
import { iranSans, spaceMono } from "@/utils/fonts";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

const ThemeSwitcher = ({ onClose }: { onClose: () => void }) => {

    const language = useTranslations("language");

    const { setTheme } = useTheme();

    const handleThemeChange = (value: string) => {
        onClose();
        setTheme(value)
    }

    return (
        <>
            <h5 className={`mb-2 | text-nftCustom-background text-base md:text-lg font-medium |  | ${language("isEnglish") === "false" && `${iranSans} text-end mb-3`}`}>
                {language("isEnglish") === "true" ? "Change theme" : "تم را تغییر دهید"}
            </h5>

            <div className={` |  | grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 | `}>
                {customThemes.map((themeOption) => (
                    <button 
                        key={themeOption.value} 
                        onClick={() => handleThemeChange(themeOption.value)}
                        className={`
                            py-2 | ${themeOption.textColor} ${themeOption.bgColor} font-semibold ${spaceMono} | 
                            ${themeOption.value === "nftDefault" && "max-md:col-span-2 lg:col-span-2"}
                            ${themeOption.value === "light" && "lg:col-span-2"} 
                            ${themeOption.value === "dark" && "lg:col-span-2"} 
                            rounded-full border-2 border-nftCustom-background hover:border-nftCustom-cta main-transition-color
                            `} 
                    >
                        {language("isEnglish") === "true" ? themeOption.nameEn : themeOption.nameFa}
                    </button>
                ))}
            </div>
        </>
    )

}

export default ThemeSwitcher