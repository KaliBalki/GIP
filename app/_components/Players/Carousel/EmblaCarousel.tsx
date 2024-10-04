import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const router = useRouter(); // Initialize router

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Function to handle card click and navigate to /Player
  const handleCardClick = () => {
    router.push("/Player"); // Navigate to /Player programmatically
  };

  return (
    <section className="embla">
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div
              className="embla__slide cursor-pointer"
              key={index}
              onClick={handleCardClick}
            >
              <div className="p-2 block">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')",
                    }}
                  ></div>
                  <div className="flex flex-col text-white space-y-2">
                    <div className="font-semibold">Player Name</div>
                    <div className="font-light">Number</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </section>
  );
};

export default EmblaCarousel;
