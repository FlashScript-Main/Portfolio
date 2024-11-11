"use client";

import { useEffect, useState } from "react";

type TimeZoneProps = {
    location: "America/New_York" | 
              "Asia/Tehran" | 
              "Europe/London" | 
              "Asia/Tokyo" | 
              "Australia/Sydney";
}

const useTimeZone = ({ location }: TimeZoneProps) => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleString("en-US", {
        timeZone: location,
        hour12: false,
        hour: "numeric",
        minute: "numeric",
    });

    return {
        formattedTime
    }

}

export default useTimeZone