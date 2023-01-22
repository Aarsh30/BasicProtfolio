import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import Landing from './Components/Landing';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Interests from './Components/Interests';
import Awards from './Components/Awards';
import profileData from './profileData.json';
import Projects from './Components/Projects';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData : profileData.landing,
      experience : profileData.experience,
      education : profileData.education,
      skills : profileData.skills,
      interests : profileData.interests,
      awards : profileData.awards,
      project:profileData.project
    }
  }
  render() {
    return (
      <div className="App appid display1">
        <Sidebar sidebarData={this.state.landingData} />
        <div className="container-fluid p-6">
          <Landing landingData={this.state.landingData} />
          <hr className="m-0" />
          <Projects project={this.state.project} />
          <hr className="m-0" />
          <Experience experience={this.state.experience} />
          <hr className="m-0" />
          <Education education={this.state.education}/>
          <hr className="m-0" />
          <Skills skills={this.state.skills} />
          <hr className="m-0" />
          <Interests interests={this.state.interests} />
          <hr className="m-0" />
          <Awards awards={this.state.awards} />
          
        </div>
      </div>
    );
  }
}

export default App;
