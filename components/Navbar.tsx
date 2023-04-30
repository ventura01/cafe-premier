"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdShoppingBag, MdOutlineClose, MdMenu } from "react-icons/md";

type Props = {};

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      id="navigation"
      className="sticky top-0 z-50 bg-neutral-300 py-10 md:container md:mx-auto md:max-w-screen-xl md:py-5"
    >
      <div className="flex items-center justify-between px-5 md:px-0">
        <div>
          <Link href="/">
            <Image
              src="/logo.svg"
              width={120}
              height={120}
              alt="logo"
              className="h-auto w-32"
            />
          </Link>
        </div>
        <div
          className={`${
            open
              ? "absolute top-24 flex w-[90%] flex-col items-center gap-y-10 rounded-2xl bg-neutral-800 pb-5 pt-6 text-white"
              : "hidden md:flex md:gap-x-10"
          }`}
        >
          <Link
            className={`${
              open
                ? "cursor-pointer text-sm text-white hover:text-neutral-500"
                : "cursor-pointer text-sm text-neutral-800 hover:text-neutral-500"
            }`}
            href="#"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            className={`${
              open
                ? "cursor-pointer text-sm text-white hover:text-neutral-500"
                : "cursor-pointer text-sm text-neutral-800 hover:text-neutral-500"
            }`}
            href="#products"
            onClick={() => setOpen(false)}
          >
            Products
          </Link>
          <Link
            className={`${
              open
                ? "cursor-pointer text-sm text-white hover:text-neutral-500"
                : "cursor-pointer text-sm text-neutral-800 hover:text-neutral-500"
            }`}
            href="#contactus"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </Link>
          <div className="flex md:hidden">
            <button className="rounded-full bg-orange-500 px-5 py-2 text-sm font-light text-white shadow-xl hover:text-neutral-500">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex items-center md:gap-x-10">
          <div className="relative">
            <MdShoppingBag className="h-5 w-5 fill-neutral-800" />
            <span className="absolute -right-2 -top-2 rounded-full bg-orange-500 px-[5px] py-[1px] text-xs font-semibold text-white">
              1
            </span>
          </div>
          <div
            className={`${
              open &&
              "fixed right-0 top-0 -z-[1] h-screen w-screen bg-gray-500 bg-opacity-25 backdrop-blur-sm md:hidden"
            }`}
          ></div>
          <div className="hidden md:flex">
            <button className="rounded-full bg-neutral-800 px-5 py-2 text-sm font-light text-white shadow-xl hover:text-neutral-500">
              Subscribe
            </button>
          </div>
          <div>
            <button
              onClick={() => setOpen(!open)}
              className="ml-16 rounded-full bg-neutral-800 p-2 text-neutral-300 md:ml-0 md:hidden"
            >
              {open ? <MdOutlineClose /> : <MdMenu />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
