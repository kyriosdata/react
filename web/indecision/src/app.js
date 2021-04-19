class IndecitionApp extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
    this.adiciona = this.adiciona.bind(this);
    this.pickOne = this.pickOne.bind(this);

    this.state = {
      options: ["um", "dois", "três", "quatro"],
    };
  }

  adiciona(opcao) {
    this.setState((previous) => {
      return {
        options: previous.options.concat([opcao]),
      };
    });
  }

  removeAll() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }

  pickOne() {
    const random = Math.random() * this.state.options.length;
    const index = Math.floor(random);
    alert(this.state.options[index]);
  }

  render() {
    this.title = "Indecision";
    this.subtitle = "Put your computer to work.";

    return (
      <div>
        <Header title={this.title} subtitle={this.subtitle} />
        <Action
          pickOne={this.pickOne}
          hasOptions={this.state.options.length > 0}
        />
        <Options options={this.state.options} removeTudo={this.removeAll} />
        <AddOption adiciona={this.adiciona} />
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
  render() {
    return (
      <div>
        <button disabled={!this.props.hasOptions} onClick={this.props.pickOne}>
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const show = this.props.options.map((o) => <Option key={o} option={o} />);
    return (
      <div>
        <h3>Options:</h3>
        <button onClick={this.props.removeTudo}>Remove all</button>
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
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
  }

  add(e) {
    // Evita reenvio do formulário (tela redesenhada)
    e.preventDefault();

    // e.target.elements todos os elementos do form
    // via nome (propriedade 'name') recupera-se o elemento
    const elemento = e.target.elements.opcao;
    if (elemento.value) {
      this.props.adiciona(elemento.value);
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
