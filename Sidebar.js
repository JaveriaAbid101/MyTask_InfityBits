import React from 'react'
import styled from 'styled-components'
import Menu from './Menu/Menu'
import Profile from './Profile'

const Container = styled.div`
    background-color: #192D3E;
    position: absolute;
    left: 0;
    top: 0;
    width: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    

`

const Sidebar = () => {

    return (
        <Container>
            <Profile />
            <Menu />
           
        </Container>
    )
}

export default Sidebar
