import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { menuData } from '../Data/MenuData';
import { Button } from './Button';
import { Link } from 'react-router-dom';


function DropDown({ toggle, isOpen }) {
    return (
        <DropDownContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon className='close' onClick={toggle} />
            </Icon>
            <DropDownWrapper>
                <DropDownMenu>
                    {menuData.map((item, index) => (
                        <DropDownLink to={item.link} key={index}>
                            {item.title}
                        </DropDownLink>
                    ))}
                </DropDownMenu>
                <BtnWrapper>
                    <Button className='btn' primary='true' round='true' to='/content' >
                        Content
                    </Button>
                </BtnWrapper>
            </DropDownWrapper>
        </DropDownContainer>
    )
}

const DropDownContainer = styled.div`
    position:fixed;
    z-index:999;
    width: 100%;
    height:100%;
    background-color : #cd853f;
    display:grid;
    align-items: center;
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    left: 0;
    transition : .3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    
`

const Icon = styled.div`
    position: absolute;
    top : 1.5rem;
    right: 1.5rem ;
    .close{
        font-size:2rem;
        cursor: pointer;
        transition:transform .2s ease-in-out;
        &:hover{
            transform : scale(1.2)
        }
    }
`


const DropDownWrapper = styled.div``
const DropDownMenu = styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows: repeat(4 ,80px);
    text-align:center;
    @media screen and (max-width: 480px){
        grid-template-rows: repeat(4 ,70px);
    }

`
const DropDownLink = styled(Link)`
    color:#fff;
    text-decoration:none;
    font-weight:400;
    font-size:2rem;
    position: relative;
    transition: all .3s ease-in-out;
    &:hover{
        color:#000d1a;
        transform:translateY(-2px)
    }
    &::after{
        content: '';
        position: absolute;
        bottom:29px;
        width:0px;
        border-radius:2rem;
        left:50%;
        transform:translateX(-50%);
        height:3px;
        background-color:#000d1a;
        transition: all .3s ease-in-out;
    }
    &:hover::after{
        width:60px;
    }

`
const BtnWrapper = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    .btn{
        width:300px;
    }
`

export default DropDown
