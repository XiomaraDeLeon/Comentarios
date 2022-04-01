import React from "react";
import {Modal, Button, Form} from "react-bootstrap";
import {Context} from "../context"

function MyModal(props) { 
    const {
        key,
        comentarios,
        setComentarios,
        respuesta,
        setRespuesta
    } = React.useContext(Context)
    
    function onChangeValue(event){
        console.log(event.target.value)
        setRespuesta(event.target.value)
    }

    const saveRespuesta = () => {
      if(respuesta !== ''){
        const stateAux = [...comentarios]
        stateAux[key].respuestas = [...stateAux[key].respuestas, respuesta]
        setComentarios(stateAux)
        console.log(comentarios)
        setRespuesta('')
        props.handleClose()
      }
  }

    return (
      <React.Fragment>
  
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header>
            <Modal.Title>Agregar Comentario</Modal.Title>
            <Button variant="white" onClick={props.handleClose}>x</Button>
          </Modal.Header>
          <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                {/* <Form.Label>Agregar Comentario</Form.Label> */}
                <Form.Control as="textarea" rows={3} 
                    value={respuesta} 
                    onChange={onChangeValue}
                />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={saveRespuesta}>
              Publicar
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
  
  export {MyModal};