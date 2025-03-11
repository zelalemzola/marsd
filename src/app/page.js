import Hero from "@/components/Hero";
import HeroCTA from "@/components/HeroCTA";
import Partners from "@/components/Partners";
import Promise from "@/components/Promise";
import Why from "@/components/Why";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <Hero/>
     <Partners/>
     <Why/>
     <Promise/>
     <HeroCTA/>
    </div>
  );
}
