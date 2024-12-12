import React from "https://cdn.jsdelivr.net/npm/react@18.2.0/+esm";
import {DataSet, Timeline} from "https://cdn.jsdelivr.net/npm/vis-timeline@7.7.3/standalone/+esm";
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
  initTimeline(runQuery) {
    var options = {
      orientation: "top",
      start: new Date(),
      end: new Date(1e3 * 60 * 60 * 24 + new Date().valueOf()),
      editable: false,
      locale: "en",
      tooltip: {
        followMouse: true
      }
    };
    const {items, groups} = this.initData();
    var container = document.getElementById("visualization");
    this.timeline = new Timeline(container, items, groups, options);
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
    this.timeline.destroy();
    return this.initTimeline(this.props.runQuery);
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      id: "visualization"
    }));
  }
}
export default VisTimeline;
