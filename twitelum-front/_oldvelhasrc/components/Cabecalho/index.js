// todo componente tem um arquivo js
// tem uma estrutura padrão
// tem um css
import React, { Component }  from 'react';
import './cabecalho.css';
import './navMenu.css';

class Cabecalho extends Component {
    render(){
        const usuario = this.props.usuario;
        return (
        <div className="Cabecalho">
            <header className="cabecalho">
                <div className="cabecalho__container container">
                    <h1 className="cabecalho__logo">
                        <a href="">Twitelum</a>
                    </h1>
                    <nav className="navMenu">
                        <ul className="navMenu__lista">
                            <li className="navMenu__item">
                                <a className="navMenu__link">
                                    Bem vindo(a): <br />
                                    <strong>@{ usuario }</strong>
                                </a>
                            </li>
                            <li className="navMenu__item">
                                <a className="navMenu__link" href="">Página Inicial</a>
                            </li>
                            <li className="navMenu__item">
                                <a className="navMenu__link">Hashtags</a>
                            </li>
                            <li className="navMenu__item">
                                <a className="navMenu__link">Logout</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
        )
    }
}

export default Cabecalho