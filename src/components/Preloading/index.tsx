import React from 'react';
import './Preloading.scss';

export default class Preloading extends React.Component {
  componentDidMount (): void {
    const preloader = document.querySelector('#preloading') as HTMLDivElement;

    if (preloader) {
      setTimeout(() => {
        preloader.remove();
      }, 100);
    }
  }

  render (): React.ReactNode {
    return (
      <div id="preloading"></div>
    );
  }
}
