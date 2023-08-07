// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../styles/components/TextStep.sass"
import HeroOverlay from "../img/background3.jpg"

function TextStep() {
    return (
        <section className='step'
        style={{backgroundImage: `url(${HeroOverlay})`}}>
            <div className="container">
                <h2 className="step__text">
                    Descubra a excelência no treinamento com um profissional dedicado a <span>impulsionar seus resultados</span>.
                </h2>
            </div>
        </section>
    )
}

export default TextStep