import Image from "next/image";
import React from "react";
import { BsChevronRight, BsCupStraw } from "react-icons/bs";
import { MdCookie } from "react-icons/md";
import { GiDonut } from "react-icons/gi";
import { racing_sans_one } from "@/data";
type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section
      id="home"
      className="grid grid-cols-1 md:container md:mx-auto md:max-w-screen-xl md:grid-cols-3 md:py-20"
    >
      <div className="row-start-2 row-end-3 flex flex-col justify-center gap-y-10 px-5 py-20 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:px-0 md:py-0 md:pr-28">
        <h1
          className={`${racing_sans_one.className} pt-16 text-center text-4xl font-bold text-neutral-800 md:pt-0 md:text-left md:text-5xl`}
        >
          Lorem, ipsum dolor.
        </h1>
        <p className="text-center text-sm text-neutral-500 md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde
          consequatur numquam itaque. Dolor est esse illum ut.
        </p>
        <span className="mx-auto block text-3xl font-black text-neutral-800 md:mx-0">
          $8.99
        </span>
        <div className="flex justify-center md:justify-start">
          <button className="flex flex-row rounded-full bg-neutral-800 px-6 py-2 text-sm text-white shadow-xl">
            Buy Now
            <BsChevronRight className="ml-3 h-9 w-9 rounded-full bg-orange-400 fill-white p-2" />
          </button>
        </div>
      </div>
      <div className="row-start-1 row-end-2 md:col-start-2 md:col-end-3">
        <Image
          src="/hero-img-2.png"
          width={450}
          height={450}
          alt="hero-img"
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col justify-center gap-y-7 bg-neutral-400 px-20 py-20 md:bg-transparent md:px-0 md:py-0 md:pl-28 md:pt-0">
        <div className="flex">
          <MdCookie className="mr-3 h-12 w-12 rounded-full bg-white fill-neutral-800 p-2" />
          <div className="">
            <h2 className="font-semibold text-neutral-800">Cookies</h2>
            <p className="text-xs text-neutral-600 md:text-neutral-500">
              Enjoy our sugar
              <br className="hidden md:flex" /> free cookies
            </p>
          </div>
        </div>
        <div className="flex">
          <BsCupStraw className="mr-3 h-12 w-12 rounded-full bg-white fill-neutral-800 p-2" />
          <div className="">
            <h2 className="font-semibold text-neutral-800">Iced coffee</h2>
            <p className="text-xs text-neutral-600 md:text-neutral-500">
              Take a break and
              <br className="hidden md:flex" /> drink something cool
            </p>
          </div>
        </div>
        <div className="flex">
          <GiDonut className="mr-3 h-12 w-12 rounded-full bg-white fill-neutral-800 p-2" />
          <div className="">
            <h2 className="font-semibold text-neutral-800">Donut</h2>
            <p className="text-xs text-neutral-600 md:text-neutral-500">
              Have a donut with
              <br className="hidden md:flex" /> the frappuccino
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
