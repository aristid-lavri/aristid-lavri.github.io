import React from "react";
import "./resume.css";

function Resume() {
  return (
    <>
      <div className="resume-contente">
        <div className="skills">
          <h2>All my Skills</h2>

          <section>
            <h4>More recent Skills</h4>
            <div>
              <label>Reactjs
              </label>
                <div className="skill">
                  <div className=" level level-medium"></div>
                  </div> 
            </div>
            <div>
              <label>Compiler Programming
              </label>
              <div className="skill">
                <div className=" level level-beginer"></div>
              </div> 
            </div>
          </section>

          <section>
            <h4>Programming Languages</h4>
            <div>
              <label>C#</label>
              <div className="skill">
                <div className=" level level-advanced"></div>
              </div> 
            </div>
            <div>
              <label>JavaScript</label>
              <div className="skill">
                <div className=" level level-medium"></div>
              </div>
            </div>
            <div>
              <label>C/C++</label>
              <div className="skill">
                <div className=" level level-beginer"></div>
              </div>
            </div>
          </section>

          <section>
            <h4>Frameworks / Libraries</h4>
            <div>
              <label>ASP.NET/Core (API, MVC)</label>
              <div className="skill">
                <div className=" level level-advanced"></div>
              </div>
            </div>
            
            <div>
              <label>Reactjs</label>
              <div className="skill">
                <div className=" level level-medium"></div>
              </div>
            </div>

            <div>
              <label>NodeJs</label>
              <div className="skill">
                <div className=" level level-beginer"></div>
              </div>
            </div>

            
          </section>

          <section>
              <h4>Databases</h4>
              <div>
                <label>SQL SERVER, MYSQL</label>
                <div className="skill">
                  <div className=" level level-advanced"></div>
                </div>
              </div>

              <div>
                <label>MongoDb</label>
                <div className="skill">
                  <div className=" level level-medium"></div>
                </div>
              </div>
            </section>
        </div>
        <div className="exp-sk">
          <div className="experiences">
            <h2>Experiences</h2>
            <section>
              {/* <h4>Professional</h4> */}
              <div className="exp-item">
                <h4 className="title">Technical lead</h4>
                <span>October 2017 – Present</span>
                <span className="location">KAVAA Global service, Abidjan, Côte d’Ivoire </span>
                <p>Actually technical lead on the second phase of the Strategic Resource Assessment System (SARS) 
                  project of the African Development Bank (AFDB). Modeling new features, maintain production code, 
                  define project planning and delay, communicate with client and responsible of budgeting management module, 
                  work flow engine, data exportation system in Excel file with all the formatting, maintain the other modules 
                  and the improved system performance.
                  Before Software Engineer, participates in the modeling and design of 
                  the Business Process Management System of the ANPI Gabon 
                  (National Agency for the Promotion of Investments of Gabon). 
                  Also in charge of the integration of a work flow engine in the project. Then technical lead.
                </p>
              </div>

              <div className="exp-item">
                <h4 className="title">Software Engineer</h4>
                <span>August2017 - September 2017</span>
                <span className="location">INEXA SARL, Abidjan, Côte d’Ivoire</span>
                <p>
                  Responsible for developing part of the health insurance management
                   of an ERP (Atlantis ERP) as a Consultant.
                </p>
              </div>

              <div className="exp-item">
                <h4 className="title">Software Engineer</h4>
                <span>March 2016 – September 2017</span>
                <span className="location">Dip Systems Africa, Abidjan, Côte d’Ivoire                                                                             </span>
                <p>
                •Software engineer responsible for implementing version 2 of the AngularJS search engine by integrating new 
                functionalities such as: Selective Information Distribution and Statistical System. 
                •Software developer responsible for maintaining and improving the performance of Open Search Server-based 
                document search engine developed in PHP (EDIP OSS).
                </p>
              </div>


              <div className="exp-item">
                <h4 className="title">Software Engineer</h4>
                <span>September 2014 – February 2016</span>
                <span className="location">JFR Systems, Abidjan, Côte d’Ivoire                                                                             </span>
                <p>
                Mobile developer Windows phone, responsible for the mobile development team (Android and Windows). 
                Also in charge of the development of all web APIs and application performance management.
                </p>
              </div>
            </section>

            {/* <section>
              <h4>Personal</h4>
            </section> */}
          </div>
          <div className="education">
          <h2>Education</h2>
          <section>
              {/* <h4>Professional</h4> */}
              <div className="exp-item">
                <h4 className="title"> Master Degree in Computer Science / Engineer  </h4>
                <span>October 2014 – November 2016</span>
                <span className="location">University Felix Houphouet Boigny, Abidjan, Côte d’Ivoire </span>
              </div>

              <div className="exp-item">
                <h4 className="title"> Bachelor. Computer Science / Engineer </h4>
                <span>August2017 - September 2017</span>
                <span className="location">University Felix Houphouet Boigny, Abidjan, Côte d’Ivoire</span>
              </div>
            </section>
        </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
