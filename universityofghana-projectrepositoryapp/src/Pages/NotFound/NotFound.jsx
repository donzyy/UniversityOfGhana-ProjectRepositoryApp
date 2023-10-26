import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
      
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-40 w-auto"
        src="/UGRepositoryLogo.png"
        alt="Your Company"
      />
      </div>
      </div>
      <p className="text-base font-semibold text-LegonGold">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
      <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          to="/"
          className="rounded-md bg-LegonBlue hover:bg-LegonGold px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back home
        </Link>
        <a href="#" className="text-sm font-semibold text-LegonGold hover:text-LegonBlue">
          Contact support <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </main>
  )
}

export default NotFound
