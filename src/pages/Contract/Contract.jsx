// import contract css
import "./Contract.css";

// import react bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// import react icons
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";


const Contract = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form action="#">
                <div className="formDiv">
                  <div className="contractCont">
                    <h2>Contact Us</h2>
                    <p>Feel free to ask for details, don't save any questions!</p>
                  </div>
                   <div className="row">
                    <div className="col-md-6">
                      <div className="contName">
                      <Form>
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your name *</Form.Label>
                            <Form.Control type="email" />     
                        </Form.Group>         
                     </Form>   
                      </div>
                    </div>
                    <div className="col-md-6">
                       <div className="contEmail">
                       <Form>
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your email address *</Form.Label>
                            <Form.Control type="email" />     
                        </Form.Group>         
                     </Form> 
                       </div>
                    </div>
                    <div className="col-md-12">
                     <div className="contSubject">
                     <Form>
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" />     
                        </Form.Group>         
                    </Form>
                     </div>
                    </div>
                    <div className="col-md-12">
                       <div className="contMessage">
                      <Form>
                       <Form.Group>
                       <Form.Label>Message</Form.Label>
                       <Form.Control as="textarea" cols={40} rows={10} />
                      </Form.Group>
                     </Form>
                       </div>
                    </div>
                    <div className="col-md-12">
                    <div className="button block">
                    <Form>
                       <Button variant="primary" type="submit">
                          SEND MESSEAGE
                       </Button>
                      </Form>
                    </div>
                    </div>
                   </div>
                </div>
              </form>
            </div>
            <div className="col-md-6">
               <div className="info-box">
                    <h3>Our Office</h3>
                    <div className="ourOffice flex">
                      <div className="ourOffice-left block">
                        <div className="officeIcon inline-block">
                        <FaMapMarkerAlt />
                        </div>
                      </div>
                      <div className="ourOffice-right">
                        <p><strong> Address: </strong>1234 Street Name, City Name, United States</p>
                      </div>
                    </div>
                    <div className="phone flex">
                      <div className="phone-left block">
                        <div className="phone-icon inline-block">
                        <FaPhoneFlip />
                        </div>
                      </div>
                      <div className="phone-right">
                        <p><strong>Phone:</strong> (123) 456-789</p>
                      </div>
                    </div>
                    <div className="email flex">
                      <div className="email-left block">
                        <div className="email-icon inline-block">
                        <FaRegEnvelope />
                        </div>
                      </div>
                      <div className="email-right">
                        <p><strong>Email: </strong> mail@example.com</p>
                      </div>
                    </div>
                  </div>
                <div className="business-info">
                     <h4>Business Our</h4>
                    <div className="business flex">
                    <div className="bus-left block">
                      <div className="bus-icon inline-block">
                      <CiClock2 />
                      </div>
                    </div>
                    <div className="bus-right">
                      <p>Monday - Friday 9am to 5pm</p>
                    </div>
                  </div>
                  <div className="monday flex">
                    <div className="mon-left block">
                       <div className="mon-icon inline-block">
                       <CiClock2 />
                       </div>
                    </div>
                    <div className="mon-right">
                      <p> Saturday - 9am to 2pm</p>
                    </div>
                  </div>
                  <div className="sunday flex">
                    <div className="sun-left block">
                      <div className="sun-icon inline-block">
                      <CiClock2 />
                      </div>
                    </div>
                    <div className="sun-right">
                      <p> Sunday - Closed</p>
                    </div>
                  </div>
              </div>
              <div className="touch-info">
                <h4>Get in touch</h4>
                <div className="para">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>            
          </div>
        </div>
        <div className="last-content">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="content-area">
                  <h2>Porto is <b>everything</b>  you need to create an <b>awesome</b> website!</h2>
                  <p>The Best Selling Woocommerce Theme on ThemeForest</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="button-area">
                  <a href="#">Get Started Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contract

