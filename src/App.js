import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
// icons 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle, faBars, faTimes, faHeart, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header'
import Home from './pages/Home.js'
import { StateProvider } from './context/GlobalState'

const App = props => {
  
  const initialState = {
    posts: [],
    favorites: []
  }

  const AbsoluteWrapper = styled.div`
    position: absolute;
    
  `
  // extend style from AbsoluteWrapper
  const Main = styled(AbsoluteWrapper)`
    margin-right: auto;
    margin-left:  auto;
    width: 100%;
  `

  // build a fontawesome icon library
  library.add(
    fab,
    faUserCircle,
    faBars,
    faGithubAlt,
    faTimes,
    faHeart, 
    faSpinner
  )
  // Main reducer runs everytime dispatch() is called   
  const reducer = ( state, action ) => {
    switch (action.type) {
      case 'addPosts':
       return {
         ...state,
         posts: action.payload
       }
      case 'addFav':
        return {
          ...state, 
          favorites: [ ...state.favorites, action.payload ]
        }
      case 'removeFav':
        return {
          ...state,
          favorites: action.payload
        }
      default: // invalid action
       return state
    }
  }

  return (
    <Router>
      <StateProvider initialState={ initialState } reducer={ reducer }>
        <AbsoluteWrapper className="App">
          <Header></Header>

          <Main>
            {/* Routes */}
            <Switch>
              <Route  exact path="/" component={Home} />
            </Switch>
          </Main>
        </AbsoluteWrapper>
      </StateProvider>
    </Router>
  )
  
}

export default App;
