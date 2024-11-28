import React from 'react'

function Profile(props) {
    // const routingdata = useParams();
    // console.log(routingdata);
    return (
        <>
            {/* <h1>Welcome Mr/Mis : {routingdata.uname}</h1> */}
            <h1>Welcome Mr/Mis : {props.data[0]}</h1>
        </>
    );
}

export default Profile;