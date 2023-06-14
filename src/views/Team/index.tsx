/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import './Team.scss';

interface TeamMember {
  name: string
  role: string
  image: string
  linkedIn?: string
  instagram?: string
  github?: string
  site?: string
  twitter?: string
}

export default class Team extends React.Component {
  private readonly teamMembers: TeamMember[] = [
    {
      name: 'David Bradshaw',
      role: 'UI/UX Engineer',
      image: require('./david.jpg') as string,
      linkedIn: 'https://linkedin.com/in/davidbradshawus',
      github: 'https://github.com/dabrad26',
      site: 'https://davidbradshaw.us',
    },
  ];

  private getTeamItem (item: TeamMember, index: number): React.ReactNode {
    return (
            <div className="col-md-3" key={index}>
                <div className="member">
                <div className="pic"><img src={item.image} alt={item.name} /></div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
                <div className="social">
                    {!!item.twitter && <a href={item.twitter} title="Twitter"><i className="bi bi-twitter"></i></a>}
                    {!!item.linkedIn && <a href={item.linkedIn} title="LinkedIn"><i className="bi bi-linkedin"></i></a>}
                    {!!item.site && <a href={item.site} title="Website"><i className="bi bi-globe"></i></a>}
                    {!!item.github && <a href={item.github} title="Github"><i className="bi bi-github"></i></a>}
                    {!!item.instagram && <a href={item.instagram} title="Instagram"><i className="bi bi-instagram"></i></a>}
                </div>
                </div>
            </div>
    );
  }

  render (): React.ReactNode {
    return (
        <section id="team">
            <div className="container" data-aos="fade-up">
                <div className="row">
                <div className="col-md-12">
                    <h3 className="section-title">Our Team</h3>
                    <div className="section-title-divider"></div>
                    <p className="section-description">We are a group of engineers and designers with years of experience in software and IT.</p>
                </div>
                </div>

                <div className="row">
                    {this.teamMembers.map((item, index) => this.getTeamItem(item, index))}
                </div>
            </div>
        </section>
    );
  }
}
