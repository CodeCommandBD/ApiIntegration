import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

const LOGIN_URL = "/api/auth/login";

const schema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginAndAuthWithAxios = () => {
  const { setAuth } = useContext(AuthContext);
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setServerError(""); // Clear previous server errors
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ userName: data.username, password: data.password }),
        {
          headers: {
            "Content-Type": "application/json",
            withCredentials: true,
          },
        }
      );
      console.log(JSON.stringify(response.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({
        userName: data.username,
        password: data.password,
        accessToken,
        roles,
      });

      reset();
      setSuccess(true);
    } catch (error) {
      if (!error.response) {
        setServerError("No Server Response");
      } else if (error.response.status === 400) {
        setServerError("Missing username or password");
      } else if (error.response.status === 401) {
        setServerError("Unauthorized");
      } else {
        setServerError("Server Error");
      }
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <a href="#">Go to home</a>
        </section>
      ) : (
        <section>
          {/* Global Server Error */}
          {serverError && (
            <p className="text-red-500 mb-4 font-bold" aria-live="assertive">
              {serverError}
            </p>
          )}

          <h1 className="text-2xl font-bold mb-4">Sign In</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                {...register("username")}
                className={`border p-2 rounded ${
                  errors.username ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                {...register("password")}
                className={`border p-2 rounded ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </section>
      )}
    </>
  );
};

export default LoginAndAuthWithAxios;
