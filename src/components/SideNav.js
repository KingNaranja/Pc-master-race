import React from 'react'
// import { Route } from 'react-router-dom'
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

    @keyframes slide-left {
      from{ transform: translate3d(100vw, 0, 0) }
      to{ transform: translate3d(0vw, 0, 0) }
    }
  `


  
  return (
    <Menu >
      <p>This is working</p>
    </Menu>
  )
}

export default SideNav
