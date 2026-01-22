import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="h-screen flex items-center justify-center p-[5vw]"
    >
      <div className="w-150 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white">

        <h2 className="text-2xl font-semibold text-center mb-6">
          Login <span className="text-blue-400">Chat-App</span>
        </h2>

        <div className="space-y-4">
          <div>
            <label className="text-sm opacity-80">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full mt-1 px-3 py-2 rounded-md bg-black/30 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm opacity-80">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full mt-1 px-3 py-2 rounded-md bg-black/30 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Link to='/signup' className="text-sm opacity-70 cursor-pointer hover:underline">
            Don’t have an account?
          </Link>

          <button className="w-full mt-2 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
