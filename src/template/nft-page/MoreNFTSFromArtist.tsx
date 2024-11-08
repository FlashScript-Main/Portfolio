import { MotionDiv, MotionH2, MotionH5, MotionP, MotionSpan } from "@/animations/motion-provider";
import { charVariants } from "@/animations/motion-variants";
import { DivToScroll, SectionToScroll } from "@/animations/ScrollAnimations";
import { CustomButton } from "@/components";
import { spaceMono } from "@/utils/fonts";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const MoreNFTSFromArtist = ({ nft, locale }: { nft: NFTParamsType; locale: string }) => {

    const translateMoreNFTs = useTranslations('NFT-Page');
    const language = useTranslations("language");

    return (
        <SectionToScroll>
            <div className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto py-10 xl:py-20 |  |  | `}>
                <div className={`max-md:mb-[1.875rem] md:mb-[3.75rem] |  | md:flex md:items-center md:justify-between | ${language("isEnglish") === "false" && "flex-row-reverse"}`}>
                    <MotionH2 
                        initial="hidden"
                        whileInView="reveal"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ staggerChildren: 0.02, delay: 1.5 }} 
                        className={` | text-nftCustom-text text-[1.75rem] xl:text-[2.375rem] leading-[140%] xl:leading-[120%] font-semibold |  | ${language("isEnglish") === "false" && "text-end"}`}
                    >
                        {translateMoreNFTs("title").split("").map(char => (
                            <MotionSpan
                                key={char}
                                transition={{ duration: 1 }}
                                variants={charVariants}
                            >
                                {char}
                            </MotionSpan>
                        ))}
                    </MotionH2>

                    <MotionDiv 
                        initial={{ x: "20%", opacity: 0, }}
                        whileInView={{ x: "0%", opacity: 1, }}
                        transition={{ delay: 0.5, duration: 0.75, ease: "easeInOut", }}
                        viewport={{ once: true, margin: "-50px" }}
                        className={`max-md:hidden |  |  | `} 
                    >
                        <CustomButton 
                            locale={locale} 
                            translateButton={translateMoreNFTs("button-text")} 
                            type="link" 
                            href={`${nft.artistHref}`}
                            icon="arrow-right-More-NFTs"
                            className="py-[1.1875rem] max-md:max-w-[315px] md:w-[247px] max-md:mx-auto md:ml-auto border-4 border-nftCustom-cta bg-nftCustom-background hover:bg-nftCustom-text text-nftCustom-text flex justify-center items-center rounded-[20px] group"
                            textClass={`text-[1rem] leading-[140%] font-medium text-nftCustom-text group-hover:text-nftCustom-cta ml-3`}
                        />
                    </MotionDiv>
                </div>

                <div className={` |  | grid | `}>
                    {/* {nft.MoreNFTsFromArtist.map(moreNFT => ()} */}
                    <DivToScroll className={` |  | grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1.875rem] md:gap-y-[3.75rem] | `}>
                        {nft.MoreNFTsFromArtist.map((moreNFT, index) => (
                            <MotionDiv
                                initial={{ y: "20%", opacity: 0, }}
                                whileInView={{ y: "0%", opacity: 1, }}
                                transition={{ delay: 0.025 * (index + 0.025), duration: 0.5, ease: "easeInOut", }}
                                viewport={{ once: true, margin: "-50px" }}
                                key={moreNFT.id}
                                className={`overflow-hidden |  |  | rounded-[20px] group `}
                            >
                                <Link href={`/${locale}/${nft.artistHref}`}>
                                    <div className={`w-[19.6875rem] h-[14.875rem] md:w-[20.625rem] md:h-[18.4375rem] overflow-hidden |  |  | `}>
                                        <Image 
                                            src={`/${moreNFT.image}`}
                                            alt={`${moreNFT.titleEn} Image`}
                                            width={330}
                                            height={295}
                                            className={`max-md:w-[19.6875rem] max-md:h-[14.875rem] md:w-full object-cover |  |  | group-hover:scale-110 duration-500 transition-transform`}
                                        />
                                    </div>

                                    <div className={`px-5 pt-5 pb-6 | bg-nftCustom-background_secondary | flex flex-col gap-[1.5625rem] | `}>
                                        <div>
                                            <MotionH5 
                                                initial={{ x: "20%", opacity: 0 }}
                                                whileInView={{ x: "0%", opacity: 1 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ staggerChildren: 0.02, delay: 0.025 * (index + 0.05), duration: 0.5 }}
                                                className={`mb-[0.3125rem] | text-nftCustom-text group-hover:text-nftCustom-cta text-[1.375rem] font-semibold capitalize |  | main-transition-color ${language("isEnglish") === "false" && "text-end"}`}
                                            >
                                                {language("isEnglish") === "true" ? moreNFT.titleEn : moreNFT.titleFa}
                                            </MotionH5>

                                            <MotionDiv
                                                initial={{ x: "-20%", opacity: 0 }}
                                                whileInView={{ x: "0%", opacity: 1 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ staggerChildren: 0.02, delay: 0.025 * (index + 0.075), duration: 0.5 }} 
                                                className={` |  | flex items-center gap-3 | ${language("isEnglish") === "true" ? "justify-start" : "justify-end"}`}
                                            >
                                                <Image 
                                                    src={`/${nft.artistImage}`}
                                                    alt={`${nft.artistNameEn} Avatar`}
                                                    width={300}
                                                    height={300}
                                                    className={`w-6 h-6 object-cover rounded-full |  |  | `}
                                                />

                                                <span className={` | text-nftCustom-text text-base font-normal ${spaceMono} |  | `}>
                                                    {nft.artistNameEn}
                                                </span>
                                            </MotionDiv>
                                        </div>

                                        <div className={` |  | flex flex-col gap-2 md:gap-[0.4rem] | `}>
                                            <div className={` |  | flex justify-between items-center | ${language("isEnglish") === "false" && "flex-row-reverse"}`}>
                                                <MotionP
                                                    initial={{ x: "-20%", opacity: 0 }}
                                                    whileInView={{ x: "0%", opacity: 1 }}
                                                    viewport={{ once: true, margin: "-50px" }}
                                                    transition={{ staggerChildren: 0.02, delay: 0.025 * (index + 0.075), duration: 0.5, ease: "easeIn" }} 
                                                    className={` | text-nftCustom-c_l_text text-xs font-normal ${spaceMono} |  | `}
                                                >
                                                    {language("isEnglish") === "true" ? "Price" : "قیمت"}
                                                </MotionP>

                                                <MotionP 
                                                    initial={{ x: "-20%", opacity: 0 }}
                                                    whileInView={{ x: "0%", opacity: 1 }}
                                                    viewport={{ once: true, margin: "-50px" }}
                                                    transition={{ staggerChildren: 0.02, delay: 0.05 * (index + 0.075), duration: 0.5, ease: "easeIn" }} 
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
                                                    transition={{ staggerChildren: 0.02, delay: 0.075 * (index + 0.075), duration: 0.5, ease: "easeInOut" }} 
                                                    className={` | text-nftCustom-text text-xs md:text-base font-normal ${spaceMono} |  | `}
                                                >
                                                    {moreNFT.price} ETH
                                                </MotionSpan>

                                                <MotionSpan 
                                                    initial={{ y: "20%", opacity: 0 }}
                                                    whileInView={{ y: "0%", opacity: 1 }}
                                                    viewport={{ once: true, margin: "-50px" }}
                                                    transition={{ staggerChildren: 0.02, delay: 0.075 * (index + 0.075), duration: 0.5, ease: "easeInOut" }} 
                                                    className={` | text-nftCustom-text text-xs md:text-base font-normal ${spaceMono} |  | `}
                                                >
                                                    {moreNFT.highestBid} wETH
                                                </MotionSpan>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </MotionDiv>
                        ))}
                    </DivToScroll>
                </div>

                <MotionDiv 
                    initial={{ x: "20%", opacity: 0, }}
                    whileInView={{ x: "0%", opacity: 1, }}
                    transition={{ delay: 0.5, duration: 0.75, ease: "easeInOut", }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`md:hidden max-md:mt-[1.875rem] |  |  | `}
                >
                    <CustomButton 
                        locale={locale} 
                        translateButton={translateMoreNFTs("button-text")} 
                        type="link" 
                        href={`${nft.artistHref}`}
                        icon="arrow-right-More-NFTs"
                        className="py-[1rem] max-md:max-w-[315px] md:max-w-[247px] max-md:mx-auto md:ml-auto border-4 border-nftCustom-cta bg-nftCustom-background hover:bg-nftCustom-text text-nftCustom-text flex justify-center items-center rounded-[20px] group"
                        textClass={`text-[1rem] leading-[140%] font-medium text-nftCustom-text group-hover:text-nftCustom-cta ml-3`}
                    />
                </MotionDiv>
            </div>
        </SectionToScroll>
    )

}

export default MoreNFTSFromArtist