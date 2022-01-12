import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div>
            <div className="littlecard-container">
               <img src={props.imagem} />
               <div>
                <h4>E-mail:</h4>
                </div>
                <div>
                <p>{props.endemail}</p>
               </div>
            </div>
        
        </div>
    )
}

export default CardPequeno;