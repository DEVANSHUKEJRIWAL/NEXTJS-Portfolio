"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

const TimelineEntryComponent = ({ title, content }: TimelineEntry) => {
    const itemRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress: itemProgress } = useScroll({
        target: itemRef,
        offset: ["start center", "end center"],
    });

    // Animations
    const titleColor = useTransform(itemProgress, [0, 1], ["#737373", "#ffffff"]);
    const dotScale = useTransform(itemProgress, [0, 1], [1, 1.7]);
    const dotColor = useTransform(itemProgress, [0, 1], ["#a3a3a3", "#ffffff"]);
    const dotGlow = useTransform(
        itemProgress,
        [0, 1],
        ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 12px rgba(255,255,255,0.9)"]
    );

    return (
        <div ref={itemRef} className="flex justify-start pt-10 md:pt-40 md:gap-10 relative">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                    <motion.div
                        style={{ scale: dotScale, backgroundColor: dotColor, boxShadow: dotGlow }}
                        className="h-4 w-4 rounded-full border border-neutral-500"
                    />
                </div>
                <motion.h3
                    style={{ color: titleColor }}
                    className="hidden md:block text-sm md:pl-20 md:text-5xl font-bold"
                >
                    {title}
                </motion.h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <motion.h3
                    style={{ color: titleColor }}
                    className="md:hidden block text-sm mb-4 font-bold"
                >
                    {title}
                </motion.h3>
                {content}
            </div>
        </div>
    );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const ref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            setHeight(ref.current.getBoundingClientRect().height);
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div ref={containerRef} className="w-full bg-black dark:bg-neutral-950 font-sans md:px-10">
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
                    My Journey So Far 🚀
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
                    From developing scalable backend systems to leading student tech communities, here’s a look at how my experience has evolved over the years.
                </p>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <TimelineEntryComponent key={index} {...item} />
                ))}
                <div
                    style={{ height: height + "px" }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]
            bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
            from-transparent via-neutral-200 dark:via-neutral-700 to-transparent
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{ height: heightTransform, opacity: opacityTransform }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-white via-neutral-300 to-transparent rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};