import { useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

interface State {
  isDark: boolean;
  fSize: number;
}

interface Action {
  type: string;
  payload?: unknown;
}

const initialState: State = {
  isDark: false,
  fSize: 16,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, isDark: !state.isDark };
    case "INCREASE_FONT_SIZE":
      return { ...state, fSize: state.fSize + 1 };
    case "DECREASE_FONT_SIZE":
      return {
        ...state,
        fSize: state.fSize <= 8 ? state.fSize : state.fSize - 1,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      className={state.isDark ? "dark" : "light"}
      style={{ fontSize: state.fSize + "px" }}
    >
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
          Toggle Theme
        </button>
        <button onClick={() => dispatch({ type: "INCREASE_FONT_SIZE" })}>
          F +
        </button>
        <button onClick={() => dispatch({ type: "DECREASE_FONT_SIZE" })}>
          F -
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
