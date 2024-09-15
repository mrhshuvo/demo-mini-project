// import about css 
import "./About.css";


// import react icons
import { FaMinus } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";


const About = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
            <h2>The New Way to Success </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla nonÂ metus.Â pulvinar. Sociis natoque penatibus et magnis dis parturient montes.</p>
              <div className="content">
            
              </div>
            </div>
            <div className="col-md-3">
           
              <div className="button">
                <div className="sub-button">
                <a href="#">Join our Team</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="imgDiv">
                <img src="./src/assets/img.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                   <h3>Who We Are</h3>
                   <div className="para1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. AliquamÂ vehiculaÂ sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus sed lectus non, lacinia vestibulum nisi. Morbi vitae augue quam. Nullam ac laoreet libero.</p>
                   </div>
                   <div className="para2">
                    <p>Consectetur adipiscing elit. Aliquam iaculis sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam.</p>
                   </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="ourVission flex">
                <div className="ourVission-left block">
                  <div className="ourV-icon inline-block">
                  <FaMinus />
                  </div>
                </div>
                <div className="ourVission-right">
                  <h3>Our Vission</h3>
                  <div className="para"> 
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta. Quisque ut nulla at nuncÂ vehiculaÂ lacinia. Proin adipiscing porta tellus, ut feugiat nibh adipiscing sit amet. Etiam nec viverra arcu. Morbi vitae augue quam. Nullam ac laoreet libero.</p>
                  </div>
                </div>
              </div>
              <div className="ourMission flex">
                <div className="ourMission-left block">
                   <div className="ourM-icon inline-block">
                   <FaMinus />
                   </div>
                </div>
                <div className="ourMission-right">
                  <h3>Our Mission</h3>
                    <div className="para1">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet posuere auctor.</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="allProgress">
              <div className="htmlP">
                    <span>Html/css</span>
                    <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                          <div class="progress-bar bg-success" style= {{width: "25%"}}>25%</div>
                    </div>
                </div>
                <div className="designP">
                  <span>Design</span>
                    <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                       <div class="progress-bar bg-info text-dark" style= {{width: "50%"}}>50%</div>
                    </div>
                </div>
               <div className="wordpressP">
                  <span>Wordpress</span>
                   <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                       <div class="progress-bar bg-warning text-dark" style= {{width: "75%"}}>75%</div>
                   </div>
               </div>
               <div className="photoshopeP">
                   <span>Photoshope</span>
                        <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar bg-danger" style= {{width: "100%"}}>100%</div>
                    </div>
               </div>
              </div>    

            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  )
}

export default About