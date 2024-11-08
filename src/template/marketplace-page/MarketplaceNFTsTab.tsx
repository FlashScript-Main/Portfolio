"use client";

import { MotionDiv, MotionH5, MotionP, MotionSpan } from "@/animations/motion-provider";
import { DivToScroll } from "@/animations/ScrollAnimations";
import { marketplaceNFTsTabInfo } from "@/constant/nft-database";
import { PlusSVG } from "@/interface";
import { spaceMono } from "@/utils/fonts";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MarketplaceNFTsTab = ({ locale }: { locale: string }) => {

    const language = useTranslations("language");

    const [nftCount, setNftCount] = useState(12);

    return (
        <div className={`mt-[3.5rem] |  |  | `}>
            <DivToScroll className={` |  | grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1.875rem] | `}>
                {marketplaceNFTsTabInfo.slice(0, nftCount).map((card, index) => (
                    <MotionDiv
                        initial={{ y: "20%", opacity: 0, }}
                        whileInView={{ y: "0%", opacity: 1, }}
                        transition={{ delay: 0.025 * (index + 0.025), duration: 0.5, ease: "easeInOut", }}
                        viewport={{ once: true, margin: "-50px" }}
                        key={card.id}
                        className={`overflow-hidden |  |  | rounded-[20px] group `}
                    >
                        <Link 
                            href={`/${locale}/${card.href}`}
                        >
                            <div className={`w-[19.6875rem] h-[14.875rem] md:w-[20.625rem] md:h-[18.4375rem] overflow-hidden |  |  | `}>
                                <Image 
                                    src={`/${card.image}`}
                                    alt={`${card.titleEn} Image`}
                                    width={330}
                                    height={295}
                                    className={`max-md:w-[19.6875rem] max-md:h-[14.875rem] md:w-full object-cover |  |  | group-hover:scale-110 duration-500 transition-transform`}
                                />
                            </div>

                            <div className={`px-5 pt-5 pb-6 | bg-nftCustom-background | flex flex-col gap-[1.5625rem] | `}>
                                <div>
                                    <MotionH5 
                                        initial={{ x: "20%", opacity: 0 }}
                                        whileInView={{ x: "0%", opacity: 1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ staggerChildren: 0.02, delay: 0.025 * (index + 0.05), duration: 0.5 }}
                                        className={`mb-[0.3125rem] | text-nftCustom-text group-hover:text-nftCustom-cta text-[1.375rem] font-semibold capitalize |  | main-transition-color ${language("isEnglish") === "false" && "text-end"}`}
                                    >
                                        {language("isEnglish") === "true" ? card.titleEn : card.titleFa}
                                    </MotionH5>

                                    <MotionDiv
                                        initial={{ x: "-20%", opacity: 0 }}
                                        whileInView={{ x: "0%", opacity: 1 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ staggerChildren: 0.02, delay: 0.025 * (index + 0.075), duration: 0.5 }} 
                                        className={` |  | flex items-center gap-3 | ${language("isEnglish") === "true" ? "justify-start" : "justify-end"}`}
                                    >
                                        <Image 
                                            src={`/${card.artistAvatar}`}
                                            alt={`${card.artistName} Avatar`}
                                            width={300}
                                            height={300}
                                            className={`w-6 h-6 object-cover rounded-full |  |  | `}
                                        />

                                        <span className={` | text-nftCustom-text text-base font-normal ${spaceMono} |  | `}>
                                            {card.artistName}
                                        </span>
                                    </MotionDiv>
                                </div>

                                <div className={` |  | flex flex-col gap-2 md:gap-[0.4rem] | `}>
                                    <div className={` |  | flex justify-between items-center | ${language("isEnglish") === "false" && "flex-row-reverse"}`}>
                                        <MotionP
                                            initial={{ x: "-20%", opacity: 0 }}
                                            whileInView={{ x: "0%", opacity: 1 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ staggerChildren: 0.02, delay: 0.01 * (index + 0.025), duration: 0.5, ease: "easeIn" }} 
                                            className={` | text-nftCustom-c_l_text text-xs font-normal ${spaceMono} |  | `}
                                        >
                                            {language("isEnglish") === "true" ? "Price" : "قیمت"}
                                        </MotionP>

                                        <MotionP 
                                            initial={{ x: "-20%", opacity: 0 }}
                                            whileInView={{ x: "0%", opacity: 1 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ staggerChildren: 0.02, delay: 0.01 * (index + 0.025), duration: 0.5, ease: "easeIn" }} 
                                            className={` | text-nftCustom-c_l_text text-xs font-normal ${spaceMono} |  | `}
                                        >
                                            {language("isEnglish") === "true" ? "Highest Bid" : "بالاترین پیشنهاد"}
                                        </MotionP>
                                    </div>

                                    <div className={` |  | flex justify-between items-center | ${language("isEnglish") === "false" && "flex-row-reverse"}`}>
                                        <MotionSpan 
                                            initial={{ y: "20%", opacity: 0 }}
                                            whileInView={{ y: "0%", opacity: 1 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ staggerChildren: 0.02, delay: 0.01 * (index + 0.025), duration: 0.5, ease: "easeInOut" }} 
                                            className={` | text-nftCustom-text text-xs md:text-base font-normal ${spaceMono} |  | `}
                                        >
                                            {card.price} ETH
                                        </MotionSpan>

                                        <MotionSpan 
                                            initial={{ y: "20%", opacity: 0 }}
                                            whileInView={{ y: "0%", opacity: 1 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ staggerChildren: 0.02, delay: 0.01 * (index + 0.025), duration: 0.5, ease: "easeInOut" }} 
                                            className={` | text-nftCustom-text text-xs md:text-base font-normal ${spaceMono} |  | `}
                                        >
                                            {card.highestBid} wETH
                                        </MotionSpan>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </MotionDiv>
                ))}
            </DivToScroll>

            <motion.button 
                initial={{ y: "10%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ staggerChildren: 0.02, delay: 0.75, duration: 0.25 }}
                onClick={() => setNftCount((value: number) => value + 12)}
                className={`max-md:w-full py-3 mt-10 md:mx-auto md:px-5 xl:px-6 ${nftCount >= 124 && "hidden"} | text-nftCustom-text hover:text-nftCustom-cta text-base font-medium hover:bg-nftCustom-text | flex items-center justify-center gap-3 | group border-4 border-nftCustom-cta rounded-[20px] main-transition-color`}
            >
                <PlusSVG place="marketplace" />

                <span>
                    {language("isEnglish") === "true" ? "Show More NFTs" : "نمایش بیشتر"}
                </span>
            </motion.button>
        </div>
    )

}

export default MarketplaceNFTsTab