import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState(``);
  const [incompleteTodos, setincompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = [...incompleteTodos, todoText];
    setincompleteTodos(newTodo);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodo = [...incompleteTodos];
    newTodo.splice(index, 1);
    setincompleteTodos(newTodo);
  };
  const onClickComplete = (index) => {
    const newTodo = [...incompleteTodos];
    newTodo.splice(index, 1);
    setincompleteTodos(newTodo);
    const newTodo2 = [...completeTodos, incompleteTodos[index]];
    setcompleteTodos(newTodo2);
  };
  const onClickBack = (index) => {
    const newcompleteTodo = [...completeTodos];
    newcompleteTodo.splice(index, 1);
    setcompleteTodos(newcompleteTodo);
    const newIncompleteTodo = [...incompleteTodos, completeTodos[index]];
    setincompleteTodos(newIncompleteTodo);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるToto５個までだよ。消化しろ。</p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
