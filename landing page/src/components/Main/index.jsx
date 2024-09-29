import React from "react";
import alienwareLaptop from '../../assets/img/aw-laptop-m15.avif';

const Main = () => {
    return (
        <div class="block">
            <div class="title-product">
                <div>
                    <h1>Dell Alienware M15 R5</h1>
                    <p>Experimente jogos de alto desempenho com designs icônicos e notebooks projetados com inteligência.
                    </p>
                    <h4>Apartir de R$ 14.599,00</h4>
                    <button class="btn-comprar">Comprar Alienware</button>
                </div>
            </div>
            <div class="product-img">
                <img src={alienwareLaptop} alt="aw-laptop-m15" />
            </div>
        </div>
    )
}

export default Main;