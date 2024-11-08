"use client";

import { MotionDiv, MotionSpan } from "@/animations/motion-provider";
import { DivToScroll } from "@/animations/ScrollAnimations";
import { topCollectionUsers } from "@/constant";
// import useNFTCollections from "@/hooks/useNFTCollections";
import { iranSans, spaceMono } from "@/utils/fonts";
import { Autocomplete, AutocompleteItem, Avatar, CircularProgress } from "@nextui-org/react";
import { SearchIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Key, useCallback, useState } from "react";

const MarketplaceSearchTab = ({ locale }: { locale: string }) => {

    const language = useTranslations("language");

    const [fetchedNFTs, setFetchedNFTs] = useState<FetchedNFTsDataType[] | null>(null);

    const [selectedKey, setSelectedKey] = useState<Key | null>(null);

    const onSelectionChange = useCallback((key: Key | null) => {
        if (key) {
            setSelectedKey(key)
        }
    }, []);

    // const { isLoading, isFetched } = useNFTCollections(selectedKey, setFetchedNFTs);

    return (
        <div className={`mt-[3.5rem] |  |  | `}>
            <div>
                <Autocomplete
                    placeholder={`${language("isEnglish") === "true" ? "Search Top Collections" : "مجموعه های برتر را جستجو کنید"}`}
                    // isDisabled={isLoading}
                    radius="lg"
                    variant="faded"
                    startContent={<SearchIcon className={`text-nftCustom-cta ${language("isEnglish") === "false" && "max-md:hidden md:absolute md:right-3 xl:right-3"}`} strokeWidth={2.5} size={20} />}
                    scrollShadowProps={{ isEnabled: false }}
                    onSelectionChange={onSelectionChange}
                    classNames={{
                        base: "w-full mx-auto",
                        listboxWrapper: "max-h-[320px]",
                        selectorButton: `text-nftCustom-cta ${language("isEnglish") === "false" && "absolute -left-1"}`,
                        clearButton: `${language("isEnglish") === "false" && "absolute left-6"}`,
                    }}
                    defaultItems={topCollectionUsers}
                    inputProps={{
                        classNames: {
                            input: `text-base xl:text-lg text-nftCustom-background ${language("isEnglish") === "true" ? "ml-1" : "text-end right-1 md:right-8 xl:right-10 absolute"}`,
                            inputWrapper: "h-[3rem] md:h-[3.5rem] bg-nftCustom-text text-nftCustom-cta",
                        },
                    }}
                    listboxProps={{
                        hideSelectedIcon: true,
                        emptyContent: <div className={` |  |  | ${language("isEnglish") === "true" ? "text-sm md:text-base font-semibold" : `text-base font-semibold text-end ${iranSans}`}`}>
                            {language("isEnglish") === "true" ? "No results found" : "نتیجه ای یافت نشد"}
                        </div>,
                        itemClasses: {
                            base: [
                                "rounded-medium",
                                "text-nftCustom-background text-xl font-semibold",
                                // "transition-opacity",
                                "data-[hover=true]:text-nftCustom-text",
                                "data-[hover=true]:bg-nftCustom-cta",
                                // "data-[pressed=true]:opacity-70",
                                // "data-[selectable=true]:focus:bg-default-100",
                                // "data-[focus-visible=true]:ring-default-500",
                            ],
                        },
                    }}
                    aria-label="Search Top Collections"
                    popoverProps={{
                        offset: 10,
                        classNames: {
                            base: "rounded-large",
                            content: "p-1 bg-nftCustom-text border-2 border-nftCustom-cta",
                        },
                    }}
                    className="w-full md:w-10/12 md:mx-auto md:grid xl:w-8/12 hover:border-nftCustom-cta"
                >
                    {(item) => (
                        <AutocompleteItem 
                            key={item.value} 
                            textValue={item.name}
                            className={` |  |  | group `}
                        >
                        <div className={` |  | flex justify-between items-center | `}>
                            <div className="flex gap-2 items-center">
                                <Avatar 
                                    alt={item.name} 
                                    className="flex-shrink-0 border-2 border-nftCustom-cta group-hover:border-nftCustom-text" 
                                    size="md" 
                                    src={`/${item.avatar}`} 
                                />

                                <div className="flex flex-col">
                                    <span className={` |  line-clamp-1 |  | ${language("isEnglish") === "true" ? "text-sm md:text-base font-semibold" : "text-base font-semibold"}`}>
                                        {item.name}
                                    </span>

                                    <span className={` |  ${spaceMono} |  | ${language("isEnglish") === "true" ? "text-xs md:text-sm font-normal" : "text-xs font-light"}`}>
                                        {language("isEnglish") === "true" ? `Sold Volume: ${item.volume} ETH` : `${item.volume} ETH :توکن فروخته شده`}
                                    </span>
                                </div>
                            </div>

                            <button className={`max-md:hidden px-4 py-2 | bg-nftCustom-cta group-hover:bg-nftCustom-text text-nftCustom-text group-hover:text-nftCustom-cta |  | rounded-full mr-0.5 font-medium shadow-small`}>
                                {language("isEnglish") === "true" ? "Search" : "جستجو"}
                            </button>
                        </div>
                        </AutocompleteItem>
                    )}
                </Autocomplete>
            </div>
            
            {true ? (
                <div className={`w-full mt-4 md:mt-8 xl:mt-10 | text-nftCustom-text | grid place-content-center | `}>
                    <CircularProgress 
                        classNames={{
                            svg: "w-12 h-12 drop-shadow-md",
                            indicator: "stroke-nftCustom-text",
                            track: "stroke-nftCustom-cta",
                        }}
                    />
                </div>
                ) : (
                <>
                <DivToScroll className={`mt-4 md:mt-8 xl:mt-10 |  | grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[1.875rem] | `}>
                    {fetchedNFTs?.map((card, index) => 
                        card.image_url && (
                            <MotionDiv
                                initial={{ y: "20%", opacity: 0, }}
                                whileInView={{ y: "0%", opacity: 1, }}
                                transition={{ delay: 0.025 * (index + 0.025), duration: 0.5, ease: "easeInOut", }}
                                viewport={{ once: true, margin: "-50px" }}
                                key={index}
                                className={`overflow-hidden |  |  | rounded-[20px] group transition-all`}
                            >
                                <a 
                                    href={`${card.opensea_url}`}
                                    target="_blank"
                                >
                                    <div className={`w-[19.6875rem] h-[14.875rem] md:w-[20.625rem] md:h-[18.4375rem] overflow-hidden |  |  | `}>
                                        <Image 
                                            src={`${card.image_url}`}
                                            alt={`${card.metadata_url} Image`}
                                            width={330}
                                            height={295}
                                            className={`w-[19.6875rem] h-[14.875rem] md:w-full md:h-auto object-cover |  |  | group-hover:scale-110 duration-500 transition-transform`}
                                        />
                                    </div>

                                    <div className={`w-full h-[5rem] xl:h-[5.75rem] relative | bg-nftCustom-background | flex flex-col justify-center items-center gap-[1.5625rem] | `}>
                                        <div className={` |  |  | group-hover:opacity-0 opacity-100 transition-all`}>
                                            <MotionDiv
                                                initial={{ x: "-20%", opacity: 0 }}
                                                whileInView={{ x: "0%", opacity: 1 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ staggerChildren: 0.02, delay: 0.025 * (index + 0.075), duration: 0.5 }} 
                                                className={`px-4 |  | flex items-center justify-center gap-3 | ${language("isEnglish") === "true" ? "justify-start" : "justify-end"}`}
                                            >
                                                <Image 
                                                    src={`/${card.collection}.png`}
                                                    alt={`${card.collection} Avatar`}
                                                    width={300}
                                                    height={300}
                                                    className={`w-10 h-10 object-cover rounded-full |  |  | `}
                                                />

                                                <span className={` | text-nftCustom-text text-base xl:text-lg font-normal ${spaceMono} line-clamp-1 |  | `}>
                                                    {(topCollectionUsers.find(user => user.value === selectedKey))?.name}
                                                </span>
                                            </MotionDiv>
                                        </div>

                                        <div className={`absolute inset-0 w-full h-full group-hover:opacity-100 opacity-0 transition-all |  | grid place-content-center | `}>
                                            <button className={`py-2 px-4 | bg-nftCustom-cta hover:bg-nftCustom-text text-nftCustom-text hover:text-nftCustom-cta text-base font-normal | flex items-center gap-2 | rounded-[20px] border-4 border-nftCustom-cta`}>
                                                {language("isEnglish") === "true" ? "Visit NFT" : "دیدن توکن"}
                                            </button>
                                        </div>
                                    </div>
                                </a>
                            </MotionDiv>
                        )
                    )}
                </DivToScroll>

                <DivToScroll className={`hidden | text-center |  | border-2 border-rose-400`}>
                    <Link href={`/${locale}/`}>
                        <MotionSpan
                            initial={{ y: "20%", opacity: 0, }}
                            whileInView={{ y: "0%", opacity: 1, }}
                            transition={{ delay: 10,duration: 0.5, ease: "easeInOut", }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {language("isEnglish") === "true" ? "See More NFTs" : "مشاهده توکن های بیشتر"}
                        </MotionSpan>
                    </Link>
                </DivToScroll>
                </>
            )}
        </div>
    )

}

export default MarketplaceSearchTab