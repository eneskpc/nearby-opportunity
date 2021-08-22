import ReactDOM from "react-dom";
import { App } from "./App";
import { mergeStyles } from "@fluentui/react";
import reportWebVitals from "./reportWebVitals";
import { createStore, Store } from "redux";
import RootReducer from "./assets/store/reducers/RootReducer";
import { Provider } from "react-redux";
import { initializeIcons } from "@fluentui/font-icons-mdl2";

initializeIcons();

const store = createStore(RootReducer);

mergeStyles({
  ":global(body,html,#root)": {
    margin: 0,
    padding: 0,
    height: "100vh",
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
