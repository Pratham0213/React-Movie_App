import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseApi } from '../../api/axiosInstance'
import { MovieDetailType, imagepath } from '../../utils/constant'
import Trailers from '../../components/MovieDetails/Trailers'
import SimilarMovies from '../../components/MovieDetails/SimilarMovies'
import DetailsSkeleton from '../../components/Skeleton/DetailsSkeleton'

function Details() {
    const params = useParams()
    console.log(params)
    const [details, setDetails] = useState<MovieDetailType>()

    const fetchDetails = async () => {
        try {
            const response = await baseApi.get(`/3/movie/${params.id}?language=en-US`)
            console.log(response.data)
            setDetails(response.data)
        } catch (error) {
            console.log("Fetch Details error", error)
        }
    }

    useEffect(() => {
        fetchDetails()

    }, [params])


    return (
        <div>
            {details && params.id ?
                <div className="relative h-fit w-full">
                    <div className="relative">
                        <img src={imagepath + details?.backdrop_path}
                            className='opacity-40 w-full min-h-[500px] aspect-[7/4] object-cover'
                            alt="baskground" />
                        <div className="absolute bottom-0 w-full h-full _carouselGradient"></div>
                    </div>
                    <div className="absolute top-0 w-full pb-[100px]">
                        <div className="w-[90%] mx-auto lg:mt-[500px] md:mt-[400px] mt-[200px]">

                            <div className="md:flex gap-8">
                                <img src={imagepath + details?.poster_path}
                                    className='lg:w-[350px] md:w-[280px] sm:w-[250px] w-[200px] h-fit aspect-[4/6]'
                                    alt="" />
                                <div className="">
                                    <h1 className='lg:text-5xl  md:text-4xl sm:text-3xl text-2xl'>{details?.original_title}
                                        <span className='md:mx-3 mx-1 lg:text-4xl  md:text-3xl sm:text-2xl text-xl'>({details?.release_date?.substring(0, 4)})</span>
                                    </h1>
                                    <div className="lg:text-xl md:text-lg sm:text-md text-slate-300 sm:mt-2 mt-1">
                                        <h2>{details?.tagline}</h2>
                                        <h2 className='sm:mt-3 mt-2'>{details?.overview}</h2>
                                        <div className="flex flex-col md:gap-3 gap-2 mt-4 text-zinc-300">
                                            <h2 className=''>
                                                Genres: {details?.genres?.map(genre => genre.name).join(", ")}
                                            </h2>
                                            <h2>Rating : {String(details?.vote_average).substring(0, 3)}</h2>
                                            <h2>Original Language : {details?.original_language}</h2>
                                            <h2>Release Date : {details?.release_date}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Trailers movieId={params?.id} />
                            <SimilarMovies movieId={params?.id} />

                        </div>
                    </div>
                </div>
                :
                <DetailsSkeleton />
            }
        </div>
    )
}

export default Details