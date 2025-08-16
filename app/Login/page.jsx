"use client";

import { useState } from "react";

function LoginPage() {
  const [login, setLogin] = useState(true);

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[500px] p-3">
          <h1 className="font-bold text-center text-4xl m-3">
            {login ? "Sign In" : "Sign Up"}
          </h1>

          <div className=" p-2">
            <form className=" flex  flex-col gap-1" action="">
              {!login && (
                <>
                  <div className="flex flex-col gap-1">
                    <label
                      className="text-2xl font-semibold"
                      htmlFor="username"
                    >
                      {" "}
                      User Name{" "}
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Enter username"
                      className="border p-2 rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-2xl font-semibold" htmlFor="number">
                      {" "}
                      Phone No{" "}
                    </label>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      placeholder="Enter number"
                      className="border p-2 rounded-lg"
                    />
                  </div>
                </>
              )}
              <div className="flex flex-col gap-1">
                <label className="text-2xl font-semibold" htmlFor="email">
                  {" "}
                  Email{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  className="border p-2 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-2xl font-semibold" htmlFor="password">
                  {" "}
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  className="border p-2 rounded-lg"
                />
              </div>

              <div className="flex justify-between px-4 text-sm">
                <p>
                  {login && (
                    <p className=" underline underline-offset-2">
                      forget password
                    </p>
                  )}
                </p>
                <div onClick={() => setLogin((prev) => !prev)}>
                  {login ? (
                    <p>
                      have'nt account{" "}
                      <span className="text-blue-700 cursor-pointer font-bold">
                        sign up
                      </span>
                    </p>
                  ) : (
                    <p>
                      have an account?{" "}
                      <span className="text-blue-700 cursor-pointer font-bold">
                        sign in
                      </span>
                    </p>
                  )}
                </div>
              </div>

              <input
                className="bg-gray-500 hover:bg-gray-400 text-white font-semibold w-full p-2 rounded-lg cursor-pointer"
                type="submit"
                name="submit"
                id="submit"
                value={login ? "Login" : "Get Registered "}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
