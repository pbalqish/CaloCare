import { useState } from "react";
import Form from "./Form";
import List from "./List";

export default function DinnerTab() {
  const [dinner, setDinner] = useState([]);

  function addMeal(newMeal) {
    let newMeals = [...dinner, newMeal];
    setDinner(newMeals);
  }

  function removeMeal(index) {
    let newMeals = [...dinner];
    newMeals.splice(index, 1);
    setDinner(newMeals);
  }
  return (
    <>
      <Form addMeal={addMeal} />
      <List tasks={dinner} removeMeal={removeMeal} />
    </>
  );
}
