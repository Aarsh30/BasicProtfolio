import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import image from '../Assets/5.png';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
   
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-150">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-5 a1"><b>Programming Languages | Courses &amp; Tools </b></div>
          <div className="row">
          {
            this.skills.map((data, index) => (
              <div key={index} className="col-6">
                <p className="list-item">
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                  <span className="ml-5 a3">{data.name}</span>
                </p>
              </div>
            ))
          }
          </div>    
          
           </div>
           

           
          <div>
        <img src={image} alt="" className="pngimageskill"></img>
        </div>
      </section>
    );
  }
}


export default Skills;
