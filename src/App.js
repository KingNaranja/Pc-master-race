import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
// icons 
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle, faBars, faTimes, faHeart, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header'
import Home from './pages/Home.js'
import Favorites from './pages/Favorites'
import PcGaming from './pages/PcGaming'
import PcBuild from './pages/PcBuild'
import PcSales from './pages/Sales'
import { StateProvider } from './context/GlobalState'
import mainReducer from './context/reducers/mainReducer'

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

  return (
    <Router>
      <StateProvider initialState={ initialState } reducer={ mainReducer }>
        <AbsoluteWrapper className="App">
          <Header></Header>

          <Main>
            {/* Routes */}
            <Switch>
              <Route  exact path="/" component={Home} />
              <Route  exact path="/pcgaming" component={PcGaming} />
              <Route  exact path="/buildapc" component={PcBuild} />
              <Route  exact path="/buildapc-sales" component={PcSales} />
              <Route  path="/favorites" component={Favorites} />

            </Switch>
          </Main>
        </AbsoluteWrapper>
      </StateProvider>
    </Router>
  )
  
}

export default App;
