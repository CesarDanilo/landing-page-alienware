import React from "react";
import alienwareLaptop from '../../assets/img/aw-laptop-m15.avif';

const Main = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-28 space-y-8 md:space-y-0">
            <div className="title-product max-w-md text-center md:text-left">
                <h1 className="text-3xl font-bold mb-4">Dell Alienware M15 R5</h1>
                <p className="text-lg mb-4">
                    Experimente jogos de alto desempenho com designs icônicos e notebooks projetados com inteligência.
                </p>
                <h4 className="text-xl font-semibold mb-6">A partir de R$ 14.599,00</h4>
                <button className="btn-comprar px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <a href="https://www.dell.com/en-us/shop/dell-laptops/alienware-m15-ryzen-edition-r5-gaming-laptop/spd/alienware-m15-r5-laptop" target="_blank">
                        Comprar Alienware
                    </a>
                </button>
            </div>

            <div className="flex justify-center items-center">
                <img
                    src={alienwareLaptop}
                    alt="aw-laptop-m15"
                    className="object-contain h-[300px] md:h-[400px] lg:h-[500px] w-full max-w-md transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
            </div>
        </div>
    );
}

export default Main;
