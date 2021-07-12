import React, { Component } from 'react';
import project1 from '../img/leetcode.gif';
import project2 from '../img/git.gif';
import project3 from '../img/project3.png';
import project4 from '../img/project4.png';

class Portfolio extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Work</h1>
        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>
        <div class="port_out port1">
          <div class="port_in">
             <a href="https://leetcode.com/vk_0013/"><img src={project1} alt="leetcode"
                className="po1"
              ></img>
            </a>
          </div>
        </div>
        <div class="port_out port2">
          <div class="port_in">
          <a href="https://github.com/vamsikrishna-addanki"><img src={project2} alt="github"
                className="po1"
              ></img>
            </a>
          </div>
        </div>
        <div class="port_out port3">
          <div class="port_in">
          <a href="https://codeforces.com/profile/SOUL_REGA"><img src={project3} alt="codeforces" className="po1"></img></a>
          </div>
        </div>
        <div class="port_out port4">
          <div class="port_in">
          <a href="https://github.com/enviro-promise/enviropromise"><img src={project4}alt="enviropromise" className="po1"></img></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;