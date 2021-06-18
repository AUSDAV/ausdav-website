import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const dropdownMenu = styled.div
    `
background: red;
width: 200px;
position: absolute;
top: 80px;
list-style: none;
text-align: start;
`

export const dropdownMenuLi = styled.li
`
background: #1888ff;
cursor: pointer;

&:hover {
    background: #5cabff;
}
`

export const dropdownMenuLink = styled(LinkR)
`
display: block;
height: 100%;
width: 100%;
text-decoration: none;
color: #fff;
padding: 16px;
`