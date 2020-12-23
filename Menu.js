import React from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'
import home from '../../../assets/images/home.png'
import profile from '../../../assets/images/Group1220.png'
import chat from '../../../assets/images/message-square.png'
import calendar from '../../../assets/images/Group1198.png'
import notice from '../../../assets/images/writing.png'
import clas from '../../../assets/images/Group1214.png'
import live from '../../../assets/images/video-camera.png'
import attendance from '../../../assets/images/Group1214.png'
import assesments from '../../../assets/images/Group1212.png'
import assignments from '../../../assets/images/Group1215.png'
import results from '../../../assets/images/Group2323.png'
import course from '../../../assets/images/Group1215.png'
import leture from '../../../assets/images/Group2323.png'
import fee from '../../../assets/images/Group1215.png'
import schlor from '../../../assets/images/Group2358.png'
import faq from '../../../assets/images/Group1215.png'

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
    height:2020px;

`

const Menu = () => {
    return (
        <Container>
            <MenuLink title="Dashboard" iconPath={home} />
            <MenuLink title="Profile" iconPath={profile} />
            <MenuLink title="Chat" iconPath={chat} />
            <MenuLink title="Calender" iconPath={calendar} />
            <MenuLink title="Notice Board" iconPath={notice}  />
            <MenuLink title="Class Routine" iconPath={clas}  />
            <MenuLink title="Live Class" iconPath={live}  />
            <MenuLink title="Attendance" iconPath={attendance}  />
            <MenuLink title="Assesments" iconPath={assesments}  />
            <MenuLink title="Assignments" iconPath={assignments}  />
            <MenuLink title="Results" iconPath={results} />
            <MenuLink title="Course" iconPath={course}  />
            <MenuLink title="Lectures" iconPath={leture}  />
            <MenuLink title="Fee Collection" iconPath={fee}  />
            <MenuLink title="Scholarship" iconPath={schlor}  />
            <MenuLink title="Results" iconPath={results}  />
            <MenuLink title="Faq" iconPath={faq}  />
            
  </Container>
    )
}

export default Menu
