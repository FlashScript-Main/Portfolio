import { DivToScroll, SectionToScroll } from "@/animations/ScrollAnimations";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { CountDownTimer } from "@/components";
import { spaceMono } from "@/utils/fonts";
import { GlobeSVG } from "@/interface";
import { nftInfoTags } from "@/constant";
import { MotionA, MotionDiv, MotionH1, MotionH4, MotionP, MotionSpan } from "@/animations/motion-provider";
import { charVariants } from "@/animations/motion-variants";

const NFTInfo = ({ nft, locale }: { nft: NFTParamsType; locale: string }) => {

    const translateNFTInfo = useTranslations('NFT-Page');
    const language = useTranslations("language");

    return (
        <SectionToScroll>
            <div className={`w-full |  |  | `}>
                <Image 
                    src={`/${nft.topImage}`}
                    alt={`${nft.artistNameEn} Image`}
                    width={1280}
                    height={560}
                    className={`w-full h-[20rem] md:h-[26.25rem] xl:h-[35rem] object-cover |  |  | `}
                />
            </div>

            <div className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto py-10 relative |  |  | ${language("isEnglish") === "false" && "text-end"}`}>
                <MotionH1 
                    initial="hidden"
                    whileInView="reveal"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ staggerChildren: 0.02, delay: 1.5 }} 
                    className={`mb-[0.625rem] | text-nftCustom-text text-[1.75rem] leading-[140%] md:text-[2.375rem] md:leading-[120%] xl:text-[3.1875rem] xl:leading-[110%] font-semibold |  | `}
                >
                    {(language("isEnglish") === "true" ? nft.artistNameEn : nft.artistNameFa).split("").map(char => (
                        <MotionSpan
                            key={char}
                            transition={{ duration: 1 }}
                            variants={charVariants}
                        >
                            {char}
                        </MotionSpan>
                    ))}
                </MotionH1>

                <MotionSpan 
                    initial={{ x: language("isEnglish") === "true" ? "-10%" : "10%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.75, duration: 0.25 }}
                    className={` | text-nftCustom-c_l_text text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal |  | `}
                >
                    {language("isEnglish") === "true" ? `Minted On ${nft.releaseDate}` : `${nft.releaseDate} انتشار یافته در`}
                </MotionSpan>

                <div>
                    <CountDownTimer bid={true} />
                </div>

                <MotionH4 
                    initial={{ x: language("isEnglish") === "true" ? "-10%" : "10%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.75, duration: 0.25 }}
                    className={`md:mt-[1.875rem] mb-[0.625rem] | text-nftCustom-c_l_text text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal xl:font-bold ${spaceMono} |  | `}
                >
                    {translateNFTInfo("created-by")}
                </MotionH4>

                <MotionDiv
                    initial={{ y: "10%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.75, duration: 0.5, ease: "easeInOut" }}
                >
                    <Link 
                        href={`/${locale}/${nft.artistHref}`}
                        className={`w-fit |  | flex items-center gap-3 | group main-transition-color ${language("isEnglish") === "false" && "ml-auto flex-row-reverse"}`}
                    >
                        <Image 
                            src={`/${nft.artistImage}`}
                            alt={`${nft.artistNameEn} Image`}
                            width={500}
                            height={500}
                            className={`w-6 h-6 object-cover |  |  | rounded-full`}
                        />

                        <span className={`mt-1 | text-nftCustom-text group-hover:text-nftCustom-cta text-[1rem] xl:text-[1.375rem] leading-[140%] font-normal xl:font-semibold |  | `}>
                            {language("isEnglish") === "true" ? nft.createdArtistEn : nft.createdArtistFa}
                        </span>
                    </Link>
                </MotionDiv>

                <MotionH4
                    initial={{ x: language("isEnglish") === "true" ? "-10%" : "10%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.75, duration: 0.25 }}
                    className={`mt-5 md:mt-[1.875rem] mb-[0.625rem] | text-nftCustom-c_l_text text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal xl:font-bold ${spaceMono} |  | `}
                >
                    {translateNFTInfo("description")}
                </MotionH4>

                <MotionP 
                    initial={{ y: "10%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.75, duration: 0.5, ease: "easeInOut" }}
                    className={`md:max-w-[22rem] xl:max-w-[37.8125rem] | text-nftCustom-text text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal text-pretty break-keep |  | ${language("isEnglish") === "false" && "text-end ml-auto"}`}
                >
                    {language("isEnglish") === "true" ? nft.descriptionEn : nft.descriptionFa}
                </MotionP>

                <MotionH4
                    initial={{ x: language("isEnglish") === "true" ? "-10%" : "10%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.75, duration: 0.25 }} 
                    className={`mt-5 md:mt-[1.875rem] mb-[0.625rem] | text-nftCustom-c_l_text text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal xl:font-bold ${spaceMono} |  | `}
                >
                    {translateNFTInfo("details")}
                </MotionH4>

                <MotionA 
                    href="https://github.com/FlashScript-Main"
                    target="_blank"
                    initial={{ y: "10%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.75, duration: 0.5, ease: "easeInOut" }}
                    className={`w-fit |  | flex items-center gap-3 | group main-transition-color ${language("isEnglish") === "false" && "ml-auto flex-row-reverse"}`}
                >
                    <GlobeSVG place="nft-page" />

                    <span className={` | text-nftCustom-text group-hover:text-nftCustom-cta text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal |  | `}>
                        {translateNFTInfo("view-on-etherscan")}
                    </span>
                </MotionA>

                <MotionA 
                    href="https://github.com/FlashScript-Main"
                    target="_blank"
                    initial={{ y: "10%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
                    className={`w-fit |  | flex items-center gap-3 | group main-transition-color ${language("isEnglish") === "false" && "ml-auto flex-row-reverse"}`}
                >
                    <GlobeSVG place="nft-page" />

                    <span className={`mt-[0.625rem] | text-nftCustom-text group-hover:text-nftCustom-cta text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal |  | `}>
                        {translateNFTInfo("view-original")}
                    </span>
                </MotionA>

                <MotionH4 
                    initial={{ x: language("isEnglish") === "true" ? "-10%" : "10%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.25, duration: 0.25 }} 
                    className={`mt-5 md:mt-[1.875rem] mb-5 | text-nftCustom-c_l_text text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal xl:font-bold ${spaceMono} |  | `}
                >
                    {translateNFTInfo("tags")}
                </MotionH4>

                <DivToScroll className={` |  | flex flex-col xl:flex-row gap-5 | ${language("isEnglish") === "false" && "xl:flex-row-reverse"}`}>
                    {nftInfoTags.map((tag, index) => (
                        <MotionA 
                            key={tag.id}
                            href="https://github.com/FlashScript-Main"
                            target="_blank"
                            initial={{ y: "20%", opacity: 0 }}
                            whileInView={{ y: "0%", opacity: 1 }}
                            viewport={{ once: true, margin: "-10px" }}
                            transition={{ staggerChildren: 0.02, delay: 0.25 * (index + 0.25), duration: 0.25, ease: "easeInOut" }}
                            className={`px-[1.875rem] py-3 w-fit | text-nftCustom-text hover:text-nftCustom-cta text-[1rem] leading-[140%] font-semibold bg-nftCustom-background_secondary hover:bg-nftCustom-text uppercase |  | rounded-[20px] main-transition-color ${language("isEnglish") === "false" && `max-xl:ml-auto ${index === nftInfoTags.length - 1 && "xl:ml-auto" }`}`}
                        >
                            {language("isEnglish") === "true" ? tag.textEn : tag.textFa}
                        </MotionA>
                    ))}
                </DivToScroll>
            </div>
        </SectionToScroll>
    )

}

export default NFTInfo