"use client";

import { cn } from "../../lib/utils";
import { AnimatePresence, Variants, motion } from "framer-motion";

interface SlightFlipProps {
    word: string;
    duration?: number;
    delayMultiple?: number;
    framerProps?: Variants;
    className?: string;
}

export default function SlightFlip({
    word,
    duration = 1,
    delayMultiple = 0.08,
    framerProps = {
        hidden: { rotateX: -90, opacity: 0 },
        visible: { rotateX: 0, opacity: 1 },
    },
    className,
}: SlightFlipProps) {
    return (
        <div className=" space-x-1">
            <AnimatePresence mode="wait">
                {word.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={framerProps}
                        transition={{ duration, delay: i * delayMultiple }}
                        className={cn("origin-center drop-shadow-sm", className)}
                    >
                        {char}
                    </motion.span>
                ))}
            </AnimatePresence>
        </div>
    );
}
