import React from "react";

const NoteBookVideo = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center mt-32 space-y-8 md:space-y-0">

            <div className="product-img flex justify-center items-center md:mr-16">
                <iframe
                    src="https://www.youtube.com/embed/YYFb7fEU36s"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-[300px] h-[169px] md:w-[500px] md:h-[315px] object-contain"
                ></iframe>
            </div>

            <div className="title-product max-w-md text-center md:text-left">
                <h4 className="text-3xl font-bold mb-4">Prepare-se para o jogo</h4>
                <p className="text-lg">
                    Jogue mais de 100 games para PC de alta qualidade com o novo PC Alienware e um mês de XBOX Game Pass
                    Ultimate, incluindo o game EA. Adicionamos novos games o tempo todo. Sempre tem alguma novidade. Para
                    games em nuvem com o XBOX Game Pass Ultimate, é obrigatório usar um controlador conectado.
                </p>
            </div>
        </div>
    );
};

export default NoteBookVideo;
