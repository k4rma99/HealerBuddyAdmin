"use client"

import Image from "next/image";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loading } from "./(shared)/loading";

import logo from "@/assets/logo-text-v24.png"

export default function Home() {

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter();
  const { data: session } = useSession();

  // Submit handler for Formik
  const handleSubmit = async () => {
    try {
      setLoading(true)
      // Sign in with NextAuth.js
      const signInData = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password
      });

      // console.log(signInData)
      if (session?.user) {
        localStorage.setItem("userId", session?.user.userId);
      }

      // console.log(session?.user)

      if (signInData?.error) {
        console.log(signInData?.error)
      } else {
        router.push(`/dashboard`)
      }


    } catch (error) {
      console.error('Sign-in error:', error);
      setError('Sign-in error: ' + error);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return <Loading />

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image src={logo} alt="" width={500} className="w-auto h-16" />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            {
              error ? <p className="text-sm text-red">{error}</p> : <></>
            }
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
