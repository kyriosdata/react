import React from "react";
import Action from "./Action";
import Option from "./Option";

const Options = (props) => {
  return (
    <div>
      <Action
        habilitado={props.options.length > 0}
        acao={props.handleDeleteOptions}
      >
        Remove todas as tarefas
      </Action>
      {props.options.length === 0 && <p>Acrescente uma tarefa...</p>}
      {props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

export default Options;
