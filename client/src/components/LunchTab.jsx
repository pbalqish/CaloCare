import { useState } from "react";
import Form from "./Form";
import List from "./List";

export default function LunchTab() {
  const [lunch, setLunch] = useState([]);

  function addMeal(newMeal) {
    let newMeals = [...lunch, newMeal];
    setLunch(newMeals);
  }

  function removeMeal(index) {
    let newMeals = [...lunch];
    newMeals.splice(index, 1);
    setLunch(newMeals);
  }
  return (
    <>
      <Form addMeal={addMeal} />
      <List tasks={lunch} removeMeal={removeMeal} />
    </>
  );
}
