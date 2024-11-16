import { MotionDiv, MotionH1, MotionH2, MotionP, MotionSpan } from "@/animations/motion-provider";
import { charVariants } from "@/animations/motion-variants";
import { GlobalMotionMain } from "@/animations/MotionAnimations";
import { SectionToScroll } from "@/animations/ScrollAnimations";
import { Navbar } from "@/components";
import { metadataValues } from "@/constant";
import useLanguage from "@/hooks/useLanguage";
import { iranSans } from "@/utils/fonts";
import Link from "next/link";

export const generateMetadata = async ({ params: { locale } }: MainPagePropsType) => {

    return {
        title: locale === "en" ? metadataValues.notFoundTitleEn : metadataValues.notFoundTitleFa,
    }
  
}

const NotFoundPage = () => {

    const { isEnglish, isFarsi} = useLanguage();

    return (
        <GlobalMotionMain className={`overflow-x-hidden w-full h-screen | selection:text-portfolio-text_secondary selection:bg-portfolio-text_primary | grid place-content-center | ${isFarsi && `${iranSans}`}`}>
            <Navbar place="projects" />
            <SectionToScroll className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto py-[1.875rem] md:py-10 xl:py-20 |  |  | ${isFarsi && "text-end"}`}>
                <MotionH1
                    initial={{ y: "20%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.75, ease: "easeInOut" }}
                    className={`mb-8 md:mb-10 xl:mb-12 | text-center text-portfolio-text_secondary text-6xl md:text-7xl xl:text-9xl font-semibold |  | `}
                >
                    404
                </MotionH1>

                <MotionH2 
                    initial="hidden"
                    whileInView="reveal"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ staggerChildren: 0.02, delay: 1.5 }} 
                    className={`mb-[0.625rem] md:mb-5 | text-portfolio-text_primary text-[1.75rem] md:text-[2.375rem] xl:text-[3.1875rem] leading-[140%] md:leading-[120%] xl:leading-[110%] font-semibold |  | `}
                >
                    {(isEnglish ? "Page Not Found" : "صفحه پیدا نشد").split("").map(char => (
                        <MotionSpan
                            key={char}
                            transition={{ duration: 1.75 }}
                            variants={charVariants}
                        >
                            {char}
                        </MotionSpan>
                    ))}
                </MotionH2>

                <MotionP 
                    initial="hidden"
                    whileInView="reveal"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ staggerChildren: 0.02, delay: 1.5 }}
                    className={` | text-portfolio-card_background text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal |  | `}
                >
                    {(isEnglish ? "Sorry, the page you're looking for doesn't exist. Please check the URL or go back to the Homepage." : "متاسفیم، صفحه‌ای که به دنبال آن هستید وجود ندارد. لطفاً آدرس را بررسی کنید یا به صفحه اصلی بازگردید").split("").map(char => (
                        <MotionSpan
                            key={char}
                            transition={{ duration: 1 }}
                            variants={charVariants}
                        >
                            {char}
                        </MotionSpan>
                    ))}
                </MotionP>

                <MotionDiv
                    initial={{ x: "20%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.75, ease: "easeInOut" }}
                    className={`mb-4 |  |  | ${isEnglish ? "mt-8" : "max-md:mt-8 mt-12"}`}
                >
                    <Link
                        href={`/${isEnglish ? "en" : "fa"}/`}
                        className={`mx-auto w-fit px-4 xl:px-5 py-3 xl:py-4 | text-portfolio-background hover:text-portfolio-card_background bg-portfolio-text_primary hover:bg-portfolio-text_secondary text-lg xl:text-xl font-semibold | grid | border-2 border-portfolio-card_border hover:border-portfolio-text_primary rounded-[20px] main-transition-color`}
                    >
                        {isEnglish ? "Go back to Homepage" : "بازگشت به صفحه اصلی"}
                    </Link>
                </MotionDiv>
            </SectionToScroll>
        </GlobalMotionMain>
    )

}

export default NotFoundPage

// "use client";

// // [local]/app/not-found.js
// import { useEffect } from 'react';
// import { useRouter } from "next/navigation";
// import { useTranslations } from 'next-intl';


// const NotFoundPage = () => {

//     const language = useTranslations("language");

//     const router = useRouter();

//     // ${language("isEnglish") === "true" ? "" : ""}

//   useEffect(() => {
//     // Redirect to the homepage after a short delay
//     const timer = setTimeout(() => {
//         if (language("isEnglish") === "true") {
//             router.push('/en/'); // Redirect to home page
//         }
//         else {
//             router.push('/fa/'); // Redirect to home page
//         }
//     }, 0); // You can change the delay (in milliseconds) if you want

//     return () => clearTimeout(timer); // Clean up the timer on unmount
//   }, [router, language]);

//   return null; // Optionally return null or a loading indicator
// };

// export default NotFoundPage;