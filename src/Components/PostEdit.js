import React from 'react';
import '../App.css';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { config } from '../firebaseConfig';
import firebase from 'firebase';
import LoginAuth from './LoginAuth';
import Navigation from './Navigation';

class PostEdit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Title: this.props.location.state.Title,
      Description: this.props.location.state.Description,
      Status: this.props.location.state.Status
    }
    this.PostID = this.props.location.state.PostID;
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    this.db = firebase.app().database().ref().child('/Posts/' + this.PostID);
  }

  handleTitleChange(event) {
    this.setState({ Title: event.target.value });
  }

  handleDescChange(event) {
    this.setState({ Description: event.target.value });
  }

  handleStatusChange(event) {
    this.setState({ Status: event.target.checked });
  }

  /*componentWillMount() {
    this.db.on('child_changed', function (snap) {
      alert("Post Updated");
    })
  }*/

  handleSubmit(event) {

    event.preventDefault();
    this.db.set({
      Title: this.state.Title,
      Description: this.state.Description,
      Status: this.state.Status
    }, () => {
      alert('Post Updated');
      this.props.history.push('/');
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <Row>
            <Col lg="9" md={{ size: 9, offset: 1 }}>
              <LoginAuth />
              <h1>Edit Post</h1>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="Title">Title</Label>
                  <Input type="text" name="Title" id="Title" value={this.state.Title} onChange={this.handleTitleChange} placeholder="Enter Title" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Description</Label>
                  <Input type="textarea" name="Description" id="Description" value={this.state.Description} onChange={this.handleDescChange} placeholder="Enter Description" />
                </FormGroup>
                <FormGroup>
                  <Label for="Status">Status</Label>
                  <Input type="checkbox" style={{ marginLeft: '10px' }} checked={this.state.Status} onClick={this.handleStatusChange} name="Status" id="Status" />
                </FormGroup>
                <div style={{ flexDirection: 'row-reverse', display: 'flex' }}>
                  <Button>Update</Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PostEdit;
