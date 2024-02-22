import React, {useCallback, useState, useEffect, useRef} from "https://cdn.jsdelivr.net/npm/react@18.2.0/+esm";
import {Timeline, DataSet} from "https://cdn.jsdelivr.net/npm/vis-timeline/standalone/+esm";
import ReactDOM from "https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm";
class GroupTemplate extends React.Component {
  render() {
    var {group} = this.props;
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, group.content));
  }
}
class ItemTemplate extends React.Component {
  render() {
    var {item} = this.props;
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, item.content));
  }
}
class VisTimeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: null
    };
  }
  initData() {
    var groups = new DataSet();
    var items = new DataSet();
    const {items: _items, groups: _groups} = this.props?.data ? this.props?.data : {items: [], groups: []};
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
    return {items, groups};
  }
  initTimeline() {
    var options = {
      orientation: "top",
      start: new Date(),
      end: new Date(1e3 * 60 * 60 * 24 + new Date().valueOf()),
      editable: false
    };
    const {items, groups} = this.initData();
    var container = document.getElementById("visualization");
    this.timeline = new Timeline(container, items, groups, options);
  }
  componentDidMount() {
    return this.initTimeline();
  }
  componentDidUpdate() {
    this.timeline.destroy();
    return this.initTimeline();
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      id: "visualization"
    }));
  }
}
;
import {createRoot} from "https://cdn.jsdelivr.net/npm/react-dom/+esm";
const ConnectedComponent = Tooljet.connectComponent(VisTimeline);
createRoot(document.body).render(/* @__PURE__ */ React.createElement(ConnectedComponent, null));
