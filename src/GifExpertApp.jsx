import { useState } from 'react';
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
    const [ categories, setCategories ] = useState([ 'Dragon ball' ]);
    const onAddCategory = ( newCategory ) => {
      if ( categories.includes(newCategory) ) return;
      setCategories([ newCategory ]);
}

return (
    <>
        <h1 className='text-center text-5xl text-primary font-bold mb-10 '>Gif App</h1>
        <AddCategory
            onNewCategory={ (value) => onAddCategory(value) }
        />
        {
            categories.map( ( category ) => (
                <GifGrid
                    key={ category }
                    category={ category } />
            ))
        }
    </>
)
}

export default GifExpertApp
