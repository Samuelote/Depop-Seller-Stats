import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import FooterWarning from '../components/FooterWarning'
import ShipStationAd from '../components/ShipStationAd'
import Header from './Header'
import About from './About'
import MainApp from '../../mainApp'

const Core = () => {
  const initialState = { data: {}, warning: null }
  const [state, setState] = useState(initialState)
  const [adShown, showAd] = useState(true)
  const updateState = (newState) => setState({ ...state, ...newState })
  return (
    <Router>
      <Header />
      {
        adShown ? <ShipStationAd /> : null
      }
      <Switch>
        <Route path='/about'>
          <About />
        </Route>

        <Route path='/'>
          <MainApp state={state} setState={updateState} />
          {
            state.warning
              ? (<FooterWarning msg={state.warning} close={() => updateState({ warning: '' })} />)
              : null
          }
        </Route>
      </Switch>
    </Router>
  )
}

export default Core