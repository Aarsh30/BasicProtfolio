import React, { Component } from 'react';
import image from '../Assets/1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faMailchimp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section className="resume-section p-6 p-lg-5 d-flex landing" id="about">
        <div className="w-100">
          <div className='fontlanding'>
        <h1 className="mb-2 text-info">{this.landingData.firstName}
            <span className="text-warning">{this.landingData.lastName}</span>
          </h1>
          </div>
          <div className="mb-6 a1">{this.landingData.phoneNumber} 
          </div>
         <div className=' mb-4 mu-6'>
            <a href="mailto:name@email.com"><FontAwesomeIcon icon={faEnvelope} /> {this.landingData.email}</a>
           
                     
          </div>
          <p className="mb-5 a3">{this.landingData.bio}</p>
          <div className="social-icons">
            <a href={this.landingData.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={this.landingData.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={this.landingData.youtube}>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href={this.landingData.instagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
           

          </div>
        </div>
        <div  className='landing'>
        <img src={image} alt="" className="pngimage"></img>
        </div>
      </section>
    );
  }
}

export default Landing;
