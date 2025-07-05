import { motion } from 'motion/react';

export default function SubHeading({ children, className = "" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2}}
            viewport={{ once: true}}
            className={className}
            >
            <h2 className="text-neutral-500 text-sm md:text-base pt-4 max-w-lg">
                {children}
            </h2>
        </motion.div>
    );
}