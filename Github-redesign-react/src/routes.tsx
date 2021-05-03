import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login } from './pages/login'
import { Home } from './pages/home'
import { Repositories } from './pages/repositories'
import { Rest } from './pages/rest'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/repositories" exact component={Repositories} />
        <Route component={Rest} />
      </Switch>
    </BrowserRouter>
  )
}