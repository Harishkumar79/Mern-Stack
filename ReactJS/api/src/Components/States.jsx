import React, { useState } from 'react'

function States() {
    // useState - its an api
    //          - its used to modify data
    // Syntax - let/var/const/ [state setstate] = useState(default value);

    const [st, setst] = useState(50);

    const increment = () => {
        setst(st + 10);
    }

    return (
        <>
            <div>
                <h1>States Component</h1>
                <p>Current Balance : {st}</p>
                <button type='button' onClick={() => { increment() }}> + </button>
            </div>
        </>
    );
}

export default States;