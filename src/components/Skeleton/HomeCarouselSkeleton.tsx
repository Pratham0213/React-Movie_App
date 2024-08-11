import React from 'react'

function HomecarouselSkeleton() {
    return (
        <div >
            <div className="relative h-full placeholder-glow">
                <div className="w-full h-full min-h-[300px] object-cover aspect-[7/4] placeholder"></div>
                <div className={`absolute w-full h-full top-0 left-0 bg-black opacity-[0.1] hover:opacity-[0.2]`}></div>
                <div className="absolute bottom-0 h-44 w-full _carouselGradient"></div>
            </div>
            <div className="absolute bottom-0 md:flex items-end gap-4 px-4 w-full">
                <div className="md:w-[160px] w-[120px] aspect-[4/5] placeholder"></div>
                <div className="flex flex-col gap-1 w-full">
                    <h1 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl w-[40%] placeholder'></h1>
                    <h2 className='w-[95%] lg:text-xl md:text-lg text-md w-[95%] placeholder'></h2>
                    <h2 className='w-[95%] lg:text-xl md:text-lg text-md w-[85%] placeholder'></h2>
                    <h2 className='w-[95%] lg:text-xl md:text-lg text-md w-[35%] placeholder'></h2>
                    <div className="flex items-center gap-1 lg:text-lg md:text-md text-sm w-[10%] placeholder"></div>
                </div>
            </div>
        </div>)
}

export default HomecarouselSkeleton