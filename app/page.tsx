import Image from "next/image";

import { BackgroundBeamsDemo } from "./components/Background/Background";
import { SpotlightPreview } from "./components/About/About";


import Preview from "./components/Preview";
import { CardHoverEffectDemo } from "./components/Pro/Project";
import { NavbarDemo } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


export default function Home() {
  return (
    <main>
      {/* <GoogleGeminiEffectDemo/> */}
     <NavbarDemo/>
     <SpotlightPreview/>
     {/* <BackgroundBeamsDemo/> */}
     <CardHoverEffectDemo/>
     <Preview/>
     <Footer/>
     
    </main>
  );
}
