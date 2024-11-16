import { GlobalMotionMain } from '@/animations/MotionAnimations';
import Navbar from '@/components/Navbar';
import { metadataValues } from '@/constant';
import useLanguage from '@/hooks/useLanguage';
import InfoSection from '@/template/home-page/InfoSection';
import { iranSans } from '@/utils/fonts';
import { redirect } from 'next/navigation';

export const generateMetadata = async ({ params: { locale } }: MainPagePropsType) => {
    
    return {
        title: locale === "en" ? metadataValues.homeTitleEn : metadataValues.homeTitleFa,
        description: locale === "en" ? metadataValues.homeDescriptionEn : metadataValues.homeDescriptionFa,
    }
  
}

const Home = ({ params: { locale } }: MainPagePropsType) => {

    const { isFarsi, isEnglish } = useLanguage();

    const validLocales = ['en', 'fa'];
    
    // Redirect to Home if the locale is invalid
    if (!validLocales.includes(locale)) {
        if (isEnglish) {
            redirect('/en/');
        }
        else {
            redirect('/fa/');
        }
    }

    return (
        <GlobalMotionMain className={`overflow-x-hidden |  |  | ${isFarsi && `${iranSans}`}`}>
            <Navbar place='home' />

            <InfoSection />
        </GlobalMotionMain>
    )

}

export default Home