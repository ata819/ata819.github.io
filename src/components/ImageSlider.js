import React, {useState} from 'react';
import { ImagesData } from "../data";
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className=' px-16 slider'>
            {ImagesData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (
                        <img src={slide.image} alt='Website Photos' className=' w-700 h-600px' />)
                        }
                    </div>
                );
            })}
            <ArrowCircleLeftIcon className='absolute left-0 mx-1 h-24 w-24' onClick={prevSlide}/>
            <ArrowCircleRightIcon className='absolute right-0 mx-1 h-24 w-24' onClick={nextSlide}/>
        </section>
    )

};

export default ImageSlider;