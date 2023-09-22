import { login } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login(username, password);
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="flex justify-center items-center"
    style={{
        height: "calc(100vh - 150px)",
    }}>
        <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8"
            style={{
                width: "90%",
                maxWidth: "400px",
            }}
            onSubmit={handleSubmit}
        >
            <div className="mb-4">
                <small className=" text-gray-400 text-sm ">
                    (username and password are both <strong>admin</strong>)
                </small>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            Ss</div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className={`shadow appearance-none border ${
                        error ? "border-red-500" : ""
                    } rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                    id="password"
                    type="password"
                    placeholder="******************"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                {error && (
                    <p className="text-red-500 text-xs italic">
                        Please choose a password.
                    </p>
                )}
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Sign In
                </button>
            </div>
      </form>
    </div>
  );
}
