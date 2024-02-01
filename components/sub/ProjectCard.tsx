import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string; // Adicionando uma propriedade opcional para o link
}

const ProjectCard = ({ src, title, description, link }: Props) => {
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

        {/* Adicionando o botão com o link opcional */}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
              Ver Projeto
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
