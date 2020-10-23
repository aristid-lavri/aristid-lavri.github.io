import React from "react";
import avatar from "../../assets/luffy.png";
import { SiGmail, SiMicrosoftoutlook } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import "./contacts.css";

function Contact() {
  return (
    <>
      <div className="cont-contente">
        <div className="user-info">
          <h2>Lavri Djava Aristide A.</h2>
          <div className="user-image">
            <img src={avatar} alt="avatar" />
          </div>
          <p className="user-short-desc">
          <strong>Master degree in computer engineering with a progressive 4 years experiences in software development</strong>, 
          managing developer team, having good social relationship, 
          highly skilled in solving client’s and other stakeholder’s problems, performing well in high-pressure, 
          competitive environments. Passionate with a solid background in designing, building desktop and web solution. 
          Good ability to learn and adapt to new environment.
          </p>
        </div>
        <div className="user-contacts">
          <h2>Contact Me.</h2>
          <div className="contact-info">
            <FaPhoneAlt />
            <span>+225 09 18 96 08</span>
          </div>
          <div className="contact-info">
            <SiMicrosoftoutlook />
            <span>lavri.alain@outlook.com</span>
          </div>
          <div className="contact-info">
            <SiGmail />
            <span>lavri.alain@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
