import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

import logo from './logo.svg';
import './App.css';

import Info from './info';
import Photo from './photo';
import Education from './education';
import Experience from './experience';



class App extends Component {
    render() {
        return (
            <Container className="p-5 bg-faded">
                <Row id="resume-header">
                    <Info /> 
                    <Photo />
                </Row>
                
                <Row id="resume-body">
                    <Col lg="8">
                        <Education />
                        <Experience /> 
                    </Col>
                    
                    <Col lg="4">
                        RIGHT
                    </Col>
                </Row>
            </Container>
            /*
            <div className="container">
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Arun Rasmey</h2>
                    </div>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
            </div>
            */ 
        );
  }
}

export default App;
