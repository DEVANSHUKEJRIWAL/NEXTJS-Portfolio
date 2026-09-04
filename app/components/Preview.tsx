import React from "react";
import {IconContainer} from "./Icons";
import {Radar} from "./Radar";
import {FaGithub} from "react-icons/fa";
import {SiGo, SiApachekafka, SiKubernetes, SiPostgresql, SiAmazonaws, SiDocker} from "react-icons/si";


const Preview = () => {
    return (
        <div
            className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4 bg-black">
            <div className="mx-auto w-full max-w-3xl">
                <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
                    <IconContainer text="Go" icon={<SiGo className="h-8 w-8 text-slate-600"/>}/>
                    <IconContainer
                        delay={0.4}
                        text="Kafka"
                        icon={<SiApachekafka className="h-8 w-8 text-slate-600"/>}
                    />
                    <IconContainer
                        text="Kubernetes"
                        delay={0.3}
                        icon={<SiKubernetes className="h-8 w-8 text-slate-600"/>}
                    />
                </div>
            </div>
            <div className="mx-auto w-full max-w-md">
                <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
                    <IconContainer
                        text="Docker"
                        delay={0.5}
                        icon={<SiDocker className="h-8 w-8 text-slate-600"/>}
                    />
                    <IconContainer
                        text="PostgreSQL"
                        icon={<SiPostgresql className="h-8 w-8 text-slate-600"/>}
                        delay={0.8}
                    />
                </div>
            </div>
            <div className="mx-auto w-full max-w-3xl">
                <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0">
                    <IconContainer
                        delay={0.6}
                        text="AWS"
                        icon={<SiAmazonaws className="h-8 w-8 text-slate-600"/>}
                    />
                    <IconContainer
                        delay={0.7}
                        text="Github"
                        icon={<FaGithub className="h-8 w-8 text-slate-600"/>}
                    />
                </div>
            </div>
            <Radar className="absolute -bottom-12"/>
            <div
                className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"/>

        </div>
    );
};

export default Preview;
