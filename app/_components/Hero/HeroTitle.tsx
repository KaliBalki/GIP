import React from "react";
import Button from "../Buttons/Buttons";

const HeroTitle = () => {
  return (
    <div className="relative z-10 w-1/2 flex flex-col justify-center  pt-40">
      <h1 className="text-8xl font-bold leading-tight mb-4 text-TitleColor">
        Pass With
        <br />
        Precision, Make
        <br />
        The Right Decision
      </h1>
      <p className="text-lg mb-8 text-zinc-400 font-light">
        Where every play matters, and every player shines.
        <br />
        Welcome to eField.
      </p>
      <div className="flex space-x-4">
        <Button
          variant="joinUs"
          onClick={() => alert("Maak de video van after effect af")}
        >
          Join us!
        </Button>
        <Button variant="learnMore" onClick={() => alert("ali homo")}>
          Learn more &rarr;
        </Button>
      </div>
    </div>
  );
};

export default HeroTitle;
