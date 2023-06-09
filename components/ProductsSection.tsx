import Image from "next/image";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { ProductsProps } from "@/data";
import { products } from "@/data";
import { racing_sans_one } from "@/data";
import Link from "next/link";
type Props = {};

const ProductsSection = (props: Props) => {
  return (
    <section
      id="products"
      className="py-20 md:container md:mx-auto md:max-w-screen-xl"
    >
      <h2
        className={`${racing_sans_one.className} mb-24 text-center text-3xl font-bold text-neutral-800`}
      >
        Our Products
      </h2>
      <div className="mx-2 grid grid-cols-1 rounded-3xl bg-neutral-800 shadow-xl md:mx-0 md:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative flex flex-col pb-20 md:py-10 "
          >
            <div className="divide-y divide-dotted divide-neutral-600 md:divide-x md:divide-y-0">
              <div className="">
                <Image
                  src={product.img}
                  width={120}
                  height={120}
                  alt="prod-img"
                  className="absolute right-1/2 top-0 -translate-y-1/2 translate-x-1/2 rounded-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col gap-y-3 px-10 pb-10 pt-20 md:pb-10 md:pt-10">
                <h3 className="text-center capitalize text-lg font-semibold text-neutral-300 md:text-left">
                  {product.name}
                </h3>
                <p className="text-center text-sm font-light text-neutral-300 md:text-left">
                  {product.desc}
                </p>
                <span className="block text-center text-lg font-bold text-neutral-300 md:text-left">
                  ${product.price}
                </span>
                <div className="flex self-center md:self-start">
                  <button className="rounded-full bg-orange-500 px-5 py-2 text-xs text-white">
                    <Link href={`/${product.id}`}>
                      More Info
                      {/* <MdAddShoppingCart className="ml-2 inline-block" /> */}
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </section>
  );
};

export default ProductsSection;
