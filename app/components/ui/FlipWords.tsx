import React, {useState, useEffect} from 'react';
import {Pointer_Highlight} from "../Pointer_Highlight";


const FlipWords = ({words = ["words"], duration = 3000}) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, duration);

        return () => clearInterval(interval);
    }, [words, duration]);

    const currentWord = words[currentWordIndex];

    return (
        <span className="inline-block text-gray-500 transition-all duration-500 ease-in-out">
            {currentWord.split('').map((char, index) => (
                <span
                    key={index}
                    className="inline-block"
                    style={{animationDelay: `${index * 0.05}s`}}
                >
            {char}
          </span>
            ))}
    </span>
    );
};

const techStack = ["Next.", "React.", "MongoDB.", "SpringBoot.", "Java.", "Docker.", "Kubernetes."];

export default function PointerHighlightDemo() {
    return (
        <div id="home"
             className="w-full min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 antialiased">
            <div className="max-w-4xl w-full mx-auto text-left py-8 sm:py-12">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-normal sm:leading-tight mb-4">
                    Hello, I&apos;m{' '}
                    <Pointer_Highlight>
                        <span
                            className="px-2 py-1 sm:px-3 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 inline-block">
                            Devanshu Kejriwal
                        </span>
                    </Pointer_Highlight>
                </h1>

                <div className="flex flex-col md:flex-row md:items-baseline flex-wrap mb-8">
                    <p className="text-lg sm:text-lg lg:text-xl font-medium text-gray-300">
                        A dedicated developer with a keen eye for design, focusing on&nbsp;
                    </p>

                    <div
                        className="text-2xl sm:text-3xl lg:text-4xl min-h-[4rem] sm:min-h-[5rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
                        <FlipWords words={techStack}/>
                    </div>
                </div>
            </div>
        </div>
    );
}