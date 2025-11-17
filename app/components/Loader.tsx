"use client";
import {motion} from "motion/react";
import React from "react";

export const LoaderThree = () => {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-20 w-20"
        >
            <motion.path stroke="none" d="M0 0h24v24H0z" fill="none"/>

            <motion.path
                initial={{pathLength: 0, fill: "rgba(136,133,175,0)"}}
                animate={{
                    pathLength: 1,
                    fill: ["rgba(156,163,175,0)", "rgba(156,163,175,0.9)"],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                    fill: {delay: 0.8, duration: 1.2},
                }}
                d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"
            />
        </motion.svg>
    );
};