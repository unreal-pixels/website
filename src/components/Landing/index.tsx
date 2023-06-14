import React from 'react';
import './Landing.scss';
import logo from './logo.svg';
import { type RouteComponentProps, withRouter } from 'react-router-dom';

class Landing extends React.Component<RouteComponentProps> {
  componentDidMount (): void {
    const typed = document.querySelector('.typed') as HTMLDivElement;

    if (typed) {
      if (!typed.classList.contains('setup')) {
        typed.classList.add('setup');
        const stringToType = (typed.getAttribute('data-typed-items') || '').split(',');

        // eslint-disable-next-line
        new (window as any).Typed('.typed', {
          strings: stringToType,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
        });
      }
    }
  }

  render (): React.ReactNode {
    const { history } = this.props;

    return (
      <section id="hero">
        <div className="hero-container">
          <div data-aos="fade-in">
            <div className="hero-logo">
              <img title="Unreal Pixels" src={logo} alt="Unreal Pixels" />
            </div>
            {/* <h1>Unreal Pixels</h1> */}
            <h2>We provide <span className="typed" data-typed-items="web development, mobile app development, UX services, IT services, server side products"></span></h2>
            <div className="actions">
              <button onClick={() => { history.push('/services'); }} type="button" className="btn-home-primary">Our services</button>
              <button onClick={() => { history.push('/products'); }} type="button" className="btn-home-secondary">Our products</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Landing);
