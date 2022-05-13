import React, { useState, useEffect } from "react";
import { ListGroup, Badge } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheatBuildbuy() {
  return (
    <>
      <h2>Build/Buy Cheats</h2>
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
            <div className="fw-bold">bb.moveobjects</div>
            Combine objects by ignoring placement rules (Move Objects on)
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard.writeText("bb.moveobjects").then(() => {
                const toastId = toast("bb.moveobjects copied to clipboard.", {
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
            <div
              className="fw-bold bb_ign_long"
              title="bb.ignoregameplayunlocksentitlement"
            >
              bb.ignoregameplayunlocksentitlement
            </div>
            Unlock all career rewards (including styled rooms)
          </div>
          <Badge
            bg="primary"
            style={{ marginLeft: "-6.3em" }}
            onClick={() => {
              navigator.clipboard
                .writeText("bb.ignoregameplayunlocksentitlement")
                .then(() => {
                  const toastId = toast(
                    "bb.ignoregameplayunlocksentitlement copied to clipboard.",
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
            <div className="fw-bold">Shift + &#93;</div>
            Increase the size of objects
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Shift + &#91;</div>
            Decrease the size of objects
          </div>
        </ListGroup.Item>{" "}
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Click roof and use Shift + C</div>
            Add more options to manipulate roofs
          </div>
        </ListGroup.Item>{" "}
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">bb.showhiddenobjects</div>
            Buy Debug mode (adds extra objects)
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard.writeText("bb.showhiddenobjects").then(() => {
                const toastId = toast(
                  "bb.showhiddenobjects copied to clipboard.",
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
        </ListGroup.Item>{" "}
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">bb.showliveeditobjects</div>
            Unlocks over 1000 extra world environment objects to your game
            (you’ll also have to use the bb.showhiddenobjects cheat before they
            show up)
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard
                .writeText("bb.showliveeditobjects")
                .then(() => {
                  const toastId = toast(
                    "bb.showliveeditobjects copied to clipboard.",
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
        </ListGroup.Item>{" "}
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">bb.enablefreebuild</div>
            Edit the Hospital, Police Station and the Science Lab in The Sims 4
            Get To Work and the Magic HQ in Realm of Magic. This will also work
            on secret lots.
          </div>
          <Badge
            bg="primary"
            onClick={() => {
              navigator.clipboard.writeText("bb.enablefreebuild").then(() => {
                const toastId = toast(
                  "bb.enablefreebuild copied to clipboard.",
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
