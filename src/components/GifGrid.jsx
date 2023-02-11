import GifItem  from './GifItem';
import { useFetchGif } from './hooks/useFetchGif';

const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGif( category );

    return (
        <>
            <h2 className='text-center font-medium text-2xl mb-6'>{ category }</h2>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="flex flex-wrap justify-center gap-10">
                {
                    images.map( ( image ) => (
                        <GifItem
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }

            </div>

        </>
    )
}

export default GifGrid;
