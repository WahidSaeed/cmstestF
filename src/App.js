import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Components/Login';
import PostsMedia from './Components/PostsMedia';
import PostDetail from './Components/PostDetail';
import PostAdd from './Components/PostAdd';
import PostEdit from './Components/PostEdit';
import Navigation from './Components/Navigation';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={PostsMedia} />
            <Route exact path="/Post/Add" component={PostAdd} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Post/:PostID" component={PostDetail} />
            <Route exact path="/Post/:PostID/Edit" component={PostEdit} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
