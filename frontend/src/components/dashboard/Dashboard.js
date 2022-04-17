import React, { useEffect, useState } from "react";
import Header from "../homepage/homepagecomponents/Header";
import Article from "../homepage/homepagecomponents/Article";
import { Link } from "react-router-dom";
const Dashboard = (gs) => {
     const [articles, setArticles] = useState([]);

     useEffect(() => {
          const fetchPosts = async () => {
               const response = await fetch("http://127.0.0.1:5000/cont");
               const postsData = await response.json();
               setArticles(postsData);
          };
          fetchPosts();
     }, []);

     return (
          <>
               <Header gs={false} />
               <div className="wrapper dashboard">
                    {articles.length === 0 ? (
                         <div className="noposts">
                              You hav'nt post anything yet!<br></br>Start
                              writing Today!
                         </div>
                    ) : (
                         articles.map((art) => (
                              <Article
                                   writername={art.username}
                                   title={art.title}
                                   body={art.body}
                                   datantime="nope"
                                   img={art.img}
                              />
                         ))
                    )}

                    <Link to="/writing">
                         <button className="startwriting">Start Writing</button>
                    </Link>
               </div>
          </>
     );
};

export default Dashboard;
