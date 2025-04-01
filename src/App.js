
import { useState, useMemo } from "react";

export const App = () => {
  return (
    <div className="App">
      Olá Baby Este é o seu espaço!
      <Login />
    </div>
  );
}

export const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const emailLength = useMemo(() => {

      console.log("Executou");
      return email.length * 1000;      
    }, [email.length]);

  /*
    useEffect(() => {
      if (window.confirm("Você é homem?")) {
        console.log("Homem");
        
      } else {
        console.log("Mulher");
      }
    }, []);

    useEffect(() => {
      console.log(email);
      console.log(password);

    }, [email]);

    useEffect(() => {
      console.log(email);
      console.log(password);

    }, [password]);
  */

    const handleEntrar = () => {
      console.log(email);
      console.log(password);
    }

    return (
        <div>
            <form>
              <p>Quantidade de caracteres: {emailLength}</p>
                <label>
                    <span>Email:</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                
                <label>
                    <span>Senha:</span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>

                <button type="button" onClick={handleEntrar}>
                  Entrar
                </button>
            </form>
        </div>
        
    );
}

export default App;
// export { Login }; // Removed redundant export
// import React from "react";
//export default App;
