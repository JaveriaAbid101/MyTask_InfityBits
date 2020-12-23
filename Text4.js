import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
   
`


const Text4 = () => {
    return (


        <Container>
            <div style={{ padding: "15px 0px" }}>
                <button style={{
                    background: "#A1A1A1 0% 0% no-repeat padding-box",
                    height: "35px", color: "white", width: "150px", borderRadius: "12px",
                    boxShadow: "0px 0px 10px #00000026"
                }}>Teacher Panel</button>

                <button style={{
                    background: "#707071 0% 0% no-repeat padding-box",
                    height: "35px", color: "white", margin: "0px 20px", width: "150px", borderRadius: "12px",
                    boxShadow: "0px 0px 10px #00000026"
                }}>School Panel</button>
            </div>
        </Container>

    )
}

export default Text4