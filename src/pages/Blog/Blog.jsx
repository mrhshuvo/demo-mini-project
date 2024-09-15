// react icons
import { CiUser } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaComments } from "react-icons/fa6";

// import blog css
import "./Blog.css";
import { blogs } from "../../fake/data";

// import blogs 

const Blog = () => {
  return (
    <>
    {/* main section */}

    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="teamMain">
              {blogs.map((item) => {
                return (
                  <div className="allThing">
                    <div className="post-img">
                  <div className="img-thumbnail">
                    <img src={item.photo} alt="" />
                  </div>
                 </div>
                 <div className="post-date float-left">
                    <p className="date block">13</p>
                    <p className="month block">Sep</p>
                 </div>
                 <div className="post-content block">
                  <h2 href="#">{item.title}</h2>
                  <p className="block">{item.desc}</p>
                 </div>
                 <div className="post-meta flex">
                  <div className="author flex">
                  <div className="author-left block">
                    <div className="author-icon inline-block">
                    <CiUser />
                    </div>
                  </div>
                  <div className="author-right">
                    <p>By <span className="authlink" href="#">Joe Doe</span></p>
                  </div>
                  </div>
                  <div className="cats flex">
                    <div className="cat-left block">
                      <div className="cat-icon inline-block">
                      <CiFolderOn />
                      </div>
                    </div>
                    <div className="cat-right">
                      <span href="#">Articles,</span>
                      <span href="#" className="asides">Asides</span>
                    </div>
                  </div>
                  <div className="tags flex">
                    <div className="tag-left block">
                      <div className="tag-icon inline-block">
                      <HiOutlineEnvelope />
                      </div>
                    </div>
                    <div className="tag-right">
                      <span href="#">Articles, </span>
                      <span href="#" className="chatA">Chat</span>
                    </div>
                  </div>
                  <div className="comments flex">
                    <div className="comment-left block">
                      <div className="comment-icon inline-block">
                      <FaComments />
                      </div>
                    </div>
                    <div className="comment-right">
                      <p><span href=""> Comments</span></p>
                    </div>
                  </div>
                 </div>
                 <hr/>
                  </div>
                )
              })}    
                 
            </div>
          </div>
  
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Blog

  