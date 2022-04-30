import React from "react";
import "../Styles.css";

const Login = (props) => {
  const [email, setEmail] = React.useState("someone@gmail.com");
  const [password, setPassword] = React.useState("someone@gmail.com");

  const onSubmit = () => {
    if (!email || !password) return false;

    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.setToken(data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="button" onClick={() => onSubmit()}>
          Login / Register
        </button>
      </form>
    </div>
  );
};

export default Login;
