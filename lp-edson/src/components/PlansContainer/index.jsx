// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

import "./PlansContainer.sass"

function PlansContainer() {
    const planos = [
        { title: "BÁSICO", subtitulo: "lorem amns hsnendh smsbehdb", serviços: ["serviço 1", "serviço 1", "serviço 1"], valor: 70 },
        { title: "BÁSICO", subtitulo: "lorem amns hsnendh smsbehdb", serviços: ["serviço 1", "serviço 1", "serviço 1"], valor: 70 },
        { title: "BÁSICO", subtitulo: "lorem amns hsnendh smsbehdb", serviços: ["serviço 1", "serviço 1", "serviço 1"], valor: 70 }
    ]

    return (
        <section className="plans">
            <h2 className="plans__title">
                Planos
            </h2>
            <div className="container">
                <div className="plans__cards">
                    {planos.map((plano, index) => (
                        <div key={index} className="plans__card">
                            <div className="plans__card__title">
                                { plano.title }
                                <sub>
                                { plano.subtitulo }
                                </sub>
                            </div>
                            <div className="plans__card__price">
                                <span>R$</span>{ plano.valor }
                            </div>
                            <ul className="plans__card__benefits">
                                {plano.serviços.map((serviço, serviçoIndex) => (
                                    <li key={ serviçoIndex } className="plans__card__benefits__contain">
                                        <i><FaCheckCircle style={{fontSize: "1rem"}}/></i>{serviço}
                                </li>
                                ))}
                            </ul>
                            <button className="plans__card__call">
                                Contrate agora
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PlansContainer