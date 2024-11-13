"use client";

import { DivToScroll } from '@/animations/ScrollAnimations';
import useLanguage from '@/hooks/useLanguage';
import useScreenSize from '@/hooks/useScreenSize';
import AvailableToWork from '@/template/home-page/Home-AvailableToWork';
import Clients from '@/template/home-page/Home-Clients';
import ContactMe from '@/template/home-page/Home-ContactMe';
import FlashScript from '@/template/home-page/Home-FlashScript';
import Location from '@/template/home-page/Home-Location';
import MainProjects from '@/template/home-page/Home-MainProjects';
import Projects from '@/template/home-page/Home-Projects';
import Skills from '@/template/home-page/Home-Skills';
import TimeZone from '@/template/home-page/Home-TimeZone';

const InfoSection = () => {

    const { isFarsi } = useLanguage();

    const { specificHeight } = useScreenSize();

    return (
        <section className={`w-full ${specificHeight && "h-screen"} |  | grid place-content-center | `}>
            <DivToScroll className={`w-full mt-28 mb-20 md:mt-32 ${isFarsi && "xl:mt-28"} md:w-[730px] lg:w-[950px] xl:w-[1200px] 2xl:w-[1500px] max-sm:px-4 mx-auto overflow-hidden |  | grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 | `}>
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
    )

}

export default InfoSection