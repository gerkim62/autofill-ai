import Link from "next/link";
import React from "react";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";

const InstallationGuide = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto p-8 mt-10 lg:mt-5">
       

        <h1 className="text-xl lg:text-2xl font-bold max-w-lg mx-auto">
          How to Install Autofill AI on Android Phone
        </h1>

    

        <h2 className="text-sm font-bold mb-4 mt-2 max-w-lg mx-auto">
          Follow these steps carefully:
        </h2>

        <div className="max-w-md mx-auto bg-pink-100 rounded-md p-4 shadow-lg">
          <p>
            If you want to install Autofill on Laptop or Computer,{" "}
            <a className="underline text-pink-500" href="#">
              watch this short video
            </a>
          </p>
        </div>

        <ol className="list-decimal pl-8 mx-auto max-w-lg">
          <li className="mb-4">
            <strong className="font-semibold text-pink-600">
              Download the AI Zip File
            </strong>
            <p>
              <a
                href="/files/Autofill-File-v4.zip"
                download
                className="flex items-center text-blue-600 hover:underline my-2"
              >
                Click to Download Autofill AI file
                <FaDownload className="ml-2" />
              </a>
            </p>
            <p className="text-sm text-gray-500">
              Keep the downloaded file as it is; do not open or extract it.
            </p>
          </li>

          <li className="mb-4">
            <strong className="font-semibold text-pink-600">
              Get Kiwi Browser from Play Store
            </strong>
            <p>
              <a
                href="https://play.google.com/store/apps/details?id=com.kiwibrowser.browser&amp;pcampaignid=web_share"
                target="_blank"
                className="flex items-center text-blue-600 hover:underline my-2"
              >
                Click to download Kiwi Browser
                <FaExternalLinkAlt className="ml-2 " />
              </a>
            </p>
            <p className="text-sm text-gray-500">
              Open the Kiwi Browser on your Android device.
            </p>
            <img src="/img/kiwi.jpg" alt="Kiwi Browser Illustration" />
          </li>

          <li className="mb-4">
            <strong className="font-semibold text-pink-600">Access Menu</strong>
            <p>Tap the three-dot menu icon in the top-right corner.</p>
            <img src="/img/dot-dot.jpg" alt="Kiwi Browser Menu icon" />
          </li>

          <li className="mb-4">
            <strong className="font-semibold text-pink-600">
              Select Extensions
            </strong>
            <p>Choose &quot;Extensions&quot; from the menu.</p>
            <img src="/img/extensions.jpg" alt="Kiwi Browser Extensions" />
          </li>

          <li className="mb-4">
            <strong className="font-semibold text-pink-600">
              Enable Developer Mode
            </strong>
            <p>Turn on &quot;Developer mode&quot; using the switch.</p>
            <img src="/img/dev-mode.jpg" alt="Kiwi Browser developer mode" />
          </li>

          <li className="mb-4">
            <strong className="font-semibold text-pink-600">
              Load Unpacked Extension
            </strong>
            <p>
              Click the{" "}
              <span className="whitespace-no-wrap">
                &quot;+(from .zip/.crx/.user.js)&quot;
              </span>{" "}
              button.
            </p>
            <img src="/img/from-zip.jpg" alt="Kiwi Browser open zip" />
          </li>

          <li className="mb-4">
            <strong className="font-semibold text-pink-600">
              Select ZIP File
            </strong>
            <p>Find the downloaded ZIP file and select it.</p>
            <img src="/img/downloaded.jpg" alt="downloaded file" />
          </li>

          <li className="mb-4">
            <strong className="font-semibold text-pink-600">Set it Up</strong>
            <p>
              On completing the above step, it should automatically take you to
              the{" "}
              <Link className="font-bold text-blue-500 underline" href="/setup">
                Setup Page
              </Link>{" "}
              which has instructions on how to set it up.
            </p>
          </li>
        </ol>

        <footer className="mt-8 max-w-lg mx-auto">
          <p>
            If you face any issues during installation, contact me on WhatsApp:
            <a
              href="mailto:developer.gerison@gmail.com"
              className="text-pink-600 hover:underline"
            >
              +254715870654
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default InstallationGuide;
