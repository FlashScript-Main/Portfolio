"use client";

import { spaceMono } from "@/utils/fonts";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";

const CategoryInfoCountUp = ({ category }: { category: CategoryParamsType }) => {

    const language = useTranslations("language");

    return (
        <div className={`w-full md:w-8/12 xl:w-6/12 mx-auto |  | flex justify-between | ${language("isEnglish") === "false" && "flex-row-reverse"}`}>
            {Object.entries(category.achievements).map(([key, value], index) => (
                <motion.div
                    key={index}
                    initial={{ y: "20%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ delay: 0.25 * (index + 0.5), duration: 0.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className={` |  | flex flex-col justify-center | `}
                >   
                    <span className={` | text-[1.375rem] xl:text-[1.75rem] leading-[160%] xl:leading-[140%] font-bold text-nftCustom-text text-center ${spaceMono} |  | `}>
                        <CountUp
                            end={value}
                            duration={3}
                            delay={2.5}
                            separator=""
                        />
                        +
                    </span>

                    <p className={` | xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal text-nftCustom-text text-center |  | ${language("isEnglish") === "true" ? "text-[1rem]" : "max-md:text-[0.8rem] md:text-[1rem]"}`}>
                        {key === "tage" && (language("isEnglish") === "true" ? "HashTags" : "هشتگ")}
                        {key === "usage" && (language("isEnglish") === "true" ? "Applications" : "کاربردها")}
                        {key === "account" && (language("isEnglish") === "true" ? "NFT Accounts" : "حساب‌های توکن دیجیتال")}
                    </p>
                </motion.div>
            ))}
        </div>
    )

}

export default CategoryInfoCountUp