import { React, useState } from "react";
import Header from "../homepage/homepagecomponents/Header";
import { useSelector } from "react-redux";

const ArticlePage = () => {
     var art = useSelector((state) => state.favroties[0]);
     return (
          <div>
               <Header gs={false} />
               <div className="line"></div>
               <div className="wrapper">
                    <div className="ap_content">
                         <span className="ap_article_title">{art.title}</span>
                         <div className="articlepage_img">
                              <img src={art.img} alt="no IMg" />
                         </div>
                         <div class="d-flex">
                              <div className="ap_writer_name">
                                   {art.username}
                              </div>
                              <div className="ap_date_and_readTime">
                                   "12 min . 27 Oct 2021"
                              </div>
                         </div>

                         <p className="ap_body">{art.body}</p>
                    </div>
               </div>
          </div>
     );
};

export default ArticlePage;
