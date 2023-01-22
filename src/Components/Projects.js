import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowsAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import image from '../Assets/2.png';


class Projects extends Component {
  constructor(props) {
    super(props);

    this.project = props.project;
  }

  render() {
    return( 
      <div className='bgproject landing'>
        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="project">
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>          {
            this.project.map((exp, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                <FontAwesomeIcon icon={faCheckCircle} color="#ffc107" />
                  <span className="mb-1 ml-3 "><b className='a3'>{exp.project}</b>   
                  
                    <p > {exp.pdetails}       
                    <div className='social-icons fa-sm icon'>
                     <a href={exp.plink}>
                  <FontAwesomeIcon icon={faGithub} />
                     </a>
                     </div>
                     </p> 
                  </span>
                </div>
              </div>
              
            ))
          }
          
        </div>
        <div>
        <img src={image} alt="" className="pngimage1"></img>
        </div>
       
      </section>
      </div>
      
    );
  }
}

export default Projects;
