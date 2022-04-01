import React from "react";
import {AddComment} from "../addComent";
import {Comment} from "../comment";
import {MyModal} from "../modal";
import {Context} from "../context";
import {Respuestas} from "../Respuestas";

function AppUI(){
     const {
        comentarios,
        setComentarios,
        setKey,
        setRespuesta
    } = React.useContext(Context)

    function darLike(key){
        const comentariosAux = [...comentarios]
        comentariosAux[key].like = true
        comentariosAux[key].totalLikes++
        setComentarios(comentariosAux)
    }

    const [show, setShow] = React.useState(false);
  
    const handleClose = () => {
        setShow(false);
        setRespuesta('')
    }
    
    const handleShow = (key) => {
        setKey(key);
        setShow(true)
    }

    

    return(
        <React.Fragment>
            <AddComment/>
            {comentarios.map((comentario, key) => (
                <React.Fragment>
                    <Comment comentario={comentario} 
                    darleLike={() => darLike(key)}
                    responder={() => handleShow(key)}
                    />

                    {comentario.respuestas?.map((respuestas) => (
                        
                        <Respuestas respuestas={respuestas}/>     
                    ))}
                    <MyModal 
                        show={show}
                        handleClose={handleClose}
                    />
                </React.Fragment>
                
            ))}
            
        </React.Fragment>
    )
}

export {AppUI};