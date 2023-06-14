import React from 'react';
import './Services.scss';

export default class Services extends React.Component {
  render (): React.ReactNode {
    return (
        <section id="services">
            <div className="container">
                <div className="row" data-aos="fade-up">
                <div className="col-md-12">
                    <h3 className="section-title">Our Services</h3>
                    <div className="section-title-divider"></div>
                    <p className="section-description">We offer affordable services for individuals and business of all sizes.</p>
                </div>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="200">
                <div className="col-lg-4 col-md-6 service-item">
                    <div className="service-icon"><i className="bi bi-briefcase"></i></div>
                    <h4 className="service-title">Web development</h4>
                    <p className="service-description">Need a new website for your project or business? From complex web applications to simple to edit content management systems we can develop anything for your needs.</p>
                </div>
                <div className="col-lg-4 col-md-6 service-item">
                    <div className="service-icon"><i className="bi bi-card-checklist"></i></div>
                    <h4 className="service-title">Mobile applications</h4>
                    <p className="service-description">We offer simple code bases with a shared UI mobile application systems that can be static or API driven. We also help with deployment and setup for Apple and Google app stores.</p>
                </div>
                <div className="col-lg-4 col-md-6 service-item">
                    <div className="service-icon"><i className="bi bi-bar-chart"></i></div>
                    <h4 className="service-title">Server/API development</h4>
                    <p className="service-description">We offer server side and API system development for powering your UIs or any business logic you may need. We can also help with designing and implementing your data stores locally or in cloud services. </p>
                </div>
                <div className="col-lg-4 col-md-6 service-item">
                    <div className="service-icon"><i className="bi bi-binoculars"></i></div>
                    <h4 className="service-title">IT services</h4>
                    <p className="service-description">We can help with setup of your local network or server system for most IT needs. We also provide the most cost effective ways to deploy or serve your items from cloud services.</p>
                </div>
                <div className="col-lg-4 col-md-6 service-item">
                    <div className="service-icon"><i className="bi bi-binoculars"></i></div>
                    <h4 className="service-title">Maintenance</h4>
                    <p className="service-description">Whether we created it or another group created it we are happy to fix bugs or update existing systems or apps.</p>
                </div>
                </div>
            </div>
        </section>
    );
  }
}
