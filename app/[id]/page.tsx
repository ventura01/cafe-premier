import React from "react";
import { products } from "@/data";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaPinterestSquare,
} from "react-icons/fa";
import { BsArrowLeft, BsFillStarFill } from "react-icons/bs";
import Link from "next/link";

type ProductPageProps = {
  params: { id: number };
};

const ProductPage = ({ params }: ProductPageProps) => {
  const { id } = params;
  const datos = products[`${id - 1}`];
  console.log(datos.name);
  return (
    <section
      id="product-page"
      className="grid grid-cols-1 md:container md:mx-auto md:max-w-screen-xl md:grid-cols-2"
    >
      <div>
        <Image
          src={datos.img}
          width={600}
          height={600}
          alt="prod-page-img"
          className="object-cover object-center"
        />
      </div>
      <div className="mx-3 flex flex-col gap-y-5 pb-20 pt-10 md:mx-0 md:pb-0 md:pt-0">
        <div className="flex">
          <span className="bg-orange-500 px-5 py-1 text-xs font-semibold uppercase text-white">
            {datos.type}
          </span>
        </div>
        <h1 className="text-2xl font-bold capitalize tracking-wide text-neutral-800">
          {datos.name}
        </h1>
        <div className="flex gap-x-1">
          <BsFillStarFill className="fill-yellow-500"/>
          <BsFillStarFill className="fill-yellow-500"/>
          <BsFillStarFill className="fill-yellow-500"/>
          <BsFillStarFill className="fill-yellow-500"/>
          <BsFillStarFill className="fill-yellow-500"/>
        </div>
        <p className="texsm text-neutral-500">{datos.longDesc}</p>
        <span className="text-3xl font-bold text-neutral-800">
          ${datos.price}
        </span>
        <div className="flex justify-start gap-x-3">
          <FaFacebookSquare className="h-6 w-6 cursor-pointer fill-neutral-800 hover:fill-orange-500" />
          <FaInstagram className="h-6 w-6 cursor-pointer fill-neutral-800 hover:fill-orange-500" />
          <FaTwitterSquare className="h-6 w-6 cursor-pointer fill-neutral-800 hover:fill-orange-500" />
          <FaPinterestSquare className="h-6 w-6 cursor-pointer fill-neutral-800 hover:fill-orange-500" />
        </div>
        <div className="md:-mx-5 -mx-4">
          <Link
            href="/#products"
            className="rounded-full px-4 py-1 text-xs hover:bg-orange-500 hover:text-white"
          >
            <BsArrowLeft className="mr-3 inline-block" />
            Back to Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
