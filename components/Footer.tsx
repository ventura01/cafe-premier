import Image from "next/image";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaPinterestSquare,
} from "react-icons/fa";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer id="contact" className="">
      <div className="grid grid-cols-1 rounded-t-3xl bg-neutral-600 py-20 md:container md:mx-auto md:max-w-screen-xl md:grid-cols-3 mx-2 md:mt-0 mt-20">
        <div className="flex flex-col items-center md:row-start-1 md:row-end-2 md:gap-y-5 row-start-3 md:col-start-1 md:col-end-2 row-end-4">
          <Image
            src="/logo-w.svg"
            width={120}
            height={120}
            alt="logo"
            className="h-auto w-44"
          />

          <p className="text-xs font-light text-white">
            All Rights Reserved &copy; 2023.
          </p>
        </div>
        <div className="flex justify-center row-start-1 row-end-2 md:col-start-2 md:col-end-3 mb-12 md:mb-0">
          <ul className="text-white">
            <li className="font-semibold text-lg">Company Info</li>
            <li>5007 Braun Pike</li>
            <li>Cambridgeshire</li>
            <li>Belgium</li>
            <li>725-450-8814 x814</li>
          </ul>
        </div>
        <div className="flex justify-center gap-x-5 row-start-2 row-end-3 mb-12 md:mb-0 md:row-start-1 md:row-end-2">
          <FaFacebookSquare className="h-6 w-6 cursor-pointer fill-white hover:fill-orange-500" />
          <FaInstagram className="h-6 w-6 cursor-pointer fill-white hover:fill-orange-500" />
          <FaTwitterSquare className="h-6 w-6 cursor-pointer fill-white hover:fill-orange-500" />
          <FaPinterestSquare className="h-6 w-6 cursor-pointer fill-white hover:fill-orange-500" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
