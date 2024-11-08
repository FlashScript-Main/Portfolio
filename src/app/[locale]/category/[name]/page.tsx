import { GlobalMotionMain } from "@/animations/MotionAnimations";
import { metadataValues } from "@/constant";
import { categories } from "@/constant/nft-database";
import CategoryInfo from "@/template/category-page/CategoryInfo";
import CategoryNFTs from "@/template/category-page/CategoryNFTs";
import CategoryNotFound from "@/template/category-page/CategoryNotFound";
import { iranSans } from "@/utils/fonts";
import { useTranslations } from "next-intl";

export const generateMetadata = async ({ params: { name, locale } }: NFTPagePropsType) => {

    const category = categories.find(category => category.paramsName === name);

    if (category) {
        return {
            title: locale === "en" ? `${metadataValues.categoryTitleEn}${category.categoryNameEn}` : `${metadataValues.categoryTitleFa}${category.categoryNameFa}`,
        }
    } 
    else {
        return {
            title: locale === "en" ? "Category Not Found" : "دسته بندی پیدا نشد",
        }
    }
  
}

const CategoryPage = ({ params: { name, locale } }: NFTPagePropsType) => {

    const language = useTranslations("language");
    
    const category = categories.find(category => category.paramsName === name);

    if (category) {
        return (
            <GlobalMotionMain className={`overflow-x-hidden | selection:text-nftCustom-cta selection:bg-nftCustom-text |  | ${language("isEnglish") === "false" && `${iranSans}`}`}>
                {/* <CategoryInfo 
                    category={category} 
                />
                <CategoryNFTs 
                    category={category} 
                    locale={locale}
                /> */}
                <div></div>
            </GlobalMotionMain>
        )
    } 
    else {
        return (
            <CategoryNotFound 
              name={name} 
              locale={locale} 
            />
        )
    }

}

export default CategoryPage