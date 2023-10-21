"use client";

import Link from "next/link";
import React, { useState } from "react";

const TermsAlert = () => {
  const [showPopup, setShowPopup] = useState(true);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 lg:ml-[137px]">
          <div className="bg-pink-600 p-4 rounded-sm text-white text-center m-2 ">
            <h2 className="text-2xl font-bold mb-2">Terms and Conditions</h2>
            <p className="text-lg">
              By using Autofill, you agree to the{" "}
              <Link
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline"
              >
                Terms and Conditions
              </Link>
            </p>
            <button
              className="bg-pink-600 text-white px-4 py-2 mt-4 rounded-full hover:bg-pink-700 focus:outline-none border"
              onClick={togglePopup}
            >
             Agree and Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermsAlert;
