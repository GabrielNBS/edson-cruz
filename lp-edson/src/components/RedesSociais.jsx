// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";


function RedesSociais() {
    const social = [
        { nome: "instagram", url: "https://www.instagram.com/edsoncruz.personal/", icon: <FaFacebook /> },
        { nome: "facebook", url: "https://www.facebook.com/edsoncruz.personal", icon: <FaInstagram /> },
        { nome: "whatsapp", url: "https://www.instagram.com/edsoncruz.personal/", icon: <FaWhatsapp /> }
    ]

    return (
        <ul className='about__social'>
            {social.map(sociallinks => (
                <li className='about__social__item' key={sociallinks.nome}>
                    <a className={`icon__${sociallinks.nome}`} target='__blank' href={sociallinks.url}>{sociallinks.icon}</a>
                </li>
            ))}
        </ul>
    )
}

export default RedesSociais