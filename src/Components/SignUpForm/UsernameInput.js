import React from 'react';

const UsernameInput = ({ name, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label placeholder="username">Username:</label>
      <input
        type="text"
        className={`form-control ${error && 'is-invalid'}`}
        id="username"
        name={name}
        value={value}
        onChange={onChange}
        required
      />
      {error && (
        <div className="invalid-feedback">{error}</div>
      )}
    </div>
  );
};

export default UsernameInput;