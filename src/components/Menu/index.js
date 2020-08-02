import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css'
// import ButtonLink from '../components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Adeflix Show !"/>
            </a>

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
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;