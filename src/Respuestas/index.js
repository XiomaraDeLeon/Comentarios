import React from "react";
import {Card, Container, Row, Col} from "react-bootstrap";

function Respuestas(props){
    return(
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>{props.respuestas}</Card.Body>
                    </Card>
                </Col>
            </Row>
        
        </Container>
        
    )
}

export {Respuestas}