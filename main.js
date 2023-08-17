import * as React from "https://esm.sh/react";
import ReactDOMClient from "https://esm.sh/stable/react-dom/client";
import DynamicInput from "./components/dynamic-input.js";
import DateTimeLocal from "./components/date-time-local.js";
import MyCustomComponent from "./components/my-custom-component.js";
import TextareaAutosize from "https://cdn.esm.sh/@mui/material/TextareaAutosize";
import ReactAutocompleteInput from "./components/react-autocomplete-input.js";
import EsmSh from "./components/esm-sh.js";
import Timer from "./components/timer.js";
const App = () => {
  const [data, setData] = React.useState({
    value: 'Example |="{{B}}"',
    list: [
      {id: "A", display: "A"},
      {id: "B", display: "B"},
      {id: "C", display: "C"},
      {id: "D", display: "D"}
    ],
    buttonText: "Run"
  });
  const updateData = (newData) => {
    setData({...data, ...newData});
    console.log("update data", data);
  };
  const runQuery = (query) => {
    console.log("run query", query);
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "ReactAutocompleteInput"), /* @__PURE__ */ React.createElement(ReactAutocompleteInput, {
    updateData: (data2) => {
      updateData(data2);
    },
    data,
    runQuery
  }), /* @__PURE__ */ React.createElement("h1", null, "Timer"), /* @__PURE__ */ React.createElement(Timer, {
    updateData,
    data,
    runQuery
  }), /* @__PURE__ */ React.createElement("h1", null, "Example ESM.sh"), /* @__PURE__ */ React.createElement(EsmSh, {
    updateData,
    data,
    runQuery
  }), /* @__PURE__ */ React.createElement("h2", null, "Input Data:"), /* @__PURE__ */ React.createElement(TextareaAutosize, {
    style: {
      width: "100%"
    },
    placeholder: "Input Data",
    value: JSON.stringify(data, null, 2),
    onChange: (e) => {
      console.log(e.target.value);
      try {
        setData(JSON.parse(e.target.value));
      } catch (e2) {
        setData(e2.target?.value);
      }
    }
  }), /* @__PURE__ */ React.createElement("h2", null, "MyCustomComponent"), /* @__PURE__ */ React.createElement(MyCustomComponent, {
    updateData,
    data,
    runQuery
  }), /* @__PURE__ */ React.createElement("h2", null, "Dynamic Input"), /* @__PURE__ */ React.createElement(DynamicInput, {
    updateData: (data2) => {
      updateData(data2);
    },
    data,
    runQuery
  }), /* @__PURE__ */ React.createElement(DateTimeLocal, {
    updateData: (data2) => {
      updateData(data2);
    },
    data,
    runQuery
  }));
};
const {createRoot} = ReactDOMClient;
const container = document.getElementById("root");
const root = createRoot(container);
root.render(/* @__PURE__ */ React.createElement(App, {
  tab: "home"
}));
