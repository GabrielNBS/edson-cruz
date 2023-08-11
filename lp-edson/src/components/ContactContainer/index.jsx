// eslint-disable-next-line no-unused-vars
import React from 'react'
import RedesSociais from '../RedesSociais'

import "./ContactContainer.sass"
import BackgroundFooter from "../../img/footer.svg"

function ContactContainer() {
    const form = [
        { id: "nome", type: "text", placeholder: "Nome Completo:" },
        { id: "telefone", type: "number", placeholder: "Celular:" }
    ]

    return (
        <section className="contact" style={{ backgroundImage: `url(${BackgroundFooter})` }}>
            <h2>Contato</h2>
            <div className="container">
                <form className="contact__form">
                    {form.map((input, index) => (
                        <div className="contact__form__container" key={index}>
                            <input className='contact__form__control' type={input.type} id={input.id} required/>
                            <label className='contact__form__label' htmlFor={input.id}> {input.placeholder} </label>
                        </div>
                    ))}
                    <textarea className="contact__form__textarea"></textarea>
                    <button type='submit' className='contact__form__button'>Enviar</button>
                </form>
            <div className="contact__social">
                <h3>Me encontre em minhas redes sociais</h3>
                <RedesSociais />
            </div>
            </div>
        </section>
    )
}

export default ContactContainer