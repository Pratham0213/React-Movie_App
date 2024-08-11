import { Link } from 'react-router-dom';
import { CarouselMovieType } from '../../utils/constant'
import { imagepath } from '../../utils/constant'
import { FiThumbsUp } from "react-icons/fi";

interface HomecarouselProps {
    carouselMovies: CarouselMovieType[]
}

function HomeCarousel({ carouselMovies }: HomecarouselProps) {
    return (
        <div className="carousel-inner h-full">
            {
                carouselMovies.map((movie, ind) => (
                    <Link key={ind} to={`/details/${movie.id}`}>
                        <div className={`carousel-item ${ind == 0 ? "active" : ""}  h-full`}>
                            <div className="relative h-full ">
                                {/* <div className="block bg-red-300 aspect-[7/4]"></div> */}
                                <img src={imagepath + movie?.backdrop_path} className='w-full h-full min-h-[300px] object-cover aspect-[7/4]' alt="" />
                                <div className={`absolute w-full h-full top-0 left-0 bg-black opacity-[0.1] hover:opacity-[0.2]`}></div>
                                <div className="absolute bottom-0 h-44 w-full _carouselGradient"></div>
                            </div>
                            <div className="absolute bottom-0 md:flex items-end gap-4 px-4">
                                {/* <div className="block bg-blue-400 w-[160px] aspect-[4/5]"></div> */}
                                <img src={imagepath + movie?.poster_path} alt="" className='md:w-[160px] w-[120px] aspect-[4/5]' />
                                <div className="flex flex-col gap-1">
                                    <h1 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl text-white'>{movie?.title}</h1>
                                    <h2 className='w-[95%] lg:text-xl md:text-lg text-md line-clamp-3 text-zinc-400'>{movie?.overview}</h2>
                                    <div className="flex items-center gap-1 text-zinc-400 lg:text-lg md:text-md text-sm">
                                        <FiThumbsUp />
                                        <h3>{movie?.vote_count}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }

        </div >)
}

export default HomeCarousel