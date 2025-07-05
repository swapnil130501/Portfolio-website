import { Link } from "react-router-dom"
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from "react";

export default function Navbar() {

    const navItems = [
        {
            title: 'About',
            href: '/about'
        },
        {
            title: 'Projects',
            href: '/projects'
        },
        {
            title: 'Contact',
            href: '/contacts'
        },
        {
            title: 'Blog',
            href: '/blogs'
        }
    ]

    const [hovered, setHovered] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if(latest > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    })

    return (
        <motion.nav
            animate={{
                width: scrolled ? "50%" : "100%",
                boxShadow: scrolled
                ? "rgba(17, 17, 26, 0.1) 0px 0px 16px"
                : "none",
                y: scrolled ? 10 : 0,
            }}
            transition={{ duration: 0.3, ease: "linear" }}
            className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-4xl flex items-center justify-between bg-white rounded-full py-2 px-4"
            >
            <img className="h-10 w-10 rounded-full" src="src/assets/avatar.jpg"></img>
            <div className="flex items-center">
                {navItems.map((item, idx) => (
                    <Link 
                        className="text-sm relative px-2 py-1" 
                        href={item.href} 
                        key={idx}
                        onMouseEnter={() => setHovered(idx)}
                        onMouseLeave={() => setHovered(null)}
                    > 
                        {hovered === idx && (
                            <motion.span layoutId="hovered-span" className="absolute inset-0 h-full w-full bg-neutral-100 rounded-full" />
                        )}
                        <span className="relative z-10">{item.title}</span>
                    </Link>
                ))}
            </div>
        </motion.nav>
    )
}