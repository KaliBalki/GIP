"use client";

import React, { useState, useRef, useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      const contentEl = contentRefs.current[openIndex];
      if (contentEl) {
        const scrollHeight = contentEl.scrollHeight;
        contentEl.style.maxHeight = `${scrollHeight}px`;
      }
    }
  }, [openIndex]);

  const toggleOpen = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const handleTransitionEnd = (index: number) => {
    if (openIndex !== index && contentRefs.current[index]) {
      contentRefs.current[index]!.style.maxHeight = "0px";
    }
  };

  return (
    <>
      <div className="flex text-center justify-center md:pt-24 pt-36 md:mb-7">
        <div className="md:text-7xl !leading-relaxed text-3xl font-bold text-transparent bg-clip-text bg-[linear-gradient(to_right,#6bff6b)] bg-[length:200%_auto] hover:animate-gradient Grotesk">
         Veelgestelde Vragen
        </div>
      </div>
      <section className="w-full divide-y divide-[#3b3b3b] rounded-full 2xl:px-56 xl:px-44 lg:px-36 md:px-28 px-7">
        {faqData.map((item, index) => (
          <div key={index} className="group p-4 md:py-8 py-6">
            <summary
              className="relative flex cursor-pointer list-none gap-4 pr-8 font-medium text-white focus-visible:outline-none [&::-webkit-details-marker]:hidden"
              onClick={() => toggleOpen(index)}
            >
              <h1 className="text-xl md:text-2xl font-medium">
                {item.question}
              </h1>
            </summary>
            <div
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              onTransitionEnd={() => handleTransitionEnd(index)}
              className={`overflow-hidden transition-[max-height] duration-500 ease ${
                openIndex === index ? "max-h-[1000px] " : "max-h-0 p-0"
              }`}
              style={{
                maxHeight:
                  openIndex === index
                    ? `${contentRefs.current[index]?.scrollHeight}px`
                    : "0px",
                transition: "max-height 0.5s ease",
                overflowY: "hidden",
              }}
            >
              <p className="mt-4 text-sm md:text-base text-white font-light leading-6">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

const faqData: FAQItem[] = [
  {
    question: "Wat is Cora Central?",
    answer:
      "Cora Central is een competitieve voetbalcompetitie die wordt gehost op Discord, waar spelers van over de hele wereld kunnen deelnemen, teams kunnen vormen en kunnen strijden in spannende wedstrijden en toernooien.",
  },
  {
    question: "Waar kan ik meedoen aan Cora Central?",
    answer:
      "Je kunt ons contacteren. En dan Volg de instructies in het welkomstkanaal om je te registreren en een team te vormen.",
  },
  {
    question: "Is er een registratiekost om deel te nemen aan de competitie?",
    answer:
      "Nee, deelname aan Cora Central is gratis. We willen dat iedereen de kans krijgt om deel te nemen en te genieten van de competitie.",
  },
  {
    question: "Zijn er verschillende vaardigheidsniveaus of divisies in de competitie?",
    answer:
      "Ja, we hebben divisies gebaseerd op vaardigheidsniveaus, zodat spelers van alle niveaus een eerlijke en leuke ervaring hebben. Nieuwe spelers beginnen in de instapdivisie en kunnen opklimmen naarmate ze beter worden.",
  },
];
