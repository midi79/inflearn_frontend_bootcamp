import { useState } from 'react';

export default function counterLetDocumentPage() {

    const [ count, setCount ] = useState(0);

    function onClickCountUp() {
        setCount(count + 1)
    }

    function onClickCountDown() {
        setCount(count - 1)
    }
    
    return (
        <div>
            <div id="counter">{count}</div>
            <button onClick={onClickCountUp}>Add Counter!</button>
            <button  onClick={onClickCountDown}>Deduct Counter!</button>
        </div>
    )
}