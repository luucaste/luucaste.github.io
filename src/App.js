import "./App.css";
import Header from "./Components/Header/Header";
import Public from "./Components/Routes/Public";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Public></Public>
    </div>
  );
}

export default App;
