import { useSelector, useDispatch } from "react-redux";
import { inc, dec, auser } from "./Redux/slices/Counter";
import { useEffect, useState } from "react";
import { userList } from "./Redux/slices/User";
import { userRegister } from "./Redux/slices/User";

function App() {
  var dispatch = useDispatch();
  const data = useSelector((state) => state.counter);
  const [choice, setchoice] = useState(0);
  console.log(data)

  useEffect(() => {
    console.log("useEffect called");
    dispatch(userList());// eslint-disable-next-line
  }, [])

  var [user , setuser] = useState();

  const setdataa = () =>{
    dispatch(userRegister(user));
  }


  return (
    <>
      <h1>Hello</h1>
      <h3>value : {data.value}</h3>
      <h3>steps : {data.steps}</h3>
      <button type="button" onClick={() => dispatch(inc())}>+</button>
      <button type="button" onClick={() => dispatch(dec())}>-</button>
      <hr />
      <input type="text" value={choice} onChange={(e) => { setchoice(e.target.value) }} placeholder="Enter only numbers" />
      <button type="button" onClick={() => dispatch(auser(choice))}>Change on user input</button>
      <hr />
      <h1>APT fetch</h1>
      <h1>Form Data</h1>
      <input type="text" name="username" onChange={(e)=>{setuser({...user ,[e.target.name]:e.target.value}); console.log(user)}} />
      <input type="password" name="password" onChange={(e)=>{setuser({...user ,[e.target.name]:e.target.value});console.log(user)}} />
      <button type="submit" onClick={()=>setdataa()}>Send</button>
    </>
  );
}

export default App;
