import React, {useCallback, useState, useEffect, useRef} from "https://cdn.jsdelivr.net/npm/react@18.2.0/+esm";
import vis from "https://cdn.jsdelivr.net/npm/vis@4.21.0/+esm";
import ReactDOM from "https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm";
const Header = () => /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("link", {
  href: "https://cdn.jsdelivr.net/npm/vis@4.21.0/dist/vis.min.css",
  rel: "stylesheet"
}));
function GroupTemplate({group}) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, group.content));
}
function ItemTemplate({item}) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, item.content));
}
const VisTimeline = ({data, updateData, runQuery}) => {
  const ref = useRef(0);
  var timeline;
  const {items: _items, groups: _groups} = data ? data : {items: [], groups: []};
  useEffect(() => {
    var options = {
      orientation: "top",
      maxHeight: 400,
      start: new Date(),
      end: new Date(1e3 * 60 * 60 * 24 + new Date().valueOf()),
      editable: false
    };
    var groups = new vis.DataSet();
    var items = new vis.DataSet();
    if (_groups) {
      _groups.forEach((group) => {
        groups.add(group);
      });
    }
    if (_items) {
      _items.forEach((item) => {
        items.add(item);
      });
    }
    var container = document.getElementById("mytimeline");
    timeline = new vis.Timeline(container, items, groups, options);
  }, [data]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("div", {
    id: "mytimeline",
    ref
  }));
};
export default VisTimeline;
