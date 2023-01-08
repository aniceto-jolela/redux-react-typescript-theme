import React from "react";
import { Provider } from "react-redux";
import Home from "./components/home";
import store from "./store/store";


function App() {
  return (
    <Provider store={store}>
      <div style={{ margin: "-8px" }}>
        <Home />
        <div style={{ textAlign: "center", fontSize: "10px", paddingTop: 25 }}>
          <span>CopyRight &copy; 2023</span>
        </div>
      </div>
    </Provider>
  );
}

export default App;
