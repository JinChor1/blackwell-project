"use client";
import './carousel.css'
import useEmblaCarousel from 'embla-carousel-react';

type CarouselProps = {
    slides: Array<React.ReactNode>
}

export default function Carousel({slides}: CarouselProps) {
    const [emblaRef] = useEmblaCarousel({ loop: false})
    
    return (
        <div className='flex justify-center'>
            <div className="embla text-white" ref={emblaRef}>
                <div className="embla__container my-5 max-w-[1500px]">
                {slides.map((each,index) => (
                    <div className="embla__slide" key={'carousel-'+index}>
                        {each}
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}
