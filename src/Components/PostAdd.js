import React from 'react';
import '../App.css';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { config } from '../firebaseConfig';
import firebase from 'firebase';
import LoginAuth from './LoginAuth';
import Navigation from './Navigation';


class PostAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = { Title: '', Description: '', Status: true };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        //this.app = firebase.initializeApp(config);
        this.db = firebase.app().database().ref().child('Posts');
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
        this.db.on('child_added', function (snap) {
            alert("Post Added");
        })
    }*/

    handleSubmit(event) {

        event.preventDefault();
        this.db.push().set({
            Title: this.state.Title,
            Description: this.state.Description,
            Status: this.state.Status
        }, ()=> {
            alert('Post Added');
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
                            <h1>Create Post</h1>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="Title">Title</Label>
                                    <Input type="text" value={this.state.Title} onChange={this.handleTitleChange} name="Title" id="Title" placeholder="Enter Title" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Description">Description</Label>
                                    <Input type="textarea" value={this.state.Description} onChange={this.handleDescChange} name="Description" id="Description" placeholder="Enter Description" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Status">Status</Label>
                                    <Input type="checkbox" style={{marginLeft: '10px'}} checked={this.state.Status} onClick={this.handleStatusChange} name="Status" id="Status" />
                                </FormGroup>
                                <div style={{ flexDirection: 'row-reverse', display: 'flex' }}>
                                    <Button>Create</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default PostAdd;
