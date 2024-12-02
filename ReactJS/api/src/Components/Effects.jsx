import React,{useEffect, useState} from 'react'

function Effects() {

    const [st , setst] = useState(20);
    
    useEffect(()=>{
        console.log("effect before");
    },[]);

    const increment = () => {
        setst(st+5);
    }

    return (
        <>
            <h1>Effects Component</h1>
            <h3>value is : {st}</h3>
            <button onClick={()=>{increment()}}> + </button>
        </>
    );
}

export default Effects;