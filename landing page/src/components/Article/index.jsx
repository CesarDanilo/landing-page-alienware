import React from "react";

const Article = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center mt-28 space-y-8 md:space-y-0">
            <div className="title-product max-w-md text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">Uma obra-prima do design</h2>
                <p className="text-lg">
                    O novo design Legend 2.0 é uma evolução natural da beleza geométrica icônica e das linhas estruturais
                    de Alienware. O novo design exibe toques na cor escura, acabamento acetinado resistente a manchas* e
                    iluminação AlienFX que permite que você personalize as cores de acordo com seu estilo.
                </p>
            </div>

            <div className="flex justify-center items-center">
                <img
                    src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/franchise/alienware/laptop/awm15-r7-xnb-04-bk-amd-franchise-mod1.png?fmt=png-alpha&wid=1440&hei=1440"
                    alt="dell"
                    className="object-contain h-[300px] md:h-[400px] lg:h-[500px] w-auto transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
            </div>
        </div>
    );
}

export default Article;
