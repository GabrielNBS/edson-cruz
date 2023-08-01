// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../styles/components/HeaderContainer.sass"

const HeaderContainer = () => {
    const navbar = [
        { name: "Sobre" },
        { name: "Serviços" },
        { name: "Depoimentos" },
        { name: "Contato" }
    ]

    return (
        <header className="header">
            <div className="container">
                <h1 className='header__branding'>
                    Edson Cruz
                </h1>
                <nav className='header__nav'>
                    <ul className='header__list'>
                        {navbar.map(nav => (
                            <li key={nav.name} className='header__list__item'>
                                <a className='header__list__link' href={`#${nav.nome}`}>{nav.name}</a>
                                </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default HeaderContainer