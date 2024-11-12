"use client";

import { iranSans, spaceMono } from "@/utils/fonts";
import { Modal, ModalBody, ModalContent, ModalHeader, Tooltip, useDisclosure } from "@nextui-org/react";
import { Settings } from "lucide-react";
import { useTranslations } from "next-intl";
import AnimateMotionButton from "./AnimateMotionButton";
import ThemeSwitcher from "@/themes/ThemeSwitcher";
import InstallPWA from "./InstallPWA";
import ChangeLanguageToggle from "./ChangeLanguageToggle";
import ShareNFTMarketplace from "./ShareNFTMarketplace";

const MoreOptions = () => {

    const language = useTranslations("language");

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <div>
            <Tooltip 
                showArrow={false} 
                content={`${language("isEnglish") === "true" ? "More Options" : "گزینه های بیشتر"}`}
                placement="top"
                offset={4}
                closeDelay={0}
                classNames={{
                    base: "before:bg-portfolio-card_background max-md:before:invisible",
                    content: `text-portfolio-text_secondary font-semibold bg-portfolio-card_background rounded-md ${language("isEnglish") === "true" ? "text-sm" : `text-xs`}`,
                }}
                className={`max-md:hidden |  |  | ${language("isEnglish") === "false" && `${spaceMono}`}`}
            >
                <button 
                    onClick={onOpen}
                    className={`px-1 py-1 xl:py-2 xl:px-2 my-auto | text-portfolio-background hover:text-portfolio-text_primary hover:bg-portfolio-text_secondary | grid | rounded-full main-transition-color`}
                >
                    <Settings />
                </button>
            </Tooltip>

            <Modal 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                size="5xl"
                placement="top"
                backdrop="blur"
                hideCloseButton
                className={` | bg-nftCustom-background |  | border-2 border-nftCustom-cta`}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className={` | text-center text-nftCustom-text text-lg md:text-xl xl:text-2xl font-normal xl:font-semibold ${language("isEnglish") === "false" && `${iranSans}`} selection:text-nftCustom-cta selection:bg-nftCustom-text | flex flex-col gap-1 | `}>
                            {language("isEnglish") === "true" ? "More Options" : "گزینه های بیشتر"}
                        </ModalHeader>

                        <ModalBody>
                            <div className={` | selection:text-nftCustom-cta selection:bg-nftCustom-text | flex flex-col gap-4 | `}>
                                <div className={` |  | grid grid-cols-1 | `}>
                                    <InstallPWA onClose={onClose} />

                                    <div className={` |  | grid grid-cols-1 md:grid-cols-2 gap-4 | `}>
                                        <ChangeLanguageToggle onClose={onClose} />

                                        <AnimateMotionButton onClose={onClose} />

                                        <ShareNFTMarketplace />
                                    </div>
                                </div>

                                <div className={`py-3 md:py-4 px-4 md:px-6 mb-2 md:mb-3 | bg-nftCustom-text |  | rounded-[20px]`}>
                                    <ThemeSwitcher onClose={onClose} />
                                </div>
                            </div>
                        </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )

}

export default MoreOptions