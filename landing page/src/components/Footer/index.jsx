import React from "react";
import LogoGithub from "../../assets/img/icons/github-logo.png";
import LogoLinkedin from "../../assets/img/icons/linkedin-logo.png";

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

            <div className="md:col-span-2 lg:col-span-4 items-center justify-center">
                <h2 className="text-xl font-bold mb-4">Created by</h2>
                <div className="comentario flex items-center bg-white p-4 rounded-lg shadow-md">
                    <img src={LogoGithub} alt="LogoGithub" className="h-[25px] mr-3" />
                    <p><a href="https://github.com/CesarDanilo/landing-page-alienware" target="_blank" className="text-back">github/CesarDanilo</a></p>
                    <img src={LogoLinkedin} alt="LogoGithub" className="h-[25px] mr-3 ml-10" />
                    <p><a href="https://www.linkedin.com/in/césar-danilo-396408153" target="_blank" className="text-back">CesarDanilo</a></p>
                </div>

            </div>
        </div>
    );
}

export default Footer;
