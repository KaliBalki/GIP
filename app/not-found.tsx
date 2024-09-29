import Link from "next/link";
import React from "react";
import Button from "./_components/Overall/Buttons/Buttons";
const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col p-32">
      <h1 className="text-8xl font-bold text-white ">PAGE NOT FOUND</h1>
      <Link href="/">
        <Button className="mt-9" variant="joinUs">
          Return Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
