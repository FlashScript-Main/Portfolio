import { MotionDiv, MotionH2, MotionH6, MotionSpan } from "@/animations/motion-provider";
import { charVariants } from "@/animations/motion-variants";
import { DivToScroll, SectionToScroll } from "@/animations/ScrollAnimations";
import { categories } from "@/constant"
import { useTranslations } from "next-intl";
import Image from "next/image"
import Link from "next/link"

const CategoriesSection = ({ locale }: { locale: string }) => {

    const translateCategories = useTranslations('Home-Categories');
    const language = useTranslations("language");

    return (
        <SectionToScroll className={`py-10 xl:py-20 |  |  | `}>
            <MotionH2 
                initial="hidden"
                whileInView="reveal"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ staggerChildren: 0.02, delay: 1 }}
                className={`mb-10 xl:mb-[3.75rem] | text-nftCustom-text text-[1.75rem] xl:text-[2.375rem] font-semibold |  | ${language("isEnglish") === "false" && "text-end"}`}
            >
                {translateCategories("title").split("").map(char => (
                    <MotionSpan
                        key={char}
                        transition={{ duration: 0.5 }}
                        variants={charVariants}
                    >
                        {char}
                    </MotionSpan>
                ))}
            </MotionH2>

            <DivToScroll className={`max-w-[22.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto |  | grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-7 | `}>
                {categories.map((category, index) => (
                    <MotionDiv
                        key={category.id}
                        initial={{ x: "20%", opacity: 0 }}
                        whileInView={{ x: "0%", opacity: 1 }}
                        viewport={{ once: true, margin: "-10px" }}
                        transition={{ staggerChildren: 0.02, delay: 0.2 * (index + 0.25), duration: 0.25, ease: "easeInOut" }}
                    >
                        <Link 
                            href={`/${locale}/category/${category.href}`}
                            className={`overflow-hidden | flex flex-col |  | rounded-[20px] group`}
                        >
                            <div className={`relative overflow-hidden inline-block h-[142px] w-[147.5] xl:h-[240px] xl:w-full  |  |  | `}>
                                <Image 
                                    src={`/${category.blurImage}`}
                                    alt={`${category.titleEn} Category`}
                                    width={147.5}
                                    height={142}
                                    quality={100}
                                    className={`w-full h-full object-cover mx-auto | blur-[0.3rem] group-hover:blur-none |  | rounded-t-[20px] group-hover:scale-110 duration-500 transition-transform`}
                                />
                                
                                <Image 
                                    src={`/${category.iconImage}`}
                                    alt=""
                                    width={80}
                                    height={80}
                                    className={`xl:w-[100px] xl:h-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group-hover:hidden |  |  | rounded-t-[20px]  duration-500 transition-transform`}
                                />
                            </div>

                            <div className={`py-5 px-5 xl:py-7 xl:px-7 | bg-nftCustom-background_secondary |  | `}>
                                <MotionH6 
                                    initial={{ x: "-20%", opacity: 0 }}
                                    whileInView={{ x: "0%", opacity: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ staggerChildren: 0.02, delay: 0.2 * (index + 0.25), duration: 0.25, ease: "easeInOut" }}
                                    className={` | text-nftCustom-text max-md:line-clamp-1 md:text-nowrap group-hover:text-nftCustom-cta text-base xl:text-[1.375rem] font-semibold |  | main-transition-color ${language("isEnglish") === "false" && "text-end"}`}
                                >
                                    {language("isEnglish") === "true" ? category.titleEn : category.titleFa}
                                </MotionH6>
                            </div>
                        </Link>
                    </MotionDiv>
                ))}
            </DivToScroll>
        </SectionToScroll>
    )

}

export default CategoriesSection