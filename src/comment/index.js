import React from "react";
import {Card, Button, Row, Col} from "react-bootstrap"; 
import { BsHandThumbsUpFill } from "react-icons/bs";
import "./style.css"

function Comment(props){

    return(
        <React.Fragment>
            <Card className="mt-3" body>{props.comentario.totalLikes}
                <Row>
                    <Col md={1}>
                        <BsHandThumbsUpFill className={props.comentario.like && 'cambioColor mr-2'} 
                            onClick={props.darleLike} />
                    </Col>
                    <Col>{props.comentario.text}</Col>

                    <Col md={2}>
                        <Button onClick={props.responder} variant="outline-primary">Responder</Button>{' '}
                    </Col>
                </Row>
            </Card>    
             
        </React.Fragment>  
    )
}

export {Comment}