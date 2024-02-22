import React, {useCallback, useState, useEffect, useRef} from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import vis from 'https://cdn.jsdelivr.net/npm/vis@4.21.0/+esm';
import ReactDOM from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';

const Header = () => (
    <head>
        <link href="https://cdn.jsdelivr.net/npm/vis@4.21.0/dist/vis.min.css" rel="stylesheet"/>
    </head>
);

function GroupTemplate({group}) {
    return <div>
        <label>{group.content}</label>
    </div>
}

function ItemTemplate({item}) {
    return (<div>
        <label>{item.content}</label>
    </div>)
}

const VisTimeline = ({data, updateData, runQuery}) => {
        const ref = useRef(0);
        var timeline;
        const {items: _items, groups: _groups} = data ? data : {items: [], groups: []};

        useEffect(() => {
            // specify options
            var options = {
                orientation: 'top',
                maxHeight: 400,
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
            };

            var groups = new vis.DataSet()
            var items = new vis.DataSet();

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
            var container = document.getElementById('mytimeline');
            timeline = new vis.Timeline(container, items, groups, options);
        }, [data])

        return (
            <div>
                <Header/>
                <div id="mytimeline" ref={ref}></div>
            </div>
        );
    }
;

export default VisTimeline;
//
// // for tooljet
// import {createRoot} from 'https://cdn.jsdelivr.net/npm/react-dom/+esm';
//
// const ConnectedComponent = Tooljet.connectComponent(VisTimeline);
// createRoot(document.body).render(<ConnectedComponent/>);

