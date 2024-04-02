import React from 'react';
// import Landing from '../../components/Landing';
import Portfolio from '../Portfolio';

export default class Home extends React.Component {
  render (): React.ReactNode {
    return (
        // <Landing /> Straight to products to show to Google Ads
        <Portfolio />
    );
  }
}
