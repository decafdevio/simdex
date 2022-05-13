import React, { useState, useEffect } from "react";
import { ListGroup, Badge } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheatMoney() {
  return (
    <>
      <h2>Money Cheats</h2>
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
            <div className="fw-bold">kaching</div>
            Get 1,000 Simoleons
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard.writeText("kaching").then(() => {
                const toastId = toast("kaching copied to clipboard.", {
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
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
            <div className="fw-bold">rosebud</div>
            Get 1,000 Simoleons
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard.writeText("rosebud").then(() => {
                const toastId = toast("rosebud copied to clipboard.", {
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
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
            <div className="fw-bold">motherlode</div>
            Get 50,000 Simoleons
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard.writeText("motherlode").then(() => {
                const toastId = toast("motherlode copied to clipboard.", {
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
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
              Money{" "}
              <input
                type="text"
                id="MoneyNumber"
                name="MoneyNumber"
                class="formInput"
                placeholder="number"
              />
            </div>
            Change funds from household to exact number
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              let MoneyNumberVal = document.getElementById("MoneyNumber").value;
              if (MoneyNumberVal !== "") {
                navigator.clipboard
                  .writeText("Money " + MoneyNumberVal)
                  .then(() => {
                    const toastId = toast(
                      "Money " + MoneyNumberVal + " copied to clipboard.",
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
              } else {
                alert("Please enter a number");
              }
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
            <div className="fw-bold">FreeRealEastate </div>
            All lots are free when you enter this cheat when in
            neighborhood/world
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard.writeText("FreeRealEastate").then(() => {
                const toastId = toast("FreeRealEastate copied to clipboard.", {
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
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

export default CheatMoney;
