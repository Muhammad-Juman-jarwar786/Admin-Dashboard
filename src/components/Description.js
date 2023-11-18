import React from "react";
import PropTypes from "prop-types";
import "./Description.css"

const Description = (props) => {

  return (
    <div className="description__wrapper">
      <label className="description__label" htmlFor={props.name}>{props.label}</label>
      <textarea
        className="description__textarea"
        name={props.name}
        id={props.name}
        value={props.value}
        onChange={props.onChange}
        rows={5}
      />
    </div>
  );
}

Description.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  };

export default Description;
