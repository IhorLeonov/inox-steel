'use client';

import cn from 'classnames';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback } from 'react';

import { NextButton, PrevButton, usePrevNextButtons } from './ArrowButtons';

type EmblaCarouselProps = {
  options?: EmblaOptionsType;
  slides: { id: number; image: string; alt: string }[];
  className?: string;
};

const EmblaCarousel = ({ slides, options, className }: EmblaCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <div className={cn('embla', className)}>
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map(({ id, image, alt }) => (
            <div className="embla__slide" key={id}>
              <Image
                className="corner-radius"
                src={image}
                alt={alt}
                width={852}
                height={852}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-3">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
};

export default EmblaCarousel;
