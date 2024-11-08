import { EnvelopeSimpleSVG, LockKeySVG, UserSVG } from "@/interface";
import { useTranslations } from "next-intl";

const CreateAccountInputText = ({ svg, text }: { svg: string, text: string }) => {
    
    const translateCreateAccount = useTranslations('Create-Account');
    const language = useTranslations("language");
    // ${language("isEnglish") === "true" ? "" : ""}

    return (
        <div className={` |  | flex items-center | ${language("isEnglish") === "true" ? "" : "flex-row-reverse w-[8rem] ml-[9.5rem]"}`}>
            <span>
                {svg === "username" && <UserSVG />}
                {svg === "email" && <EnvelopeSimpleSVG newAccount="true" />}
                {svg === "password" && <LockKeySVG />}
            </span>

            <span className={` | text-[1rem] leading-[140%] font-normal text-nftCustom-background |  | ${language("isEnglish") === "true" ? "ml-3" : "mr-3"}`}>
                {translateCreateAccount(`${text}`)}
            </span>
        </div>
    )

}

export default CreateAccountInputText;