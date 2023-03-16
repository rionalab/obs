import React, { useContext, useState } from "react";
import { AuthContext } from "context/AuthContext";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Messages } from "primereact/messages";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

const CREDENTIALS = "admin";

function Login() {
  const msgs = React.useRef(null);

  const navigate = useNavigate();
  const { signin, user } = useContext(AuthContext);
  const [values, setValue] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await msgs.current.clear();

    const { username, password } = values;

    if (username === CREDENTIALS && password === CREDENTIALS) {
      signin(username);
      navigate("/homepage");
      return;
    }

    msgs.current.show({
      sticky: true,
      severity: "error",
      summary: "Error. ",
      detail: "Invalid credential",
      closable: true,
    });
  };

  const handleChange = (name, value) => {
    msgs.current.clear();

    setValue({
      ...values,
      [name]: value,
    });
  };

  React.useEffect(() => {
    user && navigate("/homepage");
  }, []);

  return (
    <div>
      <Card className={style.card}>
        <h1 className={style.header}>OBS REACTJS TEST</h1>

        <Messages ref={msgs} />

        <form onSubmit={handleSubmit}>
          <InputText
            className="w-100 mb-16"
            value={values.username}
            onChange={(e) => handleChange("username", e.target.value)}
          />
          <Password
            value={values.password}
            toggleMask
            className="w-100 mb-16"
            onChange={(e) => handleChange("password", e.target.value)}
            feedback={false}
          />

          <div className="text-center">
            <Button label="Sign in" className="btn" />
            <br />
            <br />
            <a href="/">Forgot Password</a>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Login;
