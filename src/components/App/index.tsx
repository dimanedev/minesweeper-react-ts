import NumberDisplay from "../NumberDisplay";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="Header">
        <NumberDisplay value={3} />
        <div className="Face">
          <span role="image" aria-label="face">
            😏
          </span>
        </div>
        <NumberDisplay value={12} />
      </div>
      <div className="Body">Body</div>
    </div>
  );
};

export default App;
