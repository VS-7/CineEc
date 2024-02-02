import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  projectLink: string; // Adicionando a propriedade do link do projeto
}

const ProjectCard = ({ src, title, description, projectLink }: Props) => {
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

        {/* Botão para acessar o projeto */}
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Economize 70% AGORA 
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
