import React from "react";
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import App from "../containers/LandingPage";
import Main from "../containers/Main";
import Login from "../containers/LoginPage";

class RouteComp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
          <div>
            <Switch>
            <Route exact path='/login' component={Login} /> 
              <Route exact path='/main' component={Main} />
              <Route exact path='/' component={App} /> 
              <Route render={() => <div history={ this.props.history }> Route Not Found </div>}/>
            </Switch>
          </div>          
    )
  }
}

export default withRouter(RouteComp);