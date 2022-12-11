import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="skill">
      <div className="me">
        <h1 className="text-center">MY Skills</h1>
        <div className="container pt-10 pb-10">
          <div className="skills">
            <div className="row ">
              <div className="skill-item padd-15 ">
                <h1>CSS</h1>

                <div className="progress">
                  <div className="progress-in" style={{ width: "93%" }}></div>
                  <div className="skill-percent pb-4">93%</div>
                </div>
              </div>
              <div className="skill-item padd-15 ">
                <h1>HTML</h1>

                <div className="progress">
                  <div className="progress-in" style={{ width: "95%" }}></div>
                  <div className="skill-percent pb-4">95%</div>
                </div>
              </div>
              <div className="skill-item padd-15 ">
                <h1>Java Script</h1>

                <div className="progress">
                  <div style={{ width: "80%" }} className="progress-in "></div>
                  <div className="skill-percent pb-4">80%</div>
                </div>
              </div>
              <div className="skill-item padd-15 ">
                <h1>Reat Js</h1>

                <div className="progress">
                  <div className="progress-in" style={{ width: "85%" }}></div>
                  <div className="skill-percent pb-4">85%</div>
                </div>
              </div>
              <div className="skill-item padd-15 ">
                <h1>MongoDB</h1>

                <div className="progress">
                  <div className="progress-in" style={{ width: "65%" }}></div>
                  <div className="skill-percent pb-4">65%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="another-skills">
            <div className="row ">
              <div className="skill-item padd-15 ">
                <h1>Express.JS</h1>

                <div className="progress">
                  <div className="progress-in" style={{ width: "53%" }}></div>
                  <div className="skill-percent pb-4">53%</div>
                </div>
              </div>
              <div className="skill-item padd-15 ">
                <h1>Redux</h1>

                <div className="progress">
                  <div className="progress-in" style={{ width: "45%" }}></div>
                  <div className="skill-percent pb-4">45%</div>
                </div>
              </div>
              <div className="skill-item padd-15 ">
                <h1>Node.JS</h1>

                <div className="progress">
                  <div style={{ width: "50%" }} className="progress-in "></div>
                  <div className="skill-percent pb-4">50%</div>
                </div>
              </div>
              <div className="skill-item padd-15 ">
                <h1>Material UI</h1>

                <div className="progress">
                  <div className="progress-in" style={{ width: "70%" }}></div>
                  <div className="skill-percent pb-4">70%</div>
                </div>
              </div>
              <div className="skill-item padd-15 ">
                <h1>Bootstrap</h1>

                <div className="progress">
                  <div className="progress-in" style={{ width: "86%" }}></div>
                  <div className="skill-percent pb-4">86%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;