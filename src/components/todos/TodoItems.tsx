import { useAppDispatch } from "@/app/hooks";
import { deleteTodo, toggleTodo, type Todo } from "@/features/todos/todoSlice";

import type React from "react";


interface Props {
   todo: Todo
}

const TodoItems: React.FC<Props> = ({ todo }) => {
   const dispatch = useAppDispatch();



   return (
      <li className="flex items-center justify-between">
         <span onClick={() => dispatch(toggleTodo(todo.id))} className={`${todo.completed ? 'line-through text-red-500' : 'text-sky-400 '} cursor-pointer`}>
            {todo.text}
         </span>
         <span onClick={() => dispatch(deleteTodo(todo.id))} className="bg-red-500 h-6 w-6 flex items-center justify-center text-white rounded-sm cursor-pointer">X</span>
      </li>
   );
};

export default TodoItems;