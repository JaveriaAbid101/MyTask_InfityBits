import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    padding:1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
    left: 358px;  
   box-shadow: 0px 4px 6px #0000000F;
    background: white;
`

const Img = styled.img`
top: 18px;
left: 1718px;
width: 30px;
height: 15px;
opacity: 1;
margin: auto 800px;
`


const Img1 = styled.img`
top: 18px;
left: 1718px;
width: 25px;
height: 33px;
opacity: 1;
margin: 0px 10px 5px;
`

const Img2 = styled.img`
top: 30px;
left: 1765px;
width: 21px;
height: 21px;
opacity: 1;
margin: 0px 5px;
`

const Img3 = styled.img`
top: 30px;
left: 1765px;
width: 21px;
height: 21px;
opacity: 1;
margin: 0px 15px;
`
const Img4 = styled.img`
top: 30px;
left: 1765px;
width: 21px;
height: 21px;
opacity: 1;
margin: 0px 10px;
`


const Nav = () => {
    return (
        <Container>
            <Img src={require('../../assets/images/Group2778.png')} />
            <Img1 src={require('../../assets/images/Group3137.png')} />
            <Img2 src={require('../../assets/images/message-square.png')} />
            <Img3 src={require('../../assets/images/mail.png')} />
            <Img4 src={require('../../assets/images/calendar.png')} />

        </Container>
    )
}

export default Nav