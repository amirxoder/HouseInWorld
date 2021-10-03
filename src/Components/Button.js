import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
    background-color: ${({ primary }) => (primary ? '#000d1a' : '#cd8f3f')};
    white-space:nowrap;
    outline: none;
    border:none;
    border-radius:${({ round }) => (round && '5px')};
    text-decoration:none;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:all .3s;
    max-width:200px;
    padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
    color: ${({ primary }) => (primary ? '#ffffff' : '#000d1a')};
    font-size:${({ big }) => (big ? '20px' : '14px')};
    text-align:center;
    &:hover{
        transform:translateY(-2px);
    }
`