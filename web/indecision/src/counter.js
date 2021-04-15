console.log("Indecision is up and running...");

// JSX - JavaScript XML

let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
};

const subOne = () => {
  count--;
  renderCounterApp();
};

const zero = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const template = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={subOne}>-1</button>
      <button onClick={zero}>Reset</button>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderCounterApp();
