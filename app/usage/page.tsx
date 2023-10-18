import Link from 'next/link';
import React from 'react';

const HowToUseGuide = () => {
  return (
    <div className="bg-white p-8 mt-10">
      <h1 className="text-2xl font-bold text-pink-600 mb-4 text-center">How to Use Autofill AI</h1>
    

      <ol className="max-w-lg mx-auto">
      <p className="text-gray-600 font-bold mb-2">
        After installing and completing the setup:
      </p>
        <li className="mb-4">
          <strong className="text-pink-600">Step 1:</strong>
          <p>
            Log in to the elearning portal. <br /> (This is the portal where you take online Exams or CATs or Quizes.)
          </p>
        </li>
        <li className="mb-4">
          <strong className="text-pink-600">Step 2:</strong>
          <p>
            Go to an online Exam and open it.
          </p>
        </li>
        <li className="mb-4">
          <strong className="text-pink-600">Step 3:</strong>
          <p>
            Click on the lightbulb icon on the bottom right of the screen.
          </p>
        </li>
        <li className="mb-4">
          <strong className="text-pink-600">Step 4:</strong>
          <p>
            Choose &quot;Autofill Quiz&quot; from the options that appear.
          </p>
        </li>
        <li className="mb-4">
          <strong className="text-pink-600">Step 5:</strong>
          <p>
            Accept any instructions that appear.
          </p>
        </li>
        <li className="mb-4">
          <strong className="text-pink-600">Step 6:</strong>
          <p>
            Autofill will indicate Loading notes, then it will start thinking. It takes just a few seconds and it will automatically fill the correct answer for the quiz.
          </p>
        </li>

        <div className="mt-8">
        <p>For installation instructions, visit the <Link href="/install" className="text-blue-600 hover:underline">Installation Page</Link>.</p>
        <p>For setup details, visit the <Link href="/setup" className="text-blue-600 hover:underline">Setup Page</Link>.</p>
      </div>
      </ol>

     
    </div>
  );
};

export default HowToUseGuide;
