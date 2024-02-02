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
          title="Combo Mensal - R$ 29,90"
          description="HBO Max(R$ 34,90) + DisneyPlus + Star+ (R$ 55,90) + Prime Vídeo (R$14,90)"
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

