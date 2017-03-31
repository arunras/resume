import React, { Component } from 'react';
import { Container, Row, Col,Button } from 'reactstrap';

import { Card, CardHeader, CardImg, CardText, CardBlock, CardLink, CardTitle, CardSubtitle } from 'reactstrap';


class Project extends Component {
    render() {
        return (
            <Card className="border-0">
                <CardHeader className="h4 bg-no text-primary pr-0 border-0">
                    <span>PROJECTS</span>
                    <hr className="subject_rule"/>
                </CardHeader>
                <Card className="info_content border-0">
                    <CardBlock> 
                        <CardText className="project"><a href="#">Random-Quote-Machine</a></CardText>
                        <CardText className="project"><a href="#">Camera Placement</a></CardText>
                        <CardText className="project"><a href="#">K-Server</a></CardText>
                    </CardBlock>
                </Card>
            </Card>
        );
    }
}

export default Project;

