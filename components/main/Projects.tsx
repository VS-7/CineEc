import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        <center>Ao inscrever-se agora, você terá acesso garantido a:</center>
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-4 md:px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Plano Mensal R$ 29,90"
          description="Você terá acesso a: HBO Max(R$34,90) + Prime Video(R$14,90) + Disney Plus e Star+(R$ 55,90)"
          link="https://seu-link-aqui.com" // Substitua pelo seu link real
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Projects;
