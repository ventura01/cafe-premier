import { Racing_Sans_One } from "next/font/google";
import { Inter } from "next/font/google";
import { type } from "os";

export const racing_sans_one = Racing_Sans_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const inter = Inter({ subsets: ["latin"] });

export type ProductsProps = {
  name: string;
  desc: string;
  price: number;
  img: string;
  type: string;
  id: number;
};
export const products: ProductsProps[] = [
  {
    name: "Mocca",
    type: "Robusta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum enim sunt.",
    price: 8.99,
    img: "/coffee-pac1.png",
    id: 1,
  },
  {
    name: "Frappé",
    type: "Arábica",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum enim sunt.",
    price: 6.99,
    img: "/coffee-pac1.png",
    id: 2,
  },
  {
    name: "Expresso",
    type: "Robusta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum enim sunt.",
    price: 7.99,
    img: "/coffee-pac1.png",
    id: 3,
  },
  {
    name: "Ristretto",
    type: "Arábica",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum enim sunt.",
    price: 9.99,
    img: "/coffee-pac1.png",
    id: 4,
  },
];
