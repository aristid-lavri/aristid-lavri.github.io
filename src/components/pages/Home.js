import React from "react";
import "./home.css";
// import avatar from "../../assets/luffy.png";
import { FaGithubSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="app-container">
          <div className="avatar">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGd-n8qe2aZlA/profile-displayphoto-shrink_400_400/0?e=1608768000&v=beta&t=04ywPsjqIlRm-zOtUaUGpEu72dLU_qA8Kq6PElO75Lo" alt="avatar" />
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

              <a href="https://www.youtube.com/channel/UCi-0Xjs3KJp3pVN0VtsSIKw?view_as=subscriber" target="_blank">
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
