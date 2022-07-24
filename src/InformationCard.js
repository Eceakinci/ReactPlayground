import React from 'react'

export default function InformationCard() {
    return (
        <div className='card-container'>
            <div>
                <div>
                    <img className='image-card' src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                    <div>
                        SOLD OUT
                    </div>
                </div>

                
                <div>
                    <span><i class="fas fa-star"></i>5.0 (6). USA</span>
                    <span>Life lessons with Katie Xaferes</span>
                    <span>From $136/ Person</span>
                </div>
            </div>
        </div>
    )
}