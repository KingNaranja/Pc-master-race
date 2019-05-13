import React, { useState } from 'react'
import SideNav from './SideNav'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavBarContainer = props  => {
  // menuVisible is a local state 
  // that controls the visibility of the SideNav component.
  const [ menuVisible, setMenuVisible] = useState()
  const toggleSideNav = () => setMenuVisible(!menuVisible)
  
  const Nav = styled.nav`
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    padding: 0 1em;
    .icon:hover {
    height: calc(100% + 50px);
    color: gold;
    }
    svg {
      color: #FFFFFF;
    }
  `

  return (
    <Nav>
      <a href="https://github.com/KingNaranja/pc-master-race">
        <FontAwesomeIcon size='2x' className='icon' icon={[ 'fab', 'github' ]} />
      </a>
      <FontAwesomeIcon size='2x' className='icon' icon='user-circle' />
      <FontAwesomeIcon size='2x' className='icon' icon='bars' onClick={toggleSideNav}/>
      {
        menuVisible && <SideNav toggleNav={toggleSideNav} />
      }
    </Nav>
  )
  
}

export default NavBarContainer
