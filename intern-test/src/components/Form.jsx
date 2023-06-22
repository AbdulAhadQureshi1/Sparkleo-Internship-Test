import { InputSet } from "./InputSet";
import { useState } from "react";
import PropTypes from "prop-types";

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleChange = (e) => {
    const field = e.target.name;
    switch (field) {
      case "First Name":
        setFirstName(e.target.value);
        break;
      case "Last Name":
        setLastName(e.target.value);
        break;
      case "Email":
        setEmail(e.target.value);
        break;
      case "Phone":
        setPhone(e.target.value);
        break;
    }
  };
  const clrForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: firstName + lastName,
      email: email,
      phone: phone,
    }
    props.onSubmit(newUser);
  }
  return (
    <section className="form-wrapper">
      <h2>New Employee</h2>
      <form onSubmit={handleSubmit}>
        <InputSet
          label="First Name"
          value={firstName}
          type="text"
          onChange={handleChange}
        />
        <InputSet
          label="Last Name"
          value={lastName}
          type="text"
          onChange={handleChange}
        />
        <InputSet
          label="Email"
          value={email}
          type="email"
          onChange={handleChange}
        />
        <InputSet
          label="Phone"
          value={phone}
          type="tel"
          onChange={handleChange}
        />
        <div className="btn-set">
          <button type="reset" className="clr-btn" onClick={clrForm}>
            Clear All
          </button>
          <button type="submit" className="submit-btn">
            Add
          </button>
        </div>
      </form>
    </section>
  );
}
