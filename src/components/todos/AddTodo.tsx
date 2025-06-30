import { useAppDispatch } from "@/app/hooks";
import { addTodo } from "@/features/todos/todoSlice";
import type React from "react";
import { useState } from "react";

const AddTodo = () => {

   const [text, setText] = useState('')
   const dispatch = useAppDispatch();


   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!text.trim()) return;
      dispatch(addTodo(text))
   }



   return (
      <div>
         <form onSubmit={handleSubmit} className="bg-sky-100 p-10 pt-5 flex flex-col *:w-full gap-y-4 w-sm">
            <h2 className="font-semibold text-sky-500">Todo App</h2>
            <input
               type="text"
               placeholder="Enter todo"
               value={text}
               onChange={(e) => setText(e.target.value)}
               className="border p-2 border-sky-500 outline-sky-200" />
            <button className="bg-sky-400 text-white p-2 rounded-sm" type="submit">Add Todo</button>
         </form>
      </div>
   );
};

export default AddTodo;