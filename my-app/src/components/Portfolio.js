import React from 'react';
import plants from './../components/images/plantPeople.png';
import restaurant from './../components/images/restaurant.png';
import jams from './../components/images/djangoJams.png';
import clock from './../components/images/alarm_clock.png';
import hero from './../components/images/facebook_hero.png';
import reminder from './../components/images/reminder.png';
import rickMorty from './../components/images/rick_morty.png';
import construction from './../components/images/under_construction.png';

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
                Following atomic design principles, I deconstructing a popular pet care website called Rover.
                I then build Plant People, a plant care search application, using a React, Django REST 
                framework, PostgreSQL, Bootstrap, and CSS.
                I utilized Agile principles to define user stories and build a Kanban board in order to provide daily sprint status.
                Changes were implemented using verticle slicing and the working version was deployed on Firebase and Google Cloud.
                The website allows a user to create a profile and optional plant service listing.  Both authenticated and non-authenticated
                users can then view listings as well as the listing map which was built leveraging Google Maps API.
              </p>
              <a href="https://plant-people-1b6bf.web.app/"><small className="text-muted">Web link/Plant People</small></a>
            </div>
          </div>
          <div className="card project-card m-2">
            <img src={jams} className="portfolio-img card-img-top" alt="Music Database Website" />
            <div className="card-body">
              <h5 className="card-title">Music Streaming Service Database</h5>
              <p className="card-text">
                This is a digital music streaming service Application Programming Interface (API) that was built using Python, 
                PostgreSQL, and Django REST framework.
                I incorporated filters to allow the user to query the database and return selective data.
                Thunder Client was used to test functionality of the Create, Read, Update, and Delete (CRUD) routes.
                I have linked the Github repo below since this is a back-end project.
              </p>
              <a href="https://github.com/smcconaha/django-jams"><small className="text-muted">Web link/Music Database</small></a>
            </div>
          </div>
          <div className="card project-card m-2">
            <img src={restaurant} className="portfolio-img card-img-top" alt="Restaurant Website" />
            <div className="card-body">
              <h5 className="card-title">React Restaurant Homepage and Django Backend</h5>
              <p className="card-text">
                This website was built using React to create a dynamic and responsive interface to display menu items for a fictional restaurant.
                I used Django framework to build the API that provides read and filter operations for menu the PostgreSQL database.
                Pre-work consisted of a detailed database diagram that drove the corresponding models, views, and serializers.
                I have linekd the Github repo below since this website is currently not running.
              </p>
              <a href="https://github.com/smcconaha/react-restaurant"><small className="text-muted">Web link/Restaurant Frontend</small></a>
              <br/>
              <a href="https://github.com/smcconaha/backend-bistro"><small className="text-muted">Web link/Restaurant Backend</small></a>
            </div>
          </div>
        </div>
        <div className="card-group">
          <div className="card project-card m-2">
            <img src={reminder} className="portfolio-img card-img-top" alt="To-Do List Website" />
            <div className="card-body">
              <h5 className="card-title">React To-Do List</h5>
              <p className="card-text">
                A reminder/to-do list built using React, Javascript, Bootstrap, and CSS.
                I leveraged React to dynamically render to-do list items, passed props between components, and utilized
                hooks for state manegement.
                This website execmplified full CRUD functionality.
              </p>
              <a href="https://smcconaha.github.io/reminder-list/"><small className="text-muted">Web link/To Do List</small></a>
            </div>
          </div>
          <div className="card project-card m-2">
            <img src={clock} className="portfolio-img card-img-top" alt="Alarm Clock Website" />
            <div className="card-body">
              <h5 className="card-title">Alarm Clock</h5>
              <p className="card-text">
                This is an alarm clock application that was built using HTML, Javascript, Bootstrap, and CSS.
                The clock displays current time, day, month, and year in a digital clock format.
                The user can set an alarm that provides a notification when the select time has transpired through 
                use of asynchronous functionality (setTimeout).
              </p>
              <a href="https://smcconaha.github.io/alarm-clock/"><small className="text-muted">Web link/Alarm Clock</small></a>
            </div>
          </div>
          <div className="card project-card m-2">
            <img src={hero} className="portfolio-img card-img-top" alt="Facebookhero Backend" />
            <div className="card-body">
              <h5 className="card-title">Heroes</h5>
              <p className="card-text">
                This is the backend for Facebookhero, Facebook for Superheroes, and it leverages Python to allow the user to 
                interact with a shell script to create, read, update and delete superhero details.
              </p>
              <a href="https://github.com/smcconaha/facebook-superhero-backend"><small className="text-muted">Web link/Facebook Superhero</small></a>
              <br/>
            </div>
          </div>
        </div>
        <div className="card-group">
          <div className="card project-card m-2">
              <img src={rickMorty} className="portfolio-img card-img-top" alt="Rick and Morty React" />
              <div className="card-body">
                <h5 className="card-title">Rick and Morty React API</h5>
                <p className="card-text">
                  A fun project based on the Rick and Morty tv show, leveraging the {' '} 
                  <a href="https://rickandmortyapi.com/">rickandmprtyapi</a>
                  {' '} API.  It was built using React, Javascript, Bootstrap, and a little CSS.
                  I used hooks for page state manegementand which allows you to go through 42 pages of character.  I plan to add filters
                  in the future and a search input bar.
                </p>
                <a href="https://smcconaha.github.io/rick_and_morty_api/"><small className="text-muted">Web link/Rick and Morty React API</small></a>
              </div>
            </div>
            <div className="card project-card m-2">
            <img src={construction} className="portfolio-img card-img-top" alt="Alarm Clock Website" />
            <div className="card-body">
              <h5 className="card-title">Future Project</h5>
              <p className="card-text">
                Check back here for a future project!
              </p>
              {/* <a href="#/"><small className="text-muted">Web link/Future Project</small></a> */}
            </div>
          </div>
          <div className="card project-card m-2">
            <img src={construction} className="portfolio-img card-img-top" alt="Facebookhero Backend" />
            <div className="card-body">
              <h5 className="card-title">Future Project</h5>
              <p className="card-text">
                Check back here for a future project!
              </p>
              {/* <a href="#"><small className="text-muted">Web link/Future Project</small></a> */}
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;

