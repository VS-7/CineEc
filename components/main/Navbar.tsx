import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[20px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logoNAV.png"
            alt="logo"
            width={80}
            height={80}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Cinema Econômico
          </span>
        </a>

        <div className="w-[350px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              Inicio
            </a>
            <a href="#projects" className="cursor-pointer">
              Planos
            </a>
          </div>
        </div>

               <div className="flex flex-row gap-5 items-center"> {/* Adicione 'items-center' aqui */}
        {Socials.map((social) => (
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            key={social.name}
            className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center" // Adicione 'flex items-center justify-center' aqui
          >
            <Image
              src={social.src}
              alt={social.name}
              layout="fill"
              objectFit="contain"
            />
          </a>
        ))}
      </div>

      </div>
    </div>
  );
};

export default Navbar;
