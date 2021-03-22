import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from '../app/Navbar'

import { PostsList } from '../components/orders/OrderHistory'
import { OrderDetails } from '../components/orders/OrderDetails'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
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
          {/* <Route exact path="/editPost/:postId" component={EditPostForm} /> */}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>

    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
