'use client'
import Image from 'next/image'

export default function Products() {
  return (
    <section className="px-6 py-16 md:py-24 bg-[#fefaf7]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">
          Crafted for the Distinctive Few
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Discover garments that blend Ethiopian heritage with timeless elegance. 
          Each piece is tailored with precision using premium cotton — handwoven or machine-crafted — 
          to express identity and prestige like no other.
        </p>

        {/* Images Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-2xl shadow-lg scale-[85%]">
            <Image
              src="/p1.jpg"
              alt="Luxury Ethiopian Dress"
              width={400}
              height={500}
              className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg scale-[85%]">
            <Image
              src="/p2.jpg"
              alt="Custom Cotton Attire"
              width={400}
              height={500}
              className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg scale-[85%]">
            <Image
              src="/p3.jpg"
              alt="High-End Modern Traditional Wear"
              width={400}
              height={500}
              className="w-full h-[full] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
