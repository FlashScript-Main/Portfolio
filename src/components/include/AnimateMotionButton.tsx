"use client";

import { useEffect } from 'react';
import useMotionAnimations from '@/stores/useMotionAnimations';
import { useTranslations } from 'next-intl';
import { iranSans } from '@/utils/fonts';

const AnimateMotionButton = ({ onClose }: { onClose: () => void }) => {

    const language = useTranslations("language");

    const { wantAnimations, setWantAnimations } = useMotionAnimations();

    useEffect(() => {
        useMotionAnimations.persist.rehydrate();
    }, []);

    const handleAnimationStatus = () => {
        setWantAnimations(!wantAnimations);
        window.location.reload(); // refresh the current page
        onClose();
    }

    return (
        <div className={`py-3 md:py-4 px-4 md:px-6 | bg-nftCustom-text ${language("isEnglish") === "false" && `${iranSans}`} | ${language("isEnglish") === "false" && `md:col-start-1 md:row-start-1`} | rounded-[20px]`}>
            <div className={` |  | flex items-center justify-between gap-2 ${language("isEnglish") === "false" && "flex-row-reverse"} | `}>
                <h5 className={`my-auto | text-nftCustom-background text-base md:text-lg font-medium |  | ${language("isEnglish") === "false" && `${iranSans} text-end`}`}>
                    {language("isEnglish") === "true" ? "Animations" : "انیمیشن‌ها"}
                </h5>

                <button 
                    onClick={handleAnimationStatus}
                    className={`p-2 px-4 | text-nftCustom-text hover:text-nftCustom-cta bg-nftCustom-cta hover:bg-nftCustom-text | grid place-content-center | border-2 border-nftCustom-cta rounded-[20px] main-transition-color`}
                >
                    {
                        wantAnimations ? 
                        language("isEnglish") === "true" ? "Disable" : "غیر فعال" : 
                        language("isEnglish") === "true" ? "Enable" : "فعال"
                    }
                </button>
            </div>
        </div>
    )

}

export default AnimateMotionButton