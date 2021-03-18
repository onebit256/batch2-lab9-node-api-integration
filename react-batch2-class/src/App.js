import React from "react";
import Menu from './components/menu';
import SideBar from './components/sideBar';
import Login from './components/login';
import Contract from './components/parts/contracts';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useState, useEffect, useContext} from 'react';
// import AuthService from './services/AuthService';
import {UserContext} from './context/currentUser'



function App(props) {

  const userC = useContext(UserContext);
  const u = userC.getCurrentUser();

  return (
    <div>
    { typeof(u) === "undefined" ?
      <Route path="/login">
        <Login />
      </Route>
      :
      <div>
      <Switch>
       <div>
          <body className="layui-layout-body">
            <div className="layui-layout layui-layout-admin">
              <Menu test_name={props.value}/>   
              <SideBar/>    
              <Route exact path="/">
                <div className="layui-body">     
                    <div>内容主体区域</div>
  
                  </div>
              </Route>
              <Route path="/contracts">
                
                <Contract/>
              </Route>
  
              
            </div>
        </body>
        </div>
      </Switch>
        </div>
    

    }

</div>

  );
}

export default App;


