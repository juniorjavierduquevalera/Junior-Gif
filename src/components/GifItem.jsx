import React from 'react'

const GifItem = ({ title, url, id }) => {
    return (
      <figure className='flex flex-col items-center'>
          <img src={ url } alt={ title } className="w-80 h-48 md:w-96 md:h-56 object-cover object-center" />
          <p className='mt-4 text-center'>{ title }</p>
      </figure>
    )
  }

export default GifItem
