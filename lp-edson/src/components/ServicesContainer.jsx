// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../styles/components/ServicesContainer.sass"

import { FaCalendarAlt, FaFileSignature} from 'react-icons/fa'


function Services() {
        const modalidades = [
        {title: "Treino Especializado", description: "lorem ipsum dolor, sit amet consectetur adipisicing elit", icon: <FaCalendarAlt className='icon--default '/> },
        {title: "Monitoramento de saúde", description: "lorem ipsum dolor, sit amet consectetur adipisicing elit", icon: <FaFileSignature className='icon--default'/>},
        {title: "Preparação para competições", description: "lorem ipsum dolor, sit amet consectetur adipisicing elit", icon: <FaFileSignature className='icon--default'/>}
    ]

    return (
        <section className="services">
            <div className="container">
                <h2 className='services__title'>
                    Avance em seu treino com um personal <span>experiente</span>
                </h2>
                <div className="services__cards">
                {
                    modalidades.map(services => (
                        <div key={services.title} className="services__card">
                            <div className="services__card__icon">
                                <i>{services.icon}</i>
                            </div>
                            <h3 className='services__card__title'>
                                {services.title}
                            </h3>
                            <p className='services__card__description'>
                                {services.description}
                            </p>
                        </div>
                    ))
                }
                </div>
            </div>
        </section>
    )
}

export default Services