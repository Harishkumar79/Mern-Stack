import React, { useState } from 'react'

function Events() {

    var [uname , setuname] = useState('Harish')
    return (
        <>
            <div>
                <h1>Event Component</h1>
                <input type='text' value={uname} onChange={(e)=>{setuname(e.target.value);console.log(e.target.value)}} />
                <button type='button'>send</button>

                <p>{uname}</p>
            </div>
        </>
    );
}

export default Events;