// src/components/LandingPage.js
import React from 'react';
import Link from 'next/link';
import style from "../"

const LandingPage = ({ loggedIn }) => {
  return (
    <div className={`${styles.landingpageContainer} backdrop-blur flex flex-col items-center justify-center min-h-screen px-4 md:px-6`}>
      <div className={`${styles.backdropBlur} max-w-md w-full space-y-6 text-center p-8 rounded-lg bg-black bg-opacity-40`}>
        <h1 className="text-3xl font-bold tracking-tight text-white text-[30px]">Welcome to ECOSYNERGY</h1>
        <p className="text-white">
    ......ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </p>
        <Link
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#3b82f6] hover:bg-[#2563eb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563eb]"
          href={loggedIn ? "/companydetails" : "/login"}
        >
          {loggedIn ? "Explore" : "Login"}
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
