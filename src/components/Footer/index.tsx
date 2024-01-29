import React from 'react';
import './Footer.scss';

export default class Footer extends React.Component {
  render (): React.ReactNode {
    return (
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="social">
                <a href="https://www.instagram.com/unreal.pixels" title="Instagram"><i className="bi bi-instagram"></i></a>
                <a href="https://discord.gg/8jZBs8DJ" title="Discord Server"><i className="bi bi-discord"></i></a>
                <a href="https://www.linkedin.com/company/unrealpixels" title="LinkedIn"><i className="bi bi-linkedin"></i></a>
              </div>
              <div className="copyright">
                &copy; Copyright <strong>Unreal Pixels</strong>. All Rights Reserved.
                <a href="/privacy-policy.txt" className="privacy-policy" target="_blank">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
