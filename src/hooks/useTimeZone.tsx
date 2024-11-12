"use client";

import { useEffect, useState } from "react";
import useLanguage from "./useLanguage";

type TimeZoneProps = {
    location: "America/New_York" | 
              "Asia/Tehran" | 
              "Europe/London" | 
              "Asia/Tokyo" | 
              "Australia/Sydney";
}

export function englishToPersianNumber(number: number | string): string {
    const persianDigits: { [key: string]: string } = {
        '0': '۰',
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹'
    };
  
    const numberStr = number.toString();
    
    return numberStr.replace(/[0-9]/g, (digit) => persianDigits[digit] || digit);
}

const useTimeZone = ({ location }: TimeZoneProps) => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    let formattedTime = time.toLocaleString("en-US", {
        timeZone: location,
        hour12: false,
        hour: "numeric",
        minute: "numeric",
    });

    const { isFarsi } = useLanguage();

    if (isFarsi) {
        formattedTime = englishToPersianNumber(formattedTime.split(":")[0]) + ":" + englishToPersianNumber(formattedTime.split(":")[1]);
    }
    
    return {
        formattedTime
    }

}

export default useTimeZone