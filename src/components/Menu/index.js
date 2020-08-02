import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
// import ButtonLink from '../components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            {/* <a href="/">
                <img className="Logo" src={Logo} alt="Adeflix Show !"/>
            </a> */}

            {/* Trocar comportamento para SPA */}
            <Link to="/">
                <img className="Logo" src={Logo} alt="Adeflix Show !"/>
            </Link>

            {/* <a className="ButtonLink" href="/">
                Novo vídeo
            </a> */}
            {/* <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink> */}
            {/* <Button className="ButtonLink" href="/">
                Novo vídeo
            </Button> */}
            
            {/* O botão funcionar como tag a */}
            {/* <Button as="a" className="ButtonLink" href="/cadastro/video">
                Novo vídeo
            </Button> */}

            {/* Comportamento de SPA */}
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;