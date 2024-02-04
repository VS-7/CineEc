import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  projectLink: string;
}

const ProjectCardDublo = ({ src, title, description, projectLink }: Props) => {
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
            ADQUIRIR AGORA
          </a>
        </div>
      </div>

      {/* Segundo Card */}
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
            ADQUIRIR AGORA
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardDuplo;
