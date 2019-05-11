import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SideNav = props => {

  const Menu = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #23242C;
    /* transition: transform .3s cubic-bezier(0, .52, 0, 1); */
    overflow: scroll;
    z-index: 1000;
    animation: slide-left 300ms cubic-bezier(.36,.08,.49,.99) ;
    .menu-links {
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top: 10vh;
      a {
        color: white;
        text-decoration: none;
      }
      a:hover {
        color: gold;
      }
    }
    @keyframes slide-left {
      from{ transform: translate3d(100vw, 0, 0) }
      to{ transform: translate3d(0vw, 0, 0) }
    }
    @keyframes slide-right {
      from{ transform: translate3d(0vw, 0, 0) }
      to{ transform: translate3d(100vw, 0, 0) }
    }
    @media screen and (min-width:768px) {
      font-size: calc(24px + .5vw);
      transition: transform 500ms;
      transition-property: font-size;
      transition-timing-function: ease-in-out;
    }
    
  ` 

  return (
    <Menu >
      <nav className="menu-links">
        <Link to='/' onClick={props.toggleNav}>
          <h2>Home</h2>
        </Link>
        <Link to='/pcgaming' onClick={props.toggleNav}>
          <h2>PC Gaming</h2>
        </Link>
        <Link to='/buildapc' onClick={props.toggleNav}>
          <h2>Build a PC</h2>
        </Link>
        <Link to='/buildapc-sales' onClick={props.toggleNav}>
          <h2>PC Sales</h2>
        </Link>
        <a 
          href="https://teespring.com/stores/officialpcmr"  
          rel="noopener noreferrer" 
          target='_blank'
          >Store
        </a>
      </nav>
    </Menu>
  )
}

export default SideNav
