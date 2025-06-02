import React from "react";
import LogoGithub from "../../assets/img/icons/github-logo.png";
import LogoLinkedin from "../../assets/img/icons/linkedin-logo.png";

const Footer = () => {
    return (
        <div className="block-comentarios grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-gray-100 dark:bg-black mt-32 transition-colors duration-300">
            <div className="comentario bg-white dark:bg-black p-4 rounded-lg shadow-md transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Fernando</h3>
                <h4 className="text-lg font-medium mb-2 text-gray-700 dark:text-white">Top Demais</h4>
                <p className="text-gray-800 dark:text-white">Excelente máquina. Superou minhas expectativas.</p>
            </div>

            <div className="comentario bg-white dark:bg-black p-4 rounded-lg shadow-md transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Gabriel</h3>
                <h4 className="text-lg font-medium mb-2 text-gray-700 dark:text-white">Ótimo notebook</h4>
                <p className="text-gray-800 dark:text-white">Atende todas as expectativas</p>
            </div>

            <div className="comentario bg-white dark:bg-black p-4 rounded-lg shadow-md transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Deocleciano</h3>
                <h4 className="text-lg font-medium mb-2 text-gray-700 dark:text-white">O melhor!</h4>
                <p className="text-gray-800 dark:text-white">Entrega o que promete. Ótimo desempenho.</p>
            </div>

            <div className="comentario bg-white dark:bg-black p-4 rounded-lg shadow-md transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Heitor</h3>
                <h4 className="text-lg font-medium mb-2 text-gray-700 dark:text-white">Excelente máquina! diferenciada!</h4>
                <p className="text-gray-800 dark:text-white">É simplesmente o melhor laptop da categoria.</p>
            </div>

            <div className="md:col-span-2 lg:col-span-4 items-center justify-center">
                <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Created by</h2>
                <div className="comentario flex items-center bg-white dark:bg-black p-4 rounded-lg shadow-md transition-colors duration-300">
                    <img src={LogoGithub} alt="LogoGithub" className="h-[25px] mr-3" />
                    <p>
                        <a
                            href="https://github.com/CesarDanilo/landing-page-alienware"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black dark:text-white hover:underline"
                        >
                            github/CesarDanilo
                        </a>
                    </p>
                    <img src={LogoLinkedin} alt="LogoLinkedin" className="h-[25px] mr-3 ml-10" />
                    <p>
                        <a
                            href="https://www.linkedin.com/in/césar-danilo-396408153"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black dark:text-white hover:underline"
                        >
                            CesarDanilo
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
