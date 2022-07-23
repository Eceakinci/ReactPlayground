import React from 'react'
import image from './assets/woman.jpg'

export default function ImageCard() {
    return (
        <div className='imageContainer'>
            <img src={image} className='image' alt='passportPhoto'/>
        </div>
    )
}