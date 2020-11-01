import React from 'react'
import "./Login.css";
import { Button } from "@material-ui/core"

const Login = () => {
    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
                    alt=""
                />
                <h1>Sign In to Clever Programmer HQ</h1>
                <p>Cleverprogrammer.slack.clone</p>
                <Button>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login;
