import React, { Component } from 'react';
import { Container, Row, Col,Button } from 'reactstrap';

import { Card, CardHeader, CardImg, CardText, CardBlock, CardLink, CardTitle, CardSubtitle } from 'reactstrap';


class Experience extends Component{
    render() {
        return(
            <Card className="border-0">
                <CardHeader className="h4 bg-no text-primary pr-0 border-0">
                    <span>EXPERIENCE</span>
                    <hr className="subject_rule"/>
                </CardHeader>

                <Card className="info_content border-0">
                    <CardBlock> 
                        <CardText className="resume-major">Software Engineer</CardText>
                        <CardText className="org-name">IPG Photonic</CardText>
                        <Row>
                            <Col lg="3">
                                <CardText className="timeline">Aug 2013 – Sep 2014</CardText>
                            </Col>
                            <Col lg="9">
                                <CardText className="timeline">Oxford, MA</CardText>
                            </Col>
                        </Row>
                        {
                        <CardText>
                            <ul>
                                <li>Supported of software development for new product and existing products.</li>
                                <li>Implemented and added features to existing products.</li>
                                <li>Updated and maintained existing modules.</li>
                                <li>Provided support in system testing and bug fixing activities.</li>
                                <li>Designed, coded, and debugged systems in C/C++.</li>
                                <li>Analyzed test data and reports to determine if design meets functional and performance specifications.</li>
                            </ul>
                        </CardText>
                        }
                    </CardBlock>
                </Card>
                
                

                <Card className="info_content border-0">
                    <CardBlock> 
                        <CardText className="resume-major">Web Developer</CardText>
                        <CardText className="org-name">CAMITSS</CardText>
                        <Row>
                            <Col lg="3">
                                <CardText className="timeline">Jan 2011 – Dec 2012</CardText>
                            </Col>
                            <Col lg="9">
                                <CardText className="timeline">Phnom Penh, Cambodia</CardText>
                            </Col>
                        </Row>
                        {
                        <CardText>
                            <ul>
                                <li>Assisted in designing, architecture and development of web applications.</li>
                                <li>Implemented procedures for creation of wireframes and prototypes for new user interfaces.</li>
                                <li>Supported technical team members in development of functional and visual user interfaces.</li>
                                <li>Assisted in designing, configured, and development of relational databases for back-end.</li>
                                <li>Participated in testing and debugging of new capabilities and systems.</li>
                                <li>Provided technical assistance for development and deployment of sites.</li>
                                <li>Participated in continuous learning of web development methods and UI designing trends.</li>
                                <li>Worked with development teams in Cambodia and Japan.</li>
                                <li>Software Stack: PHP, MySQL, HTML, CSS, JavaScript, JQuery, CodeIgniter, WordPress, Social Network’s API, and Google Maps API.</li>
                            </ul>
                        </CardText>
                        }
                    </CardBlock>
                </Card>
                
                <Card className="info_content border-0">
                    <CardBlock> 
                        <CardText className="resume-major">Computer Lab Assistant</CardText>
                        <CardText className="org-name">Mahidol University</CardText>
                        <Row>
                            <Col lg="3">
                                <CardText className="timeline">Jan – Mar 2013</CardText>
                            </Col>
                            <Col lg="9">
                                <CardText className="timeline">Bangkok, Thailand</CardText>
                            </Col>
                        </Row>
                        {
                        <CardText>
                            <ul>
                                <li>Provided technical support such as hardware and software for students and professors.</li>
                                <li>Maintained laboratory software, test materials and hardware to ensure security.</li>
                                <li>Responded to queries regarding quota limitation, payment, and printing support.</li>
                            </ul>
                        </CardText>
                        }
                    </CardBlock>
                </Card>
            </Card>
        );
    }
}

export default Experience;
