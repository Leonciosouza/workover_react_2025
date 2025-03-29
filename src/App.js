
import React from "react";

export const App = () => {
  return (
    <div className="App">
      Olá Baby!
      <Login />
    </div>
  );
}

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

export default App;
// export { Login }; // Removed redundant export
// import React from "react";
//export default App;
