import Movies from '../../pages/Movies';
import { CarouselMovieType } from '../../utils/constant'
import CarouselMiniCardSkeleton from '../Skeleton/CarouselMiniCardSkeleton';
import CarouselMiniCard from './CarouselMiniCard';

interface HomecarouselListProps {
    next: number[]
    carouselMovies: CarouselMovieType[]
}

function HomecarouselList({ next, carouselMovies }: HomecarouselListProps) {

    return (
        <div>
            <h1 className='font-bold text-xl text-yellow-500'>Up Next</h1>
            <div className="row">
                {
                    carouselMovies.length > 0 ?
                        next.map((item, ind) => (
                            <CarouselMiniCard carouselMovies={carouselMovies} item={item} ind={item} />
                        ))
                        :
                        [...Array(3)].map(item =>
                            <CarouselMiniCardSkeleton />
                        )
                }
            </div>


        </div>
    )
}

export default HomecarouselList