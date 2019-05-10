import React, { Component } from 'react'
import SideNav from './SideNav'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export class NavBarContainer extends Component {
  constructor(){
    super()
    this.state = {
      menuVisible : false,
      animation: ''
    }
  }
  
  toggleSideNav = () => {
    this.setState({ menuVisible: !this.state.menuVisible })
    this.state.menuVisible ?
      this.setState({ animation : 'slide-right'}) :
      this.setState({ animation : 'slide-left'})
  }
  render() {

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
    const { menuVisible } = this.state

    return (
      <Nav>
        <a href="https://github.com/KingNaranja">
          <FontAwesomeIcon size='2x' className='icon' icon={[ 'fab', 'github' ]} />
        </a>
        <FontAwesomeIcon size='2x' className='icon' icon='user-circle' />
        <FontAwesomeIcon size='2x' className='icon' icon='bars' onClick={this.toggleSideNav}/>
        {
          menuVisible && <SideNav toggleNav={this.toggleSideNav} />
        }
      </Nav>
    )
  }
}

export default NavBarContainer
