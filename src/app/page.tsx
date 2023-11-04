/** @format */
"use client";
import Image from "next/image";
import { Buttton } from "./components/Buttton";
import Todo from "./components/Todo";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useState } from "react";
type TaskType = {
  task: string;
  isChecked: boolean;
};

const smapleTodos: TaskType[] = [
  {
    task: "Buy Groceries",
    isChecked: true
  },
  {
    task: "Clean the house",
    isChecked: false
  },
  {
    task: "Finish work report",
    isChecked: false
  },
  {
    task: "Exercise for 30 minutes",
    isChecked: false
  }
];

export default function Home() {
  const [animationParent] = useAutoAnimate();

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<TaskType[]>(smapleTodos);

  function handleSubmitTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (task.trim() === "") {
      alert("Task is empty");
      return;
    } else if (todos.find((d) => d.task === task)) {
      alert("Task is alredy exists");
      return;
    }
    setTodos([...todos, { task: task, isChecked: false }]);
    setTask("");
  }

  function handleToggleTask(task: TaskType) {
    const updatedTodos = todos.map((d) => {
      if (task == d) {
        return { ...d, isChecked: !d.isChecked };
      }
      return d;
    });

    setTodos(updatedTodos);
  }

  function handleRemoveTask(task: TaskType) {
    const updatedTodos = todos.filter((d) => {
      if (task == d) {
        return false;
      }
      return true;
    });

    setTodos(updatedTodos);
  }

  const unCheckedTodos = todos.filter((d) => !d.isChecked);
  const checkedTodos = todos.filter((d) => d.isChecked);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10 sm:p-24 ">
      <section className="max-w-[800px] w-full p-1">
        <form className="flex gap-2 mb-4 " onSubmit={handleSubmitTask}>
          {/* input */}
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            className="border border-gray-300 rounded h-11 px-4  w-full focus:outline-none focus:border-green-400"
          />
          {/* button */}
          <Buttton> Add Todo </Buttton>
        </form>
        <div ref={animationParent} className="flex flex-col gap-4">
          {todos.map((d, i) => {
            if (!d.isChecked)
              return (
                <Todo
                  removeTask={() => handleRemoveTask(d)}
                  onToggleTask={() => handleToggleTask(d)}
                  isChecked={d.isChecked}
                  task={d.task}
                  key={i}
                />
              );
          })}
          {unCheckedTodos.length > 0 && checkedTodos.length > 0 && (
            <div className="w-[95%] mx-auto h-[.5px]  rounded-full bg-gray-200" />
          )}
          {todos.map((d, i) => {
            if (d.isChecked)
              return (
                <Todo
                  removeTask={() => handleRemoveTask(d)}
                  onToggleTask={() => handleToggleTask(d)}
                  isChecked={d.isChecked}
                  task={d.task}
                  key={i}
                />
              );
          })}
        </div>
      </section>
    </main>
  );
}
