import { GlobalMotionMain } from "@/animations/MotionAnimations";
import { metadataValues } from "@/constant";
import { nfts } from "@/constant/nft-database";
import MoreNFTSFromArtist from "@/template/nft-page/MoreNFTSFromArtist";
import NFTInfo from "@/template/nft-page/NFTInfo";
import NFTNotFound from "@/template/nft-page/NFTNotFound";
import { iranSans } from "@/utils/fonts";
import { useTranslations } from "next-intl";

export const generateMetadata = async ({ params: { name, locale } }: NFTPagePropsType) => {

    const nft = nfts.find(nft => nft.paramsName === name);

    if (nft) {
        return {
            title: locale === "en" ? `${metadataValues.nftTitleEn}${nft.artistNameEn}` : `${metadataValues.nftTitleFa}${nft.artistNameFa}`,
        }
    } 
    else {
        return {
            title: locale === "en" ? "NFT Not Found" : "توکن پیدا نشد",
        }
    }
  
}

const NFTPage = ({ params: { name, locale } }: NFTPagePropsType) => {

    const language = useTranslations("language");
    
    const nft = nfts.find(nft => nft.paramsName === name);

    if (nft) {
        return (
            <GlobalMotionMain className={` | selection:text-nftCustom-cta selection:bg-nftCustom-text |  | ${language("isEnglish") === "false" && `${iranSans}`}`}>
                {/* <NFTInfo 
                    nft={nft} 
                    locale={locale}
                />
                <MoreNFTSFromArtist 
                    nft={nft} 
                    locale={locale}
                /> */}
                <div></div>
            </GlobalMotionMain>
        )
    } 
    else {
        return (
            <NFTNotFound 
              name={name} 
              locale={locale} 
            />
        )
    }

}

export default NFTPage