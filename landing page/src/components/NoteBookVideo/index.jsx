import React from "react";

const NoteBookVideo = () => {
    return (
        <div className="flex justify-between items-start mt-32">

            <div className="product-img flex justify-center items-start mr-32">
                <iframe
                    src="https://www.youtube.com/embed/YYFb7fEU36s"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-[500px] h-[315px] object-contain"
                ></iframe>
            </div>

            <div className="title-product max-w-md">
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
