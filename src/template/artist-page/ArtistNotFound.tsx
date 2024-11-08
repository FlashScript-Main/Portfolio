import { MotionDiv } from "@/animations/motion-provider";
import { iranSans } from "@/utils/fonts";
import { useTranslations } from "next-intl";
import Link from "next/link"

const ArtistNotFound = ({ name, locale }: { name: string; locale: string }) => {

    const language = useTranslations("language");

    return (
        <MotionDiv 
            initial={{ y: "20%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{delay: 0.25, duration: 0.5, ease: "easeInOut" }} 
            className={`py-20 lg:h-[70vh] overflow-x-hidden | text-center | flex flex-col lg:justify-center lg:items-center | `}
        >
            <h1 className={`max-md:w-3/4 mx-auto | text-nftCustom-text text-2xl md:text-4xl xl:text-5xl font-bold |  | ${language("isEnglish") === "false" && "hidden"}`}>
                There is No Artist with the 
                <span className={` | text-nftCustom-cta |  | `}>
                    {` ${name} `}
                </span>
                Name
            </h1>

            <h1 className={`mx-auto | text-nftCustom-text text-2xl md:text-4xl xl:text-5xl font-bold ${iranSans} | flex flex-row-reverse gap-2 | ${language("isEnglish") === "true" ? "hidden" : "max-md:flex max-md:flex-col"}`}>
                <span>
                    هیچ هنرمندی با نام
                </span>
                <span className={` | text-nftCustom-cta |  | `}>
                    {` ${name} `}
                </span>
                <span>
                    وجود ندارد
                </span>
            </h1>

            <Link 
                href={`/${locale}/`}
                className={`mt-10 xl:mt-20 w-fit mx-auto py-2 xl:py-3 px-4 xl:px-5 | text-nftCustom-text hover:text-nftCustom-cta text-base xl:text-[1.375rem] bg-nftCustom-background_secondary hover:bg-nftCustom-text ${language("isEnglish") === "false" && `${iranSans}`} |  | rounded-[20px] border-4 border-nftCustom-background_secondary hover:border-nftCustom-cta main-transition-color`}
            >
                {language("isEnglish") === "true" ? "Go back to Home" : "برگرد به صفحه اصلی"}
            </Link>
        </MotionDiv>
    )

}

export default ArtistNotFound