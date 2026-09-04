import React from "react";
import ProjectCard from "./ProjectCard";
import {BackgroundBeams} from "../ui/BackgroundTeams";

export function CardHoverEffectDemo() {
    return (
        <section id="projects" className="max-w-5xl mx-auto px-8 py-16 md:py-24">
            <h2 className="text-white font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>

            <BackgroundBeams/>
        </section>
    );
}

export const projects = [
    {
        title: "CampusSync",
        description:
            "High-concurrency event platform in Go and PostgreSQL sustaining 1,000+ concurrent users at sub-200ms latency under k6 load tests via connection pooling, index tuning, and horizontal container scaling.",
        link: "https://github.com/DEVANSHUKEJRIWAL/CampusSync",
    },
    {
        title: "KubeSentinel",
        description:
            "Predictive Kubernetes auto-scaler that forecasts CPU load from live Prometheus metrics with an ARIMA model (~20% average error) and drives HPA adjustments from a FastAPI control plane before demand peaks.",
        link: "https://github.com/DEVANSHUKEJRIWAL/KubeSentinel",
    },
    {
        title: "TerpPlanner",
        description:
            "Full-stack AI academic advisor on the Claude API exposing 10 server-side tools — prerequisite pathfinding, transcript profiling, GPA simulation — streamed over SSE into a Next.js frontend with a D3 prerequisite graph.",
        link: "https://github.com/DEVANSHUKEJRIWAL/TerpPlanner",
    },
    {
        title: "OmniSpec AI",
        description:
            "Autonomous testing agent running two LangGraph state machines over a shared Vitest runner to generate, retry, and self-heal tests, grounded by ts-morph type extraction and surfaced through a VS Code LSP server.",
        link: "https://github.com/DEVANSHUKEJRIWAL/Auto-Unit-Test-Generator",
    },
    {
        title: "MUJ Elective Management System",
        description:
            "Patented MERN platform for student records and elective allocation, launched into university-wide use; cut API response times ~60% with Redis caching and secured 5 user roles behind JWT/RBAC.",
        link: "https://github.com/DEVANSHUKEJRIWAL/MUJ-EMS",
    },
];
