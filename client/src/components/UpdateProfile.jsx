import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Toastify from "toastify-js";
import axios from "axios";

export default function UpdateProfile({ profile }) {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    if (profile) {
      setFullName(profile?.data?.fullName);
      setGender(profile?.data?.gender);
      setAge(profile?.data?.age);
      setWeight(profile?.data?.weight);
      setHeight(profile?.data?.height);
    }
  }, [profile]);

  async function handleSubmit(event, fullName, gender, age, weight, height) {
    event.preventDefault();
    try {
      const newData = {
        fullName,
        gender,
        age: +age,
        weight: +weight,
        height: +height,
      };

      await axios.put(`http://localhost:3000/myprofile/update`, newData, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      Toastify({
        text: "Successfully update data",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#7ABA78",
        },
      }).showToast();
      navigate("/myprofile");
    } catch (error) {
      Toastify({
        text: error.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#A91D3A",
        },
      }).showToast();
    }
  }

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Update My Profile
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex m-auto justify-center w-full max-w-xl">
            <form
              onSubmit={(event) =>
                handleSubmit(event, fullName, gender, age, weight, height)
              }
              className="card-body"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="full name"
                  className="input input-bordered"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <input
                  type="text"
                  placeholder="gender"
                  className="input input-bordered"
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  type="text"
                  placeholder="age"
                  className="input input-bordered"
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Weight</span>
                </label>
                <input
                  type="text"
                  placeholder="weight"
                  className="input input-bordered"
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Height</span>
                </label>
                <input
                  type="text"
                  placeholder="height"
                  className="input input-bordered"
                  value={height}
                  onChange={(event) => setHeight(event.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {" "}
                Update
              </button>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn btn-secondary">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
