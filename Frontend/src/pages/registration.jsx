import React, { useState } from "react";
import "../styles/registration.css";

export const RegistrationForm = () => {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone_no: "",
  });

  /* Method 1 : if calling handleInputChange */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const formData = { ...input };
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div>
          <h1>Sign up</h1>
          <p>Please fill in this Form to create an Account </p>

          <div className="formContent">
            <div style={{ border: "1px solid #ccc" }}>
              <label>First Name</label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter First Name"
                required
                value={input.firstname}
                onChange={handleInputChange}

                /*method 2: if calling setInput in one line (inline) */
                // onChange={(e) =>
                //   setInput((prev) => ({
                //     ...prev,
                //     [e.target.name]: e.target.value,
                //   }))
                // }
              ></input>
            </div>

            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="lastname"
                placeholder="Enter Last Name"
                required
                value={input.lastname}
                onChange={handleInputChange}
              ></input>
            </div>

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

            <div style={{ border: "1px solid #ccc" }}>
              <label>Phone No.</label>
              <input
                type="tel"
                name="phone_no"
                placeholder="Enter Phone No"
                required
                value={input.phone_no}
                onChange={handleInputChange}
              ></input>
            </div>

            <button type="submit"> Submit </button>
          </div>
        </div>
      </form>
    </>
  );
};
