// import react icons
import { FaRegCircleDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";

// import footer css
import "./Footer.css";


const Footer = () => {
  return (
    <>
       <footer className="footerDiv">
        <div className="container">
          <div className="row">
          <div className="col-md-4">
            <div className="news">
              <div className="news-heading">
                <h2>NEWSLETTER</h2>
              </div>
              <div className="new-para">
                <p>Keep up on our always evolving product features and technology. Enter your e-mail address and subscribe to our newsletter.</p>
              </div>
               <div className="new-form">
                <form action="#">
                  <input type="text" size="40" placeholder="Email Address" />
                </form>
               </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className="faq">
               <div className="faq-heading">
               <h1>TOP 5 FAQS</h1>
               </div>
               <div className="faq-para">
                <a href="#">Technical support contacts?</a>
                <a href="#">How do I know the date of my delivery?</a>
                <a href="#">My product did not arrive?</a>
                <a href="#">What are the payment methods?</a>
                <a href="#">Product availability?</a>
               </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className="contract">
              <div className="contract-heading">
                <h2>CONTRACT US</h2>
              </div>
              <div className="sub-contract flex">
                <div className="contract-left block">
                   <div className="circle-icons inline-block">
                   <FaRegCircleDot />
                   </div>
                </div>
                <div className="contract-right">
                  <p>234 Street Name, City Name</p>
                </div>
              </div>
              <div className="whatIcon-section flex">
                <div className="whatIcon-right block">
                  <div className="whtIcons inline-block">
                  <FaWhatsapp />
                  </div>
                </div>
                <div className="whatIcon-left">
                  <p>(800) 123-4567</p>
                </div>
              </div>
              <div className="envelop-section flex">
                <div className="envelop-left block">
                  <div className="envelop-icon inline-block">
                  <FaEnvelope />
                  </div>
                </div>
                <div className="envelop-right">
                  <p>mail@example.com</p>
                </div>
              </div>
            </div>    
            </div>
            <div className="col-md-2">
            <div className="follow">
                <div className="flow-text">
                  <h2>FOLLOW US</h2>
                </div>
                <div className="follow-icon flex">
                   <div className="facebook-icon  inline-block">
                   <FaFacebook />
                   </div>
                   <div className="twitter-icon">
                   <TiSocialTwitterCircular />
                  
                   </div>
                   <div className="linkedin-icon">
                   <TiSocialLinkedinCircular />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="secondary-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="logoPara flex">
                <div className="miniLogo">
                  <img src="./src/assets/miniLogo.png" alt="" />                 
                </div>      
                <div className="miniPara block">
                   <div className="para1 inline-block">
                       <p>© copyright 2024. All Rights Reserved.</p>
                    </div>  
                </div>       
                </div>
              </div>
              <div className="col-md-4">
                <div className="miniMenu">
                   <ul className="flex items-center">
                    <li><a href="#">FAQ'S</a></li>
                    <li><a href="#">Sitemap</a></li>
                    <li><a href="#">Contract Us</a></li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
       </footer>
    </>
  )
}

export default Footer

