import React from 'react'
import styled from 'styled-components'
import logo from './../images/logo.png'
import NavBarContainer from './NavBarContainer';
// import  NavBarContainer  from './NavBarContainer'


const MainHeader = styled.header`
  position: relative;
  height: 10vh;
  width: 100%;
  background-color: #23242C;
  align-items: center;
  display: flex;
  padding: 0 20px;
  /* animation-name: descend;
  animation-duration: 2s; */
  animation: descend 1s ease-in-out ;
  .logo{
    width: 50%;
    height: auto;
  }
  @keyframes descend {
    from{transform: translateY(-10vh) }
    to{transform: translateY(0vh)}
  }
  
`

const Header = props  => (
  <MainHeader>
    <img className='logo' src={ logo } alt="PCMASTERRACE" />
    
    <NavBarContainer/>
  </MainHeader>
)

export default Header 