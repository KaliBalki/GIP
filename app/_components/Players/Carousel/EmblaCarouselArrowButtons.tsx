import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
<svg
  width="23"
  height="46"
  viewBox="0 0 23 46"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M22.3333 45.0833L0.25 23L22.3333 0.916664V45.0833Z"
    fill="url(#limeGradient)"
  />
  <defs>
    <linearGradient
      id="limeGradient"
      x1="11.2917"
      y1="0.916664"
      x2="11.2917"
      y2="45.0833"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#A6FF4D" />  {/* Light lime */}
      <stop offset="1" stopColor="#32CD32" />  {/* Lime green */}
    </linearGradient>
  </defs>
</svg>

      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next "
      type="button"
      {...restProps}
    >
<svg
  width="23"
  height="46"
  viewBox="0 0 23 46"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0.166992 45.0833V0.916664L22.2503 23L0.166992 45.0833Z"
    fill="url(#limeGradient)"
  />
  <defs>
    <linearGradient
      id="limeGradient"
      x1="11.2087"
      y1="0.916664"
      x2="11.2087"
      y2="45.0833"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#A6FF4D" />  {/* Light lime */}
      <stop offset="1" stopColor="#32CD32" />  {/* LimeGreen */}
    </linearGradient>
  </defs>
</svg>

      {children}
    </button>
  );
};
