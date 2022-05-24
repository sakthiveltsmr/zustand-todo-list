import { useState } from "react";
import { useStore } from "../../store";
import { TodoCard } from "./TodoCard";

export const ZustandTodos = () => {
  const { todos, addTodo, todosCount } = useStore();

  const [input, setInput] = useState("");

  function handleOnZustandSubmit() {
    if (input) {
      const lastTodo = todos[todos.length - 1];
      addTodo({
        id: lastTodo ? lastTodo.id + 1 : 1,
        title: input,
      });
      setInput("");
    }
  }
  return (
    <div className="flex flex-col justify-evenly">
      <img
        className="w-[500px]"
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--oDSeOnZV--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0gg7yoxjxommy4uz7vbk.jpeg"
        alt="zustand"
      />
      <h1>Zustand Store ({todosCount()})</h1>
      <div className="flex mt-10">
        <input
          className="px-2 py-1 text-white rounded-md bg-zinc-600"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="px-4 py-2 ml-4 font-bold text-white bg-orange-500 rounded-md hover:bg-orange-400"
          onClick={handleOnZustandSubmit}
        >
          Submit Zustand Todo
        </button>
      </div>

      <div className="mt-10">
        {todos.map((todo) => {
          return <TodoCard key={todo.id} title={todo.title} />;
        })}
      </div>
    </div>
  );
};
