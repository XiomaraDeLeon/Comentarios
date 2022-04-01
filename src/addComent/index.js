import React from "react";
import {Button, Container, InputGroup, FormControl} from "react-bootstrap";
import {Context} from "../context";

function AddComment(){
    const {
        individual,
        setIndividual,
        setComentarios,
        comentarios
    } = React.useContext(Context)

    const individualT = {...individual}

    function onChangeInput(event){
        individualT.text = event.target.value
        console.log(individualT)
        setIndividual(individualT)
    }

    function addComentarios(){
        if(individualT.text !== ''){
            const aux = [...comentarios]
            aux.push({...individual})
            setComentarios(aux)
            individualT.text = ''
            setIndividual(individualT)
        }
    }

    return(
        <Container>
            <InputGroup className="mt-3">
            <FormControl
                value={individualT.text}
                onChange={onChangeInput}
                placeholder="Ingrese un comentario"
            />
            </InputGroup>
            
            <InputGroup className="mt-3 justify-content-center">
            <Button 
                variant="primary"
                onClick={addComentarios}
            >
                Agregar
            </Button>{' '}
            </InputGroup>
        </Container>
        
    )
}

export {AddComment}