// react icons
import { FaRegLifeRing } from "react-icons/fa";
import { IoLayersOutline } from "react-icons/io5";
import { IoDocumentOutline } from "react-icons/io5";
import { SlUser } from "react-icons/sl";
import { CiMenuBurger } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { TbPencilExclamation } from "react-icons/tb";
import { CiDesktop } from "react-icons/ci";

//import home css
import "./Home.css";

// import accordion
import Accordion from "react-bootstrap/Accordion";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Home = () => {
  return (
    <>

    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src="./src/assets/slider1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/slider2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./src/assets/slider3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
     
      <div className="miniDiv">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="paraDiv">
                  <h1>The fastest way to grow your business with the leader in <h2>Technology</h2></h1>
                  <p>Check out our options and features included.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="towButton">
                <div className="buttonDiv inline-block">
                  <a className="" href="#">Get Started Now</a>
                </div>
                <div className="orButton inline-block">
                  <p>or <a href="#">learn more.</a></p>
                </div>
                </div>
              </div>
            </div>
          </div>
      </div>
       
       <div className="ourFeaturea">
        <div className="container">
          <hr/>
          <div className="row">
            <div className="col-md-8">
              <div className="columArea">
                <div className="para1">
                <h1>Our Features</h1>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="customF flex">
                      <div className="icon-left block">
                        <div className="lifeIcon inline-block">
                        <FaRegLifeRing />
                        </div>
                      </div>
                      <div className="icon-body">
                      <h3>Customer Support</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa</p>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-md-6">
                    <div className="slider flex">
                      <div className="slider-left block">
                        <div className="slider-icon inline-block">
                        <IoLayersOutline />
                        </div>
                      </div>
                      <div className="slider-right">
                      <h3>Sliders</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, tenetur ipsam.</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                  <div className="hcj flex">
                  <div className="hcj-left block">
                      <div className="hcj-icon inline-block">
                      <IoDocumentOutline />
                      </div>
                    </div>
                    <div className="hcj-right">
                    <h3>
                      HTML5 / CSS3 / JS</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, laudantium perferendis.</p>
                    </div>
                  </div>                   
                  </div>
                  <div className="col-md-6">
                    <div className="icons flex">
                      <div className="icons-left block">
                            <div className="user-icon inline-block">
                            <SlUser />
                            </div>
                      </div>
                      <div className="icons-right">
                      <h3>Icons</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, quaerat voluptate?</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="googleFont flex">
                      <div className="google-left block">
                        <div className="google-icons inline-block">
                        <FaGoogle />
                        </div>
                      </div>
                      <div className="google-right">
                      <h3>500+ Google Fonts</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quibusdam cumque?</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="button flex">
                      <div className="button-left block">
                        <div className="menu-icon inline-block">
                        <CiMenuBurger />
                        </div>
                      </div>
                      <div className="button-right">
                      <h3>Buttons</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, dicta aliquam.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="colors flex">
                      <div className="color-left block">
                        <div className="pencile-icon inline-block">
                        <TbPencilExclamation />
                        </div>
                      </div>
                      <div className="colors-right">
                      <h3>
                        Colors</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, hic temporibus.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="light flex">
                      <div className="light-left block">
                        <div className="light-icons inline-block">
                        <CiDesktop />
                        </div>
                      </div>
                      <div className="light-right">
                      <h3>Lightbox</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, dolor nulla.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="andMore">
                <p>and more</p>
                  <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                            <Accordion.Header>Creative Websites</Accordion.Header>
                        <Accordion.Body>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptatibus temporibus. Nisi earum iure eveniet, omnis molestias ea et dolorum accusamus magni sit rerum saepe impedit quo dolore tempora corrupti.
                       </Accordion.Body>
                      </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Contact Forms</Accordion.Header>
                       <Accordion.Body>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod
                      </Accordion.Body>

                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                       <Accordion.Header>Portfolio Pages</Accordion.Header>
                   <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                       eiusmod
                  </Accordion.Body>
                    </Accordion.Item>
                   </Accordion>
              </div>
            </div>
          </div>
        </div>
       </div>

    </>
  )
}

export default Home