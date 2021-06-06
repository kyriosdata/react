import React from "react";
import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";

export default class Start extends React.Component {
  state = {
    options: [],
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };

  sortear = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };

  handleAddOption = (option) => {
    if (!option) {
      return "Forneça uma tarefa válida";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Essa tarefa já existe!";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  render() {
    return (
      <div>
        <Header subtitle={"Subtítulo"} />
        <Action habilitado={this.state.options.length > 0} acao={this.sortear}>
          Sorteie!
        </Action>
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
