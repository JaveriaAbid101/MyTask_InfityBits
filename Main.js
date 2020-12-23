import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Layout from './Layout'
import Layout2 from './Layout2'
import Layout3 from './Layout3'
import Text1 from './Text1'
import Text2 from './Text2'
import Text3 from './Text3'
import Text4 from './Text4'


const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 2rem;
    background-color: #F8F9FA;
    height:100%;
    
    
`


const Main = () => {
    return (
        <Container>
            <Nav />
            <Layout/>
            <Layout2/>
            <Layout3/>
            <Text1/>
            <Text2/>
            <Text3/>
            <Text4/>

        </Container>
    )
}

export default Main
