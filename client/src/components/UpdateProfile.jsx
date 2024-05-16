import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
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
            <form onSubmit={(event) => {}} className="card-body">
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
            </form>
          </div>
          <div className="modal-action">
            <button className="btn btn-primary"> Update</button>
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
