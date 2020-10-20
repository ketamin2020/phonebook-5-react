import React from "react";
import PropTypes from "prop-types";
export default function filterContact({ value, onChangeFilter }) {
  return (
    <div className="group">
      <input
        type="text"
        value={value}
        required
        onChange={(e) => onChangeFilter(e.target.value)}
      />
      <span className="bar"></span>
      <label>Search Contact </label>
    </div>
  );
}

filterContact.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
