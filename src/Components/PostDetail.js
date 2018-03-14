import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import date from '../date.svg';
import Navigation from './Navigation';

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <Row>
            <Col lg="9" md={{ size: 9, offset: 1 }}>
              <h1>{this.props.location.state.Title}</h1>
              <div><img src={date} alt="Date" className="Post-Date" /> 09/02/2017</div>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col lg="9" md={{ size: 9, offset: 1 }}>
              <p style={{ textAlign: 'justify' }}>
                {this.props.location.state.Description}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PostDetail;
