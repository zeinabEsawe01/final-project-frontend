import React from 'react';

const PasswordInput = ({ name, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label placeholder="password">Password:</label>
      <input
        type="password"
        className={`form-control ${error && 'is-invalid'}`}
        id="password"
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

export default PasswordInput;