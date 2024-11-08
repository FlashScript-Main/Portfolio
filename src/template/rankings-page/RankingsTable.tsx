"use client";

import { DivToScroll } from "@/animations/ScrollAnimations";
import { useTranslations } from "next-intl";
import { motion } from 'framer-motion';
import { rankingsUsers } from "@/constant/nft-database";
import { rankingsHeaderTitles } from "@/constant";
import Image from "next/image";
import useSortConfig from "@/hooks/useSortConfig";
import useSticky from "@/hooks/useSticky";
import { MotionDiv } from "@/animations/motion-provider";
import { spaceMono } from "@/utils/fonts";
import Link from "next/link";

const RankingsTable = ({ locale }: { locale: string }) => {

    const language = useTranslations("language");

    const { sortedData, sortConfig, handleSort } = useSortConfig(rankingsUsers);

    const { divRef, isSticky } = useSticky();

    return (
        <div className={`mt-10 |  |  | `}>
            <DivToScroll className={`w-full |  |  | `}>
                <MotionDiv
                    initial={{ y: "20%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.5, duration: 0.25, ease: "easeInOut" }} 
                    ref={divRef} 
                    className={`w-full py-3 px-[0.625rem] md:px-5 sticky top-5 z-10 | bg-nftCustom-background | flex items-center justify-around | border-2 rounded-[20px] ${isSticky ? "border-nftCustom-text" : "border-nftCustom-background_secondary"} ${language("isEnglish") === "false" && "flex-row-reverse"}`}
                >
                    {rankingsHeaderTitles.map((title, index) => (
                        <MotionDiv 
                            key={title.id}
                            onClick={() => handleSort(title.handleSort)}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-20px" }}
                            transition={{ delay: 0.25 * (index), duration: 0.5, ease: "easeInOut" }}
                            className={`
                                cursor-pointer select-none |  ${spaceMono} |
                                ${language("isEnglish") === "true" ? "text-[1rem] leading-[140%] font-normal" : "text-sm"}
                                ${index === 0 && `xl:text-[1.5rem] ${language("isEnglish") === "true" ? "mr-[1.2rem] md:mr-5 ml-[0.4rem] xl:ml-[0.55rem]" : "ml-[1.2rem] md:ml-5 mr-[0.4rem] xl:mr-[0.55rem]"}`} 
                                ${title.titleEn === "Artist" && `${language("isEnglish") === "true" ? "mr-auto md:ml-2" : "ml-auto md:mr-3"}`} 
                                ${title.titleEn === "Change" && `xl:w-40 ${language("isEnglish") === "true" ? "md:mr-5 md:w-[6.25rem]" : "md:ml-3 md:w-[6.5rem] text-center"}`} 
                                ${title.titleEn === "NFTs Sold" && `xl:w-40 ${language("isEnglish") === "true" ? "xl:mr-5 md:w-[6.25rem]" : "md:w-[6.5rem] xl:ml-5 text-center"}`} 
                                ${title.titleEn === "Volume" && `xl:w-40 ${language("isEnglish") === "true" ? "mr-5 md:w-[6.25rem]" : "ml-5 md:w-[6.5rem] text-center"}`} 
                                ${title.className} 
                                ${isSticky ? `${sortConfig.key === `${title.handleSort}` ? "text-nftCustom-cta" : "text-nftCustom-text"}` : "text-nftCustom-c_l_text"} 
                                ${sortConfig.key === `${title.handleSort}` && "text-nftCustom-cta"}
                            `}
                        >
                            {language("isEnglish") === "true" ? title.titleEn : title.titleFa}
                        </MotionDiv>
                    ))}
                </MotionDiv>

                <div className={`mt-5 |  | flex flex-col gap-5 | `}>
                    {sortedData.map((user, index) => (
                        <MotionDiv 
                            key={user.id} 
                            initial={{ y: "20%", opacity: 0 }}
                            whileInView={{ y: "0%", opacity: 1 }}
                            viewport={{ once: true, margin: "-20px" }}
                            transition={{ staggerChildren: 0.02, delay: 0.05 * (index + 0.25), duration: 0.25, ease: "easeInOut" }}
                        >
                            <Link
                                href={`/${locale}/artist/${user.href}`}
                                className={`md:h-[3.75rem] xl:h-[5.25rem] py-[0.8125rem] md:py-[0.90625rem] xl:py-3 px-[0.625rem] md:px-5 | bg-nftCustom-background_secondary hover:bg-nftCustom-text | flex items-center | rounded-[20px] group main-transition-color ${language("isEnglish") === "false" && "flex-row-reverse"}`}
                            >
                                <motion.span
                                    initial={{ y: "-20%", opacity: 0 }}
                                    whileInView={{ y: "0%", opacity: 1 }}
                                    viewport={{ once: true, margin: "-20px" }}
                                    transition={{ delay: 0.025 * (index + 0.025), duration: 0.5 }}
                                    className={`w-6 h-6 xl:w-[1.875rem] xl:h-[1.875rem] | text-nftCustom-c_l_text group-hover:text-nftCustom-text text-[1rem] leading-[140%] font-normal ${spaceMono} bg-nftCustom-background_secondary xl:bg-nftCustom-background group-hover:bg-nftCustom-cta | grid place-content-center | rounded-full ${language("isEnglish") === "true" ? "mr-[0.625rem] md:mr-5" : "ml-[0.625rem] md:ml-5"}`}
                                >
                                    {user.id}
                                </motion.span>
                                
                                <div className={`w-[9rem] md:w-[16rem] xl:w-[20rem] |  | flex items-center gap-3 xl:gap-5 | ${language("isEnglish") === "true" ? "max-md:mr-4 md:mr-auto" : "max-md:ml-4 md:ml-auto flex-row-reverse"}`}>
                                    <Image 
                                        src={`/${user.avatar}`} 
                                        alt={`${user.artist} Avatar`}
                                        width={500} 
                                        height={500} 
                                        className={`w-6 h-6 xl:w-[3.75rem] xl:h-[3.75rem] object-cover |  |  | rounded-full`}
                                    />

                                    <span className={` | text-nftCustom-text group-hover:text-nftCustom-cta text-[1rem] md:text-[1.375rem] leading-[140%] font-normal md:font-semibold truncate |  | `}>
                                        {user.artist}
                                    </span>
                                </div>
                                
                                <span className={`md:w-[6.25rem] xl:w-40 max-md:hidden | text-nftCustom-rankings_change group-hover:text-nftCustom-background text-[1rem] leading-[140%] font-normal ${spaceMono} |  | ${language("isEnglish") === "true" ? "md:mr-5" : "md:ml-5 text-center"}`}>
                                    +{user.change}%
                                </span>

                                <span className={`md:w-[6.25rem] xl:w-40 max-xl:hidden | text-nftCustom-text group-hover:text-nftCustom-background text-[1rem] leading-[140%] font-normal ${spaceMono} |  | ${language("isEnglish") === "true" ? "md:mr-5" : "md:ml-5 text-center"}`}>
                                    {user.sold_nfts}
                                </span>

                                <span className={`md:w-[6.25rem] xl:w-40 | text-nftCustom-text group-hover:text-nftCustom-background text-sm md:text-[1rem] md:leading-[140%] font-normal ${spaceMono} |  | ${language("isEnglish") === "true" ? "max-md:mr-auto md:mr-4" : "max-md:ml-auto md:ml-4 text-center"}`}>
                                    {user.volume} ETH
                                </span>
                            </Link>
                        </MotionDiv>
                    ))}
                </div>
            </DivToScroll>
        </div>
    )

}

export default RankingsTable
