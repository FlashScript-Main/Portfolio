"use client";

import { MotionDiv } from '@/animations/motion-provider';
import {useMedia} from 'react-use';

const ContactMe = () => {

    const isWide = useMedia('(min-width: 1280px)');

    return (
        <MotionDiv 
            initial={{ y: "20%", x: `${isWide ? "20%" : "-20%"}`, opacity: 0 }}
            whileInView={{ y: "0%", x: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.25, duration: 0.5, ease: "easeInOut" }}
            className={`card-main-features |  | xl:col-span-2 | max-md:border-x-4 max-md:border-x-portfolio-card_border md:border-l-4 md:border-l-portfolio-card_border md:border-b-4 md:border-b-portfolio-card_border md:rounded-tr-[20px] lg:border-l-0 lg:rounded-tl-[20px] xl:rounded-tl-none xl:border-l-4 xl:border-l-portfolio-card_border`}
        >
            <div className={`card-main-paddings |  |  | `}>
                Contact Me: Github | LinkedIn | X
            </div>
        </MotionDiv>
    )

}

export default ContactMe