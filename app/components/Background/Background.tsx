import React from "react";
import {BackgroundBeams} from "../ui/BackgroundTeams";
import {CardDemo} from "../Card/Card";

export function BackgroundBeamsDemo() {
    return (
        <div className="background-beams-demo relative overflow-hidden">
            <BackgroundBeams/>

            <div className="content-container flex flex-col pt-16 pb-16 md:pt-24 md:pb-24 md:flex-row items-center justify-center gap-8">
                <div className="about-me max-w-full md:max-w-4xl mx-auto p-4 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 md:ml-10">
                        About Me
                    </h2>
                    <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm sm:text-base md:text-lg font-medium leading-relaxed md:ml-10">
                        I&apos;m a software engineer building systems that scale from enterprise microservices to
                        agentic AI pipelines. I&apos;m currently pursuing my M.Eng. in Software Engineering at the
                        University of Maryland, leading the messaging layer for a 9-agent AI platform at Uniqus
                        Consultech, and researching an agentic pipeline for FOIA request processing with Prof.
                        Jason R. Baron, work we&apos;re presenting at ICAIL 2026 in Singapore. My stack spans Go,
                        Java, Python, and TypeScript, with Apache Kafka, Kubernetes, PostgreSQL, AWS, and the
                        Claude API and LangGraph for multi-agent systems.
                    </p>
                </div>

                <div className="card-container max-w-full md:max-w-4xl mx-auto p-4 w-full">
                    <CardDemo/>
                </div>
            </div>
        </div>
    );
}
