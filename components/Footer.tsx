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
      <div className="grid grid-cols-1 rounded-t-3xl bg-lime-950 py-20 md:container md:mx-auto md:max-w-screen-xl md:grid-cols-3">
        <div className="flex flex-col items-center md:gap-y-5">
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
        <div className="flex justify-center">
          <ul className="text-white">
            <li>5007 Braun Pike</li>
            <li>Cambridgeshire</li>
            <li>Belgium</li>
            <li>725-450-8814 x814</li>
          </ul>
        </div>
        <div className="flex justify-center gap-x-5">
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
