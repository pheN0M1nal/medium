import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "./logo.svg";

const Header = ({ gs }) => {
     var u = useSelector((state) => state.wishes[0].user);
     useEffect(() => {
          console.log(u);
     }, [u]);

     const navigate = useNavigate();

     const logout = () => {
          fetch("http://127.0.0.1:5000/logout");
          navigate("/");
     };

     return (
          <div className="back">
               <div className="header wrapper">
                    <div className="logoandname">
                         <div className="logo">
                              <img className="" src={logo} />
                         </div>
                         <div className="name">Medium</div>
                    </div>
                    {gs ? (
                         <Link to="getstarted">
                              <button className="getstarted">
                                   Get Started
                              </button>
                         </Link>
                    ) : (
                         <div>
                              <span className="username">{u}</span>
                              <button className="logout" onClick={logout}>
                                   Log out
                              </button>
                         </div>
                    )}
               </div>
               <div className="line"></div>
          </div>
     );
};

export default Header;
