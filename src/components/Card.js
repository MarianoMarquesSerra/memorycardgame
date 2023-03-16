import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import backFace from '../Images/cards/question-mark-card.jpg';

const Card = ({name, number, frontFace, flipCard, unflippedCards, disabledCards}) => {
    const [isFlipped, setisFlipped] = useState(false);
    const [hasEvent, setHasEvent] = useState(true);

    useEffect(() => {
        if (unflippedCards.includes(number)){
            setTimeout(() => setisFlipped(false), 700);
        }
    }, [unflippedCards])

    useEffect(() => {
        if(disabledCards.includes(name, number)){
            setHasEvent(false);
        }
    }, [disabledCards])

    const handleClick = e => {
        const value = flipCard(name, number);
        if (value !== 0){
            setisFlipped(!isFlipped);
        }
    }

    return ( 
        <div className='card'>
            <ReactCardFlip isFlipped={isFlipped}>
                <img className='card-image' src={backFace} alt='backFace' onClick={hasEvent ? handleClick : null}/>
                <img className='card-image2' src={frontFace} alt='frontFace' onClick={hasEvent ? handleClick : null}/>
            </ReactCardFlip>
        </div>
     );
}
 
export default Card;