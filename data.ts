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
  longDesc: string;
  price: number;
  img: string;
  type: string;
  id: number;
};
export const products: ProductsProps[] = [
  {
    name: "mocca",
    type: "Robusta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum enim sunt.",
    longDesc:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, sometimes by accident, sometimes on purpose (injected humour and the like).",
    price: 8.99,
    img: "/coffee-pac1.png",
    id: 1,
  },
  {
    name: "frappe",
    type: "Arábica",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum enim sunt.",
    longDesc:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, sometimes by accident, sometimes on purpose (injected humour and the like).",
    price: 6.99,
    img: "/coffee-pac1.png",
    id: 2,
  },
  {
    name: "expresso",
    type: "Robusta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum enim sunt.",
    longDesc:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, sometimes by accident, sometimes on purpose (injected humour and the like).",
    price: 7.99,
    img: "/coffee-pac1.png",
    id: 3,
  },
  {
    name: "ristretto",
    type: "Arábica",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum enim sunt.",
    longDesc:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, sometimes by accident, sometimes on purpose (injected humour and the like).",
    price: 9.99,
    img: "/coffee-pac1.png",
    id: 4,
  },
];
