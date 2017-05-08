import React, { Component } from 'react';
import { Card, CardText, CardBlock } from 'reactstrap';



class About extends Component{
    render() {
       return(
            <Card className="info_content border-0">
                <CardBlock>
                    <CardText className="resume-about">I am a self-driven full stack developer. I have been digging in deep into solid computer science theory, and broad programming knowledge base. I am always inside the terminal. I work mostly with C/C++ for the algorithms to optimize NP complexity and JavaScript to create beautiful functional web applications.
                    </CardText>
                </CardBlock>
            </Card>
       ); 
    }
}

export default About;
