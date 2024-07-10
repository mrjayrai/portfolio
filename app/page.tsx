import { CardHoverEffectDemo } from "@/components/Cardcor";
import Hero from "@/components/Hero";
import { Card } from "@/components/ui/Card";
import { FloatingNav } from "@/components/ui/floatnav";
import { LampContainer, LampDemo } from "@/components/ui/Lamp";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden
    mx-auto px-5 sm:px-10"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <LampDemo />
        <div className="text-center">
  <h1 className="uppercase tracking-widest text-6xl font-semibold text-blue-100">
    My Tech Stack
  </h1>
</div>

        <CardHoverEffectDemo/>
      </div>
      
    </main>
  );
}
