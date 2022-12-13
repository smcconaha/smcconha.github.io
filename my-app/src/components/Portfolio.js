import React from 'react';
import mindreader from '../components/images/mind_reader.png';
import facebookHero from '../components/images/facebook_hero.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';


const Portfolio = () => {
  return (
    <div id="portfolio" className='portfolio-wrapper'>
      <div className='container'>
        <div class="card-group">
          <div class="card">
            <img src="..." className="portfolio-img card-img-top" alt="Plant Service Website Picture" />
            <div class="card-body">
              <h5 class="card-title">Plant People</h5>
              <p class="card-text">
                Plant care search application that was created using a Javascript and React frontend and Django backend.
                Followed atomic design principles for deconstructing the Rover website.
                Utilized Agile principles, MoSCoW to determine prioritization, and vertical slicing for update implementation.
              </p>
              <a href="https://plant-people-1b6bf.web.app/"><small class="text-muted">Web link/Plant People</small></a>
            </div>
          </div>
          <div class="card">
            <img src="..." className="portfolio-img card-img-top" alt="Music Database Website Picture" />
            <div class="card-body">
              <h5 class="card-title">Music Streaming Service Database</h5>
              <p class="card-text">
                Created a database diagram with multiple pivot tables to depict the backend of a digital music streaming service
                Incorporated filters to allow the user to query database and return selective data
                Used Python and Django REST Framework to create an Application Programming Interface (API)
              </p>
              <a href="https://github.com/smcconaha/django-jams"><small class="text-muted">Web link/Music Database</small></a>
            </div>
          </div>
          <div class="card">
            <img src="..." className="portfolio-img card-img-top" alt="Restaurant Website Picture" />
            <div className="card-body">
              <h5 class="card-title">React Restaurant Homepage and Django Backend</h5>
              <p class="card-text">
                Utilized React components to create a dynamic and responsive interface to display menu items and pricing
                Created models, views, and database for an API that provides read and filter operations for menu items in a PostgresQL database
              </p>
              <a href="https://github.com/smcconaha/react-restaurant"><small class="text-muted">Web link/Restaurant Frontend</small></a>
              <br/>
              <a href="https://github.com/smcconaha/backend-bistro"><small class="text-muted">Web link/Restaurant Backend</small></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;

