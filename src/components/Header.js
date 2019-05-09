import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from './../images/logo.png'
  

const MainHeader = styled.header`
  position: relative;
  /* padding-top: 1vh; */
  /* top: -16px; */
  height: 10vh;
  width: 100%;
  background-color: #23242C;
  align-items: center;
  display: flex;
  padding: 0 20px;
  /* animation-name: descend;
  animation-duration: 2s; */
  animation: descend 1s ease-in-out ;
  
  
  nav {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    padding: 0 1em;
    .icon:hover {
    height: calc(100% + 50px);
    color: gold;
    }
  }
  svg {
    color: white;
  }
  .logo{
    width: 50%;
    height: auto;
  }

  @keyframes descend {
    from{transform: translateY(-10vh) }
    to{transform: translateY(0vh)}
  }
  
`

const Header = user  => (
  <MainHeader>
    <img className='logo' src={ logo } alt="PCMASTERRACE" />

    <nav>
      <a href="https://github.com/KingNaranja">
        <FontAwesomeIcon size='2x' className='icon' icon={[ 'fab', 'github' ]} />
      </a>
      <FontAwesomeIcon size='2x' className='icon' icon='user-circle' />
      <FontAwesomeIcon size='2x' className='icon' icon='bars' />
    </nav>
  </MainHeader>
)

export default Header 