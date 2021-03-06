import React from "react";
import candee, { render } from "candee";
import globalModel from "./models/global";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

candee.model(globalModel);

render(<App />, document.getElementById("root"));

registerServiceWorker();
