import React, { useState } from "react";

export default function AddingMember() {
    const [member, setMember] = useState({ name: ""});

    const handleSubmit = (event) => {
      event.preventDefault();
      setMember({ name: "" });
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setMember((prevMember) => ({ ...prevMember, [name]: value }));
    };
    console.log(member);
    return (
    <form onSubmit={handleSubmit} className="row g-3">
    <div className="col-md-6">
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input
        type="text"
        name="name"
        value={member.name}
        onChange={handleChange}
        className="form-control"
        id="name"
        required
      />
    </div>
    <div className="col-12">
      <button type="submit" className="btn btn-primary">
        Add Member
      </button>
    </div>
  </form>
    )
}


