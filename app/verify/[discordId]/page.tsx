"use client";

import { useParams } from "next/navigation";
import Image from "next/image"; // Import Next.js Image component for optimized images
import { useState } from "react";

const VerifyPage = () => {
  const { discordId } = useParams();
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleImageClick = () => {
    if (discordId) {
      setIsRedirecting(true);
      const backendURL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/steam/verify/${discordId}`;
      window.location.href = backendURL;
    }
  };

  return (
    <div className="text-center text-white ">
      <>
        <div className=" justify-around flex lg:mt-0 mt-10 lg:flex-row-reverse  flex-col  items-center">
          <div
            className="p-10  border-2 border-transparent rounded-lg"
            style={{
              borderImage: "linear-gradient(45deg, #7c51af, #f56112) 1",
              backgroundColor: "#121212",
              borderRadius: "1rem",
            }}
          >
            <h1 className="text-3xl font-bold">Verify with Steam</h1>
            <h1 className="text-base mt-2 font-extralight opacity-70 leading-tight">
              Become a part of our community, simply
              <br /> click on the Steam icon. This will verify <br /> your
              identity and securely link your Steam <br /> account to your
              Discord profile, allowing you <br />
              to fully participate in all our activities. <br /> We look forward
              to having you in our league!
            </h1>
          </div>
          <Image
            src="/steam-logo.png"
            alt="Click to Verify with Steam"
            width={819}
            height={671}
            className="cursor-pointer my-20 opacity-50 hover:opacity-100 transition-opacity duration-300"
            onClick={handleImageClick}
          />
        </div>
      </>
    </div>
  );
};

export default VerifyPage;
