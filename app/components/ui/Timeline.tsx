import React from "react";
import {Timeline} from "../Timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "Software Engineer Intern, AI Platform – Uniqus Consultech (Jun–Aug 2026)",
            content: (
                <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
                    Led a 5-engineer team building a production 9-agent AI platform,
                    owning the inter-agent messaging layer end to end. Replaced
                    point-to-point service calls with a single <strong>Apache Kafka</strong>{" "}
                    message bus spanning 15 workflow event types, and hardened agent
                    workflows with at-least-once delivery and idempotent upserts.
                </div>
            ),
        },
        {
            title: "Software Developer Intern – BNP Paribas (2025)",
            content: (
                <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
                    Re-architected 3 monolithic <strong>Spring Boot</strong> services into
                    event-driven microservices shipped through <strong>Docker</strong> and{" "}
                    <strong>Kubernetes</strong> CI/CD pipelines. Built a security validation
                    framework enforcing pre-merge checks on auth, input validation, and TLS,
                    and cleared every critical SonarQube finding across 8 services with new
                    REST API integration tests.
                </div>
            ),
        },
        {
            title: "Software Developer Intern – Manipal University Jaipur (2024)",
            content: (
                <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
                    Directed a 3-person MERN team to launch the MUJ Elective Management
                    System into university-wide use — now an{" "}
                    <strong>Indian-patented</strong> platform. Cut API response times ~60%
                    (400ms → 150ms) with Redis caching, and secured 5 user roles behind{" "}
                    <strong>JWT</strong> and role-based access control.
                </div>
            ),
        },
        {
            title: "M.Eng. Software Engineering – University of Maryland (2025–2027)",
            content: (
                <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
                    Pursuing a Master of Engineering with a Graduate Certificate in Cloud
                    Engineering (GPA: 3.61/4.0), building on a B.Tech in Computer Science
                    and Engineering from Manipal University Jaipur (CGPA: 8.70/10).
                </div>
            ),
        },
        {
            title: "Publication & Patent",
            content: (
                <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
                    Co-authored <strong>&ldquo;An Agentic AI Architecture for Responding to
                    FOIA Requests&rdquo;</strong> with Prof. Jason R. Baron, presented at the
                    Workshop on AI and Open Government, ICAIL 2026, Singapore. Holds a
                    granted Indian patent for the MUJ Elective Management System.
                </div>
            ),
        },
        {
            title: "Vice Chairperson – Cyber Space Community (2023–2024)",
            content: (
                <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
                    Led a 150-member team, organizing 20+ events and workshops promoting
                    awareness across cybersecurity and other technical domains.
                </div>
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data}/>
        </div>
    );
}
