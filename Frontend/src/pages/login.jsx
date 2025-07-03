import React, { useState } from "react";

export const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLoginForm = (event) => {
    event.preventDefault();
    const formData = { ...input };
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleLoginForm}>
        <div>
          <h1>Login</h1>
          <p>Please fill in this Form to Login the Account </p>
          <div className="formContent">
            <div>
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                required
                value={input.email}
                onChange={handleInputChange}
              ></input>
            </div>

            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                required
                value={input.password}
                onChange={handleInputChange}
              ></input>
            </div>

            <button type="submit"> Login </button>
          </div>
        </div>
      </form>
    </>
  );
};
