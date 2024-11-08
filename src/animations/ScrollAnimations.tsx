"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const SectionToScroll = ({ children, className }: MotionSectionProps) => {

    const ref = useRef(null);
    
    return (
        <motion.section
            ref={ref}
            className={className}
        >
            {children}
        </motion.section>
    )

}

const DivToScroll = ({ children, className }: MotionDivProps) => {

    const ref = useRef(null);
    
    return (
        <motion.div
            ref={ref}
            className={className}
        >
            {children}
        </motion.div>
    )

}

const FooterToScroll = ({ children, className }: MotionFooterProps) => {

    const ref = useRef(null);
    
    return (
        <motion.footer
            ref={ref}
            className={className}
        >
            {children}
        </motion.footer>
    )

}

const ShowOnScroll = ({ 
    children, 
    index,
    className 
}: { 
    children: React.ReactNode, 
    index: number,
    className: string 
}) => {

    return (
        <motion.li
            initial={{
                opacity: 0,
                y: 100,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{ 
                duration: 0.5, 
                delay: 0.05 * index,
            }}
            viewport={{
                once: true,
            }}
            className={className}
        >
            {children}
        </motion.li>
    )

}

export {
    SectionToScroll,
    DivToScroll,
    FooterToScroll,
    ShowOnScroll,
}