import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Container, Row, Col, Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      loggedin: false
    }
    this.handlePasswordfield = this.handlePasswordfield.bind(this);
    this.handleUserfield = this.handleUserfield.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleUserfield(event) {
    this.setState({
      userName: event.target.value
    });
  }

  handlePasswordfield(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();

    if(this.state.userName == 'admin' && this.state.password == 'admin'){
      localStorage["isLogged"] = true;
      this.setState({
        loggedin: true
      });
    }
    else{
      alert('Invalid ID/Password');
    }

  }

  render() {
    return (
      <div>
        {(this.state.loggedin ? <Redirect to="/" /> : null)}
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React CMS</h1>
          </header>
        </div>
        <br />
        <Container className="LoginJumbo">
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Jumbotron>
                <h1 style={{ textAlign: 'center' }}>Login</h1>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="UserNmae">User Name</Label>
                    <Input type="text" name="userName" value={this.state.userName} onChange={this.handleUserfield} id="userName" placeholder="Enter User Name" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" value={this.state.password} onChange={this.handlePasswordfield} id="examplePassword" placeholder="Password" />
                  </FormGroup>
                  <Button color="success">Login</Button>
                </Form>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
