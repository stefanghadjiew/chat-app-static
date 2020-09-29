import React from "react";
import { Switch,Route } from "react-router-dom";
import Home from "./Home" 
import Authentication from "./Authentication"

const Main = ({ isLogged,userIsLogged,token,userId }) => {
    return(
        <div className="main_wrapper">
            <Switch>
                <Route exact path="/chat-app-static" render={props => 
                <Home 
                    token={token} 
                    userId={userId} 
                    isLogged={isLogged} 
                    {...props}
                />}/>
                <Route exact path="/login" render={props => 
                <Authentication  
                    submitBtnText="login" 
                    userIsLogged={userIsLogged} 
                    {...props}
                />}/>
                <Route exact path="/register" render={props => 
                <Authentication  
                    register  
                    submitBtnText="register"  
                    userIsLogged={userIsLogged} 
                    {...props}
                />}/>
            </Switch>
        </div>
    )
  
}

export default Main;