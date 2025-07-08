import { Link } from "react-router-dom"
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from "react";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {

    const navItems = [
        {
            title: <ThemeToggle />
        },
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
            href: '/contact'
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
        <Container className="bg-white p-8 md:p-8">
            <motion.nav
                animate={{
                    width: scrolled ? "65%" : "100%",
                    boxShadow: scrolled
                    ? "0px 2px 3px -1px rgba(0, 0, 0, 0.1), 0px 1px 0px 0px rgba(25, 28, 33, 0.02), 0px 0px 0px 1px rgba(25, 28, 33, 0.08)"
                    : "none",
                    y: scrolled ? 10 : 0,
                }}
                transition={{ duration: 0.3, ease: "linear" }}
                className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-6xl flex items-center justify-between bg-white dark:bg-neutral-600 rounded-full py-2 px-4"
                >
                <Link
                    to={"/#"}
                >
                    <img 
                        className="h-10 w-10 rounded-full cursor-pointer" 
                        src="public/assets/avatar.jpg">
                    </img>
                </Link>
                <div className="flex items-center">
                    {navItems.map((item, idx) => (
                        <Link 
                            className="text-sm relative px-2 py-1" 
                            to={item.href} 
                            key={idx}
                            onMouseEnter={() => setHovered(idx)}
                            onMouseLeave={() => setHovered(null)}
                        > 
                            {hovered === idx && (
                                <motion.span layoutId="hovered-span" className="absolute inset-0 h-full w-full bg-neutral-100 dark:bg-neutral-800 rounded-full" />
                            )}
                            <span className="relative z-10 text-neutral-800 dark:text-neutral-100">{item.title}</span>
                        </Link>
                    ))}
                </div>
            </motion.nav>
        </Container>
    )
}