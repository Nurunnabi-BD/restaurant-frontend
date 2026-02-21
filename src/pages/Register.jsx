import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create an Account
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            />
          </div>

          <button className="w-full bg-primary text-white py-2 rounded hover:opacity-90">
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
