import React from 'react';
import './App.scss';
import { type RouteComponentProps, withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Preloading from '../../components/Preloading';
import MainView from '../MainView';

class App extends React.Component<RouteComponentProps> {
  componentDidMount (): void {
    const { history } = this.props;
    const route = localStorage.getItem('route');

    if (route) {
      localStorage.removeItem('route');
      history.push(route);
    }

    // eslint-disable-next-line
    (window as any).AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }

  render (): React.ReactNode {
    return (
      <>
        <Header />
        <MainView />
        <Footer />
        <Preloading />
      </>
    );
  }
}

export default withRouter(App);
