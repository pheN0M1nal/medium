import React from "react";
import { Link } from "react-router-dom";

import hero from "./hero.png";

const Hero = () => {
     return (
          <div className="back">
               <div className="hero wrapper">
                    <div className="leftwrapper">
                         <div className="maintext">
                              Write, read, and connect
                         </div>
                         <div className="secondarytext">
                              It's easy and free to post your thinking on any
                              topic and connect with millions of readers.
                         </div>
                         <Link to="getstarted">
                              <button className="startwriting">
                                   Start Writing
                              </button>
                         </Link>
                    </div>
                    <div className="heroimg">
                         <img src={hero} alt="no hero img" />
                    </div>
               </div>
          </div>
     );
};

export default Hero;
