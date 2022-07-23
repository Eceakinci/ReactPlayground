import React from 'react'
import image from './assets/airbnb-logo.png'

export default function ImageCard() {
    return (
        <div className='header-container'>
            <img src={image} className='logo' alt='passportPhoto'/>
        </div>
    )
}