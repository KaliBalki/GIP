"use client";

import { useSearchParams, useRouter } from "next/navigation"; // Import useRouter for navigation
import { useState, useEffect } from "react";
import Titles from "@/app/_components/Overall/Titles/Titles";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import { FaLink } from "react-icons/fa";
import Button from "@/app/_components/Overall/Buttons/Buttons";

const CompleteVerificationPage = () => {
  const searchParams = useSearchParams();
  const steamId = searchParams.get("steamId");
  const steamName = searchParams.get("steamName");
  const discordId = searchParams.get("discordId");
  const router = useRouter(); // For redirection

  const [linkStatus, setLinkStatus] = useState("pending");
  const [isLinkToggled, setIsLinkToggled] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // For displaying error messages
  const [countdown, setCountdown] = useState(10); // Set countdown to 10 seconds

  // Handle toggling the link
  const handleLinkToggle = () => {
    setIsLinkToggled((prev) => !prev);
    setErrorMessage("");
  };

  // Handle linking accounts with the backend
  const handleLinkAccounts = async () => {
    if (!isLinkToggled) {
      setErrorMessage("Please click the Link icon to enable linking.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/free-agents/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            discordId,
            steamName,
            steamProfileLink: `https://steamcommunity.com/profiles/${steamId}`,
            steamId,
          }),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        setLinkStatus("success");
        // Start countdown for redirect
        const timer = setInterval(() => {
          setCountdown((prev) => prev - 1);
        }, 1000);
        setTimeout(() => {
          clearInterval(timer);
          router.push("/"); // Redirect to homepage after countdown
        }, 10000); // 10-second timeout for redirection
      } else {
        setLinkStatus("error");
        setErrorMessage(
          responseData.message || "Error linking accounts. Please try again."
        );
      }
    } catch (error) {
      setLinkStatus("error");
      setErrorMessage("Error linking accounts. Please try again.");
    }
  };

  return (
    <div className="mb-56">
      <div>
        <Titles
          title="Link Accounts"
          subtitle=""
          description="Please confirm that you are linking these accounts."
        />
        <div className="flex items-center justify-around px-96  mt-16">
          <div className="w-fit">
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">
                Steam Account
              </h4>
              <p className="text-sm text-muted-foreground">
                Your Steam account that will be linked.
              </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>{steamName}</div>
              <Separator orientation="vertical" />
              <div>{steamId}</div>
            </div>
          </div>

          <Toggle
            aria-label="Toggle link"
            size="lg"
            pressed={isLinkToggled}
            onPressedChange={handleLinkToggle}
            className={isLinkToggled ? "bg-green-500" : "bg-transparent"}
          >
            <FaLink size={24} />
          </Toggle>

          <div className="w-fit">
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">
                Discord Account
              </h4>
              <p className="text-sm text-muted-foreground">
                Your Discord account that will be linked.
              </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>{steamName}</div>
              <Separator orientation="vertical" />
              <div>{discordId}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-white mt-20">
        {linkStatus === "pending" && (
          <>
            <Button variant="learnMore" onClick={handleLinkAccounts}>
              Link Accounts
            </Button>
            {errorMessage && (
              <p className="text-red-500  text-sm font-extralight mt-2">
                {errorMessage}
              </p>
            )}
          </>
        )}

        {linkStatus === "success" && (
          <p>
            Accounts successfully linked! Go back to the Discord server. <br />
            Redirecting to the homepage in{" "}
            <span className="underline">{countdown}</span> seconds...
          </p>
        )}

        {linkStatus === "error" && (
          <p className="text-red-500  text-sm font-extralight mt-2">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default CompleteVerificationPage;
