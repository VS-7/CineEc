"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import ProjectCardDuplo from "../sub/ProjectCardDuplo";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-20" id="projects">
      <h1 className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        <center>Ao assinar agora, você terá acesso garantido a:</center>
      </h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 px-4 md:px-10">
         <ProjectCardDuplo
          src="/hbo.png"
          title="HBO Max - R$ 7,90"
          description="Tenha acesso a plataforma HBO Max(R$ 34,90)"
          projectLink="https://cine-economico.pay.yampi.com.br/r/K57J4VZNK1" // Substitua com o link real para o primeiro projeto
        />
        <ProjectCard
          src="/Combo.png"
          title="Combo Plus Mensal - R$ 29,90"
          description="Tenha acesso as plataformas HBO Max(R$ 34,90)  | DisneyPlus + Star+ (R$ 55,90)  | Prime Vídeo (R$14,90) "
          projectLink="https://cine-economico.pay.yampi.com.br/r/K57J4VZNK1" // Substitua com o link real para o primeiro projeto
        />
        <ProjectCard
          src="/Combo.png"
          title="Combo Compartilhado Mensal - R$ 16,90"
          description="Tenha acesso as plataformas HBO Max(R$ 34,90)  | DisneyPlus + Star+ (R$ 55,90)  | Prime Vídeo (R$14,90) "
          projectLink="https://cine-economico.pay.yampi.com.br/r/N0X5W6776M" // Substitua com o link real para o primeiro projeto
        />
        <ProjectCard
          src="/Canvapro.png"
          title="Canva Pro - R$ 6,90"
          description="Tenha acesso ao Canva Pro (R$ 34,90)"
          projectLink="https://cine-economico.pay.yampi.com.br/r/NFMAFMUYMD" // Substitua com o link real para o terceiro projeto
        />
        <ProjectCard
          src="/whatsapp.png"
          title="Monte seu plano via Whatsapp Comigo"
          description="Compre o acesso das plataformas de stream separadamente comigo, clique no botão abaixo."
          projectLink="https://api.whatsapp.com/send?phone=5533999123315&text=Quero%20montar%20meu%20plano!" // Substitua com o link real para o terceiro projeto
        />
      </div>
    </div>
  );
};

export default Projects;
