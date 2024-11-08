import { MotionDiv, MotionH1, MotionH5, MotionP, MotionSpan } from "@/animations/motion-provider";
import { charVariants } from "@/animations/motion-variants";
import { SectionToScroll } from "@/animations/ScrollAnimations";
import { spaceMono } from "@/utils/fonts";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CategoryInfoCountUp from "./CategoryInfoCountUp";

const CategoryInfo = ({ category }: { category: CategoryParamsType }) => {

    const language = useTranslations("language");

    return (
        <SectionToScroll className={` |  |  | border-b border-b-nftCustom-background_secondary `}>
            <div className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto |  |  | `}>
                <div className={` |  | flex flex-col xl:flex-row-reverse xl:justify-between xl:items-center | `}>
                    <MotionDiv 
                        initial={{ x: language("isEnglish") === "true" ? "-10%" : "10%", opacity: 0 }}
                        whileInView={{ x: "0%", opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className={`mb-4 md:mb-6 mt-2 md:mt-3 xl:mt-5 |  |  | ${language("isEnglish") === "false" && "xl:order-last"}`}
                    >
                        <Image 
                            src={`/${category.topImage}`}
                            alt={`${category.categoryNameEn} Image`}
                            width={320}
                            height={320}
                            className={`w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] object-cover mx-auto |  |  | border-2 border-nftCustom-cta rounded-[20px] ${language("isEnglish") === "false" && "md:ml-auto"}`}
                        />
                    </MotionDiv>

                    <MotionH1 
                        initial="hidden"
                        whileInView="reveal"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ staggerChildren: 0.02, delay: 1.5 }} 
                        className={` | text-nftCustom-text text-[1.75rem] md:text-[2.375rem] xl:text-[3.1875rem] leading-[140%] md:leading-[120%] xl:leading-[110%] font-semibold | flex items-center justify-center gap-2 xl:gap-3 | ${language("isEnglish") === "false" && "gap-3 xl:gap-4"}`}
                    >   
                        <span className={` | tracking-wide |  | `}>
                            {(language("isEnglish") === "true" ? category.categoryNameEn : category.categoryNameFa).split("").map(char => (
                                <MotionSpan
                                    key={char}
                                    transition={{ duration: 1 }}
                                    variants={charVariants}
                                    className={` | text-nftCustom-cta |  | `}
                                >
                                    {char}
                                </MotionSpan>
                            ))}
                        </span>
                    
                        <span className={` | tracking-wide |  | `}>
                            {(language("isEnglish") === "true" ? "Category" : "دسته بندی").split("").map(char => (
                                <MotionSpan
                                    key={char}
                                    transition={{ duration: 1 }}
                                    variants={charVariants}
                                >
                                    {char}
                                </MotionSpan>
                            ))}
                        </span>
                    </MotionH1>
                </div>

                <div className={`mt-[1.875rem] mb-[1.875rem] xl:mb-12 | text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] |  | ${language("isEnglish") === "false" && "text-end"}`}>
                    <MotionH5 
                        initial={{ x: language("isEnglish") === "true" ? "-10%" : "10%", opacity: 0 }}
                        whileInView={{ x: "0%", opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.75, duration: 0.25 }}
                        className={` | text-nftCustom-c_l_text font-bold ${spaceMono} |  | `}
                    >
                        {language("isEnglish") === "true" ? "Description" : "توضیحات"}
                    </MotionH5>

                    <MotionP 
                        initial={{ y: "10%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.75, duration: 0.25, ease: "easeIn" }}
                        className={`mt-[0.625rem] mb-[1.875rem] | text-nftCustom-text font-normal |  | `}
                    >
                        {language("isEnglish") === "true" ? category.descriptionEn : `${category.descriptionFa}`}
                    </MotionP>
                </div>

                <div className={`mb-8 md:mb-12 xl:mb-14 |  |  | `}>
                    <CategoryInfoCountUp category={category} />
                </div>
            </div>
        </SectionToScroll>
    )

}

export default CategoryInfo