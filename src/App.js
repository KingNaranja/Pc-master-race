import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
// icons 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faGamepad, faDesktop, faLaptop, faLaptopCode, faEnvelope, faKey, faUserEdit, faUserCircle, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header'
import Home from './pages/Home.js'

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
      width: 100%;
      /* padding: 1vw; */
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
          <Header></Header>

          <Main>
            {/* Routes */}
            <Switch>
              <Route  exact path="/" component={Home} />
            </Switch>
          </Main>

        </AbsoluteWrapper>
      </Router>
    )
  }
}

export default App;
