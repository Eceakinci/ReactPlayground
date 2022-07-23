import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/fontawesome-free-solid'
export default function BodyCard() {
    return (
        <div className='bodyContainer'>
            <h2>Ece Akinci</h2>
            <p>Front-End Developer</p>

            <div className='buttons'>
                <a href='mailto:ece12akinci@gmail.com' target='_blank'>
                    <button className='email'><FontAwesomeIcon icon={faEnvelope}/><span>Email</span></button>
                </a>

                <a href='https://www.linkedin.com/in/ece-akinci/' target='_blank'>
                    <button className='linkedin'><FontAwesomeIcon  icon={faLinkedin} /><span>LinkedIn</span></button>
                </a>
            </div>

            <div className='about'>
                <div>
                    <h3>About</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>

                <div>
                    <h3>Interests</h3>
                    <p>
                        Volleyball, Rollerblade, Photography, Jumping Rope
                    </p>
                </div>
            </div>

        </div>
    )
}