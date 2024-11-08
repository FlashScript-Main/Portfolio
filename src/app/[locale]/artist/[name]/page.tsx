import { GlobalMotionMain } from "@/animations/MotionAnimations";
import { metadataValues } from "@/constant";
import { artists } from "@/constant/nft-database";
import ArtistInfo from "@/template/artist-page/ArtistInfo";
import ArtistNotFound from "@/template/artist-page/ArtistNotFound";
import ArtistTabs from "@/template/artist-page/ArtistTabs";
import { iranSans } from "@/utils/fonts";
import { useTranslations } from "next-intl";

export const generateMetadata = async ({ params: { name, locale } }: ArtistPagePropsType) => {

  const artist = artists.find(artist => artist.paramsName === name);

  if (artist) {
      return {
          title: locale === "en" ? `${metadataValues.artistTitleEn}${artist.artistNameEn}` : `${metadataValues.artistTitleFa}${artist.artistNameFa}`,
      }
  } 
  else {
      return {
          title: locale === "en" ? "Artist Not Found" : "هنرمند پیدا نشد",
      }
  }

}

const ArtistPage = ({ params: { name, locale } }: ArtistPagePropsType) => {

    const language = useTranslations("language");
    
    const artist = artists.find(artist => artist.paramsName === name);

    if (artist) {
        return (
            <GlobalMotionMain className={` | selection:text-nftCustom-cta selection:bg-nftCustom-text |  | ${language("isEnglish") === "false" && `${iranSans}`}`}>
                {/* <ArtistInfo artist={artist} />
                <ArtistTabs artist={artist} /> */}
                <div></div>
            </GlobalMotionMain>
        )
    } 
    else {
        return (
            <ArtistNotFound 
              name={name} 
              locale={locale} 
            />
        )
    }

}

export default ArtistPage


/*
const findAndMapAchievements = (paramsName) => {
  // Step 1: Find the artist based on paramsName
  const artist = artists.find(artist => artist.paramsName === paramsName);

  // Step 2: Check if the artist exists
  if (artist) {
    // Step 3: Map through the achievements of the found artist
    return artist.achievements.map((achievement, index) => {
      // You can do something with each achievement here
      return `Achievement ${index + 1}: ${JSON.stringify(achievement)}`;
    });
  } else {
    // If artist does not exist, return a message or handle accordingly
    return `Artist with paramsName "${paramsName}" not found.`;
  }
};

// Example usage:
console.log(findAndMapAchievements("bob")); // Mapping through Bob's achievements
console.log(findAndMapAchievements("nonexistent")); // Artist not found
*/