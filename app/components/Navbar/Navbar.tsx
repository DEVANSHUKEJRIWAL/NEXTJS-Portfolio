"use client";
import React, {useState} from "react";
import {cn} from "@/app/utils/cn";
import {Floating_Dock} from "../Floating_Dock";
import {
    IconBrandGithub,
    IconFileCv,
    IconMail,
    IconHome,
    IconTerminal2,
    IconBrandLinkedin
} from "@tabler/icons-react";

export function NavbarDemo() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-12"/>
        </div>
    );
}

function Navbar({className}: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    const dockLinks = [
        {
            title: "Home",
            icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300"/>,
            href: "#home",
        },
        {
            title: "Projects",
            icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300"/>,
            href: "#projects",
        },
        {
            title: "Email",
            icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300"/>,
            href: "mailto:devanshukejriwal12@gmail.com",
        },
        {
            title: "Resume",
            icon: <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300"/>,
            href: "https://drive.google.com/file/d/1zWlXNHE8DVl6kF6OOd0prAXXoWFdVqrR/view?usp=sharing",
        },
        {
            title: "Linkedin",
            icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300"/>,
            href: "https://www.linkedin.com/in/devanshu-kejriwal/",
        },
        {
            title: "GitHub",
            icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300"/>,
            href: "https://github.com/DEVANSHUKEJRIWAL",
        },
    ];

    return (
        <div
            className={cn(
                "fixed top-8 inset-x-0 max-w-xl mx-auto z-50 p-4 rounded-3xl flex items-center justify-between",
                className
            )}
        >
            <Floating_Dock
                items={dockLinks}
            />
        </div>
    );
}