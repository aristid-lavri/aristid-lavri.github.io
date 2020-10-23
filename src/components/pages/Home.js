import React from "react";
import "./home.css";
import avatar from "../../assets/luffy.png";
import { FaGithubSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="app-container">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="banner">
            <h1 className="baner-titel">Back-End SoftWare Developer</h1>
            <hr />
            <p>
              CSharp | Asp.net web api | JavaScript | Nodejs | Express | SQL Server | MongoDb
              | REST
            </p>

            <div className="social-links">
              <a href="https://github.com/aristid-lavri" target="_blank">
                <FaGithubSquare />
              </a>

              <a
                href="https://www.linkedin.com/in/lavri-alain-109092a5/"
                target="_blank"
              >
                <FaLinkedin />
              </a>

              <a href="http://youtube.com" target="_blank">
                <FaYoutubeSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
