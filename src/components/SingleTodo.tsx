"use client";
import { useRouter } from "next/navigation";

interface Props {
  number: number;
  todo: string;
  _id: string;
}
const SingleTodo = ({ number, todo, _id }: Props) => {
  const router = useRouter();
  async function deleteTodo() {
    try {
      const res = await fetch("http://localhost:3000/api/todo", {
        method: "DELETE",
        body: JSON.stringify({
          todoId: _id,
        }),
      });
      if (res.ok) {
        router.refresh();
        alert("Todo deleted");
      }
    } catch (error) {
      console.log(error);
      throw new Error("Cannot send Delete request");
    }
  }
  return (
    <div className="flex gap-6 text-xl p-2">
      <span className="font-bold">{number}</span> <p>{todo}</p>
      <button className="text-lg bg-blue-700 py-1 px-2 text-white rounded-xl">
        Edit
      </button>
      <button
        onClick={deleteTodo}
        className="text-lg bg-red-600 py-1 px-2 text-white rounded-xl"
      >
        Delete
      </button>
    </div>
  );
};
export default SingleTodo;
