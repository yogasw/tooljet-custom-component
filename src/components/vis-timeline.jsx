import React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import {DataSet, Timeline, Graph2d} from 'https://cdn.jsdelivr.net/npm/vis-timeline@7.7.3/standalone/+esm';
/*for tooljet*/
import {createRoot} from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';

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
            graph2d: null,
        };
    }

    initData() {
        var groups = new DataSet()
        var items = new DataSet();
        const {items: _items, groups: _groups, itemGraph2d: _itemGraph2d, groupGraph2d: _groupGraph2d} = this.props?.data ? this.props?.data : {items: [], groups: [], itemGraph2d: [], groupGraph2d: []};
        
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

        // Graph2d data from props
        var graph2dData = new DataSet();
        var graph2dGroups = new DataSet();
        
        if (_itemGraph2d) {
            _itemGraph2d.forEach((item) => {
                graph2dData.add(item)
            })
        }

        if (_groupGraph2d) {
            _groupGraph2d.forEach((group) => {
                graph2dGroups.add(group)
            })
        }

        return {items, groups, graph2dData, graph2dGroups}
    }

    initTimeline(runQuery) {
        // specify options for Timeline
        var timelineOptions = {
            orientation: 'top',
            // maxHeight: 400,
            start: new Date(),
            end: new Date(1000 * 60 * 60 * 24 + (new Date()).valueOf()),
            editable: false,
            locale: 'en',
            tooltip: {
                followMouse: true,
            },
            animation: false, // Disable animation for instant movement
        }

        // specify options for Graph2d
        var graph2dOptions = {
            height: '200px',
            start: new Date(),
            end: new Date(1000 * 60 * 60 * 24 + (new Date()).valueOf()),
            locale: 'en',
            legend: true,
            interpolation: true,
            zoomable: true,
            moveable: true,
            animation: false // Disable animation for instant movement
        }

        const {items, groups, graph2dData, graph2dGroups} = this.initData();
        
        // Create Timeline
        var timelineContainer = document.getElementById('visualization');
        this.timeline = new Timeline(timelineContainer, items, groups, timelineOptions);
        
        // Create Graph2d
        var graph2dContainer = document.getElementById('graph2d');
        this.graph2d = new Graph2d(graph2dContainer, graph2dData, graph2dGroups, graph2dOptions);

        // Synchronize range changes
        this.timeline.on('rangechange', (properties) => {
            if (this.graph2d && !this._updating) {
                this._updating = true;
                // Graph2d jumps instantly without animation when timeline is moved
                this.graph2d.setWindow(properties.start, properties.end, {animation: false});
                this._updating = false;
            }
        });

        this.graph2d.on('rangechange', (properties) => {
            if (this.timeline && !this._updating) {
                this._updating = true;
                // Timeline jumps instantly without animation when graph2d is moved
                this.timeline.setWindow(properties.start, properties.end, {animation: false});
                this._updating = false;
            }
        });

        this.timeline.on('doubleClick', onDoubleClick);

        function onDoubleClick({item: i}) {
            console.log(runQuery)
            if (!i) return;
            let item = items.get(i);
            if (runQuery) {
                runQuery("subscribe_double_click", {item: item})
            }
        }
    }

    componentDidMount() {
        return this.initTimeline(this.props.runQuery);
    }

    componentDidUpdate() {
        if (this.timeline) this.timeline.destroy();
        if (this.graph2d) this.graph2d.destroy();
        return this.initTimeline(this.props.runQuery);
    }

    render() {
        return <div>
            <div style={{marginBottom: '20px'}}>
                <div id="visualization"></div>
            </div>
            <div>
                <div id="graph2d"></div>
            </div>
        </div>
    }
}

export default VisTimeline;

// /*for tooljet*/
// import {createRoot} from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';
//
// const ConnectedComponent = Tooljet.connectComponent(VisTimeline);
// createRoot(document.body).render(<ConnectedComponent/>);

