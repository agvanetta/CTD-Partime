import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  restar,
  restar5,
  sumar,
  sumar5,
} from "../actions/contadorActions";

export const Contador = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Contador Redux</h2>
      <nav>
        <button onClick={() => dispatch(sumar5())}>+5</button>
        <button onClick={() => dispatch(sumar())}>+1</button>
        <button onClick={() => dispatch(restar())}>-1</button>
        <button onClick={() => dispatch(restar5())}>-5</button>
        <button onClick={() => dispatch(reset())}>restart</button>
        <h3>{state.contador}</h3>
      </nav>
    </div>
  );
};
