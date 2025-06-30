import { useAppSelector } from "./app/hooks";
import AddTodo from "./components/todos/AddTodo";
import TodoItems from "./components/todos/TodoItems";

const App = () => {
  const todos = useAppSelector((state) => state.todo)

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      {todos.length > 0 && <div className="bg-sky-100 p-10 pb-5 flex flex-col *:w-full gap-y-4 w-sm">
        {
          todos.map((todo) => (
            <TodoItems todo={todo}/>
          ))
        }
      </div>}
      {todos.length > 0 && <hr />}
      <AddTodo />

    </div>
  );
};

export default App;