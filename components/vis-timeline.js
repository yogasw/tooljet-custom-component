import React from "https://cdn.jsdelivr.net/npm/react@18.2.0/+esm";
import {DataSet, Timeline, Graph2d} from "https://cdn.jsdelivr.net/npm/vis-timeline@7.7.3/standalone/+esm";
import {createRoot} from "https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm";
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
      timeline: null,
      graph2d: null
    };
  }
  initData() {
    var groups = new DataSet();
    var items = new DataSet();
    const {items: _items, groups: _groups, itemGraph2d: _itemGraph2d, groupGraph2d: _groupGraph2d} = this.props?.data ? this.props?.data : {items: [], groups: []};
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
    var graph2dData = new DataSet();
    var graph2dGroups = new DataSet();
    var hasGraph2dData = false;
    if (_itemGraph2d && _itemGraph2d.length > 0) {
      _itemGraph2d.forEach((item) => {
        graph2dData.add(item);
      });
      hasGraph2dData = true;
    }
    if (_groupGraph2d && _groupGraph2d.length > 0) {
      _groupGraph2d.forEach((group) => {
        graph2dGroups.add(group);
      });
    }
    return {items, groups, graph2dData, graph2dGroups, hasGraph2dData};
  }
  initTimeline(runQuery) {
    var options = {
      orientation: "top",
      start: new Date(),
      end: new Date(1e3 * 60 * 60 * 24 + new Date().valueOf()),
      editable: false,
      locale: "en",
      tooltip: {
        followMouse: true
      },
      animation: false
    };
    var graph2dOptions = {
      height: "200px",
      start: new Date(),
      end: new Date(1e3 * 60 * 60 * 24 + new Date().valueOf()),
      locale: "en",
      legend: true,
      interpolation: true,
      zoomable: true,
      moveable: true,
      animation: false
    };
    const {items, groups, graph2dData, graph2dGroups, hasGraph2dData} = this.initData();
    var container = document.getElementById("visualization");
    this.timeline = new Timeline(container, items, groups, options);
    if (hasGraph2dData) {
      var graph2dContainer = document.getElementById("graph2d");
      if (graph2dContainer) {
        this.graph2d = new Graph2d(graph2dContainer, graph2dData, graph2dGroups, graph2dOptions);
        this.timeline.on("rangechange", (properties) => {
          if (this.graph2d && !this._updating) {
            this._updating = true;
            this.graph2d.setWindow(properties.start, properties.end, {animation: false});
            this._updating = false;
          }
        });
        this.graph2d.on("rangechange", (properties) => {
          if (this.timeline && !this._updating) {
            this._updating = true;
            this.timeline.setWindow(properties.start, properties.end, {animation: false});
            this._updating = false;
          }
        });
      }
    }
    this.timeline.on("doubleClick", onDoubleClick);
    function onDoubleClick({item: i}) {
      console.log(runQuery);
      if (!i)
        return;
      let item = items.get(i);
      if (runQuery) {
        runQuery("subscribe_double_click", {item});
      }
    }
  }
  componentDidMount() {
    return this.initTimeline(this.props.runQuery);
  }
  componentDidUpdate() {
    if (this.timeline)
      this.timeline.destroy();
    if (this.graph2d)
      this.graph2d.destroy();
    this.graph2d = null;
    return this.initTimeline(this.props.runQuery);
  }
  render() {
    const {itemGraph2d, groupGraph2d, title, titleGraph2d} = this.props?.data || {};
    console.log("VisTimeline render", title, titleGraph2d, this.props);
    const hasGraph2dData = itemGraph2d && itemGraph2d.length > 0 || groupGraph2d && groupGraph2d.length > 0;
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      style: {marginBottom: "20px"}
    }, title && /* @__PURE__ */ React.createElement("h2", null, title), /* @__PURE__ */ React.createElement("div", {
      id: "visualization"
    })), /* @__PURE__ */ React.createElement("div", {
      style: {display: hasGraph2dData ? "block" : "none"}
    }, titleGraph2d && /* @__PURE__ */ React.createElement("h2", null, titleGraph2d), /* @__PURE__ */ React.createElement("div", {
      id: "graph2d"
    })));
  }
}
export default VisTimeline;
