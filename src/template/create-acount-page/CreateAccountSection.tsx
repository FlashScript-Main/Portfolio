import Image from "next/image"
import NewAccountForm from "./NewAccountForm"
import { useTranslations } from "next-intl";
import { MotionDiv, MotionH1, MotionP, MotionSpan } from "@/animations/motion-provider";
import { charVariants } from "@/animations/motion-variants";

const CreateAccountSection = ({ locale }: { locale: string }) => {

    const translateCreateAccount = useTranslations('Create-Account');
    const language = useTranslations("language");

    return (
        <section className={`xl:h-[48rem] |  | flex flex-col md:flex-row gap-[1.875rem] md:gap-10 xl:gap-[3.75rem] | `}>
            <MotionDiv 
                initial={{ x: "-10%", opacity: 0 }}
                whileInView={{ x: "0%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, ease: "easeIn" }} 
                className={` |  | md:basis-1/2 | `}
            >
                <Image 
                    src="/create-account.jpg"
                    alt="NFT Space-Ship"
                    width={610}
                    height={691}
                    className={`w-full h-[14.5rem] md:h-full object-cover |  |  | `}
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
                    {translateCreateAccount("title").split("").map(char => (
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
                    {translateCreateAccount("description").split("").map(char => (
                        <MotionSpan
                            key={char}
                            transition={{ duration: 0.5 }}
                            variants={charVariants}
                        >
                            {char}
                        </MotionSpan>
                    ))}
                </MotionP>

                <NewAccountForm locale={locale} />
            </div>
        </section>
    )

}

export default CreateAccountSection