import React, { useContext, useState } from "react";
import { adduser } from "../../../actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
     BoldLink,
     BoxContainer,
     FormContainer,
     Input,
     MutedLink,
     SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const { switchToSignup } = useContext(AccountContext);

     const [getMessage, setGetMessage] = useState({});
     const [user, setUser] = useState("");
     const [pass, setPass] = useState("");
     const [fail, setFail] = useState(false);

     const login = async () => {
          const response = await fetch("http://127.0.0.1:5000/login", {
               method: "POST",
               body: JSON.stringify({
                    username: user,
                    password: pass,
               }),
               headers: {
                    "Content-type": "application/json; charset=UTF-8",
               },
          });
          const data = await response.json();
          setGetMessage(data);
     };

     const settingUSer = async () => {
          const response = await fetch("http://127.0.0.1:5000/setUser");
          const data = await response.json();
          console.log(data);
     };

     const onSubmit = (e) => {
          e.preventDefault();
          login();
          console.log(getMessage);
          if (getMessage.isUser === "true") {
               settingUSer();
               navigate("/dashboard");
          }
          dispatch(adduser({ user: user }));
          setFail(true);
     };
     return (
          <BoxContainer>
               <div className={fail ? "display" : "hide"}>
                    {getMessage.isUser !== "true" && (
                         <span>Invalid Username or Password</span>
                    )}
               </div>
               <FormContainer>
                    <Input
                         type="User name"
                         placeholder="User Name"
                         value={user}
                         onChange={(e) => setUser(e.target.value)}
                    />
                    <Input
                         type="password"
                         placeholder="Password"
                         value={pass}
                         onChange={(e) => setPass(e.target.value)}
                    />
               </FormContainer>
               <Marginer direction="vertical" margin={10} />
               <MutedLink href="#">Forget your password?</MutedLink>
               <Marginer direction="vertical" margin="1.6em" />

               <SubmitButton onClick={onSubmit} type="submit">
                    Signinn
               </SubmitButton>

               <Marginer direction="vertical" margin="1em" />
               <MutedLink href="#">
                    Don't have an accoun?{" "}
                    <BoldLink href="#" onClick={switchToSignup}>
                         Signup
                    </BoldLink>
               </MutedLink>
          </BoxContainer>
          //
     );
}
