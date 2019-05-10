import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
// icons 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithubAlt, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGamepad, faDesktop, faLaptop, faLaptopCode, faEnvelope, faKey, faUserEdit, faUserCircle, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header'


class App extends Component {
  constructor(){
    super()
    this.state = {
      user: null,
      menuVisible: false
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  getUser = () => this.state.user

  render(){
    const { user } = this.state

    const AbsoluteWrapper = styled.div`
      position: absolute;
      
    `
    // extend style from AbsoluteWrapper
    const Main = styled(AbsoluteWrapper)`
      margin-right: auto;
      margin-left:  auto;
      max-width: 960px;
      padding: 1em;
    `

    // build a fontawesome icon library
    library.add(
      fab, faGamepad,
      faDesktop, 
      faLaptop, 
      faLaptopCode, 
      faEnvelope, 
      faKey, 
      faUserEdit,
      faUserCircle,
      faBars,
      faGithubAlt,
      faTimes 
    )

    return (
      <AbsoluteWrapper className="App">
        <Header user={user} toggleSideNav={this.toggleSideNav} ></Header>
        
        <Main>
          <p className="test">Attack on Titan Season 3 is better than Game of Thrones Season 8; Change my mind.</p>
        </Main>

      </AbsoluteWrapper>
    )
  }
}

export default App;
