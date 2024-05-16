export default function MealPlan() {
  return (
    <>
      <div className="flex  justify-center my-10 join">
        <input
          className="input input-bordered join-item"
          placeholder="meal plan.."
        />
        <button className="btn btn-accent join-item rounded-r-full">
          Get Meal Plan
        </button>
      </div>
      <div className="flex flex-col gap-4 m-auto justify-center max-w-md">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-emerald-400 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">Breakfast</div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-emerald-400 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">Lunch</div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-emerald-400 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">Dinner</div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
      </div>
    </>
  );
}
