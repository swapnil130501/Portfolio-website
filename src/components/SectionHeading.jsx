import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export default function SectionHeading({ children, delay = 0, className = "" }) {
    return (
        <h2 className="text-neutral-500 font-normal text-sm md:text-sm pt-4 max-w-lg dark:text-neutral-300">
            {children.split(" ").map((word, idx) => (
                <motion.span
                    key={word + idx}
                    initial={{
                        opacity: 0,
                        y: 5,
                        filter: "blur(2px)"
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)"
                    }}
                    viewport={{
                        once: true
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: delay + idx * 0.05
                    }}
                    className={cn("inline-block", className)}
                >
                    {word}&nbsp;
                </motion.span>
            ))}
        </h2>
    );
}