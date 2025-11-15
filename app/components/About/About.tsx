import React from "react";
import {Spotlight} from "../ui/SpotLight";
import {BackgroundBeams} from "../ui/BackgroundTeams";
import {BackgroundBeamsDemo} from "../Background/Background";
import PointerHighlightDemo from "@/app/components/ui/FlipWords";

export function SpotlightPreview() {
    return (
        <>
            <div
                className="h-[40rem]  w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <div className="p-4 max-w-7xl mx-auto relative z-30 w-full pt-20 md:pt-0 flex justify-start">
                    <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        <PointerHighlightDemo/>
                    </h1>
                </div>
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20 z-40 absolute"
                    fill="white"
                />
            </div>
            <BackgroundBeams/>
            <BackgroundBeamsDemo/>
        </>
    );
}
