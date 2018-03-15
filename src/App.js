import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Components/Login';
import PostsMedia from './Components/PostsMedia';
import PostDetail from './Components/PostDetail';
import PostAdd from './Components/PostAdd';
import PostEdit from './Components/PostEdit';
import Navigation from './Components/Navigation';
import { baseUrl } from './Utility';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path={baseUrl + "/"} component={PostsMedia} />
            <Route exact path={baseUrl + "/Post/Add"} component={PostAdd} />
            <Route exact path={baseUrl + "/Login"} component={Login} />
            <Route exact path={baseUrl + "/Post/:PostID"} component={PostDetail} />
            <Route exact path={baseUrl + "/Post/:PostID/Edit"} component={PostEdit} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
