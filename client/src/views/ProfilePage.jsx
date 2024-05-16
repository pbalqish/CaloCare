import UpdateProfile from "../components/UpdateProfile";
import WeightStatus from "../components/WeightStatus";

export default function HomePage() {
  return (
    <>
      <div className="hero min-h-full my-20">
        <div className="card w-full max-w-lg p-5 gap-5 shadow-2xl bg-base-100">
          <div className="flex flex-col gap-2">
            <h1 className="text-primary text-2xl">Full Name :</h1>
            <h1 className="text-primary text-2xl">Gender :</h1>
            <h1 className="text-primary text-2xl">Age :</h1>
            <h1 className="text-primary text-2xl">Weight :</h1>
            <h1 className="text-primary text-2xl">Height :</h1>
          </div>
          <div className="flex gap-2 justify-end items-center">
            <WeightStatus />
            <UpdateProfile />
          </div>
        </div>
      </div>
    </>
  );
}
