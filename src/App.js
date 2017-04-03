import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './App.css';

import Info from './info';
import About from './about';
import Photo from './photo';
import Education from './education';
import Experience from './experience';
import Skill from './skill';
import Project from './project';
import Strength from './strength';
import Language from './language';



class App extends Component {
    render() {
        return (
            <Container className="p-5">
                <Row id="resume-header">
                    <Col lg="8" md="8" sm="12" xs="12">
                        <Info /> 
                        <About />
                    </Col>
                    <Col lg="4" md="4" sm="12" xs="12">
                        <Photo />
                    </Col>
                </Row>
                
                <Row id="resume-body">
                    <Col lg="8" md="8" sm="12" xs="12">
                        <Education />
                        <Experience /> 
                    </Col>
                   
                    <Col lg="4" md="4" sm="12" xs="12">
                        <Skill />
                        <Project />
                        <Strength />
                        <Language />
                    </Col>
                </Row>
            </Container>
 
        );
  }
}

export default App;
