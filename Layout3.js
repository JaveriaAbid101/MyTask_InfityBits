
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    padding: 1rem;
    align-items: center;
    margin-bottom: 1rem;
    left: 358px;  
    background-color: white;
    font-size: 13px;
    letter-spacing: 0.8px;
    
`
const Img = styled.img`
// top: 18px;
// left: 1718px;
// width: 30px;
// height: 15px;
// opacity: 1;
// margin: auto 800px;
`


const Layout3 = () => {
    return (


        <Container>
            <div>
                <div class="row">

                    <div class="column"
                        style={{
                            display: "table-cell", padding: "0px 30px", border: "1px solid #F8F9FA",
                            boxShadow: "0px 0px 10px #00000026", borderRadius: "5px", transform: "translate(50px)"
                        }}>
                        <Img src={require('../../assets/images/round1.png')} />
                    </div>


                    <div class="column" style={{
                        display: "table-cell", padding: "0px 30px", border: "1px solid #F8F9FA",
                        boxShadow: "0px 0px 10px #00000026", borderRadius: "5px", transform: "translate(80px)"
                    }}>
                        <Img src={require('../../assets/images/round2.png')} />
                    </div>



                </div>

            </div>
        </Container>

    )
}

export default Layout3