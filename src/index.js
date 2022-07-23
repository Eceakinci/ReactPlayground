import React from 'react';
import ReactDom from 'react-dom'
import Header from './Header'
import './styles/airbnb-style.css'


ReactDom.render(
  <div className='container'>
    <Header/>
    {/* <Images/>
    <Text/>*/}
    <InformationCard/> 
  </div>
, document.getElementById('root'))