import React, { Component } from 'react';
import '../App.css';
import { Media, Container, Col, Row, Input } from 'reactstrap';
import mediaProfile from '../mediaProfile.svg';
import Edit from '../Edit.svg';
import Delete from '../Delete.svg';
import PostPagination from './PostPagination';
import { config } from '../firebaseConfig';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { baseUrl } from './Utility';


class PostsMedia extends Component {

  constructor(props) {
    super(props);
    this.state = {
      PostIDs: [],
      Posts: {},
      Search: '',
      PageNo: 1
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    //this.app = firebase.initializeApp(config);
    this.db = firebase.app().database().ref().child('Posts');
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillMount() {

    this.db.on('value', function (snap) {
      this.setState({
        Posts: snap.val(),
        PostIDs: Object.keys(snap.val())
      });
      //this.state.Posts = snap.val();
      //this.state.PostIDs.push(Object.keys(snap.val()));
    }.bind(this))
  }

  handleSearch(event) {
    let value = event.target.value;
    this.setState({
      Search: event.target.value
    });

    /*if (value)
      this.PostIDs.map((PostID) => {
        let PostData = this.state.Posts[PostID];
        if(PostData.Title.indexOf(value) > -1)

      })*/
  }

  render() {
    return (
      <div>
        <Navigation />
        {(JSON.parse((localStorage["isLogged"] ? localStorage["isLogged"] : 'false')) ?
          <div onClick={() => { this.props.history.push(baseUrl + '/Post/Add') }} style={{
            width: '55px',
            height: '55px',
            background: '#00af66',
            position: 'fixed',
            zIndex: '9999',
            bottom: '10%',
            right: '10%',
            borderTopLeftRadius: '35px',
            borderTopRightRadius: '35px',
            borderBottomLeftRadius: '35px',
            borderBottomRightRadius: '35px',
            cursor: 'pointer',
            fontSize: '32px',
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#fff',
          }}>+</div> : null)}
        <Container>
          <Row>
            <Col lg="9" md={{ size: 9, offset: 1 }}>
              <h1>Posts</h1>
            </Col>
          </Row>
          <Row>
            <Col lg="3" md={{ size: 3, offset: 7 }}>
              <Input type="text" name="Title" id="Title" value={this.state.Search} onChange={this.handleSearch} placeholder="Search..." />
            </Col>
          </Row>
          <Row>
            <Col lg="9" md={{ size: 9, offset: 1 }}>
              {
                this.state.PostIDs.map((PostID) => {
                  var PostData = this.state.Posts[PostID];
                  if (JSON.parse((localStorage["isLogged"] ? localStorage["isLogged"] : 'false')) || PostData.Status)
                    if (PostData.Title.indexOf(this.state.Search) > -1 || !PostData.Title)
                      return <PostsDiv PostID={PostID} key={PostID} Status={PostData.Status} Title={PostData.Title} Description={PostData.Description} />
                })
              }
              <PostPagination />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

class PostsDiv extends Component {

  constructor(props) {
    super(props);
    this.removePost = this.removePost.bind(this);
  }

  removePost() {

    if (window.confirm('are you sure you want to delete this post?')) {
      firebase.app().database().ref().child('Posts/' + this.props.PostID).remove();
    }
  }

  render() {

    let Title = this.props.Title;
    let Description = this.props.Description;
    let PostID = this.props.PostID;
    let Status = this.props.Status;

    return (
      <div>
        <Media className="Post">
          <Media left>
            <Media object src={mediaProfile} className="Post-Profile-img" alt="placeholder image" />
          </Media>
          <Media body>
            <Link to={{ pathname: `Post/${PostID}`, state: { Title: Title, Description: Description, PostID: PostID } }} >
              <Media style={{ float: 'left' }} heading href="#">{Title}
              </Media>
            </Link>

            {
              (
                JSON.parse((localStorage["isLogged"] ? localStorage["isLogged"] : 'false')) ?
                  <span style={{ float: 'right' }}>
                    <Link to={{ pathname: `Post/${PostID}/Edit`, state: { Title: Title, Description: Description, PostID: PostID, Status: Status } }} ><img title="Edit" src={Edit} onClick={this.editPost} alt="Edit" className="Post-Edit" /></Link>
                    <img title="Delete" src={Delete} alt="Delete" onClick={this.removePost} className="Post-Delete" />
                  </span> :
                  null
              )
            }

            <div style={{ clear: 'both' }}></div>
            <div>{(Description.length > 100 ? Description.substring(0, 100) + '...' : Description)}</div>
          </Media>
        </Media>
        <hr />
      </div >
    );
  }
}

export default PostsMedia;
