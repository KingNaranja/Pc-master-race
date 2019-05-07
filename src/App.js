import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
// icons 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGamepad, faDesktop, faLaptop, faLaptopCode, faEnvelope, faKey, faUserEdit } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

    // build a fontawesome icon library
    library.add(
      fab, faGamepad,
      faDesktop, 
      faLaptop, 
      faLaptopCode, 
      faEnvelope, 
      faKey, 
      faUserEdit 
    )

    return (
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    )
  }
}

export default App;
