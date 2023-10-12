"use client";
import { useState } from "react";
const AddTodo = () => {
  const [todo, setTodo] = useState("");
  async function addTodoInDB() {
    if (!todo) {
      alert("Todo field is empty");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/todo", {
        method: "POST",
        body: JSON.stringify({
          todo: todo,
        }),
      });
      if (res.ok) {
        setTodo("");
        alert("Todo added successfully, check showtodos page");
      }
    } catch (error) {
      console.log(error);
      throw new Error("Cannot send Post request");
    }
  }
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <h1 className="text-2xl font-bold my-5">Add Todo</h1>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        className="outline-none p-3 border-2 border-black w-[500px]"
      />
      <button
        onClick={addTodoInDB}
        className="my-4 bg-green-700 text-white p-3 rounded-md"
      >
        Submit
      </button>
    </div>
  );
};
export default AddTodo;
