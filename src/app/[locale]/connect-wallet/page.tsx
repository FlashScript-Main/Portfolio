import { GlobalMotionMain } from "@/animations/MotionAnimations";
import { metadataValues } from "@/constant";
import ConnectWalletSection from "@/template/connect-wallet-page/ConnectWalletSection";
import { iranSans } from "@/utils/fonts";
import { useTranslations } from "next-intl";

export const generateMetadata = async ({ params: { locale } }: MainPagePropsType) => {

    return {
        title: locale === "en" ? metadataValues.connectWalletTitleEn : metadataValues.connectWalletTitleFa,
    }
  
}

const ConnectWallet = () => {

    const language = useTranslations("language");
    
    return (
        <GlobalMotionMain className={`overflow-x-hidden | selection:text-nftCustom-cta selection:bg-nftCustom-text |  | ${language("isEnglish") === "false" && `${iranSans}`}`}>
            {/* <ConnectWalletSection /> */}
            <div></div>
        </GlobalMotionMain>
    )

}

export default ConnectWallet