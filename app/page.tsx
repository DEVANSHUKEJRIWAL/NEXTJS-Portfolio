"use client"
import {SpotlightPreview} from "./components/About/About";
import {LoaderThree} from "@/app/components/ui/Loader";
import Preview from "./components/Preview";
import {CardHoverEffectDemo} from "./components/Pro/Project";
import {NavbarDemo} from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {useState, useEffect} from "react";
import {TimelineDemo} from "@/app/components/ui/Timeline";


export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen w-screen bg-black/70">
                <LoaderThree/>
            </div>
        );
    }

    return (
        <main>
            <NavbarDemo/>
            <SpotlightPreview/>
            <CardHoverEffectDemo/>
            <TimelineDemo/>
            <Preview/>
            <Footer/>
        </main>
    );
}
