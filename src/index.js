import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App";
import { store } from "./store";
import { loadState } from "./localStorage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//const persistedState =loadState()
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
