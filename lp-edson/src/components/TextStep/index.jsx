// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./TextStep.sass"
import HeroOverlay from "../../img/background3.jpg"
import { useEffect, useState } from 'react';


function TextStep() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Adicionar um event listener para atualizar o tamanho da tela quando a janela é redimensionada
        window.addEventListener('resize', handleResize);

        // Remover o event listener ao desmontar o componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <section className='step'
            style={{ backgroundImage: `url(${HeroOverlay})` }}>
            <div className="container">
            {windowWidth < 768 ? (
                <h2 className="step__text">
                    impulsione seus <span>resultados</span>.
                </h2>
            ) : (
                <h2 className="step__text">
                    Descubra a excelência no treinamento com um profissional dedicado a <span>impulsionar seus resultados</span>.
                </h2>
            )}
            </div>
        </section>
    )
}

export default TextStep