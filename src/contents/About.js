import { Component } from 'react';
// const { useState, useRef, useEffect } = React // inline import
 import { useState, useRef, useEffect }  from 'react' // normal import


const Typing = ({ text, delay = 100 }) => {
    
  const to = useRef()
  const [charIndex, setCharIndex] = useState(1)

  useEffect(() => {
    if(charIndex < text.length) 
    {
      to.current = setTimeout(() => setCharIndex(charIndex + 1), 12)
    } 
    else 
    {
        return text.substr(0, charIndex);
    }
    return () => clearTimeout(to.current) // cleanup on unmount
  }, [charIndex])

  return text.substr(0, charIndex)
}



class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <div className="hr_line line2"><div className="inner2"></div></div>
            <h2 className="abouthead">ADDANKI <mark className="mark2">VAMSIKRISHNA</mark></h2>
            <p>MERN Stack Developer</p> 
  
            <br></br>
         
            <p className="p10"><Typing text="I started my journey in the world of computers at the age of 17,
            currently I’m 20 years old,and i am an CSE undergraduate from
            National Institute of Technology, Silchar. My center of interests  are  machine learning and web development,
            i tend to change according to the ongoing trends which helps me to keep updated,i have a work experience from Enviro promise,through which i learnt  team work. apart from ciricullum i am also inclined towards sports like cricket and football, I spend most of my leisure period in watching cricket.
            "/>
            </p>
            <div className="Edu">
                <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div>
            </div>
            <h3 className="ab">Education</h3>
            <div className="vr_line">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
            </div>
            <div className="p3">
            <h4 className="p1">B.Tech in CSE</h4>
            <p className="p1">National Institute of Technology, Silchar</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>{"  "}Batch of 2019 - 2023</p>
            <h4>High School</h4>
            <p className="p1">Sasi Educational Institutes, Velivennu</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>{"  "}Batch- 2017</p>
            </div>

            <h3 class="sk_head">Skills</h3>
            <div class="sk">HTML,CSS</div>
            <div class="sk s2">GIT</div>
            <div class="sk s3">JS</div>
            <div class="sk s4">REACT JS</div>
            <div class="sk s5">Express JS</div>
            <div class="sk s6">C++,C</div>
            </div>
            )
        }
    }
    
export default About