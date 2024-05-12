import React from 'react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

function Register() {
  const handleRegister = async (formData: FormData) => {
    'use server'
    try {
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        username: formData.get('username'),
        password: formData.get('password')
      }
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/users", {
        method: "POST",
        cache: "no-cache",
        headers: {
          "Content-type": 'application/json'
        },
        body: JSON.stringify(data)
      })
      const result = await response.json()

      if (!response.ok) {
        throw result
      }

    } catch (error: any) {
      console.log(error);
    }
    revalidatePath("/login")
    redirect("/login")
  }

  return (
    <div className="bg-white flex justify-center items-center h-screen">
      <div className="p-10 rounded-md w-96 shadow-xl hover:shadow-2xl">
        <h1 className="text-2xl font-semibold mb-4 text-center">Register</h1>
        <form action={handleRegister}>
          <div className="mb-4">
            <input
              placeholder='Name'
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <input
              placeholder='User Name'
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <input
              placeholder='Email'
              type="text"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <input
              placeholder='Password'
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="bg-slate-900 hover:bg-slate-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Sign up
          </button>
        </form>
        <p className="text-xs text-center font-light mt-4">
          Already have an account ?
          <Link href={"/login"} className="font-bold cursor-pointer text-blue-800 "> Sign in here</Link>
        </p>

      </div>
    </div>

  )
}

export default Register