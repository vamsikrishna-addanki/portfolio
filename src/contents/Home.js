import { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import Social from "../components/Social";
import emoji from "react-easy-emoji";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <div>
        <h6 data-text="ADDANKI.VAMSI.KRISHNA">
          ADDANKI{"."}VAMSI{"."}KRISHNA  <span className="we">{emoji("👋")}</span>
        </h6>
        
        </div>
        <ReactTypingEffect className="typingeffect" text={['A MERN Stack Developer','Competetive Programmer','A Science enthusiast']} speed={90} eraseDelay={50}/>
        <div className="hr_line">
          <div className="hr_inner"></div>
        </div>
        <Social />
      </div>
    );
  }
}

export default Home;