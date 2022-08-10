import "./Ayuda.css";
import React from "react";
import Blocks from "./Blocks";

function Ayuda() {
  return (
    <div className="ayuda">
      <div className="ayuda__container">
        <h2>¿Con qué podemos ayudarte?</h2>
        <div className="ayuda__search">
          <input placeholder="Buscá en Ayuda"></input>
          <button>Buscar</button>
        </div>
        <Blocks
          title="Cuenta Mercado Pago"
          subTitle="Ingresos, transferencias, extracciones, inversiones y tarjetas."
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <g fill="none" fill-rule="evenodd">
                <g fill="#009EE3" fill-rule="nonzero">
                  <g>
                    <path
                      d="M16.89 3.395c1.16 0 2.1.94 2.1 2.1l-.001 1.503h.001v1.2h-.001v3.603h.001v1.2h-.001l.001 1.492c0 1.16-.94 2.1-2.1 2.1h-.01L1 16.519V3.395h15.89zm0 1.2H2.2v10.73l14.686.068c.501 0 .904-.403.904-.9l-.001-1.494-4.292-.012c-1.593-.004-2.893-1.251-2.984-2.822l-.005-.175c0-1.652 1.34-2.991 2.991-2.991l4.29-.001.001-1.503c0-.497-.403-.9-.9-.9zm.899 3.603h-4.29c-.989 0-1.79.803-1.79 1.792 0 .99.801 1.794 1.792 1.797l4.288.012V8.198zM15.4 9.394v1.2H13v-1.2h2.4z"
                      transform="translate(-46 -194) translate(46 194)"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          }
        />
        <Blocks title="Pagos" subTitle="Compras, pagos y suscripciones que realizaste." 
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16"><g fill="none" fill-rule="evenodd"><g><g><path fill="#009EE3" fill-rule="nonzero" d="M.376.504h18v11.981h-18V.504zm1.2 1.2v9.581h15.6V1.704h-15.6z" transform="translate(-47 -299) translate(47 299)"></path><path fill="#009EE3" fill-rule="nonzero" d="M9.376 8.931c1.346 0 2.437-1.09 2.437-2.437 0-1.345-1.09-2.436-2.437-2.436-1.345 0-2.437 1.09-2.437 2.436 0 1.346 1.092 2.437 2.437 2.437zm0-1.2c-.683 0-1.237-.553-1.237-1.237 0-.683.554-1.236 1.237-1.236.684 0 1.237.553 1.237 1.236 0 .684-.553 1.237-1.237 1.237z" transform="translate(-47 -299) translate(47 299)"></path><path stroke="#009EE3" stroke-linecap="square" stroke-width="1.2" d="M17.763 14.5L1 14.5" transform="translate(-47 -299) translate(47 299)"></path></g></g></g></svg>} />
        <Blocks title="Ventas" subTitle="Tus cobros, tasas, y herramientas para vender QR, Point, link de pago, etc."
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"><g fill="none" fill-rule="evenodd"><g fill="#009EE3"><g transform="translate(-47 -392) translate(47 392)"><path fill-rule="nonzero" d="M2.678 1.482L7.581 1.482 16.147 10.048 11.244 14.95 2.678 6.385 2.678 3.766 1.536 3.766 1.536 6.858 11.244 16.566 17.762 10.048 8.054 0.34 1.536 0.34 1.536 2.624 2.678 2.624z"></path><circle cx="5.532" cy="4.337" r="1.142"></circle><path fill-rule="nonzero" d="M6.103 3.766L0.394 3.766 0.394 4.908 6.103 4.908z"></path></g></g></g></svg>} />
        <Blocks title="Créditos" subTitle="Cómo solicitar, usar y pagar cuotas de Mercado Crédito."
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21"><g fill="none" fill-rule="evenodd"><g stroke="#009EE3" stroke-width="1.2"><g><g><path d="M0 1.25H2.917V7.917H0z" transform="translate(-45 -476) translate(46.5 477) translate(.583 7.083)"></path><path d="M3.398 4.39L4.64 3.291C5.75 2.314 7.18 1.78 8.657 1.791l2.597.02c.71.005 1.281.581 1.281 1.29 0 .708-.573 1.281-1.28 1.281h-3.69 0" transform="translate(-45 -476) translate(46.5 477) translate(.583 7.083) rotate(23 7.966 3.081)"></path><path d="M12.387 5.377c.529.04 2.049-.075 4.56-.344.767-.082 1.457.47 1.545 1.236.086.751-.452 1.43-1.203 1.516l-.029.003-7.32.687c-.972.091-1.928-.296-2.562-1.04L5.282 4.98c-.336-.394-.769-.695-1.256-.872l-.431-.157h0" transform="translate(-45 -476) translate(46.5 477) translate(.583 7.083) rotate(-20 11.123 6.286)"></path></g><path d="M12.376 7.251c-2.002 0-3.626-1.623-3.626-3.625S10.372 0 12.376 0C14.378 0 16 1.622 16 3.626c0 2.002-1.622 3.625-3.624 3.625h0z" transform="translate(-45 -476) translate(46.5 477)"></path></g></g></g></svg>} />
        <Blocks title="Seguridad" subTitle="Robo o pérdida de dispositivo y robo de cuenta."
        icon={<svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.19501 11.4C7.19501 12.06 6.65999 12.595 6.00001 12.595C5.34003 12.595 4.80501 12.06 4.80501 11.4C4.80501 10.74 5.34003 10.205 6.00001 10.205C6.65999 10.205 7.19501 10.74 7.19501 11.4Z" fill="#009EE3"></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9674 6.57023H10.1955V4.19546C10.1955 1.87837 8.3171 0 6.00001 0C3.68292 0 1.80455 1.87837 1.80455 4.19546V6.57023H0.0325928V14.99C0.0325928 16.6469 1.37574 17.99 3.03259 17.99H8.96743C10.6243 17.99 11.9674 16.6469 11.9674 14.99V6.57023ZM8.99547 4.19546V6.57023H3.00455V4.19546C3.00455 2.54111 4.34566 1.2 6.00001 1.2C7.65436 1.2 8.99547 2.54111 8.99547 4.19546ZM1.23259 14.99V7.77023H10.7674V14.99C10.7674 15.9841 9.96154 16.79 8.96743 16.79H3.03259C2.03848 16.79 1.23259 15.9841 1.23259 14.99Z" fill="#009EE3"></path>
        </svg>} />
        <Blocks title="Tu perfil" subTitle="Datos y problemas de ingreso a la cuenta." 
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="none" fill-rule="evenodd"><g fill="#009EE3" fill-rule="nonzero"><g><path d="M14.178 13.577c2 0 3.622 1.622 3.622 3.623v.6h-1.2v-.6c0-1.338-1.084-2.423-2.422-2.423H5.793c-1.327 0-2.403 1.076-2.403 2.403v.6h-1.2v-.6c0-1.99 1.613-3.603 3.603-3.603zM10 2.195c2.652 0 4.803 2.15 4.803 4.803 0 2.652-2.15 4.802-4.803 4.802-2.652 0-4.803-2.15-4.803-4.803 0-2.652 2.15-4.802 4.803-4.802zm0 1.2c-1.99 0-3.603 1.613-3.603 3.602C6.397 8.987 8.01 10.6 10 10.6c1.99 0 3.602-1.613 3.602-3.603 0-1.99-1.612-3.602-3.602-3.602z" transform="translate(-46 -555) translate(46 555)"></path></g></g></g></svg>} />
        <Blocks title="Otros productos" subTitle="Seguros, garantía extendida y Mercado Puntos."
        icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="none" fill-rule="evenodd"><g fill="#009EE3" fill-rule="nonzero"><g><path d="M19.002 4.004v11.981h-18V4.004h18zm-1.2 1.2h-15.6v9.581h15.6V5.204zm-7.8 2.354c1.346 0 2.437 1.09 2.437 2.436 0 1.346-1.091 2.437-2.437 2.437-1.346 0-2.437-1.09-2.437-2.437 0-1.345 1.091-2.436 2.437-2.436zm0 1.2c-.683 0-1.237.553-1.237 1.236 0 .684.554 1.237 1.237 1.237s1.237-.553 1.237-1.237c0-.683-.554-1.236-1.237-1.236zm4.806.03c.665 0 1.205.54 1.205 1.206 0 .666-.54 1.206-1.205 1.206-.666 0-1.206-.54-1.206-1.206 0-.665.54-1.205 1.206-1.205zm-9.614 0c.666 0 1.206.54 1.206 1.206 0 .666-.54 1.206-1.206 1.206-.665 0-1.205-.54-1.205-1.206 0-.665.54-1.205 1.205-1.205z" transform="translate(-46 -634) translate(46 634)"></path></g></g></g></svg>} />

      </div>
    </div>
  );
}

export default Ayuda;
