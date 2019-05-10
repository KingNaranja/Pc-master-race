import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
// icons 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithubAlt, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGamepad, faDesktop, faLaptop, faLaptopCode, faEnvelope, faKey, faUserEdit, faUserCircle, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header'
import Home from './components/Home.js'

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
      <Router>
        <AbsoluteWrapper className="App">
          <Header user={user} toggleSideNav={this.toggleSideNav} ></Header>

          <Main>
            {/* Routes */}
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </Main>

        </AbsoluteWrapper>
      </Router>
    )
  }
}

export default App;
