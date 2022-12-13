import React from 'react';
import plants from './../components/images/plantPeople.png';
import restaurant from './../components/images/restaurant.png';
import jams from './../components/images/djangoJams.png';


const Portfolio = () => {
  return (
    <div id="portfolio" className='portfolio-wrapper'>
      <div className='container'>
        <div className="card-group">
          <div className="card project-card m-2">
            <img src={plants} className="portfolio-img card-img-top" alt="Plant Service Website" />
            <div className="card-body">
              <h5 className="card-title">Plant People</h5>
              <p className="card-text">
                Plant care search application that was created using a Javascript and React frontend and Django backend.
                Followed atomic design principles for deconstructing the Rover website.
                Utilized Agile principles, MoSCoW to determine prioritization, and vertical slicing for update implementation.
              </p>
              <a href="https://plant-people-1b6bf.web.app/"><small className="text-muted">Web link/Plant People</small></a>
            </div>
          </div>
          <div className="card project-card m-2">
            <img src={jams} className="portfolio-img card-img-top" alt="Music Database Website" />
            <div className="card-body">
              <h5 className="card-title">Music Streaming Service Database</h5>
              <p className="card-text">
                Created a database diagram with multiple pivot tables to depict the backend of a digital music streaming service
                Incorporated filters to allow the user to query database and return selective data
                Used Python and Django REST Framework to create an Application Programming Interface (API)
              </p>
              <a href="https://github.com/smcconaha/django-jams"><small className="text-muted">Web link/Music Database</small></a>
            </div>
          </div>
          <div className="card project-card m-2">
            <img src={restaurant} className="portfolio-img card-img-top" alt="Restaurant Website" />
            <div className="card-body">
              <h5 className="card-title">React Restaurant Homepage and Django Backend</h5>
              <p className="card-text">
                Utilized React components to create a dynamic and responsive interface to display menu items and pricing
                Created models, views, and database for an API that provides read and filter operations for menu items in a PostgresQL database
              </p>
              <a href="https://github.com/smcconaha/react-restaurant"><small className="text-muted">Web link/Restaurant Frontend</small></a>
              <br/>
              <a href="https://github.com/smcconaha/backend-bistro"><small className="text-muted">Web link/Restaurant Backend</small></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;

