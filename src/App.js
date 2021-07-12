import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./contents/Home";
import About from "./contents/About";
import Portfolio from "./contents/Portfolio";
import Contact from "./contents/Contact";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .condiv{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
    box-shadow: ${(props) =>
      props.theme.mode === "dark"
        ? "-3px -3px 7px #0f0f0f, inset 3px 3px 5px rgba(18, 18, 19, 0.288);"
        : "-3px -3px 7px #ffffff, 3px 3px 5px rgba(18, 18, 19, 0.288);"};

  }
  nav{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
    box-shadow: ${(props) =>
      props.theme.mode === "dark"
        ? "-3px -3px 7px #0f0f0f, inset 3px 3px 5px rgba(18, 18, 19, 0.288);"
        : "-3px -3px 7px #ffffff, 3px 3px 5px rgba(18, 18, 19, 0.288);"};
    
  }
  a{
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .back1{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .back3{
    box-shadow: ${(props) =>
      props.theme.mode === "dark"
        ? "-3px -3px 7px #0f0f0f, inset 3px 3px 5px rgba(18, 18, 19, 0.288);"
        : "-3px -3px 7px #ffffff, 3px 3px 5px rgba(18, 18, 19, 0.288);"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .nav-link{
    box-shadow: ${(props) =>
      props.theme.mode === "dark"
        ? "-3px -3px 7px #0f0f0f, inset 3px 3px 5px rgba(18, 18, 19, 0.288);"
        : "-3px -3px 7px #ffffff, 3px 3px 5px rgba(18, 18, 19, 0.288);"};
  }
  .social{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
    box-shadow: ${(props) =>
      props.theme.mode === "dark"
        ? "inset -3px -3px 7px #0f0f0f, inset 3px 3px 5px rgba(18, 18, 19, 0.288);"
        : " inset -3px -3px 7px #6b6b6b, inset 3px 3px 5px rgba(18, 18, 19, 0.288);"};
  }
  .btnsame{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
    box-shadow: ${(props) =>
      props.theme.mode === "dark"
        ? "-3px -3px 7px #0f0f0f, inset 3px 3px 5px rgba(18, 18, 19, 0.288);"
        : "-3px -3px 7px #ffffff, 3px 3px 5px rgba(18, 18, 19, 0.288);"};
  }
  .neu1{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
    box-shadow: ${(props) =>
      props.theme.mode === "dark"
        ? "-3px -3px 7px #0f0f0f,  3px 3px 5px rgba(18, 18, 19, 0.288);"
        : "-3px -3px 7px #ffffff, 3px 3px 5px rgba(18, 18, 19, 0.288);"};
  }
  .neu2{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
    box-shadow: ${(props) =>
      props.theme.mode === "dark"
        ? "inset -3px -3px 7px #0f0f0f,  inset 3px 3px 5px #171717;"
        : "-3px -3px 7px #ffffff, inset 3px 3px 5px #000;"};
    
  }
  .back1{
    box-shadow: ${(props) =>
      props.theme.mode === "dark"
        ? "-3px -3px 7px #0f0f0f,  3px 3px 5px rgba(18, 18, 19, 0.288);"
        : "-3px -3px 7px #ffffff, 3px 3px 5px rgba(18, 18, 19, 0.288);"};
  }
  .port_out{
    box-shadow: ${(props) =>
      props.theme.mode === "dark"
        ? "-3px -3px 7px #0f0f0f, inset 3px 3px 5px rgba(18, 18, 19, 0.288);"
        : "-3px -3px 7px #ffffff, 3px 3px 5px rgba(18, 18, 19, 0.288);"};
  }
  .port_in{
    box-shadow: ${(props) =>
      props.theme.mode === "dark"
        ? "-3px -3px 7px #0f0f0f, inset 3px 3px 5px rgba(18, 18, 19, 0.288);"
        : "-3px -3px 7px #ffffff, 3px 3px 5px rgba(18, 18, 19, 0.288);"};
  }



  .sk{
     box-shadow: ${(props) =>
       props.theme.mode === "dark"
         ? "inset -3px -3px 7px #0f0f0f, inset 3px 3px 5px rgba(18, 18, 19, 0.288);"
         : " -3px -3px 7px #ffffff, inset 3px 3px 5px rgba(18, 18, 19, 0.288);"};
  }


  .hr_line{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .hr_inner{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .vr_line{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
  .vr_inner{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#2c2d30" : "#dde1e7"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
  }
`;

function App() {
  const [theme, setTheme] = useState({ mode: "light" });
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/">
              <Home />
            </Route>{" "}
            <Route path="/about">
              <About />
            </Route>{" "}
            <Route path="/portfolio">
              <Portfolio />
            </Route>{" "}
            <Route path="/contact">
              <Contact />
            </Route>{" "}
            <div
              class="back1"
              onClick={(e) =>
                setTheme(
                  theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
                )
              }
            >
              <i
                class={theme.mode === "dark" ? "fa fa-sun i1" : "fa fa-moon i1"}
              ></i>{" "}
            </div>{" "}
          </div>{" "}
        </Router>{" "}
      </>{" "}
    </ThemeProvider>
  );
}

export default App;
