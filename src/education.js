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
                        <CardText className="org-name">The City College of New York</CardText>
                        <CardText className="timeline">2015 - 2017</CardText>
                    </CardBlock>
                    <CardBlock> 
                        <CardText className="resume-major">B.S. in Computer Science</CardText>
                        <CardText className="org-name">Royal University of Phnom Penh</CardText>
                        <CardText className="timeline">2007 - 2011</CardText>
                    </CardBlock>
                </Card>
            </Card>
        )
    }
}



export default Education;
