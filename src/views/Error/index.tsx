import React from 'react';
import './Error.scss';

export default class Error extends React.Component {
  render (): React.ReactNode {
    return (
      <section id="error">
        <div className="container" data-aos="fade-up">
        <div className="row">
            <div className="col-md-12">
            <h3 className="section-title">Page not found</h3>
            <div className="section-title-divider"></div>
            <p className="section-description">The page could not be found. Try a different page above.</p>
            </div>
        </div>
        </div>
      </section>
    );
  }
}
