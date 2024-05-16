import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <div className="navbar bg-primary text-primary-content">
        <div className="flex-1 mx-10">
          <Link
            to="/"
            className="btn btn-ghost text-3xl text-white underline decoration-wavy"
          >
            CaloCare
          </Link>
        </div>
        <div className="flex-none mx-10">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.pinimg.com/564x/eb/c5/5b/ebc55b8062883e4a4f2efe225bbf6d7c.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/myprofile" className="justify-between">
                  My Profile
                </Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
