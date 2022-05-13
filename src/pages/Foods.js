import React from "react";

function ChallCalendar() {
  return (
    <>
      <div className="diet">
        <div className="diet_v">
          <b>V</b> - Vegetarian
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div className="diet_s">
          <b>H</b> - Spicy
        </div>
      </div>
      <br />

      <div className="article">
        <h3>Foods of the World</h3>
        <hr />
        <p>
          <h4>Japanese</h4>
          <ul>
            <li>Ramen</li>
            <li>
              Dango <span className="diet_icon_v">V</span>
            </li>
            <li>Nigiri</li>
            <li>Pufferfish Nigiri</li>
          </ul>
        </p>
        <p>
          <h4>Mexican</h4>
          <ul>
            <li>Taquitos</li>
            <li>Empandas</li>
            <li>
              Bean & Cheese Burrito <span className="diet_icon_v">V</span>
            </li>
            <li>Chicken Burrito</li>
            <li>
              Spinach-Wrapped Veggie Burrito{" "}
              <span className="diet_icon_v">V</span>
            </li>
            <li>
              Tomato-Wrapped Veggie Burrito{" "}
              <span className="diet_icon_v">V</span>
            </li>
          </ul>
        </p>
        <p>
          <h4>Filipino</h4>
          <ul>
            <li>Siopao</li>
            <li>Lumpia</li>
            <li>
              Ensaymada <span className="diet_icon_v">V</span>
            </li>
            <li>Pork Adobo</li>
          </ul>
        </p>
        <p>
          <h4>Chinese</h4>
          <ul>
            <li>Egg Rolls</li>
            <li>
              Mapo Tofu with Pork <span className="diet_icon_s">H</span>
            </li>
            <li>Sweet and Sour Pork</li>
            <li>
              Sweet and Sour Eggplant <span className="diet_icon_v">V</span>
            </li>
          </ul>
        </p>
        <p>
          <h4>Indian</h4>
          <ul>
            <li>
              Samosa <span className="diet_icon_s">H</span>
            </li>
            <li>
              Bhel Puri <span className="diet_icon_v">V</span>
              <span className="diet_icon_s">H</span>
            </li>
            <li>
              Curry <span className="diet_icon_s">H</span>
            </li>
          </ul>
        </p>
        <p>
          <h4>Moroccan</h4>
          <ul>
            <li>Brochette</li>
            <li>Tajine</li>
            <li>Merguez</li>
          </ul>
        </p>
        <p>
          <h4>Vietnamese</h4>
          <ul>
            <li>Gui Cuon</li>
            <li>Banh Mi</li>
            <li>
              Pho <span className="diet_icon_s">H</span>
            </li>
          </ul>
        </p>
        <p>
          <h4>Selvadorada</h4>
          <ul>
            <li>
              Platanos Fritos <span className="diet_icon_v">V</span>
            </li>
            <li>
              Pastel de Palmito <span className="diet_icon_v">V</span>
            </li>
            <li>Pastel de Camarão</li>
            <li>
              Empanadas de Verde <span className="diet_icon_v">V</span>
            </li>
            <li>
              Buñuelos <span className="diet_icon_v">V</span>
            </li>
            <li>
              Arepa Rellena con Perico <span className="diet_icon_v">V</span>
            </li>
            <li>Arepa de Pabellòn</li>
            <li>
              Baleada <span className="diet_icon_v">V</span>
            </li>
            <li>Feijoada</li>
            <li>Curanto</li>
          </ul>
        </p>
      </div>
    </>
  );
}

export default ChallCalendar;
