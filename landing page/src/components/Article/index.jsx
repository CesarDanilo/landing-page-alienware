import React from "react"

const Article = () => {
    return (
        <div className="flex justify-between items-center mt-28">
            <div className="title-product max-w-md">
                <h2 className="text-3xl font-bold mb-4">Uma obra-prima do design</h2>
                <p className="text-lg">
                    O novo design Legend 2.0 é uma evolução natural da beleza geométrica icônica e das linhas estruturais
                    de Alienware. O novo design exibe toques na cor escura, acabamento acetinado resistente a manchas* e
                    iluminação AlienFX que permite que você personalize as cores de acordo com seu estilo.
                </p>
            </div>

            <div className="flex justify-center items-start ml-28">
                <img
                    src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/franchise/alienware/laptop/awm15-r7-xnb-04-bk-amd-franchise-mod1.png?fmt=png-alpha&wid=1440&hei=1440"
                    alt="dell"
                    className="object-contain h-[500px] w-auto"
                />
            </div>
        </div>
    )
}

export default Article;
