// import team css
import './Team.css';

// import react icons
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";

import { teams } from '../../fake/data';

const Team = () => {
  return (
    <>
    <div className="teamMain">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="teamContent">
              <h2>Meet the Team</h2>
              <div className="row">    
                {
                  teams.map((item) => {
                    return (
                      <div className="col-md-3">
                      <div className="member-item">
                        
                        <div className="member-img">
                          <img src={item.photo} alt="" />
                        </div>
                        <div className="member-content">
                          <p>{item.desc}</p>
                        </div>
                        <div className="member-icons flex">
                          <div className="fIcon block">
                          <FaFacebook />
                          </div>
                          <div className="tIcon block">
                          <AiFillTwitterCircle />
                          </div>
                          <div className="lIcon block">
                          <TiSocialLinkedinCircular />
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                  })
                }   
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Team
