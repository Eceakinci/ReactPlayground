import React from 'react'
import Image from './Image';
import imageData from './data/images-data.json'


const imgData = imageData

export default function MultipleImageContainer(props) {
    return (
        <div className='grid-container'>
            <div className='grid'>
                {imgData.map(s => (<Image image={s.img}/>))}
            </div>
        </div>
    )
}