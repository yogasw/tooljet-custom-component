import React, {useState} from "https://cdn.jsdelivr.net/npm/react@18.2.0/+esm";
import {createPortal, createRoot} from "https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm";
import DynamicInput from "./components/dynamic-input.js";
import DateTimeLocal from "./components/date-time-local.js";
import MyCustomComponent from "./components/my-custom-component.js";
import TextareaAutosize from "https://cdn.jsdelivr.net/npm/@mui/material@5.15.0/TextareaAutosize/+esm";
import ReactAutocompleteInput from "./components/react-autocomplete-input.js";
import EsmSh from "./components/esm-sh.js";
import Timer from "./components/timer.js";
import PrimitivesDiagrams from "./components/primitives-diagrams.js";
import ChatWithTailwind from "./components/chat-with-tailwind.js";
import ConversationHistory from "./components/conversation-history.js";
import ReactFlowDiagram from "./components/react-flow-diagram.js";
import {ChatHistory} from "./data/chat-history.js";
import {GenerateListDataFlow} from "./data/generate-list-flow.js";
import DownloadZip from "./components/download-zip.js";
import VisTimeline from "./components/vis-timeline.js";
import RetejsBasic from "./components/retejs-basic.js";
export const IFrame = ({
  children,
  ...props
}) => {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef?.contentWindow?.document?.body;
  return /* @__PURE__ */ React.createElement("iframe", {
    width: "100%",
    height: "100%",
    style: {
      display: "block",
      border: "none",
      height: "50vh",
      width: "99vw"
    },
    ...props,
    ref: setContentRef
  }, mountNode && createPortal(children, mountNode));
};
const position = {x: 0, y: 0};
const edgeType = "smoothstep";
const reactFLowData = {
  initialNodes: [
    {
      id: "1",
      data: {label: "node 1"},
      position
    },
    {
      id: "2",
      data: {label: "node 2"},
      position
    },
    {
      id: "2a",
      data: {label: "node 2a"},
      position
    },
    {
      id: "3",
      data: {label: "node 3"},
      position
    }
  ],
  initialEdges: [
    {id: "e12", source: "1", target: "2", type: edgeType, animated: true},
    {id: "e13", source: "1", target: "3", type: edgeType, animated: true},
    {id: "e22a", source: "2", target: "2a", type: edgeType, animated: false},
    {id: "e22b", source: "2", target: "2b", type: edgeType, animated: false}
  ],
  nodeWidth: 172,
  nodeHeight: 36
};
const App = () => {
  var numberOfGroups = 3;
  var groups = [];
  for (var i = 0; i < numberOfGroups; i++) {
    groups.push({
      id: i,
      content: "Truck " + i
    });
  }
  var numberOfItems = 3;
  var items = [];
  var itemsPerGroup = Math.round(numberOfItems / numberOfGroups);
  for (var truck = 0; truck < numberOfGroups; truck++) {
    var date = new Date();
    for (var order = 0; order < itemsPerGroup; order++) {
      date.setHours(date.getHours() + 4 * (Math.random() < 0.2));
      var start = new Date(date);
      date.setHours(date.getHours() + 2 + Math.floor(Math.random() * 4));
      var end = new Date(date);
      items.push({
        id: order + itemsPerGroup * truck,
        group: truck,
        start,
        end,
        content: "Order " + order
      });
    }
  }
  const [data, setData] = React.useState({
    value: 'Example |="{{B}}"',
    list: [
      {id: "A", display: "A"},
      {id: "B", display: "B"},
      {id: "C", display: "C"},
      {id: "D", display: "D"}
    ],
    buttonText: "Run",
    items,
    groups
  });
  const updateData = (newData) => {
    setData({...data, ...newData});
    console.log("update data", data);
  };
  const runQuery = (query) => {
    console.log("run query", query);
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Vis timline with React"), /* @__PURE__ */ React.createElement(VisTimeline, {
    data,
    updateData,
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
  }), /* @__PURE__ */ React.createElement("h1", null, "Download Zip"), /* @__PURE__ */ React.createElement(DownloadZip, {
    data
  }), /* @__PURE__ */ React.createElement("h1", null, "React Flow"), /* @__PURE__ */ React.createElement(IFrame, {
    width: "100%",
    height: "400"
  }, /* @__PURE__ */ React.createElement(ReactFlowDiagram, {
    data: GenerateListDataFlow({
      parameters: {summaryOnly: true}
    })
  })), /* @__PURE__ */ React.createElement("h1", null, "Conversation History"), /* @__PURE__ */ React.createElement(IFrame, {
    width: "100%",
    height: "400"
  }, /* @__PURE__ */ React.createElement(ConversationHistory, {
    data: ChatHistory
  })), /* @__PURE__ */ React.createElement("h1", null, "Chat Component with Tailwind Css"), /* @__PURE__ */ React.createElement(IFrame, {
    width: "100%",
    height: "400"
  }, /* @__PURE__ */ React.createElement(ChatWithTailwind, null)), /* @__PURE__ */ React.createElement("h1", null, "Retejs Basic"), /* @__PURE__ */ React.createElement("h1", null, "ReactAutocompleteInput"), /* @__PURE__ */ React.createElement(ReactAutocompleteInput, {
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
const container = document.getElementById("root");
const root = createRoot(container);
root.render(/* @__PURE__ */ React.createElement(App, {
  tab: "home"
}));
