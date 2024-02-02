"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-20" id="projects">
      <h1 className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        <center>Ao assinar agora, você terá acesso garantido a:</center>
      </h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 px-4 md:px-10">
        <ProjectCard
          src="/Combo.png"
          title="Combo Plus Mensal - R$ 29,90"
          description="Tenha acesso as plataformas HBO Max(R$ 34,90)  | DisneyPlus + Star+ (R$ 55,90)  | Prime Vídeo (R$14,90) "
          projectLink="/google.com" // Substitua com o link real para o primeiro projeto
        />
        <ProjectCard
          src="/Combo.png"
          title="Combo Compartilhado Mensal - R$ 16,90"
          description="Tenha acesso as plataformas HBO Max(R$ 34,90)  | DisneyPlus + Star+ (R$ 55,90)  | Prime Vídeo (R$14,90) "
          projectLink="https://cine-economico.pay.yampi.com.br/r/K57J4VZNK1" // Substitua com o link real para o primeiro projeto
        />
        <ProjectCard
          src="/Canvapro.png"
          title="Canva Pro - R$ 6,90"
          description="Tenha acesso ao Canva Pro (R$ 34,90)"
          projectLink="/link-para-o-seu-projeto3" // Substitua com o link real para o terceiro projeto
        />
        <ProjectCard
          src="/chatgpt.png"
          title="ChatGPT Plus - R$ 34,90"
          description="Tenha acesso ao ChatGPT 4.0 (R$ 100,00)."
          projectLink="/google.com" // Substitua com o link real para o segundo projeto
        />
        <ProjectCard
          src="/whatsapp.png"
          title="Monte seu plano via Whatsapp Comigo"
          description="Compre o acesso das plataformas de stream separadamente comigo, clique no botão abaixo."
          projectLink="/link-para-o-seu-projeto3" // Substitua com o link real para o terceiro projeto
        />
      </div>
    </div>
  );
};

export default Projects;
