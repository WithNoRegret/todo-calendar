import Calendar from "./components/Calendar/Calendar";
import "./App.scss";
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Calendar app</h1>
      </header>
      <Calendar />
    </div>
  );
}

export default App;
