import React, { useState } from "react";
import "./form.css";
function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.name === "") {
      return setFormErrors({
        ...formErrors,
        name: "Name is required",
      });
    }
    if (formData.email === "") {
      return setFormErrors({
        ...formErrors,
        email: "Email is required",
      });
    }
    if (formData.message === "") {
      return setFormErrors({
        ...formErrors,
        message: "Message is required",
      });
    }
    if (formData.message.length < 10) {
      setFormErrors({
        ...formErrors,
        message: "Message should be atleast 10 characters",
      });
    }
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      return;
    }
    const data = localStorage.getItem("formData");
    const olddata = JSON.parse(data);
    if (olddata) {
      olddata.push(formData);
      localStorage.setItem("formData", JSON.stringify(olddata));
    } else {
      localStorage.setItem("formData", JSON.stringify([formData]));
    }
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setFormErrors({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const customEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (e.target.name === "userName") {
      setFormData({
        ...formData,
        name: e.target.value,
      });
    } else {
      setFormErrors({
        ...formErrors,
        name: "",
      });
    }
    if (e.target.name === "useEmail") {
      if (!customEmailRegex.test(e.target.value)) {
        return setFormErrors({
          ...formErrors,
          email: "Please enter a valid email",
        });
      } else {
        setFormErrors({
          ...formErrors,
          email: "",
        });
      }
      setFormData({
        ...formData,
        email: e.target.value,
      });
    }
    if (e.target.name === "UserDesc") {
      setFormData({
        ...formData,
        message: e.target.value,
      });
    }
    setFormErrors({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <div className="main">
        <form onSubmit={handleOnSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange(e)}
            name="userName"
          />
          {formErrors.name && <span>{formErrors.name}</span>}
          <label>Email</label>
          <input
            type="text"
            name="useEmail"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
          {formErrors.email && <span>{formErrors.email}</span>}
          <label>Message</label>
          <input
            type="textarea"
            name="UserDesc"
            value={formData.message}
            onChange={(e) => handleChange(e)}
          />
          {formErrors.message && <span>{formErrors.message}</span>}
          <input type="submit" value="Submit" />
        </form>
      </div>
      <button onClick={handleClear}>Clear</button>
    </>
  );
}
export default Form;
