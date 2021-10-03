import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import MenuIcon from '@mui/icons-material/Menu';
import { menuData } from '../Data/MenuData';
import { Button } from './Button';


function Navbar({ toggle }) {
    return (
        <NavStyled>
            <Logo to='/'>ELIXR</Logo>
            <MenuIcon className='menu' onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLink to={item.link} key={index}>
                        {item.title}
                    </NavMenuLink>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' >Contact Us</Button>
            </NavBtn>
        </NavStyled>
    )
}

const NavLink = css`
    cursor: pointer;
    text-decoration:none;
    margin: 0 1rem;
    color:#fff;

`

const NavStyled = styled.div`
    position: absolute;
    top: 0 ;
    left: 0;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    /* background-color:#000; */
    padding:1rem 2rem;  
    z-index:100;
    height:60px;
    .menu{
        color:#fff;
        display:none;
        @media screen and (max-width: 768px){
            display:block;
            cursor: pointer;
        }
        
    }
`

const Logo = styled(Link)`
    font-style:italic;
    ${NavLink};
`



const NavMenu = styled.div`
    display:flex;
    align-items:center;
    @media screen and (max-width: 768px){
        display:none;
    }
`

const NavMenuLink = styled(Link)`
    ${NavLink}
`

const NavBtn = styled.div`
    @media screen and (max-width: 768px){
        display:none;
    }
`


export default Navbar
