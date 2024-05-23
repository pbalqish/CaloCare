import Item from "./Item";

export default function List({ tasks, removeMeal }) {
  return (
    <>
      <div id="tasks" className="my-5">
        {tasks.map((task, index) => (
          <Item
            key={index}
            title={task}
            index={index}
            removeMeal={removeMeal}
          />
        ))}
      </div>
    </>
  );
}
