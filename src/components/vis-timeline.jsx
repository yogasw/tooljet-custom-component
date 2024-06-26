import React, {useCallback, useState, useEffect, useRef} from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import {Timeline, DataSet} from 'https://cdn.jsdelivr.net/npm/vis-timeline@7.7.3/standalone/+esm';
import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';

class GroupTemplate extends React.Component {
    render() {
        var {group} = this.props;
        return <div>
            <label>{group.content}</label>
        </div>
    }
}

class ItemTemplate extends React.Component {
    render() {
        var {item} = this.props;
        return <div>
            <label>{item.content}</label>
        </div>
    }
}

class VisTimeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeline: null,
        };
    }

    initData() {
        var groups = new DataSet()
        var items = new DataSet();
        const {items: _items, groups: _groups} = this.props?.data ? this.props?.data : {items: [], groups: []};
        if (_groups) {
            _groups.forEach((group) => {
                groups.add(group)
            })
        }

        if (_items) {
            _items.forEach((item) => {
                items.add(item)
            })
        }
        return {items, groups}
    }

    initTimeline() {
        // specify options
        var options = {
            orientation: 'top',
            // maxHeight: 400,
            start: new Date(),
            end: new Date(1000 * 60 * 60 * 24 + (new Date()).valueOf()),
            editable: false,
            // template: function (item, element) {
            //     if (!item) {
            //         return
            //     }
            //     ReactDOM.unmountComponentAtNode(element);
            //     return ReactDOM.render(<ItemTemplate item={item}/>, element);
            // },
            // groupTemplate: function (group, element) {
            //     if (!group) {
            //         return
            //     }
            //     ReactDOM.unmountComponentAtNode(element);
            //     return ReactDOM.render(<GroupTemplate group={group}/>, element);
            // }
            locale: 'en',
            tooltip: {
                followMouse: true,
            },
        }
        const {items, groups} = this.initData();
        var container = document.getElementById('visualization');
        this.timeline = new Timeline(container, items, groups, options);
    }
    componentDidMount() {
        return this.initTimeline();
    }

    componentDidUpdate() {
        this.timeline.destroy()
        return this.initTimeline();
    }

    render() {
        return <div>
            <div id="visualization"></div>
        </div>
    }
};

export default VisTimeline;

// /*for tooljet*/
// import {createRoot} from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';
//
// const ConnectedComponent = Tooljet.connectComponent(VisTimeline);
// createRoot(document.body).render(<ConnectedComponent/>);

