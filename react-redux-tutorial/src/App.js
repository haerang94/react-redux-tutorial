import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, logInOut } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.logged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <br />

      {logged ? <h3>중요한 글 ! </h3> : "회원에게만 보이는 글입니다."}
      <br />
      <br />
      <button onClick={() => dispatch(logInOut())}>로그인/로그아웃</button>
    </div>
  );
}

export default App;
