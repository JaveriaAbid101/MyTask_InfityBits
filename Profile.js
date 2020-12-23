import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/profilelg.png'

const Container = styled.div`
    margin-top: 5rem;
    display:inherit;
    
`

const ProfileImg = styled.img`
    height: 5rem;
`
const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    padding:20px;
    
`

const Profile = () => {


    return (


        <Container>


            <ProfileImg src={Image} john />
            <ProfileName>John Doe</ProfileName>


        </Container>
    )
}

export default Profile
