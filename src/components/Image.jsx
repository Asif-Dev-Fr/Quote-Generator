import React from 'react'

const Image = ({ image }) => {
  return (
    <div className='image col-lg-6 col-12'>
        <img src={image.previewURL} alt={image.tags} />
    </div>
  )
}

export default Image