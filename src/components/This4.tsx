import GradualSpacing from "@/components/ui/gradual-spacing";
import useLanguage from "@/hooks/useLanguage";
 
export default function This5() {
    const { isEnglish } = useLanguage();

  return (
    <GradualSpacing
      className="font-display text-center text-4xl font-bold -tracking-widest text-yellow-400 dark:text-white md:text-7xl md:leading-[5rem]"
      text={isEnglish ? "FlashScript" : "فلش اسکریپت"}
    />
  );
}