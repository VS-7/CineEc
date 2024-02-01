import React from "react";
import ProductCard from "../sub/ProductCard"; // Renomeando para ProductCard

const Products = () => {
  const handleBuyClick = () => {
    // Lógica para lidar com o clique no botão de compra
    console.log("Botão Comprar clicado!");
    // Adicione aqui a lógica de compra ou navegação para a página de compra
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-20" id="products">
      <h1 className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        <center>Ao assinar agora, você terá acesso garantido a:</center>
      </h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 px-4 md:px-10">
        <ProductCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          onClick={handleBuyClick} // Passando a função de clique
        />
        <ProductCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          onClick={handleBuyClick} // Passando a função de clique
        />
        <ProductCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          onClick={handleBuyClick} // Passando a função de clique
        />
      </div>
    </div>
  );
};

export default Products;
