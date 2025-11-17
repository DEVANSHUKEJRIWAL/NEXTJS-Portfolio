"use client";

import {cn} from "@/lib/utils";
import {motion} from "motion/react";
import {useRef, useEffect, useState} from "react";

export function Pointer_Highlight({
                                     children,
                                     rectangleClassName,
                                     pointerClassName,
                                     containerClassName,
                                 }: {
    children: React.ReactNode;
    rectangleClassName?: string;
    pointerClassName?: string;
    containerClassName?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({width: 0, height: 0});

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const update = () => {
            const rect = el.getBoundingClientRect();
            setDimensions({width: rect.width, height: rect.height});
        };

        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);

        return () => ro.disconnect();
    }, []);

    return (
        <div
            className={cn("relative w-fit inline-block", containerClassName)}
            ref={containerRef}
        >
            {/* TEXT WITH SPACING ADDED HERE → THIS FIXES THE ISSUE */}
            <span className="relative z-20 text-white px-3 py-1 inline-block">
        {children}
      </span>

            {dimensions.width > 0 && dimensions.height > 0 && (
                <motion.div
                    className="pointer-events-none absolute inset-0 z-0"
                    initial={{opacity: 0, scale: 0.95}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5, ease: "easeOut"}}
                >
                    {/* RECTANGLE */}
                    <motion.div
                        className={cn(
                            "absolute inset-0 border border-neutral-800 dark:border-neutral-200 bg-transparent",
                            rectangleClassName
                        )}
                        initial={{width: 0, height: 0}}
                        animate={{
                            width: dimensions.width,
                            height: dimensions.height,
                        }}
                        transition={{duration: 1, ease: "easeInOut"}}
                    />

                    {/* POINTER */}
                    <motion.div
                        className="pointer-events-none absolute z-10"
                        initial={{opacity: 0}}
                        animate={{
                            opacity: 1,
                            x: dimensions.width + 4,
                            y: dimensions.height + 4,
                        }}
                        style={{rotate: -90}}
                        transition={{
                            opacity: {duration: 0.1},
                            duration: 1,
                            ease: "easeInOut",
                        }}
                    >
                        <Pointer
                            className={cn("h-5 w-5 text-blue-500", pointerClassName)}
                        />
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}

const Pointer = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        {...props}
    >
        <path
            d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
    </svg>
);