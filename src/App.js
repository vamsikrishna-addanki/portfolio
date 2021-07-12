import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./contents/Home";
import About from "./contents/About";
import Portfolio from "./contents/Portfolio";
import Contact from "./contents/Contact";
import 'fa-icons'


const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#e6d3ff"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .condiv, .p10{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#e6d3ff"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  nav{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#e6d3ff"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  a{
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .back1{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#e6d3ff"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .social{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#e6d3ff"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .btnsame{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#e6d3ff"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .neu1{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#e6d3ff"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .neu2{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#e6d3ff"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .hr_line{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#e6d3ff"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .hr_inner{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#e6d3ff"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .vr_line{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#e6d3ff"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .vr_inner{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#e6d3ff"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
`;
let style={
  fontSize: '28px',
  top: '20px',
  
}
function App() {
  const [theme, setTheme] = useState({ mode: "light" });
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Router basename='/index.html'>
          <div className="App">
            <Navbar />
            <Route exact path="/*">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <div
              class="back16"
              onClick={(e) =>
                setTheme(
                  theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
                )
              }
            >
              <i
                class={theme.mode === "dark" ? "fa fa-lightbulb-o" : "fa fa-moon-o"} style={style}
              ></i>
            </div>
          </div>
        </Router>
        <p className="vk" ><i class="fa fa-copyright"></i>MADE BY VAMSI KRISHNA ADDANKI{" "}<i class="fa fa-child"></i></p>
        
      </>
    </ThemeProvider>
  );
}

export default App;



