import { GlobalMotionMain } from '@/animations/MotionAnimations';
import { DivToScroll } from '@/animations/ScrollAnimations';
import Navbar from '@/components/Navbar';
// import { metadataValues } from '@/constant';
import useLanguage from '@/hooks/useLanguage';
import AvailableToWork from '@/template/home-page/Home-AvailableToWork';
import Clients from '@/template/home-page/Home-Clients';
import ContactMe from '@/template/home-page/Home-ContactMe';
import FlashScript from '@/template/home-page/Home-FlashScript';
import Location from '@/template/home-page/Home-Location';
import MainProjects from '@/template/home-page/Home-MainProjects';
import Projects from '@/template/home-page/Home-Projects';
import Skills from '@/template/home-page/Home-Skills';
import TimeZone from '@/template/home-page/Home-TimeZone';
import { iranSans } from '@/utils/fonts';
// import { useTranslations } from 'next-intl';
import { redirect } from 'next/navigation';

// export const generateMetadata = async ({ params: { locale } }: MainPagePropsType) => {

//     return {
//         title: locale === "en" ? metadataValues.homeTitleEn : metadataValues.homeTitleFa,
//         description: locale === "en" ? metadataValues.homeDescriptionEn : metadataValues.homeDescriptionFa,
//     }
  
// }

const Home = ({ params: { locale } }: MainPagePropsType) => {

    // const language = useTranslations("language");

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

    // 🔥 Basic 🔥
    // ${language("isEnglish") === "true" ? "flex-row" : "flex-row-reverse"}
    // ${language("isEnglish") === "false" && "flex-row-reverse"}
    // ${language("isEnglish") === "true" ? "" : ""}
    // ${language("isEnglish") === "false" && ""}

    // ⭐ Basic ⭐
    // initial={{ y: "10%", opacity: 0 }}
    // whileInView={{ y: "0%", opacity: 1 }}
    // viewport={{ once: true, margin: "-200px" }}
    // transition={{ staggerChildren: 0.02, delay: 0.25 * index, duration: 0.5 }}

    // initial={{ y: "20%", opacity: 0 }}
    // whileInView={{ y: "0%", opacity: 1 }}
    // viewport={{ once: true, margin: "-200px" }}
    // transition={{ staggerChildren: 0.02, delay: 0.5 * (index + 1), duration: 0.25 }}

    // initial={{ y: "20%", opacity: 0 }}
    // whileInView={{ y: "0%", opacity: 1 }}
    // viewport={{ once: true, margin: "-100px" }}
    // transition={{ staggerChildren: 0.02, delay: 0.5 * (index + 0.5), duration: 0.25 }}

    // initial={{ y: "20%", opacity: 0 }}
    // whileInView={{ y: "0%", opacity: 1 }}
    // viewport={{ once: true, margin: "-50px" }}
    // transition={{ staggerChildren: 0.02, delay: 0.2 * (index + 0.25), duration: 0.25, ease: "easeInOut" }}
    
    // initial={{ x: language("isEnglish") === "true" ? "-10%" : "10%", opacity: 0 }}
    // whileInView={{ x: "0%", opacity: 1 }}
    // viewport={{ once: true, margin: "-50px" }}
    // transition={{ delay: 0.5, duration: 0.5 }}

    return (
        <GlobalMotionMain className={`overflow-x-hidden | selection:text-nftCustom-cta selection:bg-nftCustom-text |  | ${isFarsi && `${iranSans}`}`}>
            <Navbar place='home' />
            <section className={`w-full lg:h-screen |  | grid place-content-center | `}>
                <DivToScroll className={`w-full mt-28 mb-20 md:mt-32 md:w-[730px] lg:w-[950px] xl:w-[1200px] 2xl:w-[1500px] max-sm:px-4 mx-auto overflow-hidden |  | grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 | `}>
                    <Skills />
                    <Location />
                    <TimeZone />
                    <Clients />
                    <Projects />
                    <FlashScript />
                    <MainProjects />
                    <ContactMe />
                    <AvailableToWork />
                </DivToScroll>
            </section>
        </GlobalMotionMain>
    )

}

export default Home