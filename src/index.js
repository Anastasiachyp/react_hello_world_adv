import React from "react";
import reactDom from "react-dom";
import Hello from "./Hello";

const App = () => {
    return <Hello />;
};

ReactDOM.render(<App />, document.getElementById("app"));