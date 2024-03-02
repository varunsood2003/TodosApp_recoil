import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { filterAtom, todosAtom,todosSelector } from "../store/atoms/todoatoms";
const Todos = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useRecoilState(todosAtom);
  const [filter, setFilter] = useRecoilState(filterAtom);
  const filteredTodos = useRecoilValue(todosSelector);

  const handleclick = () => {
    setTodos((oldTodos)=>[
      ...oldTodos,
      {
        id: Math.random(),
        title: title,
        desc: desc
      }
    ])
  };
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="description"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <button onClick={handleclick}>Add Todo</button>
      <input type="text" placeholder="filter" value={filter} onChange={(e)=>{
        setFilter(e.target.value);
      }}/>
      {filteredTodos.map((todo) => {
        return <div key={todo.id}>
          {todo.title} <br />
          {todo.desc}
        </div>;
      })}
    </div>
  );
};
export default Todos;
