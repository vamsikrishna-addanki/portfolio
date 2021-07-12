import { Component } from "react";
import 'fa-icons'


class Social extends Component {
  render() {
    return (
      <div className="social">
            <div class="btnsame btn1">
				<a href="https://github.com/vamsikrishna-addanki"  rel ="noreferrer"target="_blank"><i className="fa fa-github"></i></a>
			</div>
			<div className="btnsame btn2">
				<a href="https://twitter.com/VAMSIKR63097704?s=08"  rel ="noreferrer" target="_blank"><i className="fa fa-twitter"></i></a>
			</div>
			<div className="btnsame btn3">
				<a href="https://www.linkedin.com/in/vamsi-krishna-addanki-9866301a0"  rel ="noreferrer"  target="_blank"><i className="fa fa-linkedin"></i></a>
			</div>
			<div className="btnsame btn4">
				<a href="https://www.instagram.com/cool_dude_0013/"  rel ="noreferrer" target="_blank"><i className="fa fa-instagram"></i></a>
			</div>
            </div>
    );
  }
}

export default Social;
