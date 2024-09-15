import "./Header.css";
import  {Link}  from "react-router-dom";

const Header = () => {
  return (
    <>
       <header  className=" mainHeader bg-slate-200">
        <div className="container flex justify-between">
          <div className="logo">
            <a href=""><img src="./src/assets/logo.png" alt="" /></a>
          </div>
          <div className="menu">
            <ul className="flex items-center h-full">
              <li><Link className="py-3 px-4 no-underline text-black font-bold" to="/">Home</Link></li>
              <li><Link className="py-3 px-4 no-underline text-black font-bold" to="/blog">Blog</Link></li>
              <li><Link className="py-3 px-4 no-underline text-black font-bold" to="/team">Team</Link></li>
              <li><Link className="py-3 px-4 no-underline text-black font-bold" to="/contract">Contract Us</Link></li>
              <li><Link className="py-3 px-4 no-underline text-black font-bold" to="/about">About Us</Link></li>
            </ul>
          </div>
        </div>
       </header>
    </>
  )
}

export default Header;