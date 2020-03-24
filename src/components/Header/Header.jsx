import React from 'react';
import styled from 'styled-components';
import logo from '../../img/logo-opacity.png';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    background: #F2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0.5px 0.5px 7.5px #323232;
    position: fixed;
    z-index: 99999;
`

const HeaderLogo = styled.img`
    padding-top: 7px;
    padding-left: 20px;
    height: 100px;
`

const HeaderTitle = styled.p`
    font-family: 'Baloo Chettan 2', cursive;
    font-size: 20px;
    color: #463928;
    font-weight: 700;
    padding-right: 45px; 
`

const Header = () => {
    return (
        <HeaderContainer>
            <NavLink to={'/'}>
                <HeaderLogo src={logo} alt="Insomnia" /> 
            </NavLink>

            <HeaderTitle>
                Real toDo and searcher for Filനs
            </HeaderTitle>
        </HeaderContainer>
    )
}

export default Header;