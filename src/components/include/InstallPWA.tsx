"use client";

import { iranSans } from '@/utils/fonts';
import { MonitorSmartphone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const InstallPWA = ({ onClose }: { onClose: () => void }) => {

    const language = useTranslations("language");

    const [installPromptEvent, setInstallPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);

    useEffect(() => {
      const handleBeforeInstallPrompt = (e: Event) => {
        // Cast the event to BeforeInstallPromptEvent type
        const promptEvent = e as BeforeInstallPromptEvent;
        
        // Prevent the mini-info bar from appearing on mobile
        promptEvent.preventDefault();
        // Store the event so it can be triggered later
        setInstallPromptEvent(promptEvent);
      };
  
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  
      return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      };
    }, []);
  
    const handleInstallClick = async () => {
      if (!installPromptEvent) return;
  
      // Show the install prompt
      installPromptEvent.prompt();
  
      // Wait for the user's response
      const choiceResult = await installPromptEvent.userChoice;
      console.log(`User response to the install prompt: ${choiceResult.outcome}`);
  
      // Clear the saved prompt event
      setInstallPromptEvent(null);

      onClose();
    };

    return (
        <div className={`${installPromptEvent && "mb-4 md:mx-auto"} | ${language("isEnglish") === "false" && `${iranSans}`} |  | `}>
            {installPromptEvent && (
              <div className={`py-3 md:py-4 px-4 md:px-6 | bg-nftCustom-text | flex items-center max-md:justify-between gap-2 md:gap-4 lg:gap-6 xl:gap-8 | rounded-[20px] ${language("isEnglish") === "false" && "flex-row-reverse"}`}>
                  <h5 className={`my-auto | text-nftCustom-background text-base md:text-lg font-medium |  | `}>
                    <span className={`max-md:hidden |  |  | `}>
                      {language("isEnglish") === "true" ? "Install NFT Marketplace Application" : "بازار توکن دیجیتال را نصب کنید"}
                    </span>

                    <span className={`md:hidden |  |  | `}>
                      {language("isEnglish") === "true" ? "Install NFT Marketplace" : "نصب بازار توکن دیجیتال"}
                    </span>
                  </h5>

                  <button 
                      onClick={handleInstallClick}
                      className={`p-1 md:p-2 | text-nftCustom-text hover:text-nftCustom-cta bg-nftCustom-cta hover:bg-nftCustom-text | grid place-content-center | border-2 border-nftCustom-cta rounded-full main-transition-color`}
                  >
                    <MonitorSmartphone />
                  </button>
              </div>
            )}
            {/* : (
              <div className={`py-3 md:py-4 px-4 md:px-6 |  | flex items-center gap-2 | rounded-[20px] ${language("isEnglish") === "false" && "flex-row-reverse"}`}>
                  <h5 className={`my-auto | text-nftCustom-background text-base md:text-lg font-medium |  | `}>
                    <span className={`max-md:hidden |  |  | `}>
                      {language("isEnglish") === "true" ? "NFT Marketplace Application Installed Successfully" : "بازار توکن دیجیتال با موفقیت نصب شد"}
                    </span>

                    <span className={`md:hidden |  |  | `}>
                      {language("isEnglish") === "true" ? "Installed NFT Marketplace" : "بازار توکن دیجیتال نصب شد"}
                    </span>
                  </h5>

                  <span className={` | text-nftCustom-text bg-green-500 | grid place-content-center | rounded-full`}>
                    <CircleCheck />
                  </span>
              </div>
            )} */}
        </div>
    )

}

export default InstallPWA