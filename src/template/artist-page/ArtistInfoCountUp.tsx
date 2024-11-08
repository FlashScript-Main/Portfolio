"use client";

import { spaceMono } from "@/utils/fonts";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";

const ArtistInfoCountUp = ({ artist }: { artist: ArtistParamsType }) => {

    const language = useTranslations("language");

    return (
        <div className={`w-full md:w-8/12 xl:w-6/12 |  | flex justify-between | ${language("isEnglish") === "false" && "md:ml-auto flex-row-reverse"}`}>
            {Object.entries(artist.achievements).map(([key, value], index) => (
                <motion.div
                    key={index}
                    initial={{ y: "20%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ delay: 0.25 * (index + 0.5), duration: 0.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className={` |  | flex flex-col justify-center | `}
                >   
                    <span className={` | text-[1.375rem] xl:text-[1.75rem] leading-[160%] xl:leading-[140%] font-bold text-nftCustom-text ${spaceMono} |  | ${language("isEnglish") === "false" && "text-center"}`}>
                        <CountUp
                            end={value}
                            duration={3}
                            delay={2.5}
                            separator=""
                        />
                        {key === "volume" && "k"}+
                    </span>

                    <p className={` |  xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal text-nftCustom-text |  | ${language("isEnglish") === "true" ? "text-[1rem]" : "max-md:text-[0.8rem] md:text-[1rem] text-center"}`}>
                        {key === "volume" && (language("isEnglish") === "true" ? "Volume" : "مجموع کاربران")}
                        {key === "soldNFTs" && (language("isEnglish") === "true" ? "Sold NFTs" : "توکن های فروخته شده")}
                        {key === "followers" && (language("isEnglish") === "true" ? "Followers" : "دنبال کنندگان")}
                    </p>
                </motion.div>
            ))}
        </div>
    )

}

export default ArtistInfoCountUp