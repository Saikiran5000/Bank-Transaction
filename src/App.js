import Form from "./Form";
import Account from "./Account";

function App() {
  return (
    <>
      <header className="app-header-ui">
        <h1>Banking Application</h1>
        <p>React + Redux Demo</p>
      </header>

      <Form />
      <Account />
    </>
  );
}

export default App;
