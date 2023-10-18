import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const page = () => {
  return (
    <div className="container mx-auto p-8 mt-10 mb-30 max-w-md">
      <h1 className="text-2xl font-bold">Welcome to Autofill AI!</h1>
      <p className="text-sm font-bold mb-4">Set up the AI with these steps:</p>

      <ol className="list-decimal max-w-500 mx-auto pl-8">
        <li className="mb-4">
          <strong className="font-semibold text-pink-600">Step 1:</strong>
          <span className="text-gray-500">(First-time setup)</span>
          <p>
            <a
              href="https://chat.openai.com/chat"
              target="_blank"
              className="text-blue-600 hover:underline flex"
            >
              Click here to Log in to ChatGPT
              <FaExternalLinkAlt className="ml-2" />
            </a>{" "}
            This step is <span className="font-bold">required</span> to get access to the AI.
          </p>
        </li>
        <li className="mb-4 max-w-lg">
          <strong className="font-semibold text-pink-600">Step 2:</strong>
          <p className="text-base">
            Check if autofill is working well.
            <a
              href="https://elearning-emu.vercel.app/quiz1.html"
              target="_blank"
              className="text-blue-600 hover:underline flex"
            >
             Click here to go to Test Quiz
              <FaExternalLinkAlt className="ml-2" />
            </a>
           Once you are on the quiz page, click on the lightbulb icon on the bottom right of the screen and choose the "Autofill Quiz" button. If the AI fills the quiz correctly, you are good to go!
          </p>
        </li>
        <li className="mb-4">
          <strong className="font-semibold text-pink-600">Step 3:</strong>
          <p>Proceed to the real quiz if autofill works.</p>
        </li>
        <li>
          Join the{" "}
          <a
            href="https://chat.whatsapp.com/Euwr2MUQHY8KmKTg4vIHcm"
            target="_blank"
            className="text-blue-600 hover:underline flex"
          >
            Autofill AI WhatsApp Group
            <FaExternalLinkAlt className="ml-2" />
          </a>{" "}
          for updates!
        </li>
      </ol>
    </div>
  );
};

export default page;
