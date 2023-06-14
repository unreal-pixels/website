import React from 'react';
import './Header.scss';
import logo from './logo.svg';
import { type RouteComponentProps, withRouter } from 'react-router-dom';

class Header extends React.Component<RouteComponentProps> {
  state = {
    mobileOpen: false,
  };

  private isCurrent (route: string, exact?: boolean): boolean {
    const { location } = this.props;

    return exact ? location.pathname === route : location.pathname.includes(route);
  }

  private readonly toggleMobile = (): void => {
    const { mobileOpen } = this.state;

    this.setState({ mobileOpen: !mobileOpen });
  };

  private readonly navClick = (route: string): void => {
    const { history } = this.props;
    this.setState({ mobileOpen: false });
    history.push(route);
  };

  private readonly resizeEvent = (): void => {
    this.setState({ mobileOpen: false });
  };

  componentDidMount (): void {
    window.addEventListener('resize', this.resizeEvent);
  }

  componentWillUnmount (): void {
    window.removeEventListener('resize', this.resizeEvent);
  }

  render (): React.ReactNode {
    const { mobileOpen } = this.state;

    return (
      <header id="header" className="d-flex align-items-center fixed-top">
        <div className="container d-flex align-items-center justify-content-between">

          <button onClick={() => { this.navClick('/'); }} type="button" className="logo mr-auto">
            <img src={logo} alt="" />
          </button>

          <nav id="navbar" className={`navbar ${mobileOpen ? 'navbar-mobile' : ''}`}>
            <ul>
              <li><button className={`nav-link ${this.isCurrent('/', true) ? 'active' : ''}`} type="button" onClick={() => { this.navClick('/'); }}>Home</button></li>
              <li><button className={`nav-link ${this.isCurrent('/about') ? 'active' : ''}`} type="button" onClick={() => { this.navClick('/about'); }}>About</button></li>
              <li><button className={`nav-link ${this.isCurrent('/services') ? 'active' : ''}`} type="button" onClick={() => { this.navClick('/services'); }}>Services</button></li>
              <li><button className={`nav-link ${this.isCurrent('/products') ? 'active' : ''}`} type="button" onClick={() => { this.navClick('/products'); }}>Products</button></li>
              <li><button className={`nav-link ${this.isCurrent('/team') ? 'active' : ''}`} type="button" onClick={() => { this.navClick('/team'); }}>Our Team</button></li>
              <li><button className={`nav-link ${this.isCurrent('/contact') ? 'active' : ''}`} type="button" onClick={() => { this.navClick('/contact'); }}>Contact</button></li>
            </ul>
            <i onClick={this.toggleMobile} className={`bi ${mobileOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}></i>
          </nav>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
