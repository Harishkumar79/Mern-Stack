import React from 'react'
import { useParams } from 'react-router-dom';

function Profile() {
    const routingdata = useParams();
    console.log(routingdata);
    return (
        <>
            <h1>Welcome Mr/Mis : {routingdata.uname}</h1>
        </>
    );
}

export default Profile;