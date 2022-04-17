import React from "react";
import GetStarted from "./components/getStarted/GetStarted";
import ArticlePage from "./components/ArticlePage/ArticlePage";
import Homepage from "./components/homepage/Homepage";
import Writingpage from "./components/Writingpage/Writingpage";
import Dashboard from "./components/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
const Routing = () => {
     var login = useSelector((state) => state.wishes[0].user);
     console.log(login);
     return (
          <Routes>
               <Route path="/" element={<Homepage gs={true} />} />
               <Route path="/getstarted" element={<GetStarted />} />
               {login !== "not_Logged_in" && (
                    <Route
                         path="/writing"
                         element={<Writingpage gs={false} />}
                    />
               )}
               {login !== "not_Logged_in" && (
                    <Route
                         path="/dashboard"
                         element={<Dashboard gs={false} />}
                    />
               )}
               {login !== "not_Logged_in" && (
                    <Route
                         path="/articles"
                         element={<ArticlePage gs={false} />}
                    />
               )}
          </Routes>
     );
};

export default Routing;
