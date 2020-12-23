import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    
    width: 100%;
    padding-left: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;


`


const Span = styled.span`

    
    font-size: 1rem;
    margin-right: 1rem;
`

const Title = styled.h1`
    font-size: 0.9rem;
    font-weight: 300;
    color:  #AAA5A5;
    margin: auto 15px;
    padding:10px
`
const Image = styled.img`
   
`
const MenuLink = ({ title, active, iconPath }) => {

    return (
        <Container active={active}>
            <Image src={iconPath}></Image>
            {/* <Image active={active} className="iconify" data-inline="false" data-icon={`mdi-light:${icon}`}></Span> */}
            <Title active={active}>{title}</Title>
        </Container>
    )
}





export default MenuLink
