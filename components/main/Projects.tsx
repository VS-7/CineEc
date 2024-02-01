import React from "react";
import ProductCard from "../sub/ProductCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
        Ao inscrever-se agora, você terá acesso garantido a:
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-4 md:px-10">
        <ProductCard
          src="/NextWebsite.png"
          title="Plano Mensal"
          price="29,90"
          description="Você terá acesso a:"
          platforms={["HBO Max (R$34,90)", "Prime Video (R$14,90)", "Disney Plus e Star+ (R$ 55,90)"]}
          subscribeLink="https://seu-link-aqui.com" // Substitua pelo seu link real
        />
        {/* Adicione mais ProductCards conforme necessário */}
      </div>
    </div>
  );
};

export default Projects;
