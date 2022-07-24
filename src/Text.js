import React from 'react'
export default function Text(props) {
    return (
        <div className='text-container'>
            <div className='inner-text'>
                <h1 className=''>{props.header}</h1>
                <p>{props.paragraph}</p>
            </div>
        </div>
    )
}