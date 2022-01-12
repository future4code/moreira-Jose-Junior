import React from 'react';
import './CardPequeno2.css'

function CardPequeno2(props) {
    return (
        <div>
            <div className="littlecard2-container">
               <img src={props.imagem} />
               <div>
                <h4>E-mail:</h4>
                </div>
                <div>
                <p>{props.endemora}</p>
               </div>
            </div>
        
        </div>
    )
}

export default CardPequeno2;