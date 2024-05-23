import { useState } from "react";

export default function Form({ addMeal }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addMeal(title);
    setTitle("");
  }

  function handleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <>
      <div id="task-input" className="my-3">
        <form className="flex gap-2" onSubmit={(event) => handleSubmit(event)}>
          <input
            id="input-title"
            type="text"
            name="title"
            placeholder="add your meal.."
            className="w-full ring-1 rounded ring-slate-200 p-1 px-2"
            value={title}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="rounded bg-indigo-500 p-1 text-indigo-50 px-3 hover:bg-black"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}
