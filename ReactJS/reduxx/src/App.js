import { useSelector, useDispatch } from "react-redux";
import { inc, dec, auser } from "./Redux/slices/Counter";
import { useEffect, useState } from "react";
import { userList } from "./Redux/slices/User";

function App() {
  var dispatch = useDispatch();
  const data = useSelector((state) => state.counter);
  const [choice, setchoice] = useState(0);
  console.log(data)

  useEffect(() => {
    console.log("useEffect called");
    dispatch(userList());// eslint-disable-next-line
  }, [])

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
    </>
  );
}

export default App;
