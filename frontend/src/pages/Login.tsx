import { login } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const mutation = useMutation(() => login(username, password), {
    onSuccess: () => {
      navigate("/");
    },
    onError: () => {
      setError(true);
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate();
  };

  return (
    <div
      className="flex items-center justify-center"
      style={{
        height: "calc(100vh - 150px)",
      }}
    >
      <form
        className="rounded bg-white px-8 pb-8 pt-6 shadow-md"
        style={{
          width: "90%",
          maxWidth: "400px",
        }}
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <small className=" text-sm text-gray-400 ">
            (username and password are both <strong>admin</strong>)
          </small>
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          Ss
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`appearance-none border shadow ${
              error ? "border-red-500" : ""
            } focus:shadow-outline mb-3 w-full rounded px-3 py-2 leading-tight text-gray-700 focus:outline-none`}
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {error && (
            <p className="text-xs italic text-red-500">
              Please choose a password.
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
