import React from 'react'
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom'
import Characters from '~Screens/Characters'
import Episodes from '~Screens/Episodes'
import Home from '~Screens/Home'
import Locations from '~Screens/Locations'
import routes from './routes'

const Router = () => {
  return (
    <Switch>
      <Route exact path={routes.baseUrl} component={Home} />
      <Route exact path={routes.characters} component={Characters} />
      <Route exact path={routes.episodes} component={Episodes} />
      <Route exact path={routes.locations} component={Locations} />
      <Route path='*'>
        <Redirect to={routes.baseUrl} />
      </Route>
    </Switch>
  )
}

export default Router
