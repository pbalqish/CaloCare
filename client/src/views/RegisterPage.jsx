export default function RegisterPage() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        {/* <div className="hero-content"> */}
        <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="full name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label m-auto">
                <p>
                  Already have an account? &nbsp;
                  <span className="link link-primary">Login</span>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
