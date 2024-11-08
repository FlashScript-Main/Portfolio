"use client";

import { marketplaceTabsDetails } from "@/constant";
import { spaceMono } from "@/utils/fonts";
import { Tab, Tabs } from "@nextui-org/react"
import { useTranslations } from "next-intl";
import MarketplaceSearchTab from "./MarketplaceSearchTab";
import MarketplaceNFTsTab from "./MarketplaceNFTsTab";
import MarketplaceCollectionsTab from "./MarketplaceCollectionsTab";

const MarketplaceTabs = ({ locale }: { locale: string }) => {

    const language = useTranslations("language");

    return (
        <section className={`pb-[3.5rem] mt-2 max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto | bg-nftCustom-background_secondary |  | border-b-4 border-b-nftCustom-background rounded-b-[10px]`}>
            <Tabs 
                aria-label="Options" 
                items={marketplaceTabsDetails}
                fullWidth 
                variant="underlined" 
                classNames={{
                    cursor: "w-full bg-nftCustom-c_l_text -mb-[0.16rem]",
                    tab: `h-12 xl:h-16`,
                    tabContent: "group-data-[selected=true]:text-nftCustom-text text-nftCustom-c_l_text font-semibold text-[1rem] leading-[140%] xl:text-[1.375rem] main-transition-color",
                    tabList: `${language("isEnglish") === "false" && "flex-row-reverse"}`
                }}
                className={` | bg-nftCustom-background  |  | `}
            >
                {(item) => (
                  <Tab 
                      key={item.id} 
                      title={
                          <div className={` |  | flex gap-4 items-center |  | ${language("isEnglish") === "false" && "flex-row-reverse"}`}>
                            <span className={` | text-[1rem] xl:text-[1.375rem] leading-[140%] font-semibold |  | `}>
                                {language("isEnglish") === "true" ? item.titleEn : item.titleFa}
                            </span>

                            <span className={`max-md:hidden py-[0.3125rem] px-[0.625rem] ${item.titleEn === "Search" && "hidden"} | text-nftCustom-text text-[0.75rem] leading-[110%] font-normal ${spaceMono} group-data-[selected=true]:bg-nftCustom-c_l_text bg-nftCustom-background_secondary |  | rounded-full`}>
                              {item.titleEn === "NFTs" && 302}
                              {item.titleEn === "Collections" && 8}
                            </span>
                          </div>
                        }
                  >
                      {/* <item.content locale={locale} /> */}
                      {item.titleEn === "NFTs" && ( <MarketplaceNFTsTab locale={locale} /> )}
                      {item.titleEn === "Collections" && ( <MarketplaceCollectionsTab locale={locale} /> )}
                      {item.titleEn === "Search" && (<MarketplaceSearchTab locale={locale} /> )}
                  </Tab>
                )}
            </Tabs>
        </section>
    )

}

export default MarketplaceTabs