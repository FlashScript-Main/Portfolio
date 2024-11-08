import { MotionA, MotionDiv, MotionH1, MotionP, MotionSpan } from "@/animations/motion-provider";
import { charVariants } from "@/animations/motion-variants";
import { connectWalletProviders } from "@/constant";
import { workSans } from "@/utils/fonts";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ConnectWalletSection = () => {

    const translateConnectWallet = useTranslations('Create-Wallet');
    const language = useTranslations("language");

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
                    src="/connect-wallet-page.jpg"
                    alt="NFT Space-Ship"
                    width={610}
                    height={642}
                    className={`w-full h-[14.5rem] xl:h-[40.125rem] md:h-full object-cover |  |  | `}
                />
            </MotionDiv>

            <div className={`max-md:max-w-[19.6875rem] md:max-w-[20.3125rem] xl:max-w-[28.75rem] max-md:mx-auto max-md:mb-10 md:py-20 xl:py-[6.25rem] |  | md:basis-1/2 | `}>
                <MotionH1 
                    initial="hidden"
                    whileInView="reveal"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.02, delay: 1 }}
                    className={` | text-[2.375rem] xl:text-[3.1875rem] leading-[120%] xl:leading-[110%] font-semibold text-nftCustom-text |  | ${language("isEnglish") === "false" && "text-end"}`}
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

                <div className={`max-w-[20rem]  |  | flex flex-col gap-y-5 | ${language("isEnglish") === "false" && "xl:ml-auto"}`}>
                    {connectWalletProviders.map((provider, index) => (
                        <MotionA 
                            key={provider.id}
                            href="https://github.com/FlashScript-Main"
                            target="_blank"
                            initial={{ y: "20%", opacity: 0 }}
                            whileInView={{ y: "0%", opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ staggerChildren: 0.02, delay: 0.2 * (index + 0.25), duration: 0.25, ease: "easeInOut" }}
                            className={`w-full py-[0.90625rem] | bg-nftCustom-background hover:bg-nftCustom-text text-nftCustom-text hover:text-nftCustom-cta text-[1.375rem] leading-[140%] font-semibold ${workSans} | flex items-center gap-5 | border-2 border-nftCustom-cta rounded-[20px] main-transition-color ${language("isEnglish") === "true" ? "pl-10" : "pr-10 flex-row-reverse"}`}
                        >
                            <span>
                                <Image 
                                    src={`/${provider.image}`}
                                    alt={provider.imageAlt}
                                    width={1000}
                                    height={1000}
                                    className={`w-8 h-8 xl:w-10 xl:h-10 object-cover |  |  | `}
                                />
                            </span>

                            <span>
                                {provider.title}
                            </span>
                        </MotionA>
                    ))}
                </div>
            </div>
        </section>
    )

}

export default ConnectWalletSection