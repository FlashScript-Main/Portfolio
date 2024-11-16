import { MotionH1, MotionP, MotionSpan } from "@/animations/motion-provider";
import { charVariants } from "@/animations/motion-variants";
import { GlobalMotionMain } from "@/animations/MotionAnimations";
import { SectionToScroll } from "@/animations/ScrollAnimations";
import Navbar from "@/components/Navbar"
import { metadataValues, projectsInfo } from "@/constant";
import useLanguage from "@/hooks/useLanguage";
import CreatedProjects from "@/template/projects-page/CreatedProjects";
import { iranSans } from "@/utils/fonts";

export const generateMetadata = async ({ params: { locale } }: MainPagePropsType) => {
    
    return {
        title: locale === "en" ? metadataValues.projectsTitleEn : metadataValues.projectsTitleFa,
    }
  
}

const ProjectsPage = () => {

    const { isEnglish, isFarsi } = useLanguage();

    return (
        <GlobalMotionMain className={`overflow-x-hidden min-h-screen |  |  | ${isFarsi && `${iranSans}`}`}>
            <Navbar place="projects" />

            <SectionToScroll className={`mt-28 md:mt-32 max-w-[380px] md:max-w-[730px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1500px] max-sm:px-4 mx-auto |  |  | ${isFarsi && "text-end"}`}>
                <MotionH1 
                    initial="hidden"
                    whileInView="reveal"
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ staggerChildren: 0.02, delay: 1.5 }} 
                    className={`mb-[0.625rem] md:mb-5 | text-portfolio-card_background text-[1.75rem] md:text-[2.375rem] lg:text-5xl xl:text-[3.1875rem] leading-[140%] md:leading-[120%] xl:leading-[110%] font-semibold |  | `}
                >
                    {(isEnglish ? projectsInfo.titleEn : projectsInfo.titleFa).split("").map(char => (
                        <MotionSpan
                            key={char}
                            transition={{ duration: 1.75 }}
                            variants={charVariants}
                        >
                            {char}
                        </MotionSpan>
                    ))}
                </MotionH1>

                <MotionP 
                    initial="hidden"
                    whileInView="reveal"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ staggerChildren: 0.02, delay: 1.5 }}
                    className={` | text-portfolio-text_primary text-[1rem] lg:text-lg xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal |  | `}
                >
                    {(isEnglish ? projectsInfo.descriptionEn : projectsInfo.descriptionFa).split("").map(char => (
                        <MotionSpan
                            key={char}
                            transition={{ duration: 0.05 }}
                            variants={charVariants}
                        >
                            {char}
                        </MotionSpan>
                    ))}
                </MotionP>
            </SectionToScroll>

            <SectionToScroll className={`mt-4 xl:mt-8 max-w-[380px] md:max-w-[730px] lg:max-w-[900px] xl:max-w-[1200px] 2xl:max-w-[1500px] max-md:px-4 mx-auto |  |  | ${isFarsi && "text-end"}`}>
                <CreatedProjects />
            </SectionToScroll>
        </GlobalMotionMain>
    )

}

export default ProjectsPage