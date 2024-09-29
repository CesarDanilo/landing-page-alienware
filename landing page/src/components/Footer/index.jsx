import React from "react";

const Footer = () => {
    return (
        <div className="block-comentarios grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-gray-100 mt-32">
            <div className="comentario bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Fernando</h3>
                <h4 className="text-lg font-medium mb-2">Top Demais</h4>
                <p>Excelente máquina. Superou minhas expectativas.</p>
            </div>

            <div className="comentario bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Gabriel</h3>
                <h4 className="text-lg font-medium mb-2">Ótimo notebook</h4>
                <p>Atende todas as expectativas</p>
            </div>

            <div className="comentario bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Deocleciano</h3>
                <h4 className="text-lg font-medium mb-2">O melhor!</h4>
                <p>Entrega o que promete. Ótimo desempenho.</p>
            </div>

            <div className="comentario bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Heitor</h3>
                <h4 className="text-lg font-medium mb-2">Excelente máquina! diferenciada!</h4>
                <p>É simplesmente o melhor laptop da categoria.</p>
            </div>
        </div>
    );
}

export default Footer;
