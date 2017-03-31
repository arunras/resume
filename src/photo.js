import React, { Component } from 'react';
import { Col, Button, Card} from 'reactstrap';

class Photo extends Component{
    render() {
       return(
            <Col lg="4">
                <Card>
                    <Button color="info" size="lg" block>Photo</Button> 
                </Card>
            </Col>
       ); 
    }
}

export default Photo;
