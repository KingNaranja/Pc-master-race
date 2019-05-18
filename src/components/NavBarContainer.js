import React, { useState } from 'react'
import SideNav from './SideNav'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


const NavBarContainer = props  => {
  
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
  // menuVisible is a local state 
  // that controls the visibility of the SideNav component.
  const [ menuVisible, setMenuVisible] = useState()
  const toggleSideNav = () => setMenuVisible(!menuVisible)


  return (
    <Nav>
      <a href="https://github.com/KingNaranja/pc-master-race">
        <FontAwesomeIcon size='2x' className='icon' icon={[ 'fab', 'github' ]} />
      </a>
      <Link to='/favorites'>
        <FontAwesomeIcon size='2x' className='icon' icon='heart' />
      </Link>
      <FontAwesomeIcon size='2x' className='icon' icon='bars' onClick={toggleSideNav}/>
      {
        menuVisible && <SideNav toggleNav={toggleSideNav} />
      }
    </Nav>
  )
  
}

export default NavBarContainer
