"use client";

import React from "react";
import Link from "next/link";
import { Brain, BriefcaseBusiness, House } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// import { ModeToggle } from "@/components/mode-toggle";
import { Dock, DockIcon } from "@/components/ui/dock";
import MoreOptions from "./include/MoreOptions";
import useLanguage from "@/hooks/useLanguage";
import { usePathname } from 'next/navigation';
import { MotionDiv } from "@/animations/motion-provider";
import { navbarIcons } from "@/constant";
import { spaceMono } from "@/utils/fonts";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function Navbar({ place }: { place: string }) {

    const { isEnglish, isFarsi } = useLanguage();

    const pathname = usePathname();
    const isHome = pathname === `/${isEnglish ? "en" : "fa"}`;
    const isSkills = pathname === `/${isEnglish ? "en" : "fa"}/skills`;
    const isProjects = pathname === `/${isEnglish ? "en" : "fa"}/projects`;

    const navbarItems = [
        {
            id: 1,
            icon: House,
            nameEn: "Home",
            nameFa: "خانه",
            href: `${isEnglish ? `/en/` : `/fa/`}`,
            isActive: isHome,
        },
        {
            id: 2,
            icon: Brain,
            nameEn: "Skills",
            nameFa: "مهارت‌ها",
            href: `${isEnglish ? `/en/skills` : `/fa/skills`}`,
            isActive: isSkills,
        },
        {
            id: 3,
            icon: BriefcaseBusiness,
            nameEn: "Projects",
            nameFa: "پروژه‌ها",
            href: `${isEnglish ? `/en/projects` : `/fa/projects`}`,
            isActive: isProjects,
        },
    ];

    return (
        <MotionDiv 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.25 , duration: 0.25, ease: "easeInOut" }}
            className={`w-fit max-lg:fixed ${place === "skills" && "lg:fixed"} ${place === "home" && "lg:absolute top-10 md:top-12 left-1/2 -translate-x-1/2 -translate-y-1/2"} top-10 md:top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[50] |  |  | `}
        >
            <TooltipProvider delayDuration={0}>
                <Dock 
                    direction="middle" 
                    className={cn(
                        `border-2 border-portfolio-card_border bg-portfolio-text_primary hover:border-portfolio-text_secondary main-transition-color ${isFarsi && "flex-row-reverse"}`,
                    )}
                >
                  {navbarItems.map((item) => (
                      <DockIcon key={item.id}>
                          <Tooltip>
                              <TooltipTrigger asChild>
                                  <Link
                                      href={item.href}
                                      aria-label={item.nameEn}
                                      className={cn(
                                          buttonVariants({ variant: "ghost", size: "icon" }),
                                          `size-12 rounded-full hover:bg-portfolio-card_background text-portfolio-background hover:text-portfolio-text_secondary ${item.isActive && "text-portfolio-text_secondary"}`,
                                      )}
                                  >
                                      <item.icon />
                                  </Link>
                              </TooltipTrigger>

                              <TooltipContent className={`bg-portfolio-card_background text-portfolio-text_secondary font-semibold | max-lg:hidden |  | ${isFarsi && `${spaceMono}`}`}>
                                  <Link
                                      href={item.href}
                                  >
                                      {isEnglish ? item.nameEn : item.nameFa}
                                  </Link>
                              </TooltipContent>
                          </Tooltip>
                      </DockIcon>
                  ))}
                    
                <Separator 
                    orientation="vertical" 
                    className="h-full py-2 bg-portfolio-card_border max-md:hidden" 
                />

                {navbarIcons.map((item) => (
                    <DockIcon key={item.id} className="max-md:hidden">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <a
                                    href={item.href}
                                    target="_blank"
                                    aria-label={item.nameEn}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        `size-12 rounded-full hover:bg-portfolio-card_background text-portfolio-background hover:text-portfolio-text_secondary`,
                                    )}
                                >
                                    <item.icon />
                                </a>
                            </TooltipTrigger>

                            <TooltipContent className={`bg-portfolio-card_background text-portfolio-text_secondary font-semibold | max-lg:hidden |  | ${isFarsi && `${spaceMono}`}`}>
                                <a
                                    href={item.href}
                                >
                                    {isEnglish ? item.nameEn : item.nameFa}
                                </a>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}

                <Separator 
                    orientation="vertical" 
                    className="h-full py-2 bg-portfolio-card_border" 
                />

                <DockIcon>
                    <MoreOptions />
                </DockIcon>
                </Dock>
            </TooltipProvider>
        </MotionDiv>
    );
}
