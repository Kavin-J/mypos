import React, { useRef, useState } from 'react'

type Props = { tailwindColors: string[] }

function MenuSwipe({ tailwindColors }: Props) {
    const [selectedCategory, setSelectedCategory] = useState(tailwindColors[0])
    const colorRefs = useRef<(HTMLDivElement | null)[]>([]); // Refs array for colors
    const containerRef = useRef<(HTMLDivElement | null)>(null); // Refs array for colors


    const [touchStartX, setTouchStartX] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {

        setTouchStartX(e.changedTouches[0].clientX);
    };
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

        // Scroll to the selected color
        colorRefs.current[newIndex]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
        });
        console.log(containerRef.current?.scrollWidth);
        const containerWidth = containerRef.current?.scrollWidth || 0;
        const scrollToPosition = newIndex / tailwindColors.length * containerWidth;

        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: scrollToPosition,
                top: 0,
                behavior: 'smooth'
            });
        }


    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        const currentIndex = tailwindColors.indexOf(selectedCategory)
        if (touchStartX) {
            console.log(touchStartX);
            const touchEndX = e.changedTouches[0].clientX
            console.log(touchEndX);
            const isSlide = (Math.abs(touchEndX - touchStartX) > 24)
            console.log(Math.abs(touchEndX - touchStartX));
            if (isSlide) {

                const direction = touchEndX < touchStartX ? 'left' : 'right';
                console.log(direction);
                handleSwipe(direction)
            }



        }


    };


    return (
        <>
            {/* category */}
            <div className='max-h-16 h-full w-full bg-slate-400 p-2'>
                <div className='w-full h-full bg-green-100 flex gap-x-3 justify-start'>
                    {tailwindColors.map((color, index) => (
                        <div
                            ref={el => colorRefs.current[index] = el}
                            onClick={() => {
                                let newIndex = tailwindColors.indexOf(color)

                                const newColor = tailwindColors[newIndex];
                                setSelectedCategory(newColor);
                                colorRefs.current[newIndex]?.scrollIntoView({
                                    behavior: 'smooth',
                                    inline: 'center'

                                });

                            }}
                            key={index}
                            className="bg-white w-full h-full p-1">
                            <div className={`${color} w-full h-full ${color === selectedCategory ? '-translate-y-2' : ""}`}>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* end category */}



            {/* 
                    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                     */}

            {/* <MenuSwiper /> */}

            <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}

                className='w-full bg-red-50 h-full p-2 '>


                <div ref={containerRef} className='bg-indigo-300 w-full h-full rounded-md flex flex-nowrap  overflow-x-scroll  '>
                    {tailwindColors.map((c, index) => (
                        <div key={index} className={'min-w-full  overflow-y-scroll '}>

                            <div ref={el => colorRefs.current[index] = el}>
                            </div>
                            <div className={'w-full h-full ' + c}>
                            </div>
                            <div className={'w-full h-full ' + c}>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            {/* <End MenuSwiper /> */}

        </>
    )
}

export default MenuSwipe