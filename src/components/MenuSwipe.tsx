import React, { useRef, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide, SwiperRef } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type Props = { tailwindColors: string[] }

function MenuSwipe({ tailwindColors }: Props) {
    const [selectedCategory, setSelectedCategory] = useState(tailwindColors[0])
    const colorRefs = useRef<(HTMLDivElement | null)[]>([]); // Refs array for colors
    const containerRef = useRef<(HTMLDivElement | null)>(null);
    const swiperRef = useRef<SwiperClass | null>(null); // Swiper ref for controlling

    const handleSwipe = (direction: 'left' | 'right') => {
        const currentIndex = tailwindColors.indexOf(selectedCategory);
        let newIndex;

        if (direction === 'right') {
            newIndex = currentIndex === 0 ? tailwindColors.length - 1 : currentIndex - 1;
        } else {
            newIndex = currentIndex === tailwindColors.length - 1 ? 0 : currentIndex + 1;
        }

        const newColor = tailwindColors[newIndex];
        setSelectedCategory(newColor);

        colorRefs.current[newIndex]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
        });

        const containerWidth = containerRef.current?.scrollWidth || 0;
        const scrollToPosition = newIndex / tailwindColors.length * containerWidth;

        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: scrollToPosition,
                top: 0,
                behavior: 'smooth'
            });
        }

        // Slide to the new index in Swiper
        swiperRef.current?.slideTo(newIndex);
    };

    const handleCategory = (color: string) => {
        let newIndex = tailwindColors.indexOf(color)
        setSelectedCategory(color);

        // Slide to the new index in Swiper
        swiperRef.current?.slideTo(newIndex);
        colorRefs.current[newIndex]?.scrollIntoView({ behavior: 'smooth', block: 'end' }) //block: 'end'  for scroll top
    }

    return (
        <>
            {/* category */}
            <div className='max-h-16 h-full w-fullp-2'>
                <div className='w-full h-full bg-green-100 flex gap-x-3 justify-start'>
                    {tailwindColors.map((color, index) => (
                        <div
                            ref={el => colorRefs.current[index] = el}
                            onClick={() => handleCategory(color)}
                            key={index}
                            className="bg-white w-full h-full p-1">
                            <div className={`${color} w-full h-full ${color === selectedCategory ? '-translate-y-2' : ""}`}>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div aria-labelledby='con' className='w-full bg-red-50 h-full p-2 overflow-scroll'>
                <Swiper

                    className='w-full h-full'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper: SwiperClass) => { swiperRef.current = swiper }}
                    onSlideChange={(swiper: SwiperClass) => {
                        setSelectedCategory(tailwindColors[swiper.activeIndex])
                        colorRefs.current[swiper.activeIndex]?.scrollIntoView({ behavior: 'smooth', block: 'end' })
                    }}
                >
                    {tailwindColors.map((c, index) => (
                        <SwiperSlide key={index} className={'min-w-full overflow-y-scroll '}>
                            <div className='w-0 ' ref={el => colorRefs.current[index] = el}></div>
                            <div className={'w-full h-full ' + c}>
                            </div>
                            <div className={'w-full h-full ' + c}>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default MenuSwipe;
