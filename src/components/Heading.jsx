import { motion } from 'motion/react';

export default function Heading({ children, className = "" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            viewport={{ once: true }}
            className={className}
            >
            <h1 className="text-2xl md:text-4xl font-bold tracking-tighter drop-shadow-lg text-neutral-800">{children}</h1>
        </motion.div>
    );
}