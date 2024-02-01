import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  onClick: () => void; // Adicionando propriedade de clique do botão
}

const ProductCard = ({ src, title, description, onClick }: Props) => {
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
        <p className="mt-2 text-gray-300">{description}</p>
        
        {/* Adicionando botão */}
        <button
          className="mt-4 bg-[#2A0E61] text-white py-2 px-4 rounded-md hover:bg-[#1D0749] focus:outline-none focus:ring focus:border-[#1D0749]"
          onClick={onClick}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
