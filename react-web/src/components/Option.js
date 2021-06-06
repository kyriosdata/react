import React from "react";
import PropTypes from "prop-types";

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Option;

Option.propTypes = {
  handleDeleteOption: PropTypes.func,
  optionText: PropTypes.string.isRequired,
};
