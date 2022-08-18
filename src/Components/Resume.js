import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.title}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>

        <div className="nine columns main-col">

          <section id="four" className="skills">
            <div className="languages skills show-on-scroll">
              <i class="devicon-c-plain colored"></i>
              <i class="devicon-cplusplus-plain-wordmark"></i>
              <i class="devicon-python-plain-wordmark"></i>
              <i class="devicon-android-plain-wordmark colored"></i>
              <i class="devicon-mysql-plain-wordmark colored"></i>
              <i class="devicon-github-plain colored"></i>
              <i class="devicon-git-plain colored"></i>
              <i class="devicon-linux-plain colored"></i>
              <img width="90px" src="https://img.icons8.com/windows/8x/323573/fedora.png" title="Fedora"/>
              <img width="90px" src="https://img.icons8.com/fluent/2x/console.png" title="Terminal"/>
              <img width="90px" src="https://img.icons8.com/color/2x/kotlin.png" title="Kotlin"/>
              <img width="90px" src="https://img.icons8.com/color/2x/firebase.png" title="Firebase"/>
              <img width="90px" src="https://img.icons8.com/color/16x/000000/arduino.png" title="Arduino"/>
              <img width="90px" src="https://img.icons8.com/dusk/64/000000/database-restore.png" title="Database"/>
            </div>
          </section>
				</div>
			</div>
   </section>
    );
  }
}

export default Resume;
