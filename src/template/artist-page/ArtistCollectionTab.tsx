import { MotionDiv, MotionH6 } from "@/animations/motion-provider";
import { DivToScroll } from "@/animations/ScrollAnimations";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const ArtistCollectionTab = ({ artist }: { artist: ArtistParamsType }) => {

    const language = useTranslations("language");

    return (
        <div className={`mt-[3.5rem] |  |  | `}>
            <DivToScroll className={` |  | grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1.875rem] | `}>
                {artist.collectionTabInfo.map((collection, index) => (
                    <MotionDiv
                        key={collection.id}
                        initial={{ x: "20%", opacity: 0 }}
                        whileInView={{ x: "0%", opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.025 * (index + 0.025), duration: 0.5, ease: "easeInOut", }}
                    >
                        <Link 
                            href={`${language("isEnglish") === "true" ? `/en/${collection.href}` : `/fa/${collection.href}`}`}
                            className={`overflow-hidden | flex flex-col |  | rounded-[20px] group`}
                        >
                            <div className={`relative overflow-hidden inline-block max-md:h-[16rem] md:h-[20rem] |  |  | `}>
                                <Image 
                                    src={`/${collection.imageMain}`}
                                    alt={`${collection.titleEn} Category`}
                                    width={500}
                                    height={500}
                                    quality={100}
                                    className={`w-full h-full object-cover mx-auto | blur-[0.3rem] group-hover:blur-none |  | rounded-t-[20px] group-hover:scale-110 duration-500 transition-transform`}
                                />
                                
                                <Image 
                                    src={`/${collection.topLayerImage}`}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className={`xl:w-[100px] xl:h-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group-hover:hidden |  |  | rounded-t-[20px]  duration-500 transition-transform`}
                                />
                            </div>

                            <div className={`py-7 px-7 xl:py-9 xl:px-9 | bg-nftCustom-background |  | `}>
                                <MotionH6 
                                    initial={{ x: "-20%", opacity: 0 }}
                                    whileInView={{ x: "0%", opacity: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ staggerChildren: 0.02, delay: 0.025 * (index + 0.05), duration: 0.5 }}
                                    className={` | text-center text-nftCustom-text max-md:line-clamp-1 md:text-nowrap group-hover:text-nftCustom-cta text-base xl:text-[1.375rem] font-semibold |  | main-transition-color`}
                                >
                                    {language("isEnglish") === "true" ? collection.titleEn : collection.titleFa}
                                </MotionH6>
                            </div>
                        </Link>
                    </MotionDiv>
                ))}
            </DivToScroll>
        </div>
    )

}

export default ArtistCollectionTab