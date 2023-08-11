// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import "./RedesSociais.sass"


function RedesSociais() {
    const social = [
        { nome: "instagram", url: "https://www.instagram.com/edsoncruz.personal/", icon:  <FaInstagram style={{fontSize: "3rem"}} /> },
        { nome: "facebook", url: "https://www.facebook.com/edsoncruz.personal", icon:<FaFacebook style={{fontSize: "3rem"}}/> },
        { nome: "whatsapp", url: "https://www.instagram.com/edsoncruz.personal/", icon: <FaWhatsapp style={{fontSize: "3rem"}}/> }
    ]

    return (
        <ul className='social'>
            {social.map(sociallinks => (
                <li className='social__item' key={sociallinks.nome}>
                    <a className={`icon__${sociallinks.nome}`} target='__blank' href={sociallinks.url}>{sociallinks.icon}</a>
                </li>
            ))}
        </ul>
    )
}

export default RedesSociais