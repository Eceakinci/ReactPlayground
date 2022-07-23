import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
export default function FooterCard() {
    return (
        <div className='footer'>
            <a href='' target='_blank'>
                <FontAwesomeIcon className='icon' icon={faTwitterSquare}/>
            </a>
            
            <a href='https://www.instagram.com/eceaaaa/' target='_blank'>
                <FontAwesomeIcon className='icon' icon={faInstagramSquare}/>    
            </a>
            
            <a href='https://github.com/Eceakinci' target='_blank'>
                <FontAwesomeIcon className='icon' icon={faGithubSquare}/>  
            </a>
        </div>
    )
}