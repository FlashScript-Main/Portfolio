"use client";

import { artistTabsDetails } from "@/constant";
import { spaceMono } from "@/utils/fonts";
import { Tabs, Tab } from "@nextui-org/react";
import { useTranslations } from "next-intl";

const ArtistTabs = ({ artist }: { artist: ArtistParamsType }) => {

  const language = useTranslations("language");

    return (
        <section className={`pb-[3.5rem] mt-2 max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto | bg-nftCustom-background_secondary |  | border-b-4 border-b-nftCustom-background rounded-b-[10px]`}>
            <Tabs 
                aria-label="Options" 
                items={artistTabsDetails}
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

                            <span className={`max-md:hidden py-[0.3125rem] px-[0.625rem] | text-nftCustom-text text-[0.75rem] leading-[110%] font-normal ${spaceMono} group-data-[selected=true]:bg-nftCustom-c_l_text bg-nftCustom-background_secondary |  | rounded-full`}>
                              {item.titleEn === "Created" && artist.createdCount}
                              {item.titleEn === "Owned" && artist.ownedCount}
                              {item.titleEn === "Collection" && artist.collectionCount}
                            </span>
                          </div>
                        }
                  >
                      <item.content artist={artist} />
                  </Tab>
                )}
            </Tabs>
        </section>
    )

}

export default ArtistTabs

/*

*/


/*
<Tabs aria-label="Dynamic tabs" items={tabs}>
        
      </Tabs>
*/

/*
<Tab key="photos" title="Photos"
            
        >
          <div>
            Hello
          </div>
        </Tab>
        <Tab key="music" title="Music">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="videos" title="Videos">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>  
        </Tab>
*/