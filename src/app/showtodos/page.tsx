import SingleTodo from "@/components/SingleTodo";

const Test = async () => {
  const fetchAllTodos = await fetch("http://localhost:3000/api/todo", {
    method: "GET",
    cache: "no-store",
  });
  const { allTodos } = await fetchAllTodos.json();
  return (
    <div>
      <div className="flex justify-center mt-20 flex-col items-center">
        <h1 className="text-3xl font-bold">All Todos</h1>
        <div className="border border-purple-900 mt-10">
          {allTodos.map((item: any, index: number) => {
            return <SingleTodo key={index} {...item} number={index + 1} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Test;
