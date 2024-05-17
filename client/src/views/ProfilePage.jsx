import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfile } from "../features/profile/profileSlicer";
import Toastify from "toastify-js";
import UpdateProfile from "../components/UpdateProfile";
import WeightStatus from "../components/WeightStatus";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { profile, error } = useSelector((state) => state.profileSlice);
  console.log(profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  useEffect(() => {
    if (error) {
      Toastify({
        text: error,
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
  }, [error]);

  return (
    <>
      <div className="hero min-h-full my-20">
        <div className="card w-full max-w-lg p-5 gap-5 shadow-2xl bg-base-100">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl">
              Full Name :&nbsp; {profile?.data?.fullName}
            </h1>
            <h1 className="font-semibold text-2xl">
              Gender :&nbsp;{profile?.data?.gender}
            </h1>
            <h1 className="font-semibold text-2xl">
              Age :&nbsp;{profile?.data?.age}
            </h1>
            <h1 className="font-semibold text-2xl">
              Weight :&nbsp;{profile?.data?.weight}
            </h1>
            <h1 className="font-semibold text-2xl">
              Height :&nbsp;{profile?.data?.height}
            </h1>
          </div>

          <div className="flex gap-2 justify-end items-center">
            <WeightStatus
              profile={profile}
              onClick={() => navigate("/myprofile")}
            />
            <UpdateProfile
              profile={profile}
              onClick={() => navigate("/myprofile")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
