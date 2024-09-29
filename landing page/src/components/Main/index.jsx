import React from "react";
import alienwareLaptop from '../../assets/img/aw-laptop-m15.avif';

const Main = () => {
    return (
        <div className="flex justify-between items-start mb-28">
            <div className="title-product max-w-md">
                <h1 className="text-3xl font-bold mb-4">Dell Alienware M15 R5</h1>
                <p className="text-lg mb-4">
                    Experimente jogos de alto desempenho com designs icônicos e notebooks projetados com inteligência.
                </p>
                <h4 className="text-xl font-semibold mb-6">A partir de R$ 14.599,00</h4>
                <button className="btn-comprar px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Comprar Alienware
                </button>
            </div>

            <div className="flex justify-center items-start">
                <img src={alienwareLaptop} alt="aw-laptop-m15" className="object-contain h-[700px] w-auto" />
            </div>
        </div>
    )
}

export default Main;