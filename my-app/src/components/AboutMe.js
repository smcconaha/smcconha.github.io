import React from 'react';
import profilePic from '../images/profile_pic.jpg';

const AboutMe = () => {
  return (
    <div id="about" className='container py-5'>
        <div className='row'>
            <div className='col-lg-6 col-xm-12'>
                <div className='photo-wrap mb-5'>
                    <img className='profile-img'src={profilePic} alt='profile picture of Steven McConaha'/>
                </div>
            </div>
            <div className='col-lg-6 col-xm-12'>
                <h1 className='about-heading'>About me</h1>
                <p>
                    Welcome, I am Steven and I have worked in Finance, Project Management and Engineering Management rolls for the last 10 years.

                    In August 2022 I embarked on a new journey and entered Awesome Inc's Web Developer Bootcamp.  The bootcampe is a 4-month, full-time
                    training program for aspiring web developers. The curriculum was designed in collaboration with local technology employers to prepare 
                    individuals to dive into a career in web development. The intense training program is designed to take students from the basics of 
                    programming to competency in building modern web applications. It includes over 500+ hours of hands-on training, gaining experience 
                    while building 10+ software projects in an Agile environment, using HTML, CSS, JavaScript, Python, Django, React, Google Cloud, GitHub, and more.

                    Web skills:
                    Week 1-4: Git, Github, HTML/CSS
                    Week 5-8: Javascript, Bootstrap, React
                    Week 9-12: Python, SQL, Django
                    Week 13-16: Agile Development, Final Project.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe;