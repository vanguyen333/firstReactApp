import "./App.css";

const App = () => {
  const name = "John";
  const isNameShowing = true;
  return (
    <div className="App">
      <h1>Hello, {isNameShowing ? name : "somebody else!"}</h1>
    </div>
  );
};

export default App;
