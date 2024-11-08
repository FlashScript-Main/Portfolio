import { MotionDiv } from "@/animations/motion-provider"
import { SectionToScroll } from "@/animations/ScrollAnimations"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

const CategoryNFTs = ({ category, locale }: { category: CategoryParamsType, locale: string }) => {

    const language = useTranslations("language");

    return (
        <SectionToScroll className={`py-[3.5rem] px-2 max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto | bg-nftCustom-background_secondary |  | border-y-4 border-y-nftCustom-background rounded-[10px]`}>
            <div className={` |  | grid grid-cols-1 md:grid-cols-4 gap-[1.875rem] grid-flow-row-dense | `}>
                {category.nfts.sort(() => Math.random() - 0.5).map((nft, index) => (
                    <MotionDiv 
                        key={index} 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.025 * (index + 0.025), duration: 0.5, ease: "easeInOut", }}
                        className={`overflow-hidden relative |  | ${(index + 1) % 6 === 0 ? "md:col-span-2 md:row-span-2" : "col-span-1"} | rounded-[20px] group transition-all main-transition-color`}
                    >
                        <Image 
                            src={`/${nft.image}`}
                            alt={`${nft.titleEn} Image`}
                            width={500}
                            height={500}
                            className={`w-full h-full object-cover |  |  | group-hover:scale-110 duration-500 transition-transform`}
                        />

                        <div className={`w-full h-full absolute inset-0 z-10 opacity-35 | bg-nftCustom-cta | hidden group-hover:block | transition-all main-transition-color`} />

                        <div className={`absolute inset-0 w-full h-full group-hover:opacity-100 opacity-0 transition-all z-10 |  | grid place-content-center | main-transition-color`}>
                            <Link 
                                href={`/${locale}/marketplace`}
                                className={`py-2 px-4 | bg-nftCustom-text hover:bg-nftCustom-cta text-nftCustom-cta hover:text-nftCustom-text text-base font-normal | flex items-center gap-2 | rounded-[20px] border-4 border-nftCustom-text main-transition-color`}
                            >
                                {language("isEnglish") === "true" ? "Visit NFT" : "دیدن توکن"}
                            </Link>
                        </div>
                    </MotionDiv>
                ))}
            </div>
        </SectionToScroll>
    )

}

export default CategoryNFTs