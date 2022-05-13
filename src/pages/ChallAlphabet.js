import React from "react";

function ChallAlphabet() {
  return (
    <>
      <div className="article">
        <h3>Alphabet</h3>
        <hr />
        <p>
          <ol>
            <li>
              To start this challenge you will make 2 sims with the letters A
              and B for the first letter of their first names.
            </li>
            <li>
              These 2 sims then have a child and their name shall start with the
              letter C.
            </li>
            <li>
              All of the sims traits must be chosen based off their chosen
              letter. Eg: Sim A will have the Active trait. You can choose to
              make all the sims’s traits A if you can find that but if you
              can’t, then at least one trait must match their chosen letter.
            </li>
            <li>
              The C child made by your A and B sims has to make a child with a
              sim who has the letter D for the first letter in their first name.
              The sim must come from the world and can’t be a sim you made.
            </li>
            <li>You continue this cycle until you finish the alphabet!</li>
          </ol>
        </p>
      </div>
      <br />
    </>
  );
}

export default ChallAlphabet;
