import React, { Component } from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import { Card, CardHeader, CardImg, CardText, CardBlock, CardLink, CardTitle, CardSubtitle } from 'reactstrap';


class Skill extends Component {
    render() {
        return (
            <Card className="border-0">
                <CardHeader className="h4 bg-no text-primary pr-0 border-0">
                    <span>SKILLS</span>
                    <hr className="subject_rule"/>
                </CardHeader>
                <Card className="info_content border-0">
                    <CardBlock> 
                        <CardText className="resume-major">Frontend</CardText>
                        <CardText className="skill">ReactJS</CardText>
                        <CardText className="skill">Webpack</CardText>
                        <CardText className="skill">SASS</CardText>
                        <CardText className="skill">HTML</CardText>
                        <CardText className="skill">JavaScript</CardText>
                        <CardText className="skill">Terminal</CardText>
                        <CardText className="skill">VIM</CardText>
                        <CardText className="skill">Git</CardText>
                    </CardBlock>
                
                    <CardBlock> 
                        <CardText className="resume-major">Backend</CardText>
                        <CardText className="skill">C/C++</CardText>
                        <CardText className="skill">NodeJS</CardText>
                        <CardText className="skill">PHP</CardText>
                        <CardText className="skill">Java</CardText>
                        <CardText className="skill">SQL</CardText>
                    </CardBlock>
                </Card>
            </Card>
        );
    }
}

export default Skill;

