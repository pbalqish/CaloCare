export default function TaskItem({ title, index, removeMeal }) {
  return (
    <>
      <div className="flex justify-between items-center border-b border-slate-200 py-3">
        <div className="inline-flex items-center space-x-2">
          <div>
            {index + 1}.{title}
          </div>
        </div>
        <div>
          <button onClick={() => removeMeal(index)} className="btn btn-error">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
