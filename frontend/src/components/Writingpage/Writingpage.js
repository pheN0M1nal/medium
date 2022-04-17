import { React, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../homepage/homepagecomponents/Header";

const Writingpage = () => {
     const [imageURL, setImageURL] = useState("");
     const [uploadInput, setUploadIput] = useState();
     const [fileName, setFileName] = useState();
     const [title, setTitle] = useState();
     const [body, setBody] = useState();
     const [success, setSuccess] = useState(true);
     const [getMessage, setGetMessage] = useState({});

     const handleUploadImage = (ev) => {
          ev.preventDefault();
          console.log("Ssss");
          const data = new FormData();
          data.append("file", uploadInput.files[0]);


          fetch("http://localhost:5000/uploadpic", {
               method: "POST",
               body: data,
          }).then((response) => {
               response.json().then((body) => {
                    setImageURL(`http://localhost:5000/${body.file}`);
               });
          });

          fetch("http://127.0.0.1:5000/uploadcontent", {
               method: "POST",
               body: JSON.stringify({
                    title: title,
                    content: body,
               }),
               headers: {
                    "Content-type": "application/json; charset=UTF-8",
               },
          })
               .then((response) => response.json())
               .then((data) => setGetMessage(data));
          setTitle("");
          setUploadIput(null);
          setBody("");
     };

     return (
          <div className="">
               <Header />
               <div className="line"></div>
               <div className="wrapper writing">
                    <div
                         className={
                              getMessage.isPublished === "true"
                                   ? "success_upload"
                                   : "fail_upload"
                         }
                    >
                         Published Successfully !!
                         <Link className="gotodashboard" to="/dashboard">
                              Go to Dashboard
                         </Link>
                    </div>
                    <form
                         className="writing_form"
                         onSubmit={handleUploadImage}
                         action=""
                         method="post"
                    >
                         <div className="">
                              <input
                                   className="enter_title"
                                   type="text"
                                   placeholder="Title"
                                   value={title}
                                   onChange={(e) => setTitle(e.target.value)}
                              />
                         </div>
                         <div class="cursor">
                              <textarea
                                   type="text"
                                   placeholder="Tell your story ..."
                                   class="enter_body"
                                   value={body}
                                   onChange={(e) => setBody(e.target.value)}
                              />
                              <i></i>
                         </div>
                         <label className="inputfile">
                              Attach Image
                              <input
                                   ref={(ref) => {
                                        setUploadIput(ref);
                                   }}
                                   type="file"
                              />
                         </label>
                         <div className="mt-10">
                              <button className="publish">Publish</button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default Writingpage;
