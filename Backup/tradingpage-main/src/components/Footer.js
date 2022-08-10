import React from "react";
import Logo from './robinlogo.svg'
import "./Footer.css";

function Footer() {
  return (
      <>
    <div className="footer">
    <img src={Logo} width={25} alt="logo" />
    </div>
    <div className="footer__moreinfo">
        <div>
            <div className="footer__title">Get to Know Us</div>
            <p id="footer_minilinks">Careers</p>
            <p id="footer_minilinks">Blog</p>
            <p id="footer_minilinks">About Robinhood</p>
            <p id="footer_minilinks">Press Center</p>
            <p id="footer_minilinks">Investor Relations</p>
        </div>
        <div>
            <div className="footer__title">Product</div>
            <p id="footer_minilinks">Crypto</p>
            <p id="footer_minilinks">Cash Card</p>
            <p id="footer_minilinks">Lear</p>
            <p id="footer_minilinks">Snacks</p>
            <p id="footer_minilinks">Support</p>
        </div>
        <div>
            <div className="footer__title">Company</div>
            <p id="footer_minilinks">Podcast</p>
            <p id="footer_minilinks">ESG</p>
            <p id="footer_minilinks">Commitments</p>
            <p id="footer_minilinks">Press</p>
            <p id="footer_minilinks">Affiliates</p>
        </div>
        <div>
            <div className="footer__title">Legal & Regulatory</div>
            <p id="footer_minilinks">Terms & Conditions</p>
            <p id="footer_minilinks">Disclosures</p>
            <p id="footer_minilinks">Privacy</p>
            <p id="footer_minilinks">Our Customers</p>
            <p id="footer_minilinks">Help</p>
        </div>
    </div>
    <div className="footer__conditions">
            Conditions of UsePrivacy NoticeInterest-Based Ads© 2013-2022, Robinhood.com,  All rights reserved ©.
        </div>
    </>
  );
}

export default Footer;