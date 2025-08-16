import React from "react";

const parent = React.createElement("h1", {id:"parent"}, "Parent")

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)