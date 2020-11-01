import React from 'react'
import "./Login.css";
import { Button } from "@material-ui/core"
import { auth, provider } from "../../Api";

const Login = () => {
    const signIn = (e)=>{
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result);
            })
            .catch((err)=>{
                alert(err.message);
            })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
                    alt=""
                />
                <h1>Sign In to Clever Programmer HQ</h1>
                <p>Cleverprogrammer.slack.clone</p>
                <Button onClick={signIn} >Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login;
