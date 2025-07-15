import { Link } from "react-router-dom"
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from "react";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { IconMenu, IconX } from "@tabler/icons-react";

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
            href: '/contact'
        },
        {
            title: 'Blog',
            href: '/blogs'
        }
    ]

    const [hovered, setHovered] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    })

    return (
        <Container className="relative bg-white p-8 md:p-8">
            <motion.nav
                animate={{
                    width: scrolled ? "65%" : "100%",
                    //maxWidth: scrolled ? "48rem" : "100%",
                    boxShadow: scrolled
                        ? "0px 2px 3px -1px rgba(0, 0, 0, 0.1), 0px 1px 0px 0px rgba(25, 28, 33, 0.02), 0px 0px 0px 1px rgba(25, 28, 33, 0.08)"
                        : "none",
                    y: scrolled ? 10 : 0,
                }}
                transition={{ duration: 0.3, ease: "linear" }}
                className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-6xl flex items-center justify-between bg-white dark:bg-neutral-600 rounded-full py-2 px-4"
            >
                <div className="flex items-center md:justify-between w-full">
                    <Link
                        to={"/#"}>
                        <img
                            className="h-10 w-10 rounded-full cursor-pointer"
                            src="/assets/avatar.jpg">
                        </img>
                    </Link>
                    <div className="hidden md:block md:flex items-center">
                        <ThemeToggle />
                    </div>

                </div>
                <div className="flex items-center">
                    {/* Desktop Nav Items */}
                    <div className="hidden md:flex items-center">
                        {navItems.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.href}
                                className="text-sm relative px-2 py-1 text-neutral-800 dark:text-neutral-100"
                                onMouseEnter={() => setHovered(idx)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                {hovered === idx && (
                                    <motion.span layoutId="hovered-span" className="absolute inset-0 h-full w-full bg-neutral-100 dark:bg-neutral-800 rounded-full" />
                                )}
                                <span className="relative z-10">{item.title}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center md:hidden">
                            <ThemeToggle />
                        </div>
                        <button
                            className="md:hidden text-neutral-800 dark:text-neutral-100"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-20 left-0 right-0 z-40 mx-auto w-full max-w-xs bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-4 md:hidden"
                >
                    {navItems.map((item, idx) => (
                        <Link
                            key={idx}
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded"
                        >
                            {item.title}
                        </Link>
                    ))}
                </motion.div>
            )}
        </Container>
    )
}