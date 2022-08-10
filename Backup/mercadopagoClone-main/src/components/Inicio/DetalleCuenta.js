import React, { useState } from "react";
import "./DetalleCuenta.css";
import { BsChevronRight } from "react-icons/bs";

function DetalleCuenta() {
  const [eye, setEye] = useState("");

  return (
    <section className="detallecuenta">
      <section className="detallecuenta__container__top">
        <div className="detallecuenta__disponible">
          <div>Dinero Invertido Disponible</div> <span>Tu CVU</span>
        </div>
        <div className="detallecuenta__dinero">
          <div
            className={eye === "" ? "detallecuenta__dinero__numeros" : "none"}
          >
            <div className="detallecuenta__dinero__numeros__1">$ 7.062</div>
            <div className="detallecuenta__dinero__numeros__2">97</div>
            <div
              className="detallecuenta__dinero__numeros__icon"
              onClick={() => setEye("dontsee")}
            >
              👁
            </div>
          </div>

          <div
            className={eye === "" ? "none" : "detallecuenta__dinero__numeros"}
          >
            <div className="detallecuenta__dinero__numeros__1">$***.***</div>
            <div className="detallecuenta__dinero__numeros__2">**</div>
            <div
              className="detallecuenta__dinero__numeros__icon"
              onClick={() => setEye("")}
            >
              <svg
                id="news__feed__svg"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="21"
                fill="currentColor"
                className="bi bi-eye-slash-fill"
                viewBox="0 0 16 16"
              >
                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
              </svg>
            </div>
          </div>

          <span>
            <div style={{ fontSize: "11px" }}>
              <BsChevronRight />
            </div>
          </span>
        </div>
        <div className="detallecuenta__aliquidar">
          <div>$0 a liquidar</div>
        </div>
      </section>
      <section className="detallecuenta__container__mid">
        <div className="detallecuenta__rendimientos">
          <div className={eye === "" ? "detallecuenta__rendimientos__detalle":"none"}>
            <b>$ 24.403 </b>generados en total
          </div>
          <div className={eye === "" ?"none":"detallecuenta__rendimientos__detalle"}>
            <b>$ ***.*** </b>generados en total
          </div>
          <div className="detallecuenta__rendimientos__numeros">
            <span>+ 33,7%</span>
            <div>
              <BsChevronRight />
            </div>
          </div>
        </div>
        <div className="detallecuenta__barra"></div>
      </section>
      <section className="detallecuenta__container__bot">
        <div className="detallecuenta__buttons">
          <div>Ingresar dinero</div>
          <div>Transferir dinero</div>
        </div>
      </section>
    </section>
  );
}

export default DetalleCuenta;
