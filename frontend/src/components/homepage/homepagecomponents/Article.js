import React from "react";
import { Link } from "react-router-dom";
import { addart } from "../../../actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Article = ({ writername, body, title, datantime, img }) => {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const onClick = () => {
          dispatch(
               addart({
                    username: writername,
                    title: title,
                    body: body,
                    img: img,
               })
          );
          navigate("/articles");
     };

     return (
          <div className="d-flex article">
               <div className="content">
                    <div className="writer_name">{writername}</div>
                    <Link
                         style={{
                              textDecoration: "none",
                              color: "black",
                         }}
                         onClick={onClick}
                         to="/articles"
                    >
                         <div className="article_title">{title}</div>
                    </Link>
                    <div className="date_and_readTime">{datantime}</div>
               </div>
               <div className="article_img">
                    <img src={img} alt="no IMg" />
               </div>
          </div>
     );
};

export default Article;
