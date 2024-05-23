import { useState } from "react";
import Form from "./Form";
import List from "./List";

export default function BreakfastTab() {
  const [breakfasts, setBreakfasts] = useState([]);

  function addMeal(newMeal) {
    let newMeals = [...breakfasts, newMeal];
    setBreakfasts(newMeals);
  }

  function removeMeal(index) {
    let newMeals = [...breakfasts];
    newMeals.splice(index, 1);
    setBreakfasts(newMeals);
  }
  return (
    <>
      <Form addMeal={addMeal} />
      <List tasks={breakfasts} removeMeal={removeMeal} />
    </>
  );
}
