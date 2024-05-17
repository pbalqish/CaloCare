import { useState } from "react";
import axios from "axios";

export default function WeightStatus({ profile }) {
  const [result, setResult] = useState(null);

  async function handleResult(event) {
    event.preventDefault();
    try {
      // const newData = { fullName, gender, age, weight, height };
      const { data } = await axios.post(
        `http://localhost:3000/weight-status`,
        profile,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );
      setResult(data);
      console.log(data, "<< 21");
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(result.resOpenAI, "<< 26");
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-accent"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        My Weight Status
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1 className="text-2xl font-bold text-primary">Body Mass Index</h1>
          <div className="flex flex-col gap-5">
            <p>BMI : {result?.resOpenAI?.bmi}</p>
            <p>Weight Status : {result?.resOpenAI?.bmi_category}</p>
            <p>Healthy Weight : {result?.resOpenAI?.healthy_weight}</p>
          </div>
          <div className="flex justify-items-end justify-end">
            <button
              onClick={(event) => handleResult(event)}
              className=" btn btn-primary"
            >
              Check!
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
