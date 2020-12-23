
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


const Layout = () => {
  return (


    <Container>
      <div>
        <div class="row">

          <div class="column"
            style={{
              display: "table-cell", padding: "0px 30px", border: "1px solid #F8F9FA",
              boxShadow: "0px 0px 10px #00000026", borderRadius: "40px", transform: "translate(20px)"
            }}>

            <Img style={{ marginLeft: "-10px", marginTop: "10px" }} src={require('../../assets/images/Group2923.png')} />
            <p>60%</p>
            <p>Attendance Percentage</p>
            <Img src={require('../../assets/images/one.png')} />
          </div>


          <div class="column" style={{
            display: "table-cell", padding: "0px 30px", border: "1px solid #F8F9FA",
            boxShadow: "0px 0px 10px #00000026", borderRadius: "40px", transform: "translate(60px)"
          }}>
            <Img style={{ marginLeft: "-10px" }} src={require('../../assets/images/Group2922.png')} />
            <p>60%</p>
            <p>Number of Courses</p>
            <Img src={require('../../assets/images/two.png')} />
          </div>


          <div class="column" style={{
            display: "table-cell", padding: "0px 30px", border: "1px solid #F8F9FA",
            boxShadow: "0px 0px 10px #00000026", borderRadius: "40px", transform: "translate(90px)"
          }} >
            <Img style={{ marginLeft: "-10px" }} src={require('../../assets/images/Group2921.png')} />
            <p>80%</p>
            <p>Total marks percentage</p>
            <Img src={require('../../assets/images/three.png')} />
          </div>


        </div>

      </div>
    </Container>

  )
}

export default Layout