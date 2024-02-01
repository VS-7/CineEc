import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  price: string;
  description: string;
  platforms: string[];
  subscribeLink: string;
}

const ProductCard = ({ src, title, price, description, platforms, subscribeLink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">Valor: R$ {price}</p>
        
        <div className="mt-2 text-gray-300">
          <p>Plataformas Inclusas:</p>
          <ul>
            {platforms.map((platform, index) => (
              <li key={index}>{platform}</li>
            ))}
          </ul>
        </div>

        <p className="mt-2 text-gray-300">{description}</p>

        {/* Alterando o botão para "Assinar" */}
        <a href={subscribeLink} target="_blank" rel="noopener noreferrer">
          <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
            Assinar
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
