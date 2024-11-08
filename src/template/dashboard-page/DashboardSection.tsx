"use client";

import { MotionDiv, MotionH1, MotionP, MotionSpan } from "@/animations/motion-provider";
import { charVariants } from "@/animations/motion-variants";
import useUserStore from "@/stores/useUserStore";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardSection = ({ locale }: { locale: string }) => {

    const translateConnectWallet = useTranslations('Dashboard');
    const language = useTranslations("language");

    const { username } = useUserStore();

    const router = useRouter();

    useEffect(() => {
        if (username === "") {
            router.push(`/${locale}/`);
        }
    }, [username, router, locale]);

    return (
        <section className={`xl:h-[40.125rem] |  | flex flex-col md:flex-row gap-[1.875rem] md:gap-10 xl:gap-[3.75rem] | `}>
            <MotionDiv
                initial={{ x: "-10%", opacity: 0 }}
                whileInView={{ x: "0%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, ease: "easeIn" }} 
                className={` |  | md:basis-1/2 | `}
            >
                <Image
                    src="/dashboard.png"
                    alt="NFT Dashboard"
                    width={1000}
                    height={1000}
                    className={`w-full h-[14.5rem] xl:h-[40.125rem] md:h-full object-cover |  |  | `}
                />
            </MotionDiv>

            <div className={`max-md:max-w-[19.6875rem] md:max-w-[20.3125rem] xl:max-w-[28.75rem] max-md:mx-auto max-md:mb-10 md:py-20 xl:py-[6.25rem] |  | md:basis-1/2 | `}>
                <MotionH1 
                    initial="hidden"
                    whileInView="reveal"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.02, delay: 1 }}
                    className={`xl:mb-10 | text-[1.7rem] xl:text-[2.15rem] xl:leading-[3rem] text-pretty font-semibold text-nftCustom-text |  | ${language("isEnglish") === "false" && "text-end"}`}
                >
                    {translateConnectWallet("title").split("").map(char => (
                        <MotionSpan
                            key={char}
                            transition={{ duration: 0.75 }}
                            variants={charVariants}
                        >
                            {char}
                        </MotionSpan>
                    ))}
                </MotionH1>

                <MotionP 
                    initial="hidden"
                    whileInView="reveal"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.02, delay: 0.5 }}
                    className={`mt-5 mb-[1.875rem] md:mb-10 | text-[1rem] xl:text-[1.375rem] leading-[140%] xl:leading-[160%] font-normal text-nftCustom-text |  | ${language("isEnglish") === "false" && "text-end"}`}
                >
                    {translateConnectWallet("description").split("").map(char => (
                        <MotionSpan
                            key={char}
                            transition={{ duration: 0.5 }}
                            variants={charVariants}
                        >
                            {char}
                        </MotionSpan>
                    ))}
                </MotionP>

                <MotionDiv
                    initial={{ x: "-10%", opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
                    className={`mt-10 md:mt-12 xl:mt-16 |  |  | `}
                >
                    <Link
                        href={`/${locale}/flash-script`}
                        className={`w-fit mx-auto | text-nftCustom-cta hover:text-nftCustom-text text-lg xl:text-2xl font-semibold | grid | main-transition-color`}
                    >
                        FlashScript
                    </Link>
                </MotionDiv>
            </div>
        </section>
    )

}

export default DashboardSection