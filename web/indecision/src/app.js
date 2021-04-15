console.log("Indecision is up and running...");

// JSX - JavaScript XML
const app = {
  title: "Indecision",
  subtitle: "Use a computer",
  //options: [],
};

const appRoot = document.getElementById("app");

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    if (!app.options) {
      app.options = [];
    }

    app.options.push(option);
    console.log(app.options.length);
    e.target.elements.option.value = "";
    render();
  }
};

const show = (option) => <li key={option.length}>{option}</li>;
const formataOptions = () => app.options && app.options.map(show);
const showItens = () => <ol>{formataOptions()}</ol>;

function removeAll() {
  app.options = [];
  render();
}

const onMakeDecision = () => {
  const random = Math.random() * app.options.length;
  const sorteado = Math.floor(random);
  const option = app.options[sorteado];
};

const setDivVisibility = (visibilidade) => {
  const elemento = document.getElementById("visibilidadeControlada");
  elemento.style.display = visibilidade ? "block" : "none";
};

const changeVisibility = () => {
  exibindo = !exibindo;
  setDivVisibility(exibindo);
  render();
};

let exibindo = true;

const listaVazia = () => !app.options || app.options.length === 0;
function render() {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <h3>{app.subtitle}</h3>
      <button onClick={changeVisibility}>{exibindo ? "Hide" : "Show"}</button>
      <div id="visibilidadeControlada">
        <p>{app.options && app.options.length}</p>
        <button disabled={listaVazia()} onClick={onMakeDecision}>
          What should I do?
        </button>
        <button onClick={removeAll}>Remove all elements</button>
        {showItens()}
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

render();
