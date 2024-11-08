"use client";

import { useEffect } from 'react';
import { motion, MotionGlobalConfig } from "framer-motion";
import useMotionAnimations from '@/stores/useMotionAnimations';

const GlobalMotionMain = ({ children, className }: MotionMainProps) => {

    const { wantAnimations } = useMotionAnimations();

    useEffect(() => {
        useMotionAnimations.persist.rehydrate();
    }, []);

    if (!wantAnimations) {
        MotionGlobalConfig.skipAnimations = true;
    }

    return (
        <motion.main
            className={className}
        >
            {children}
        </motion.main>
    )

}

export {
    GlobalMotionMain
}