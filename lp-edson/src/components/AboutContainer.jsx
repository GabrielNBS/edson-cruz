// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../styles/components/AboutContainer.sass"
import { FaRegHandPointLeft } from "react-icons/fa";

import Background from "../img/curveLine.svg"
import Arrow from "../img/arrow.svg"
import Hero from "../img/background2.jpg"


function AboutContainer() {
    return (
        <section className='about'
            style={{ backgroundImage: `url(${Background})` }}>
            <div>
                <img className="arrow--svg" src={Arrow} alt="" />
            </div>
            <div className="container">
                <div className="about__image">
                    <img src={Hero} alt="" />
                </div>
                <div className="about__description">
                    <h3>
                        Descubra seu potencial e alcance a excelência com o acompanhamento personalizado de um profissional.
                    </h3>
                    <button className="about__join">
                        <span className='about__join__call'>COMECE HOJE</span> <FaRegHandPointLeft />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AboutContainer