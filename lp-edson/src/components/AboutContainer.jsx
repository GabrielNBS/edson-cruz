// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../styles/components/AboutContainer.sass"
import { FaRegHandPointLeft } from "react-icons/fa";

import Background from "../img/curveLine.svg"
import Arrow from "../img/arrow.svg"


function AboutContainer() {
    return (
        <section className='about'
            style={{ backgroundImage: `url(${Background})` }}>
                <div className="arrow--svg">
                    <img src={Arrow} alt="" />
                </div>
            <div className="container">
                <div className="about__description">
                    <h3>
                    Descubra seu potencial e alcance a excelência com o acompanhamento personalizado de um profissional.
                    </h3>
                    <button className="about__join">
                    <span className='about__join__call'>COMECE HOJE</span> <FaRegHandPointLeft />
                    </button>
                </div>
                <div className="about__image">
                </div>
            </div>
        </section>
    )
}

export default AboutContainer