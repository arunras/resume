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
                        <CardText className="resume-major">Electronic Technician</CardText>
                        <Row>
                            <Col lg="5">
                                <CardText className="org-name">IPG Photonic</CardText>
                            </Col>
                            <Col lg="4">
                                <CardText>Aug 2013 – Sep 2014</CardText>
                            </Col>
                            <Col lg="3">
                                <CardText>Oxford, MA</CardText>
                            </Col>
                        </Row>
                        <CardText>
                            <ul>
                                <li>Assembled, installed and inspected components, diodes, units, and fiber optics.</li>
                                <li>Positioned, aligned, repaired and adjusted pieces to ensure conformance to specifications.</li>
                                <li>Recorded serial numbers and voltages for products and modified products.</li>
                                <li>Used electronic, hand, power, and pneumatic tools.</li>
                                <li>Tested a full range of technical assembly, and troubleshooted.</li>
                                <li>Soldering.</li>
                            </ul>
                        </CardText>
                    </CardBlock>
                </Card>
                
                <Card className="info_content border-0">
                    <CardBlock> 
                        <CardText className="resume-major">Computer Lab Assistant</CardText>
                        <Row>
                            <Col lg="5">
                                <CardText className="org-name">Mahidol University</CardText>
                            </Col>
                            <Col lg="4">
                                <CardText>Jan – Mar 2013</CardText>
                            </Col>
                            <Col lg="3">
                                <CardText>Bangkok, Thailand</CardText>
                            </Col>
                        </Row>
                        <CardText>
                            <ul>
                                <li>Provided technical support such as hardware and software for students and professors 
        related to computers, software and other peripherals.</li>
                                <li>Maintained and performed preventative maintenance on lab equipments including printers 
        and computers for regular use.</li>
                                <li>Responded to students’ needs regarding quota limitation and payment. </li>
                            </ul>
                        </CardText>
                    </CardBlock>
                </Card>

                <Card className="info_content border-0">
                    <CardBlock> 
                        <CardText className="resume-major">Web Developer</CardText>
                        <Row>
                            <Col lg="5">
                                <CardText className="org-name">CAMITSS</CardText>
                            </Col>
                            <Col lg="4">
                                <CardText>Jan 2011 – Dec 2012</CardText>
                            </Col>
                            <Col lg="3">
                                <CardText>Cambodia</CardText>
                            </Col>
                        </Row>
                        <CardText>
                            <ul>
                                <li>Designed, prototyped and developed websites using language scripts.</li>
                                <li>Improved website’s layouts.</li>
                                <li>Used PHP, MySQL, HTML, CSS, JavaScript, JQuery, CodeIgniter, WordPress, Social Network’s APIs, and Google Maps API.</li>
                                <li>Worked with development teams in Cambodia and Japan.</li>
                            </ul>
                        </CardText>
                    </CardBlock>
                </Card>
            </Card>
        );
    }
}

export default Experience;
