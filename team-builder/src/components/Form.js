import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState({
    name: "",
    email: "",
    role: "",
    id: null
  });

  // console.log("props", props);

  const handleInput = e => {
    // console.log("target name:", e.target.name);
    // console.log("target value", e.target.value);

    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addMember({ ...input, id: Math.random() });
    setInput({
      name: "",
      email: "",
      role: "",
      id: null
    });
  };

  // console.log("input State", input);
  return (
    <div>
      <h1>Add a Member</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name:{" "}
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={handleInput}
            />
          </label>
          <label htmlFor="email">
            Email:{" "}
            <input
              type="text"
              value={input.email}
              name="email"
              onChange={handleInput}
            />
          </label>
          <label htmlFor="role">
            Role:{" "}
            <input
              type="text"
              value={input.role}
              name="role"
              onChange={handleInput}
            />
          </label>
        </div>

        <button>Add Member</button>
      </form>
    </div>
  );
}

export default Form;
