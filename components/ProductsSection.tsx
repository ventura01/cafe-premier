import Image from "next/image";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { ProductsProps } from "@/data";
import { products } from "@/data";
type Props = {};

const ProductsSection = (props: Props) => {
  return (
    <section
      id="products"
      className="py-20 md:container md:mx-auto md:max-w-screen-xl"
    >
      <h2 className="mb-24 text-center text-3xl font-bold text-neutral-800">
        Our Products
      </h2>
      <div className="grid grid-cols-1 mx-2 md:mx-0 rounded-3xl bg-neutral-800 shadow-xl md:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="relative flex flex-col md:py-10 pb-20 ">
            <div className="divide-dotted divide-neutral-600 md:divide-x divide-y md:divide-y-0">
              <div className="">
                <Image
                  src={product.img}
                  width={120}
                  height={120}
                  alt="prod-img"
                  className="absolute right-1/2 top-0 -translate-y-1/2 translate-x-1/2 rounded-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col gap-y-3 px-10 md:pb-10 md:pt-10 pb-10 pt-20">
                <h3 className="text-lg font-semibold text-center md:text-left text-neutral-300">
                  {product.name}
                </h3>
                <p className="text-sm font-light text-center md:text-left text-neutral-300">
                  {product.desc}
                </p>
                <span className="block text-lg text-center md:text-left font-bold text-neutral-300">
                  ${product.price}
                </span>
                <div className="flex self-center md:self-start">
                  <button className="rounded-full bg-orange-500 px-5 py-2 text-xs text-white">
                    Add to Cart
                    <MdAddShoppingCart className="ml-2 inline-block" />
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
