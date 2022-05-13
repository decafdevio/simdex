import React, { useState, useEffect } from "react";
import { ListGroup, Badge } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheatBuildbuy() {
  return (
    <>
      <h2>Max Skill (Adult) Cheats</h2>
      <hr />
      <div className="notice">
        Use the Cheat Console by pressing <b>CTRL + SHIFT + C</b>.
        <br />
        <span
          style={{
            border: "1px solid grey",
            backgroundColor: "white",
            borderRadius: ".3em",
            padding: ".3em",
            cursor: "pointer",
          }}
          onClick={() => {
            navigator.clipboard.writeText("testingcheats true").then(() => {
              const toastId = toast("testingcheats true copied to clipboard.", {
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            });
          }}
        >
          <b>testingcheats true</b>
        </span>
        <br />
        Input the cheat code above first before entering the cheats below.
      </div>

      <ListGroup as="ol">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">stats.set_skill_level Major_Acting 10</div>
            Max out Acting skill (The Sims 4 Get Famous)
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard
                .writeText("stats.set_skill_level Major_Acting 10")
                .then(() => {
                  const toastId = toast(
                    "stats.set_skill_level Major_Acting 10 copied to clipboard.",
                    {
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                });
            }}
            style={{ cursor: "pointer" }}
            pill
          >
            copy
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              stats.set_skill_level Major_Archaeology 10
            </div>
            Max out Archaeology skill (The Sims 4 Jungle Adventure)
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard
                .writeText("stats.set_skill_level Major_Archaeology 10")
                .then(() => {
                  const toastId = toast(
                    "stats.set_skill_level Major_Archaeology 10 copied to clipboard.",
                    {
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                });
            }}
            style={{ cursor: "pointer" }}
            pill
          >
            copy
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">stats.set_skill_level Major_Baking 10</div>
            Max out Baking skill (The Sims 4 Get to Work)
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard
                .writeText("stats.set_skill_level Major_Baking 10")
                .then(() => {
                  const toastId = toast(
                    "stats.set_skill_level Major_Baking 10 copied to clipboard.",
                    {
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                });
            }}
            style={{ cursor: "pointer" }}
            pill
          >
            copy
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">stats.set_skill_level Skill_Bowling 5</div>
            Max out Bowling skill (The Sims 4 Bowling Night Stuff)
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard
                .writeText("stats.set_skill_level Skill_Bowling 5")
                .then(() => {
                  const toastId = toast(
                    "stats.set_skill_level Skill_Bowling 5 copied to clipboard.",
                    {
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                });
            }}
            style={{ cursor: "pointer" }}
            pill
          >
            copy
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              stats.set_skill_level Major_HomestyleCooking 10
            </div>
            Max out Cooking skill
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard
                .writeText("stats.set_skill_level Major_HomestyleCooking 10")
                .then(() => {
                  const toastId = toast(
                    "stats.set_skill_level Major_HomestyleCooking 10 copied to clipboard.",
                    {
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                });
            }}
            style={{ cursor: "pointer" }}
            pill
          >
            copy
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">stats.set_skill_level Minor_Dancing 5</div>
            Max out Dancing skill (The Sims 4 Get Together)
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard
                .writeText("stats.set_skill_level Minor_Dancing 5")
                .then(() => {
                  const toastId = toast(
                    "stats.set_skill_level Minor_Dancing 5 copied to clipboard.",
                    {
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                });
            }}
            style={{ cursor: "pointer" }}
            pill
          >
            copy
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">stats.set_skill_level Major_DJ 10</div>
            Max out DJ skill (The Sims 4 Get Together)
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard
                .writeText("stats.set_skill_level Major_DJ 10")
                .then(() => {
                  const toastId = toast(
                    "stats.set_skill_level Major_DJ 10 copied to clipboard.",
                    {
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                });
            }}
            style={{ cursor: "pointer" }}
            pill
          >
            copy
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              stats.set_skill_level Major_Charisma 10
            </div>
            Max out Charisma skill
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard
                .writeText("stats.set_skill_level Major_Charisma 10")
                .then(() => {
                  const toastId = toast(
                    "stats.set_skill_level Major_Charisma 10 copied to clipboard.",
                    {
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                });
            }}
            style={{ cursor: "pointer" }}
            pill
          >
            copy
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">stats.set_skill_level Major_Comedy 10</div>
            Max out Comedy skill
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard
                .writeText("stats.set_skill_level Major_Comedy 10")
                .then(() => {
                  const toastId = toast(
                    "stats.set_skill_level Major_Comedy 10 copied to clipboard.",
                    {
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                });
            }}
            style={{ cursor: "pointer" }}
            pill
          >
            copy
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              stats.set_skill_level AdultMajor_Fabrication 10
            </div>
            Max out Fabrication skill (The Sims 4 Eco Lifestyle)
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard
                .writeText("stats.set_skill_level AdultMajor_Fabrication 10")
                .then(() => {
                  const toastId = toast(
                    "stats.set_skill_level AdultMajor_Fabrication 10 copied to clipboard.",
                    {
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                });
            }}
            style={{ cursor: "pointer" }}
            pill
          >
            copy
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              stats.set_skill_level Major_Fishing 10
            </div>
            Max out Fishing skill
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard
                .writeText("stats.set_skill_level Major_Fishing 10")
                .then(() => {
                  const toastId = toast(
                    "stats.set_skill_level Major_Fishing 10 copied to clipboard.",
                    {
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                });
            }}
            style={{ cursor: "pointer" }}
            pill
          >
            copy
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              stats.set_skill_level Skill_Fitness 10
            </div>
            Max out Fitness skill
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard
                .writeText("stats.set_skill_level Skill_Fitness 10")
                .then(() => {
                  const toastId = toast(
                    "stats.set_skill_level Skill_Fitness 10 copied to clipboard.",
                    {
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                });
            }}
            style={{ cursor: "pointer" }}
            pill
          >
            copy
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              stats.set_skill_level statistic_skill_AdultMajor_FlowerArranging
              10
            </div>
            Max out Flower Arranging skill (The Sims 4 Seasons)
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard
                .writeText(
                  "stats.set_skill_level statistic_skill_AdultMajor_FlowerArranging 10"
                )
                .then(() => {
                  const toastId = toast(
                    "stats.set_skill_level statistic_skill_AdultMajor_FlowerArranging 10 copied to clipboard.",
                    {
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                });
            }}
            style={{ cursor: "pointer" }}
            pill
          >
            copy
          </Badge>
        </ListGroup.Item>
      </ListGroup>
      <ToastContainer theme="light" position="top-left" />
    </>
  );
}

export default CheatBuildbuy;
