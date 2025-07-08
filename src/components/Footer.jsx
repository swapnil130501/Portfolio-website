import { IconBrandGithub, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Container from "./Container";

export default function Footer() {
    return (
        <Container className="flex justify-between border-neutral-100 p-3 bg-white">
            <p className="text-neutral-500 text-sm p-1 dark:text-neutral-400">Built with love by Swapnil Lohani</p>
            <div className="flex items-center justify-center gap-4">
                <Link to={"www.linkedin.com/in/swapnil130501"}><IconBrandLinkedin className="size-4 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-100"/></Link>
                <Link to={"https://github.com/swapnil130501"}><IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-100"/></Link>
                <Link to={"https://leetcode.com/u/swapnil130501/"}><IconBrandLeetcode className="size-4 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-100"/></Link>
            </div>
        </Container>
    )
}