import React from 'react'
import styled from 'styled-components'
import logo from './../images/logo.png'
import NavBarContainer from './NavBarContainer';
import { Link } from 'react-router-dom'
// import  NavBarContainer  from './NavBarContainer'




const Header = props  => {

  const MainHeader = styled.header`
    position: sticky;
    top: 0px;
    z-index: 2;
    /* overflow-y: hidden; */
    height: 10vh;
    width: 100%;
    background-color: #23242C;
    align-items: center;
    display: flex;
    padding: 0 20px;
    animation: descend 1s ease-in-out ;
    .link{
      max-width:50%;
    }
    .logo{
      max-width: 100%;
      height: auto;
      overflow-y:hidden;
    }
    @keyframes descend {
      from{transform: translateY(-10vh) }
      to{transform: translateY(0vh)}
    }
    .scroll {
      position: fixed;
      top: 0;
      left: 0;
    }
    @media only screen and (min-width: 768px) {
      overflow-y: hidden;
    }
  `

  return (
    <MainHeader>
      <Link to='/' className='link' >
        <img className='logo' src={ logo } alt="PCMASTERRACE" />
      </Link>

      <NavBarContainer />
    </MainHeader>
)}

export default Header 