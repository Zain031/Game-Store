import { error } from "console";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

function Login() {
  // const handleLogin = async (formData: FormData) => {
  //   "use server"

  //   const rawFormData = {
  //     email: formData.get("email"),
  //     password: formData.get("password")
  //   }

  //   const res = await fetch("http://localhost:3000/api/login", {
  //     method: "POST",
  //     cache: "no-store",
  //     headers: {
  //       "Content-type": "application/json"
  //     },
  //     body: JSON.stringify(rawFormData)
  //   })

  //   const result = await res.json()

  //   if (!res.ok) {
  //     redirect("/login?err=" + result.error);
  //   }

  //   cookies().set('Authorization', `Bearer ${result.data}`)

  //   redirect("/");
  // }

  return (
    <div className="bg-white flex justify-center items-center h-screen">
      <div className="p-10 rounded-md w-96 shadow-xl hover:shadow-2xl ">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
        <form action={""}>
          <div className="mb-4">
            <input
              placeholder="Email"
              type="text"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <input
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
       <Link href="/">   <button
            type="submit"
            className="bg-slate-900 hover:bg-slate-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Sign in
          </button></Link>
        </form>
       
        <Link href="/register">
          <div className="mt-6 text-slate-900 text-center">Sign up Here</div>
        </Link>
      </div>
    </div>
  );
}

export default Login;
