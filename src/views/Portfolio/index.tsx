/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import './Portfolio.scss';
import Axios from 'axios';

type FilterTypes = 'web' | 'mobile' | 'server' | 'it';

interface PortfolioItem {
  type: FilterTypes[]
  image: string
  name: string
  id: string
  link: string
}

export default class Portfolio extends React.Component {
  state = {
    filter: undefined as FilterTypes | undefined,
    loading: true,
  };

  private portfolioFullList: PortfolioItem[] = [];

  private get portfolioItems (): PortfolioItem[] {
    const { filter } = this.state;

    return filter ? this.portfolioFullList.filter(item => item.type.includes(filter)) : this.portfolioFullList;
  }

  private getTypeName (type: FilterTypes): string {
    const typeMap = {
      web: 'Web',
      mobile: 'Mobile app',
      server: 'Server/API',
      it: 'IT Services',
    };

    return typeMap[type];
  }

  private getPortfolioEntry (item: PortfolioItem): React.ReactNode {
    return (
      <button type="button" onClick={() => { window.open(item.link, '_blank'); }} className="col-lg-4 col-md-6 portfolio-item" key={item.id}>
          <img src={item.image} className="img-fluid" alt={item.name} />
          <div className="portfolio-info">
          <h4>{item.name}</h4>
          <p>{item.type.map(type => this.getTypeName(type)).join(', ')}</p>
          <span className="details-link" title="More Details"><i className="bi bi-box-arrow-up-right"></i></span>
          </div>
      </button>
    );
  }

  private readonly changeFilter = (filter?: FilterTypes): void => {
    this.setState({ filter });
  };

  private get noItems (): React.ReactNode {
    return (
      <div className="row">
        <div className="col-md-12">
          <h4 className="section-subtitle">No results</h4>
          <p className="section-description">No items exist. Try changing the filter or check back later.</p>
        </div>
      </div>
    );
  }

  componentDidMount(): void {
    Axios.get('/api/portfolio-items.json').then(response => {
      this.portfolioFullList = response.data as PortfolioItem[];
      this.setState({ loading: false });
    }).catch(error => {
      console.error('Portfolio: unable to get items', error);
      this.setState({ loading: false });
    });
  }

  render (): React.ReactNode {
    const { filter, loading } = this.state;
    const items = this.portfolioItems;

    if (loading) {
      return null;
    }

    return (
        <section id="portfolio">
            <div className="container" data-aos="fade-up">
                <div className="row">
                <div className="col-md-12">
                    <h3 className="section-title">Products</h3>
                    <div className="section-title-divider"></div>
                    <p className="section-description">Below are some of our available products and past client projects (that were willing to share).</p>
                </div>
                </div>

                <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-filters">
                    <li onClick={() => { this.changeFilter(undefined); }} className={filter === undefined ? 'filter-active' : ''}>All</li>
                    <li onClick={() => { this.changeFilter('web'); }} className={filter === 'web' ? 'filter-active' : ''}>{this.getTypeName('web')}</li>
                    <li onClick={() => { this.changeFilter('mobile'); }} className={filter === 'mobile' ? 'filter-active' : ''}>{this.getTypeName('mobile')}</li>
                    <li onClick={() => { this.changeFilter('server'); }} className={filter === 'server' ? 'filter-active' : ''}>{this.getTypeName('server')}</li>
                    <li onClick={() => { this.changeFilter('it'); }} className={filter === 'it' ? 'filter-active' : ''}>{this.getTypeName('it')}</li>
                    </ul>
                </div>
                </div>

                <div className="row portfolio-container">
                    {(items.length > 0) ? items.map(item => this.getPortfolioEntry(item)) : this.noItems}
                </div>

            </div>
        </section>
    );
  }
}
