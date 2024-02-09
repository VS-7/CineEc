import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  projectLink: string;
}

const ProjectCardDuplo = ({ src, title, description, projectLink }: Props) => {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Primeiro Card */}
      <div className="flex-1 relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
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

          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            COMPRAR
          </a>
        </div>
      </div>

      {/* Segundo Card */}
      <SecondProjectCard />
    </div>
  );
};

const SecondProjectCard = () => {
  // Dados de exemplo para o segundo projeto
  const project2 = {
    src: "prime.png",
    title: "R$ 6,90",
    description: "Tenha acesso a plataforma(R$ 14,90)",
    projectLink: "https://cine-economico.pay.yampi.com.br/r/Q1GU3TD5JN",
  };

  return (
    <div className="flex-1 relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={project2.src}
        alt={project2.title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{project2.title}</h1>
        <p className="mt-2 text-gray-300">{project2.description}</p>

        <a
          href={project2.projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          COMPRAR
        </a>
      </div>
    </div>
  );
};

export default ProjectCardDuplo;
