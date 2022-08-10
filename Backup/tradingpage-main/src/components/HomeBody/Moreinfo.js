import React from "react";
import "./Moreinfo.css";

function Moreinfo() {
  return (
    <div className="moreinfo">
      <div className="moreinfo__title">Need help?</div>
      <div className="moreinfo__sections">
        <div className="moreinfo__section1">
          <div><img
            className="moreinfo__image"
            src="https://www.pngkit.com/png/full/239-2395010_cdt-preguntas-frecuentes-icono-atencion-al-cliente.png"
            alt=""
            /></div>
          <div className="moreinfo__section">
              <div className="moreinfo__section__title">24/7 Support chat</div>
              <div className="moreinfo__section__detail">Get 24/7 support from our customer service agents.</div>
              <div className="moreinfo__section__more">Chat now</div>
          </div>
        </div>

        <div className="moreinfo__section1">
          <div><img
            className="moreinfo__image"
            src="https://icones.pro/wp-content/uploads/2021/05/icone-de-chat-vert.png"
            alt=""
            />
            </div>
          <div className="moreinfo__section">
              <div className="moreinfo__section__title">Frequent questions</div>
              <div className="moreinfo__section__detail">Please refer to the FAQ for detailed instructions on specific features.</div>
              <div className="moreinfo__section__more">More info</div>
          </div>
        </div>

        <div className="moreinfo__section1">
          <div>
          <img
            className="moreinfo__image"
            src="https://cdn-icons-png.flaticon.com/512/1997/1997876.png"
            alt=""
            />
          </div>
          <div className="moreinfo__section">
              <div className="moreinfo__section__title">Blog</div>
              <div className="moreinfo__section__detail">Stay up to date with the latest stories and reports.</div>
              <div className="moreinfo__section__more">More info</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moreinfo;
