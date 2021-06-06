import React from "react";
import PropTypes from "prop-types";

const Action = (props) => {
  return (
    <div>
      <button onClick={props.acao} disabled={!props.habilitado}>
        {props.children}
      </button>
    </div>
  );
};

export default Action;

Action.propTypes = {
  acao: PropTypes.func,
  habilitado: PropTypes.bool,
  children: PropTypes.element.isRequired,
};
