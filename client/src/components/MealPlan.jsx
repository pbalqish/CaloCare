import BreakfastTab from "./BreakfastTab";
import LunchTab from "./LunchTab";
import DinnerTab from "./DinnerTab";

export default function MealPlan() {
  return (
    <>
      <div className="flex p-10">
        <div role="tablist" className="tabs tabs-lifted w-7/12">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Breakfast"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <BreakfastTab />
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Lunch"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <LunchTab />
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Dinner"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <DinnerTab />
          </div>
        </div>
        <div className="flex justify-center w-5/12 join">
          <input
            className="input input-bordered join-item"
            placeholder="meal plan.."
          />
          <button className="btn btn-accent join-item rounded-r-full">
            Get Meal Plan
          </button>
        </div>
      </div>
    </>
  );
}
