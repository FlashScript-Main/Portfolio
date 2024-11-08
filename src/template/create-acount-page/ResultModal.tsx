"use client";

import useCreateAccountModal from "@/stores/useCreateAccountModal";
import { iranSans } from "@/utils/fonts";
import { ModalContent, ModalBody, Spinner} from "@nextui-org/react";
import { Modal as NextUIModal } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const ResultModal = ({ isLoaderActive }: { isLoaderActive: boolean }) => {

    const translateCreateAccount = useTranslations('Create-Account');
    const language = useTranslations("language");

    const { isModalActive } = useCreateAccountModal();

    // const [showText, setShowText] = useState({
    //     isModalOpen: false,
    //     isSidebarVisible: true,
    //     isFormSubmitted: false,
    //     isLoading: false,
    // });

    const [state, setState] = useState({
        isCreatedVisible: true,
        isSendingVisible: true,
        isSuccessVisible: true,
    });

    useEffect(() => {
        if (isModalActive) {
            const CreatedTimer = setTimeout(() => {
                setState((prevState) => ({
                    ...prevState,
                    isCreatedVisible: false,
                }));
            }, 2000); // Visible for 2 seconds

            const SendingTimer = setTimeout(() => {
                setState((prevState) => ({
                    ...prevState,
                    isSendingVisible: false,
                }));
            }, 4000); // Visible for 2 seconds

            const SuccessTimer = setTimeout(() => {
                setState((prevState) => ({
                    ...prevState,
                    isSuccessVisible: false,
                }));
            }, 6000); // Visible for 2 seconds

            return () => { clearTimeout(CreatedTimer); clearTimeout(SendingTimer); clearTimeout(SuccessTimer); }; // Cleanup timer
        }
    }, [isModalActive]);

    const variants = {
        initial: { opacity: 0, y: 20 },
        fadeInUp: { opacity: 1, y: 0 },
        fadeOutDown: { opacity: 0, y: 20 },
    };

    return (
        <NextUIModal 
            backdrop="blur" 
            isOpen={isModalActive} 
            // isOpen={true} 
            hideCloseButton
            isDismissable={false} 
            isKeyboardDismissDisabled={true}
            placement="center"
            classNames={{
                body: "py-6",
                backdrop: "max-md:bg-[#292f46]/50 max-md:backdrop-opacity-40",
                base: "border-2 border-nftCustom-cta bg-white/90",
            }}
        >
            <ModalContent className="border-nftCustom-cta w-[25rem] h-[15.5rem]">
                <ModalBody>
                    <motion.div className={`relative w-full h-full |  |  | ${language("isEnglish") === "false" && `${iranSans}`}`}>
                        <div className={`absolute inset-0 |  |  | `}>
                            {state.isCreatedVisible && (
                                <motion.div
                                    initial={"initial"}
                                    animate={"fadeInUp"}
                                    exit={"fadeOutDown"}
                                    variants={variants}     
                                    transition={{ duration: 1 }}
                                    className={`mt-11 | text-center text-xl font-semibold text-green-600 | | `}
                                >
                                    {translateCreateAccount("modal-logedin")}
                                </motion.div>
                            )}
                        </div>

                        <div className={`absolute inset-0 |  |  | `}>
                            {state.isSendingVisible && (
                                <motion.div
                                    initial="initial"
                                    animate="fadeInUp"
                                    exit="fadeOutDown"
                                    variants={variants}
                                    transition={{ duration: 1, delay: 2 }}
                                    className={`mt-11 | text-center text-xl font-semibold text-green-600 | | `}
                                >
                                    {translateCreateAccount("modal-sending")}
                                </motion.div>
                            )}
                        </div>

                        <div className={`absolute inset-0 |  |  | `}>
                            {state.isSuccessVisible && (
                                <motion.div
                                    initial="initial"
                                    animate="fadeInUp"
                                    exit="fadeOutDown"
                                    variants={variants}
                                    transition={{ duration: 1, delay: 4 }}
                                    className={`mt-11 | text-center text-xl font-semibold text-green-600 | | `}
                                >
                                    {translateCreateAccount("modal-authorized")}
                                </motion.div>
                            )}
                        </div>
                    </motion.div>

                    <button className={` | text-indigo-600 | flex justify-center items-center gap-4 | ${language("isEnglish") === "false" && "flex-row-reverse"}`}>   
                        <span>
                            {isLoaderActive && <Spinner size="md" color="current" />}
                        </span>

                        <span className={` | text-lg font-semibold |  | `}>
                            {isLoaderActive && translateCreateAccount("modal-button")}
                        </span>
                    </button>
                </ModalBody>
            </ModalContent>
        </NextUIModal>
    )

}

export default ResultModal


/*

*/