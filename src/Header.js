import React from 'react'
import image from './assets/airbnb-logo.png'

export default function Header() {
    return (
        <div className='header-container'>
            <img src={image} className='logo' alt='passportPhoto'/>
        </div>
    )
}