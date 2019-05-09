import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
// icons 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGamepad, faDesktop, faLaptop, faLaptopCode, faEnvelope, faKey, faUserEdit, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header'

class App extends Component {
  constructor(){
    super()
    this.state = {
      user: null
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
      faBars 
    )

    return (
      <AbsoluteWrapper className="App">
        <Header user={user}></Header>


        
      </AbsoluteWrapper>
    )
  }
}

export default App;
