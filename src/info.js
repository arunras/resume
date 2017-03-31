import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import { Card, CardHeader, CardImg, CardText, CardBlock, CardLink, CardTitle, CardSubtitle } from 'reactstrap';



class Info extends Component{
    render() {
       return(
            <Col lg="8">
                <Card className="border-0">
                    <CardBlock>
                        <CardTitle className="text-primary h2">ARUN RASMEY</CardTitle>
                        <CardSubtitle>Software Engineer</CardSubtitle>
                        <Row className="mt-2">
                            <Col lg="4">
                                <CardText><a href="mailto:arunrasx@gmail.com">arunrasx@gmail.com</a></CardText>
                            </Col>
                            <Col lg="4">
                                <CardText><a href="https://arunras.github.io">https://arunras.github.io</a></CardText>
                            </Col>
                            <Col lg="4">
                                <CardText><a href="#">Brooklyn, NY</a></CardText>
                            </Col>
                        </Row>
                    </CardBlock>
                </Card>
            </Col> 
       ); 
    }
}

export default Info;
