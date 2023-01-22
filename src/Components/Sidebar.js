import React, { Component } from 'react';
import image from '../Assets/profile.png';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.sidebarData = props.sidebarData;
  }

  render() {
    return (
      <nav className='display'>
      <nav className="navbar navbar-expand-lg navbar navbar-light fixed-top  color-Nav "  varient="light">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">{this.sidebarData.firstName} {this.sidebarData.lastName}</span>
          <span className="d-none d-lg-block">
             <img className=" img-fluid img-profile  rounded-circle mx-auto  imgsize " src={image} alt=""></img> 
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link " href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#project">Projects</a>              
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#interests">Interests</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#awards">Awards</a>
              
            </li>
      
          </ul>
        </div>
      </nav>
      </nav>
    );
  }
}

export default Sidebar;
