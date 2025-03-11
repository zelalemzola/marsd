import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroCTA() {
    return (
      <div
        className="relative w-[80%] rounded-2xl mx-auto h-[50vh] flex items-center justify-center bg-center text-white"
        style={{
          backgroundImage: "url('/cta.jpg')",
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0  bg-opacity-50"></div>
  
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-2xl md:text-5xl font-extrabold tracking-wide">
            Timeless Elegance, Inspired by Heritage
          </h1>
          <p className="mt-4 text-lg ">
            Experience the pinnacle of luxury with our handcrafted designs, blending tradition with modern sophistication.
          </p>
  
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        
            <Link
              href="/contact"
              className="px-6 py-3 border border-white hover:border-none hover:bg-primary hover:text-white font-semibold rounded-full text-md md:text-lg transition flex items-center gap-3"
            >
              Explore Collection <ArrowRight/>
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-white hover:bg-primary hover:text-white font-semibold rounded-full text-md md:text-lg transition  flex items-center gap-3"
            >
              Custom Order Now  <ArrowRight/>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  