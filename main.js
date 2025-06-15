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
import {ParseSampleData} from "./data/parseLogs.js";
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
  var graph2dItems = [];
  var now = new Date();
  var startTime = new Date(now.getTime() - 5 * 60 * 60 * 1e3);
  var sensor1Values = [10, 20, 30, 40, 50];
  var sensor2Values = [10, 20, 30, 40, 50];
  for (var i = 0; i < 5; i++) {
    var x = new Date(startTime.getTime() + i * 60 * 60 * 1e3);
    graph2dItems.push({
      x,
      y: sensor1Values[i],
      group: "sensor1"
    });
    graph2dItems.push({
      x,
      y: sensor2Values[i],
      group: "sensor2"
    });
  }
  const sample2d = {
    sensor1: [],
    sensor2: []
  };
  const baseTime = new Date();
  for (let i2 = 0; i2 < 10; i2++) {
    const currentTime = new Date(baseTime.getTime() + i2 * 60 * 1e3);
    sample2d.sensor1.push({
      date: currentTime,
      total: (i2 + 1) * 2
    });
    sample2d.sensor2.push({
      date: currentTime,
      total: (i2 + 1) * 3
    });
  }
  const convertSample2dForTimeline = (data2) => {
    const items2 = [];
    data2.sensor1.forEach((item, index) => {
      items2.push({
        x: item.date,
        y: item.total,
        group: "sensor1",
        label: {
          content: `${item.total}`,
          xOffset: 0,
          yOffset: 3
        },
        title: `Sensor 1: ${item.total}`,
        content: `${item.total}`
      });
    });
    data2.sensor2.forEach((item, index) => {
      items2.push({
        x: item.date,
        y: item.total,
        group: "sensor2",
        label: {
          content: `${item.total}`,
          xOffset: 0,
          yOffset: 3
        },
        title: `Sensor 2: ${item.total}`,
        content: `${item.total}`
      });
    });
    console.log("Sensor1 values:", data2.sensor1.map((item) => item.total));
    console.log("Sensor2 values:", data2.sensor2.map((item) => item.total));
    return items2;
  };
  let newData = ParseSampleData();
  const [data, setData] = React.useState({
    value: 'Example |="{{B}}"',
    list: [
      {id: "A", display: "A"},
      {id: "B", display: "B"},
      {id: "C", display: "C"},
      {id: "D", display: "D"}
    ],
    buttonText: "Run",
    items: newData.items,
    groups: newData.groups,
    groupGraph2d: newData.groupGraph2d,
    itemGraph2d: newData.itemGraph2d,
    title: "Vis Timeline Example",
    titleGraph2d: "Graph2d Example"
  });
  const updateData = (newData2) => {
    setData({...data, ...newData2});
    console.log("update data", data);
  };
  const runQuery = (query) => {
    console.log("run query", query);
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Vis timeline with React"), /* @__PURE__ */ React.createElement(VisTimeline, {
    data,
    updateData,
    runQuery
  }));
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(/* @__PURE__ */ React.createElement(App, {
  tab: "home"
}));
