import React, { Component } from 'react';
import { Col, Card, CardText} from 'reactstrap';
import logo from './logo.svg';

class Photo extends Component{
    render() {
       return(
            <Card className="border-0">
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h5>Coding...</h5>
                    </div>
                    <CardText className="philosophy">Never Give Up!</CardText>
                </div>
            </Card>
       ); 
    }
}

export default Photo;
