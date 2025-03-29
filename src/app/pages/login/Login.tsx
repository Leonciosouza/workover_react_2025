import React from "react";
//import { useNavigate } from "react-router-dom";


export const Login = () => {

    
    return (
        <div>
            <form>
                <label>
                    <span>Email</span>
                    <input/>
                </label>
                
                <label>
                    <span>Senha</span>
                    <input type="password" />
                </label>
            </form>
        </div>
    );
}