import React, {createContext, useState} from 'react';
import { useHistory } from "react-router-dom";
const jwt = require("jsonwebtoken");
// import AuthService from '../services/AuthService'

export const UserContext = createContext();



function UserContextProvider(props){
    const history = useHistory();

    function getCurrentUser(){
        const a = JSON.parse(localStorage.getItem('user'));
        if (!a) {
            history.push("/login");
        } else {
            try {
                jwt.verify(a.Token, "anystring");
                return JSON.parse(localStorage.getItem('user'));
              } catch (e) {
                console.error(e);
                history.push("/login");
              }
        }
    }

    function logout(){
        const h = 0;
        localStorage.removeItem("user");
    }

    const [currentUser, setCurrentUser] = useState("Josh");


return (
    <UserContext.Provider value={{...props, getCurrentUser, logout, currentUser, setCurrentUser}}>
        {props.children}
    </UserContext.Provider>
)}

export default UserContextProvider;