import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'

import { PostsList } from './components/orders/OrderHistory'
import { OrderDetails } from './components/orders/OrderDetails'
import { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <Provider store={store} /> 
    
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={OrderDetails} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
    </Fragment>
  )
}

export default App
