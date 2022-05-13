import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CheatMoney from "./pages/CheatMoney";
import CheatBuildbuy from "./pages/CheatBuildbuy";
import MaxSkillA from "./pages/MaxSkillA";
import ChallAlphabet from "./pages/ChallAlphabet";
import ChallGeneration from "./pages/ChallGeneration";
import BitsCalendar from "./pages/Calendar";
import BitsFoods from "./pages/Foods";
import Chall100 from "./pages/Chall100";
import ChallLover from "./pages/ChallLover";
import ChallBerry from "./pages/ChallBerry";
import ChallDecades from "./pages/ChallDecades";
import ChallDifferences from "./pages/ChallDifferences";

import Main from "./pages/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import "./css/forms.css";
import simMan from "./img/sim-man.png";
import gPlumb from "./img/plum/green.png";
import bPlumb from "./img/plum/blue.png";
import pPlumb from "./img/plum/purple.png";
import rPlumb from "./img/plum/red.png";
import yPlumb from "./img/plum/yellow.png";

function Home() {
  const navigation = (page) => {
    document.getElementById("content-main").style.display = "none";
    document.getElementById("content-cheat-money").style.display = "none";
    document.getElementById("content-cheat-buildbuy").style.display = "none";
    document.getElementById("content-cheat-maxskill-a").style.display = "none";
    document.getElementById("content-calendar").style.display = "none";
    document.getElementById("content-foods").style.display = "none";
    document.getElementById("content-challenge-alphabet").style.display =
      "none";
    document.getElementById("content-challenge-generation").style.display =
      "none";
    document.getElementById("content-challenge-baby").style.display = "none";
    document.getElementById("content-challenge-lover").style.display = "none";
    document.getElementById("content-challenge-berry").style.display = "none";
    document.getElementById("content-challenge-decades").style.display = "none";
    document.getElementById("content-challenge-differences").style.display =
      "none";

    switch (page) {
      case "Home":
        document.getElementById("content-main").style.display = "";
        break;
      case "Money":
        document.getElementById("content-cheat-money").style.display = "";
        break;
      case "Buildbuy":
        document.getElementById("content-cheat-buildbuy").style.display = "";
        break;
      case "MaxSkillA":
        document.getElementById("content-cheat-maxskill-a").style.display = "";
        break;
      case "Dictionary":
        document.getElementById("content-dictionary").style.display = "";
        break;
      case "Calendar":
        document.getElementById("content-calendar").style.display = "";
        break;
      case "uni":
        document.getElementById("content-uni").style.display = "";
        break;
      case "Foods":
        document.getElementById("content-foods").style.display = "";
        break;
      case "Alphabet":
        document.getElementById("content-challenge-alphabet").style.display =
          "";
        break;
      case "Generation":
        document.getElementById("content-challenge-generation").style.display =
          "";
        break;
      case "Lover":
        document.getElementById("content-challenge-lover").style.display = "";
        break;
      case "Berry":
        document.getElementById("content-challenge-berry").style.display = "";
        break;
      case "Baby":
        document.getElementById("content-challenge-baby").style.display = "";
        break;
      case "Decades":
        document.getElementById("content-challenge-decades").style.display = "";
        break;
      case "Differences":
        document.getElementById("content-challenge-differences").style.display =
          "";
        break;
    }
  };

  return (
    <>
      <main>
        <div onClick={() => navigation("Home")} className="title"></div>
        <span onClick={() => navigation("Home")} className="sims-font">
          SIMLISH
        </span>
        <Navbar bg="light" expand="lg">
          <Container>
            {/* <Navbar.Brand
              className="homeButton"
              onClick={() => navigation("Home")}
            >
              Amy's SIMS App
            </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto nav_center">
                <Nav.Link onClick={() => navigation("Building")}>
                  Building Inspo
                </Nav.Link>
                <Nav.Link onClick={() => navigation("dyk")}>
                  Did you know?
                </Nav.Link>

                <NavDropdown title="Cheatsheet" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => navigation("Money")}>
                    Money
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigation("Buildbuy")}>
                    Build/Buy
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigation("MaxSkillA")}>
                    Max Skill - Adult
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Bits and Bobbles" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => navigation("Dictionary")}>
                    Dictionary
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigation("Calendar")}>
                    Calendar
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigation("Uni")}>
                    Uni Degree Info
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigation("Foods")}>
                    Foods
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Challenges" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => navigation("Alphabet")}>
                    Alphabet
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigation("Generation")}>
                    Generation
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigation("Lover")}>
                    I'm A Lover
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigation("Berry")}>
                    Not So Berry
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigation("Baby")}>
                    100 Baby
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigation("Decades")}>
                    Decades
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigation("Differences")}>
                    Differences in the Family
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>{" "}
        <div className="content">
          <div id="content-main">
            <Main />
          </div>
          <div id="content-cheat-money" style={{ display: "none" }}>
            <CheatMoney />
          </div>
          <div id="content-cheat-buildbuy" style={{ display: "none" }}>
            <CheatBuildbuy />
          </div>
          <div id="content-cheat-maxskill-a" style={{ display: "none" }}>
            <MaxSkillA />
          </div>
          <div id="content-calendar" style={{ display: "none" }}>
            <BitsCalendar />
          </div>
          <div id="content-foods" style={{ display: "none" }}>
            <BitsFoods />
          </div>
          <div id="content-challenge-alphabet" style={{ display: "none" }}>
            <ChallAlphabet />
          </div>
          <div id="content-challenge-generation" style={{ display: "none" }}>
            <ChallGeneration />
          </div>
          <div id="content-challenge-baby" style={{ display: "none" }}>
            <Chall100 />
          </div>
          <div id="content-challenge-lover" style={{ display: "none" }}>
            <ChallLover />
          </div>
          <div id="content-challenge-berry" style={{ display: "none" }}>
            <ChallBerry />
          </div>
          <div id="content-challenge-decades" style={{ display: "none" }}>
            <ChallDecades />
          </div>
          <div id="content-challenge-differences" style={{ display: "none" }}>
            <ChallDifferences />
          </div>
        </div>
        <br />
        <div className="content">
          designed by{" "}
          <a href="https://github.com/enitial" target="_new">
            <b>@enitial</b>
          </a>
        </div>
      </main>
    </>
  );
}

export default Home;
