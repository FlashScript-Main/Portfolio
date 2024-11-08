import { GlobalMotionMain } from "@/animations/MotionAnimations";
import { metadataValues } from "@/constant"
import DashboardSection from "@/template/dashboard-page/DashboardSection";
import { iranSans } from "@/utils/fonts";
import { useTranslations } from "next-intl";

export const generateMetadata = async ({ params: { locale } }: MainPagePropsType) => {

    return {
        title: locale === "en" ? metadataValues.dashboardTitleEn : metadataValues.dashboardTitleFa,
    }
  
}

const DashboardPage = ({ params: { locale } }: MainPagePropsType) => {

    const language = useTranslations("language");
    
    return (
        <GlobalMotionMain className={`overflow-x-hidden | selection:text-nftCustom-cta selection:bg-nftCustom-text |  | ${language("isEnglish") === "false" && `${iranSans}`}`}>
            <DashboardSection locale={locale} />
        </GlobalMotionMain>
    )

}

export default DashboardPage