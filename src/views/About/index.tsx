import React from 'react';
import './About.scss';
import aboutImage from './about.jpg';

export default class About extends React.Component {
  render (): React.ReactNode {
    return (
        <section id="about">
            <div className="container" data-aos="fade-up">
            <div className="row">
                <div className="col-md-12">
                  <h3 className="section-title">About Us</h3>
                  <div className="section-title-divider"></div>
                  <p className="section-description">We are a group of developers providing web and app development services in Orange County California.</p>
                </div>
            </div>
            </div>
            <div className="container about-container" data-aos="fade-up" data-aos-delay="200">
            <div className="row">

                <div className="col-lg-6 about-img">
                  <img src={aboutImage as string} alt="About us group" />
                </div>

                <div className="col-lg-6 about-content">
                  <h2 className="about-title">Development to IT and everything in between</h2>
                  <p className="about-text">
                      We provide web sites, web applications, mobile applications, API servers, database offerings and general IT work for supporting anyone or any business.
                  </p>
                  <p className="about-text">
                      We offer the most affordable approaches to custom development. You can choose to purchase one time software, service based support or any combination. All code for custom projects belongs to you and you are also free to have future updates done by anyone you choose.
                  </p>
                  <p className="about-text">
                      We provide IT services from networking, web hosting, cloud hosting, email setup and continuous integration and delivery setup to allow for quicker deployment of future versions. We find the most cost effective way and set you up with your own accounts.
                  </p>
                </div>
            </div>
            </div>
        </section>
    );
  }
}
