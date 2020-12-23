
import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/profilelg.png'

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1rem;
    left: 358px;  
    background-color: white;
    font-size: 13px;
    letter-spacing: 0.8px;

`
const ProfileImg = styled.img`
    height: 5rem;
    
`
const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    padding:20px;
    
`


const Text2 = () => {
    return (


        <Container>
            <div>


            <div style={{display:"flex"}}>
                <ProfileImg src={Image} john/>
            <ProfileName>Alizeu Dias</ProfileName>
            
            </div>

                <h3>Important Notice: Scheduled Maintenance of SMS</h3>
                <p>Dear Users,</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                    ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                    quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                    arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                    Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                    dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                    viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                    Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                 </p>
            </div>
        </Container>

    )
}

export default Text2