import React, { Component } from 'react';
import { Container, Row, Col,Button } from 'reactstrap';

import { Card, CardHeader, CardImg, CardText, CardBlock, CardLink, CardTitle, CardSubtitle } from 'reactstrap';


class Education extends Component{
    render(){
        return (
            <Card className="border-0">
                <CardHeader className="h4 bg-no text-primary pr-0 border-0">
                    <span>EDUCATION</span>
                    <hr className="subject_rule"/>
                </CardHeader>
                <Card className="info_content border-0">
                    <CardBlock> 
                        <CardText className="resume-major">M.S. in Computer Science</CardText>
                        <Row>
                            <Col lg="5">
                                <CardText className="org-name">City College of New York</CardText>
                            </Col>
                            <Col lg="4">
                                <CardText className="duration">Jan 2015 - May 2017</CardText>
                            </Col>
                            <Col lg="3">
                                <CardText>New York, USA</CardText>
                            </Col>
                        </Row>
                    </CardBlock>
                    <CardBlock> 
                        <CardText className="resume-major">B.S. in Computer Science</CardText>
                        <Row>
                            <Col lg="5">
                                <CardText className="org-name">Royal University of Phnom Penh</CardText>
                            </Col>
                            <Col lg="4">
                                <CardText>Oct 2007 - Jun 2011</CardText>
                            </Col>
                            <Col lg="3">
                                <CardText>Cambodia</CardText>
                            </Col>
                        </Row>
                    </CardBlock>
                </Card>
            </Card>
        )
    }
}



export default Education;
