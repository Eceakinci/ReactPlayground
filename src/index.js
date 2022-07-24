import React from 'react';
import ReactDom from 'react-dom'

import Header from './Header'
import Text from './Text'
import MultipleImageContainer from './MultipleImageContainer';
import InformationCard from './InformationCard';

import './styles/airbnb-style.css'

ReactDom.render(
  <div className='container'>
    
    <Header/>
    <MultipleImageContainer/>
    <Text header="Online Experiences" paragraph="Join unique activities led by one-of-a-kind hosts-all without leaving home."/>
    <InformationCard/>

  </div>
, document.getElementById('root'))