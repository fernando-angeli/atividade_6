import { useNavigate } from "react-router-dom";
import "./form.style.css";
import { useState } from "react";

const FormLogin = () => {
  const [user, setUser] = useState({
    login: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(user.login === "teste" && user.password === "teste"){
      navigate("/home")
    } else{
        setError("Usuário ou senha inválidos.")
    }
    setUser({
      login: "",
      password: "",
    });
  };

  const register = () => {
    alert("cadastrar");
  };

  return (
    <div className="box">
      <h2>Entrar</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <div className="field-container">
            <div className="input-form">
              <input
                name="login"
                id="login"
                type="text"
                value={user.login}
                onChange={handleChange}
                placeholder="Email ou número de celular"
              />
            </div>
          </div>
        </div>
        <div className="input-box">
          <div className="field-container">
            <div className="input-form">
              <input
                name="password"
                id="password"
                type="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Senha"
              />
            </div>
          </div>
        </div>
        {error && <div className="error-message">{error}</div>}
          <button className="red" type="submit">
            Entrar
          </button>
     
      </form>

      <h3>OU</h3>
      <button className="gray" type="submit" onClick={register}>
        Usar um código de acesso
      </button>
      <h3>Esqueceu a senha?</h3>
      <label className="label-check">
        <input className="lembrar-check" type="checkbox" /> Lembre-se de mim
      </label>
    </div>
  );
};

export default FormLogin;
