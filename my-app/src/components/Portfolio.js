import React from 'react';
import mindreader from '../images/mind_reader.png';
import facebookHero from '../images/facebook_hero.png';
// need to add more works once finalized
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';


const Portfolio = () => {
  return (
    <div id="portfolio" className='portfolio-wrapper'>
        <div className='container'>
          <h1 className='text-uppercase text-center py-5'>Portfolio</h1>
          <div className='image-box-wrapper row justify-content-center'>
              <div className='portfolio-img-box'>
                <img className='portfolio-img' src={mindreader} alt='Mind Reader Project'/>
                <div className='overflow'></div>
                <FontAwesomeIcon className='port-icon' icon={faSearchPlus} />
              </div>
              <div className='portfolio-img-box'>
                <img className='portfolio-img' src={facebookHero} alt='Facebook Hero Project'/>
                <div className='overflow'></div>
                <FontAwesomeIcon className='port-icon' icon={faSearchPlus} />
              </div>
              <div className='portfolio-img-box'>
                <img className='portfolio-img' src='#' alt='Project'/>
                <div className='overflow'></div>
                <FontAwesomeIcon className='port-icon' icon={faSearchPlus} />
              </div>  
              <div className='portfolio-img-box'>
                <img className='portfolio-img' src='#' alt='Project'/>
                <div className='overflow'></div>
                <FontAwesomeIcon className='port-icon' icon={faSearchPlus} />
              </div>    
          </div> 
        </div>
    </div>
  )
}

export default Portfolio;