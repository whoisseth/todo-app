/** @format */

import { cn } from "@/lib/utils";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
type Props = {
  onToggleTask: () => void;
  removeTask: () => void;
  isChecked: boolean;
  task: string;
};

export default function Todo({
  isChecked,
  onToggleTask,
  removeTask,
  task
}: Props) {
  return (
    <div className="flex justify-between gap-4  ">
      <button
        onClick={onToggleTask}
        className="flex items-start gap-1 px-2  border rounded"
      >
        <input checked={isChecked} type="checkbox" className="mt-1.5" />
        <label className={cn("cursor-pointer", isChecked && "line-through")}>
          {task}
        </label>
      </button>
      <AiFillDelete
        onClick={removeTask}
        className="text-2xl text-red-400 cursor-pointer"
      />
    </div>
  );
}
