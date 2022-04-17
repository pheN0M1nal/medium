import React, { useContext, useState } from "react";
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

export function SignupForm(props) {
     const { switchToSignin } = useContext(AccountContext);
     const [getMessage, setGetMessage] = useState({});
     const [user, setUser] = useState("");
     const [pass, setPass] = useState("");
     const [fail, setFail] = useState(false);
     const [updateuser, setUpdateuser] = useState(false);

     const signup = async () => {
          const response = await fetch("http://127.0.0.1:5000/signup", {
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

     const onSubmit = (e) => {
          e.preventDefault();
          signup();
          console.log(getMessage);
          if (getMessage.isCreated === "true") {
               setUpdateuser(true);
               setTimeout(switchToSignin, 3000);
          } else setFail(true);

          setUser("");
          setPass("");
          console.log("no");
     };
     return (
          <div className="">
               <BoxContainer>
                    <div className={fail ? "display" : "hide"}>
                         {getMessage.isCreated !== "true" && (
                              <span>Signup Failed !</span>
                         )}
                    </div>
                    <div className={updateuser ? "display" : "hide"}>
                         <span>Signup Success! Redirecting to Login.</span>
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
                    <SubmitButton onClick={onSubmit} type="submit">
                         Signup
                    </SubmitButton>
                    <Marginer direction="vertical" margin="1em" />
                    <MutedLink href="#">
                         Already have an account?
                         <BoldLink href="#" onClick={switchToSignin}>
                              Signin
                         </BoldLink>
                    </MutedLink>
               </BoxContainer>
          </div>
     );
}
