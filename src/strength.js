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
                        <CardText className="skill">Pursuasive</CardText>
                        <CardText className="skill">Algorithms</CardText>
                        <CardText className="skill">Leadership</CardText>
                    </CardBlock>
                </Card>
            </Card>
        );
    }
}

export default Strength;

