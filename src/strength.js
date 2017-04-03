import React, { Component } from 'react';
import { Container, Row, Col,Button } from 'reactstrap';

import { Card, CardHeader, CardImg, CardText, CardBlock, CardLink, CardTitle, CardSubtitle } from 'reactstrap';


class Strength extends Component {
    render() {
        return (
            <Card className="border-0">
                <CardHeader className="h4 bg-no text-primary pr-0 border-0">
                    <span>STRENGTHS</span>
                    <hr className="subject_rule"/>
                </CardHeader>
                <Card className="info_content border-0">
                    <CardBlock> 
                        <CardText className="skill">Hard-working(18/24)</CardText>
                        <CardText className="skill">Persuasive</CardText>
                        <CardText className="skill">Strong responsibility</CardText>
                        <CardText className="skill">Leadership</CardText>
                        <CardText className="skill">Self-motivated</CardText>
                        <CardText className="skill">Goal driven</CardText>
                        <CardText className="skill">Ability to work independently and team</CardText>
                        <CardText className="skill">Ability to learn new programming languages and concepts quickly</CardText>
                    </CardBlock>
                </Card>
            </Card>
        );
    }
}

export default Strength;

