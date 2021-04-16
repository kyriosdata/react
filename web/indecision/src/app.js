class IndecitionApp extends React.Component {
  render() {
    this.title = "Indecision";
    this.subtitle = "Put your computer to work.";
    this.options = ["um", "dois", "três"];

    return (
      <div>
        <Header title={this.title} subtitle={this.subtitle} />
        <Action />
        <Options options={this.options} />
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  removeAll() {
    this.props.options = [];
  }
  render() {
    const show = this.props.options.map((o) => <Option key={o} option={o} />);
    return (
      <div>
        <h3>Options:</h3>
        <button onClick={this.removeAll}>Remove all</button>
        {show}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.option}</div>;
  }
}

class AddOption extends React.Component {
  add(e) {
    // Evita reenvio do formulário (tela redesenhada)
    e.preventDefault();

    // e.target.elements todos os elementos do form
    // via nome (propriedade 'name') recupera-se o elemento
    const elemento = e.target.elements.opcao;
    if (elemento.value) {
      alert("adiciona " + elemento.value);
      elemento.value = "";
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.add}>
          <input name="opcao" type="text" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

const appRoot = document.getElementById("app");

ReactDOM.render(<IndecitionApp />, appRoot);
