// import { useTheme } from "next-themes";

import { MagicCard } from "@/components/ui/magic-card";

export default function This3() {
//   const { theme } = useTheme();
  return (
    <div
      className={
        " h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row border-2 border-indigo-400 grid grid-cols-4"
      }
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={
            // theme === "dark" ? "#262626" : 
            "#262626"}
            gradientSize={50}
            gradientOpacity={0.2}
      >
        Magic
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
        gradientColor={
            // theme === "dark" ? "#262626" : 
            "#D9D9D955"}
      >
        Card
      </MagicCard>
    </div>
  );
}
