import React, { useState } from 'react';
import "../styles/components/HeaderContainer.sass";

const HeaderContainer = () => {
    const navbar = [
        { name: "Sobre" },
        { name: "Serviços" },
        { name: "Depoimentos" },
        { name: "Contato" }
    ];

    // Estado local para controlar a exibição do menu de navegação
    const [showNav, setShowNav] = useState(false);
    // Estado local para controlar o estado inicial do menu de navegação
    const [initialNavState, setInitialNavState] = useState(false);
    // Estado local para alterar o style do botão toggler
    const [active, setActive] = useState(false)

    const handleToggleButton = () => (
        setActive((prevState) => !prevState)
    );

    // Função para alternar o estado showNav quando o botão for clicado
    const handleToggleNav = () => {
        setShowNav((prevState) => !prevState)
    };

    // Atualiza o estado inicial apenas uma vez quando o componente é montado
    if (!initialNavState) {
        setShowNav(false);
        setInitialNavState(true);
    }

    return (
        <header className="header">
            <div className="container">
                <h1 className='header__branding'>
                    Edson Cruz
                </h1>
                {/* Botão toggle para exibir/ocultar o menu de navegação */}
                <button className='header__mobile' onClick={() => (handleToggleNav(), handleToggleButton())}>
                    <div className={`header__mobile__icon ${active ? "active" : ""}`}/>
                </button>
                {/* Menu de navegação */}
                <nav className={`header__nav ${showNav ? 'show' : ''}`}>
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
    );
}

export default HeaderContainer;
