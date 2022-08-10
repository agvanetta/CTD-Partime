import React from "react";
import "./TuPerfil.css";

function TuPerfil() {
  return (
    <div className="tuPerfil">
      <div className="tuPerfil__blockTop">
        <div className="tuPerfil__blockTop__img">
          <img
            class="tuPerfil__imgProfile"
            src="https://mla-s1-p.mlstatic.com/D_NQ_NP_743979-MLA26548716210_122017-R.jpg"
            alt="img_profile"
          />
        </div>
        <div className="tuPerfil__blockTop__dates">
          <h2>Agustín Vanetta</h2>
          <div>Nivel 4 - Mercado Puntos</div>
        </div>
      </div>

      <div className="tuPerfil__blockBot">
        <span></span>

        <div className="tuPerfil__blockBot__sections">
          <div class="andes-list__item-asset" aria-hidden="true">
            <div class="andes-thumbnail-container">
              <div class="andes-thumbnail andes-thumbnail--circle andes-thumbnail--56 andes-thumbnail--default">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="rgba(0, 0, 0, 0.9)"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.999 21.251C21.384 21.251 25.7495 16.8856 25.7495 11.5005C25.7495 6.11545 21.384 1.75 15.999 1.75C10.6139 1.75 6.24845 6.11545 6.24845 11.5005C6.24845 16.8856 10.6139 21.251 15.999 21.251ZM15.999 19.751C11.4423 19.751 7.74845 16.0571 7.74845 11.5005C7.74845 6.94387 11.4423 3.25 15.999 3.25C20.5556 3.25 24.2495 6.94387 24.2495 11.5005C24.2495 16.0571 20.5556 19.751 15.999 19.751Z"
                    fill="rgba(0, 0, 0, 0.9)"
                  ></path>
                  <path
                    d="M3.25195 27.9445V30.2157H1.75195V27.9445C1.75195 25.4869 3.74429 23.4946 6.20195 23.4946H25.799C28.2566 23.4946 30.249 25.4869 30.249 27.9445V30.25H28.749V27.9445C28.749 26.3153 27.4282 24.9946 25.799 24.9946H6.20195C4.57271 24.9946 3.25195 26.3153 3.25195 27.9445Z"
                    fill="rgba(0, 0, 0, 0.9)"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="tuPerfil__blockBot__sections__text">
            <h3>Tus Datos</h3>
            <h4>Gestioná tus datos personales.</h4>
          </div>
          <span>{">"}</span>
        </div>

        <div className="tuPerfil__blockBot__sections">
          <div class="andes-list__item-asset" aria-hidden="true">
            <div class="andes-thumbnail-container">
              <div class="andes-thumbnail andes-thumbnail--circle andes-thumbnail--56 andes-thumbnail__badge andes-thumbnail__badge-success andes-thumbnail--default">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="rgba(0, 0, 0, 0.9)"
                >
                  <path
                    d="M13.4999 15C13.4999 15.8284 12.8283 16.5 11.9999 16.5C11.1715 16.5 10.4999 15.8284 10.4999 15C10.4999 14.1716 11.1715 13.5 11.9999 13.5C12.8283 13.5 13.4999 14.1716 13.4999 15Z"
                    fill="rgba(0, 0, 0, 0.9)"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.2519 6.002V8.98398H19.4632V18C19.4632 20.8995 17.1126 23.25 14.2132 23.25H9.78662C6.88713 23.25 4.53662 20.8995 4.53662 18V8.98398H6.74789V6.002C6.74789 3.1014 9.09929 0.75 11.9999 0.75C14.9005 0.75 17.2519 3.1014 17.2519 6.002ZM8.24789 8.98398V6.002C8.24789 3.92983 9.92771 2.25 11.9999 2.25C14.0721 2.25 15.7519 3.92983 15.7519 6.002V8.98398H8.24789ZM17.9632 10.484V18C17.9632 20.0711 16.2842 21.75 14.2132 21.75H9.78662C7.71555 21.75 6.03662 20.0711 6.03662 18V10.484H17.9632Z"
                    fill="rgba(0, 0, 0, 0.9)"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="tuPerfil__blockBot__sections__text">
            <h3>Seguridad</h3>
            <h4>Seguridad Configurada.</h4>
          </div>
          <span>{">"}</span>
        </div>

        <div className="tuPerfil__blockBot__sections">
          <div class="andes-list__item-asset" aria-hidden="true">
            <div class="andes-thumbnail-container">
              <div class="andes-thumbnail andes-thumbnail--circle andes-thumbnail--56 andes-thumbnail--default">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="rgba(0, 0, 0, 0.9)"
                >
                  <path
                    d="M4.74902 22.75H9.24902V21.25H4.74902V22.75Z"
                    fill="rgba(0, 0, 0, 0.9)"
                  ></path>
                  <path
                    d="M15.249 22.75H10.749V21.25H15.249V22.75Z"
                    fill="rgba(0, 0, 0, 0.9)"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.49902 4.75H29.499C30.7417 4.75 31.749 5.75736 31.749 7V25C31.749 26.2426 30.7417 27.25 29.499 27.25H2.49902C1.25638 27.25 0.249023 26.2426 0.249023 25V7C0.249023 5.75736 1.25638 4.75 2.49902 4.75ZM1.74902 11.4796V13.75H30.249V11.4796H1.74902ZM30.249 9.97964H1.74902V7C1.74902 6.58579 2.08481 6.25 2.49902 6.25H29.499C29.9132 6.25 30.249 6.58579 30.249 7V9.97964ZM30.249 15.25H1.74902V25C1.74902 25.4142 2.08481 25.75 2.49902 25.75H29.499C29.9132 25.75 30.249 25.4142 30.249 25V15.25Z"
                    fill="rgba(0, 0, 0, 0.9)"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="tuPerfil__blockBot__sections__text">
            <h3>Tus tarjetas</h3>
            <h4>Gestioná tus tarjetas.</h4>
          </div>
          <span>{">"}</span>
        </div>

        <div className="tuPerfil__blockBot__sections">
          <div class="andes-list__item-asset" aria-hidden="true">
            <div class="andes-thumbnail-container">
              <div class="andes-thumbnail andes-thumbnail--circle andes-thumbnail--56 andes-thumbnail--default">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="rgba(0, 0, 0, 0.9)"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.0001 15.9971C18.4838 15.9971 20.4972 13.9837 20.4972 11.5C20.4972 9.01631 18.4838 7.00288 16.0001 7.00288C13.5164 7.00288 11.503 9.01631 11.503 11.5C11.503 13.9837 13.5164 15.9971 16.0001 15.9971ZM16.0001 14.4971C14.3448 14.4971 13.003 13.1553 13.003 11.5C13.003 9.84474 14.3448 8.50288 16.0001 8.50288C17.6554 8.50288 18.9972 9.84474 18.9972 11.5C18.9972 13.1553 17.6554 14.4971 16.0001 14.4971Z"
                    fill="rgba(0, 0, 0, 0.9)"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.5296 31.5302C23.7957 24.2602 27.4577 17.6632 27.4577 11.7086C27.4577 5.38018 22.3275 0.25 15.9991 0.25C9.6707 0.25 4.54053 5.38018 4.54053 11.7086C4.54053 17.6632 8.20251 24.2602 15.4686 31.5302L15.9991 32.0609L16.5296 31.5302ZM6.04053 11.7086C6.04053 6.2086 10.4991 1.75 15.9991 1.75C21.4991 1.75 25.9577 6.2086 25.9577 11.7086C25.9577 17.0501 22.656 23.1346 15.9991 29.9336C9.34221 23.1346 6.04053 17.0501 6.04053 11.7086Z"
                    fill="rgba(0, 0, 0, 0.9)"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="tuPerfil__blockBot__sections__text">
            <h3>Direcciones</h3>
            <h4>Modificá tus direcciones o agregá una nueva.</h4>
          </div>
          <span>{">"}</span>
        </div>

        <div className="tuPerfil__blockBot__sections">
          <div class="andes-list__item-asset" aria-hidden="true">
            <div class="andes-thumbnail-container">
              <div class="andes-thumbnail andes-thumbnail--circle andes-thumbnail--56 andes-thumbnail--default">
                <img
                  decoding="async"
                  src="https://www.mercadolibre.com/org-img/mkt/email-mkt-assets/my-profile/privacidadIcon.svg"
                  class="items-list__img-url item-list--privacy"
                  alt="Privacidad"
                />
              </div>
            </div>
          </div>
          <div className="tuPerfil__blockBot__sections__text">
            <h3>Privacidad</h3>
            <h4>Gestioná el uso de tu información personal.</h4>
          </div>
          <span>{">"}</span>
        </div>

        <div className="tuPerfil__blockBot__sections">
          <div class="andes-list__item-asset" aria-hidden="true">
            <div class="andes-thumbnail-container">
              <div class="andes-thumbnail andes-thumbnail--circle andes-thumbnail--56 andes-thumbnail--default">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="rgba(0, 0, 0, 0.9)"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.00005 18.75H5.25005V22.4011L10.729 18.75H19.804C20.881 18.75 21.754 17.877 21.754 16.8V3.99501C21.754 2.91806 20.881 2.04501 19.804 2.04501H4.00005C2.92309 2.04501 2.05005 2.91806 2.05005 3.99501V16.8C2.05005 17.877 2.92309 18.75 4.00005 18.75ZM19.804 17.25H10.2751L6.75005 19.599V17.25H4.00005C3.75152 17.25 3.55005 17.0485 3.55005 16.8V3.99501C3.55005 3.74649 3.75152 3.54501 4.00005 3.54501H19.804C20.0526 3.54501 20.254 3.74649 20.254 3.99501V16.8C20.254 17.0485 20.0526 17.25 19.804 17.25Z"
                    fill="rgba(0, 0, 0, 0.9)"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="tuPerfil__blockBot__sections__text">
            <h3>Comunicaciones</h3>
            <h4>Elegí qué tipo de información quer'es recibir.</h4>
          </div>
          <span>{">"}</span>
        </div>

        <div className="tuPerfil__blockBot__sections" id="tuPerfil__lastBlock">
          <div class="andes-list__item-asset" aria-hidden="true">
            <div class="andes-thumbnail-container">
              <div class="andes-thumbnail andes-thumbnail--circle andes-thumbnail--56 andes-thumbnail--default">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="rgba(0, 0, 0, 0.9)"
                >
                  <path
                    d="M15.0714 9.46922V7.88043H16.9553V9.46067L17.1494 9.48758C18.5106 9.67633 19.6455 10.2038 20.5454 11.0182L19.5193 12.3507C18.4797 11.4126 17.122 10.9825 15.7917 10.9825C15.0877 10.9825 14.4869 11.1506 14.0558 11.469C13.6188 11.792 13.3689 12.2617 13.3689 12.8218C13.3689 13.4525 13.7915 13.8467 14.3409 14.1191C14.8814 14.387 15.6103 14.5715 16.3593 14.7611L16.3976 14.7709C17.4754 15.0452 18.6088 15.3391 19.4764 15.9012C20.3256 16.4513 20.9151 17.2548 20.9151 18.5787C20.9151 19.4945 20.6286 20.3392 20.026 20.9948C19.4234 21.6505 18.4869 22.1361 17.1529 22.3L16.9553 22.3243V24.1195H15.0714V22.304L14.8773 22.2771C13.2614 22.053 12.0318 21.3925 11.1443 20.5027L12.1422 19.1209C13.0742 20.0274 14.4612 20.7875 16.2195 20.7875C17.188 20.7875 17.8944 20.5504 18.3636 20.1739C18.8354 19.7954 19.0507 19.2882 19.0507 18.7926C19.0507 18.0969 18.6296 17.6569 18.0545 17.3524C17.4952 17.0562 16.7433 16.8612 15.9782 16.6629L15.9259 16.6494L15.9236 16.6488C14.855 16.3841 13.7411 16.1045 12.8905 15.5638C12.0591 15.0354 11.4851 14.2615 11.4851 12.9774C11.4851 11.2735 12.7726 9.86746 14.8848 9.50155L15.0714 9.46922Z"
                    fill="rgba(0, 0, 0, 0.9)"
                  ></path>
                  <path
                    d="M15.9955 2.34973C8.4568 2.34973 2.34546 8.46107 2.34546 15.9998C2.34546 23.5385 8.4568 29.6498 15.9955 29.6498C23.5342 29.6498 29.6456 23.5385 29.6456 15.9998C29.6456 13.9213 29.181 11.9513 28.3501 10.188L29.6535 9.43548C30.6097 11.4215 31.1456 13.6481 31.1456 15.9998C31.1456 24.3669 24.3627 31.1498 15.9955 31.1498C7.62837 31.1498 0.845459 24.3669 0.845459 15.9998C0.845459 7.63264 7.62837 0.849731 15.9955 0.849731C20.0379 0.849731 23.7105 2.43292 26.4271 5.01306V1.5H27.9271V7.63384H21.7932V6.13384H25.4288C22.9778 3.78967 19.6548 2.34973 15.9955 2.34973Z"
                    fill="rgba(0, 0, 0, 0.9)"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="tuPerfil__blockBot__sections__text">
            <h3>Suscripciones</h3>
            <h4>Gestioná tus suscripciones.</h4>
          </div>
          <span>{">"}</span>
        </div>
      </div>
    </div>
  );
}

export default TuPerfil;
