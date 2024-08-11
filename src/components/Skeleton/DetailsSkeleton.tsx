import React from 'react'

function DetailsSkeleton() {
    return (
        <div className="relative h-fit w-full placeholder-glow">
            <div className="relative">
                <div className="opacity-40 w-full min-h-[500px] aspect-[7/4] object-center placeholder"></div>
                <div className="absolute bottom-0 w-full h-full _carouselGradient"></div>
            </div>
            <div className="absolute top-0 w-full pb-[100px]">
                <div className="w-[90%] mx-auto lg:mt-[500px] md:mt-[400px] mt-[200px]">

                    <div className="md:flex gap-8">
                        <div className="lg:w-[350px] md:w-[280px] sm:w-[250px] w-[200px] aspect-[4/6] h-fit placeholder"></div>
                        <div className="w-full">
                            <h1 className='lg:text-5xl  md:text-4xl sm:text-3xl text-2xl w-[40%] placeholder' ></h1>
                            <div className="lg:text-xl md:text-lg sm:text-md text-slate-300 sm:mt-2 mt-1">
                                <h2 className='w-[70%] placeholder'>tagline</h2>
                                <h2 className='sm:mt-3 mt-2 w-[80%] placeholder'></h2>
                                <h2 className='sm:mt-3 mt-2 w-[80%] placeholder'></h2>
                                <h2 className='sm:mt-3 mt-2 w-[70%] placeholder'></h2>
                                <h2 className='sm:mt-3 mt-2 w-[50%] placeholder'></h2>
                                <div className="flex flex-col md:gap-3 gap-2 mt-4 text-zinc-300">
                                    <h2 className='w-[50%] placeholder'></h2>
                                    <h2 className='w-[40%] placeholder'></h2>
                                    <h2 className='w-[20%] placeholder'></h2>
                                    <h2 className='w-[30%] placeholder'></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>)
}

export default DetailsSkeleton