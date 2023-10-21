import Link from 'next/link';
import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-white flex items-center justify-center mt-20">
      <div className="text-center">
        <h1 className="sm:text-4xl text-2xl font-bold text-pink-500 mb-4">Welcome to Autofill AI</h1>
        <p className="text-gray-600 text-lg mb-8">Your Ultimate Study Companion</p>
        <p className="text-gray-800 text-xl mb-8">
          Autofill AI is a powerful tool designed to help you excel in your studies.
        </p>
        <div className="mb-12">
          <Link
            href="/install"
            className="bg-pink-500 text-white px-6 py-3 rounded-md font-medium text-lg mr-4 hover:bg-pink-600 transition duration-300 ease-in-out"
          >
            How to Install
          </Link>
          <Link
            href="/faq"
            className="border border-pink-500 text-pink-500 px-6 py-3 rounded-md font-medium text-lg hover:bg-pink-100 hover:border-pink-600 transition duration-300 ease-in-out"
          >
            FAQ
          </Link>
        </div>
  
        <p className="text-gray-600 text-sm">
          By using Autofill AI, you agree to our   <a
            href="https://autofillai.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline whitespace-nowrap"
          >
            Terms and Conditions
          </a>.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
