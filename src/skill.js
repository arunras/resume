import React, { Component } from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import { Card, CardHeader, CardImg, CardText, CardBlock, CardLink, CardTitle, CardSubtitle } from 'reactstrap';


class Skill extends Component {
    render() {
        return (
            <Card className="border-0">
                <CardHeader className="h4 bg-no text-primary pr-0 border-0">
                    <span>DEV TOOLS</span>
                    <hr className="subject_rule"/>
                </CardHeader>

                <Card className="info_content border-0">
                    <CardBlock> 
                        <CardText className="skill-title">Framworks</CardText>
                        <CardText className="skill">ReactJS</CardText>
                        <CardText className="skill">Bootstrap</CardText>
                    </CardBlock>

                    <CardBlock> 
                        <CardText className="skill-title">APIs</CardText>
                        <CardText className="skill">Google Maps</CardText>
                        <CardText className="skill">Alexa</CardText>
                    </CardBlock>

                    <CardBlock> 
                        <CardText className="skill-title">Front-End</CardText>

                        <CardText className="skill-subtitle">Scripts</CardText>
                        <CardText className="skill">JavaScript</CardText>
                        <CardText className="skill">HTML</CardText>
                        <CardText className="skill">CSS</CardText>
                        <CardText className="skill">SASS</CardText>
                        <CardText className="skill">ES6+</CardText>

                        <CardText className="skill-subtitle">Libraries</CardText>
                        <CardText className="skill">jQuery</CardText>
            
                        <CardText className="skill-subtitle">Build Tools</CardText>
                        <CardText className="skill">Create-React-App</CardText>
                        <CardText className="skill">Babel</CardText>
                        <CardText className="skill">Webpack</CardText>

                        <CardText className="skill-subtitle">Package Management</CardText>
                        <CardText className="skill">npm</CardText>
                        <CardText className="skill">brew</CardText>

                    </CardBlock>
                
                    <CardBlock> 
                        <CardText className="skill-title">Back-End</CardText>
                        <CardText className="skill-subtitle">Programming Language</CardText>
                        <CardText className="skill">C/C++</CardText>
                        <CardText className="skill">NodeJS</CardText>
                        <CardText className="skill">Java</CardText>
                        <CardText className="skill">Python</CardText>
                        <CardText className="skill">PHP</CardText>

                        <CardText className="skill-subtitle">Storage</CardText>
                        <CardText className="skill">MySQL</CardText>

                        <CardText className="skill-subtitle">Web Server</CardText>
                        <CardText className="skill">[Apache]</CardText>
                        <CardText className="skill">[Nginx]</CardText>

                        <CardText className="skill-subtitle">Server Platforms</CardText>
                        <CardText className="skill">AWS</CardText>
                        <CardText className="skill">Google Cloud</CardText>

                        <CardText className="skill-subtitle">Server Management</CardText>
                        <CardText className="skill">FTP & Web Host Setup</CardText>
                        <CardText className="skill">Terminal</CardText>
                        <CardText className="skill">SSH</CardText>
                        <CardText className="skill">Git</CardText>
                        <CardText className="skill">Github</CardText>
                        <CardText className="skill">Bitbucket</CardText>

                        <CardText className="skill-subtitle">OS</CardText>
                        <CardText className="skill">Linux</CardText>
                        <CardText className="skill">macOS</CardText>
                        <CardText className="skill">Windows</CardText>
                    </CardBlock>

                    <CardBlock> 
                        <CardText className="skill-title">Text Editors</CardText>
                        <CardText className="skill">Vim</CardText>
                        <CardText className="skill">Xcode</CardText>
                        <CardText className="skill">Atom</CardText>
                    </CardBlock>
                </Card>
            </Card>
        );
    }
}

export default Skill;

