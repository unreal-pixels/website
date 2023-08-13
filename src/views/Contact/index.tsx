import React from 'react';
import './Contact.scss';
import areaImage from './area.jpg';
import axios from 'axios';

export default class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    forceDisabled: false,
  };

  private sendContact = (): void => {
    const { name, email, subject, message } = this.state;
    const emailTest = prompt('Please confirm your email address') || '';

    if (emailTest.toLowerCase() !== email) {
      alert('Emails do not match. Please try again.');

      return;
    }

    const data = {
      from: name,
      _subject: `[Unreal Pixels Website]: ${subject}`,
      email,
      message,
      sent: new Date().toISOString(),
    };

    this.setState({ forceDisabled: true });

    axios.post('https://mailthis.to/emaildavid', data, { responseType: 'text' }).then(() => {
      alert('To confirm you are not a robot.  Please do the following CAPTCHA and then click "Go Back" to return.');
      this.setState({ name: '', email: '', subject: '', message: '', forceDisable: false });
      window.location.href = 'https://mailthis.to/confirm';
    }).catch(() => {
      alert('Message could not be sent. Please try again.');
      this.setState({ forceDisable: false });
    });
  };

  private get invalidForm(): boolean {
    const { name, email, subject, message, forceDisabled } = this.state;

    return !(name && email && subject && message && !forceDisabled);
  }

  render (): React.ReactNode {
    const { name, email, subject, message } = this.state;

    return (
        <section id="contact">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-md-12">
                <h3 className="section-title">Contact Us</h3>
                <div className="section-title-divider"></div>
                <p className="section-description">Serving Orange County and all of SoCal.</p>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-6 contact-img">
                <img src={areaImage as string} alt="About us group" />
              </div>

              <div className="col-lg-6 contact-content">
                <input type="text" className="form-control" id="name" name="name" value={name} onChange={event => { this.setState({ name: event.target.value }); }} required={true} placeholder="Name" />
                <input type="email" className="form-control" id="email" name="email" value={email} onChange={event => { this.setState({ email: event.target.value }); }} required={true} placeholder="Email" />
                <input type="text" className="form-control" id="subject" name="subject" value={subject} onChange={event => { this.setState({ subject: event.target.value }); }} required={true} placeholder="Subject" />
                <textarea className="form-control" name="message" id="message" value={message} onChange={event => { this.setState({ message: event.target.value }); }} rows={1} required={true} placeholder="Message"></textarea>
                <button type="button" className="button-submit" onClick={this.sendContact} disabled={this.invalidForm}>Send Message</button>
              </div>
            </div>
          </div>
        </section>
    );
  }
}
