import React, { useState, useEffect } from "react";
import Hero from "./homepagecomponents/Hero";
import Article from "./homepagecomponents/Article";
import Header from "./homepagecomponents/Header";

const Homepage = ({ gs }) => {
     const [img, setImg] = useState("");

     const ss = () => {
          fetch("http://127.0.0.1:5000/getimage").then((response) => {
               // Then create a local URL for that image and print it

               if (!response.ok) {
                    throw Error("error in fetching img");
               }
               setImg(response.url);
          });
     };

     useEffect(() => {
          // Update the document title using the browser API
          console.log("re");
     }, [img]);

     return (
          <div className="homepage">
               <Header gs={gs} />
               <div className="line"></div>
               <Hero />
               <div className="line"></div>
          </div>
     );
};

export default Homepage;
