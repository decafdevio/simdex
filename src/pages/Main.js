import React, { useState, useEffect } from "react";
import imgMap from "../img/sim4-map.png";

function Main() {
  return (
    <>
      <div className="article">
        <h3>SulSul!</h3>
        <hr />
        {/* <a href={imgMap} target="_new">
          <img src={imgMap} />
        </a>
        <br />
        <br /> */}
        <p>
          <b>SulSul!</b> Welcome to my Sims4 page! I find myself hopping around
          the internet searching for tips, tricks, ideas & new exciting
          challenges for when my brain has given up on creativity. So I made
          this to gather all my favourite pages of information into one simple
          information archive. Including build inspo, an extensive cheat sheet,
          calendar ideas & so much more! <i>Badeesh!</i>{" "}
        </p>
      </div>
      <br />
      <div className="article">
        <h3>The SIMS4 World Map</h3>
        <hr />
        <a href={imgMap} target="_new">
          <img src={imgMap} />
        </a>
        <br />
        <br />
        <p>
          Lorem ipsum dolor sit amet. Ut similique corrupti eum fuga
          voluptatibus ab earum similique qui ipsa sapiente. Et rerum omnis qui
          internos accusamus non deserunt vero et voluptatem saepe et magnam
          itaque vel rerum veniam ea illum sunt. Sed quod rerum ad voluptas
          excepturi ut omnis nemo qui laboriosam accusamus qui voluptates autem
          aut necessitatibus velit. Sed beatae quibusdam et neque tempora qui
          quisquam natus!
        </p>
      </div>
    </>
  );
}

export default Main;
