import React, {useState} from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import {createPortal, createRoot} from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';
import DynamicInput from "./components/dynamic-input";
import DateTimeLocal from "./components/date-time-local";
import MyCustomComponent from "./components/my-custom-component";
import TextareaAutosize from 'https://cdn.jsdelivr.net/npm/@mui/material@5.15.0/TextareaAutosize/+esm';
import ReactAutocompleteInput from "./components/react-autocomplete-input";
import EsmSh from "./components/esm-sh";
import Timer from "./components/timer";
// import RetejsBasic from "./components/retejs-basic";
import PrimitivesDiagrams from "./components/primitives-diagrams";
import ChatWithTailwind from "./components/chat-with-tailwind";
import ConversationHistory from "./components/conversation-history";
import ReactFlowDiagram from "./components/react-flow-diagram";
import {ChatHistory} from "./data/chat-history";
import {GenerateListDataFlow} from "./data/generate-list-flow";
import DownloadZip from "./components/download-zip";
import VisTimeline from "./components/vis-timeline";
import RetejsBasic from "./components/retejs-basic";

export const IFrame = ({
                           children,
                           ...props
                       }) => {
    const [contentRef, setContentRef] = useState(null)
    const mountNode =
        contentRef?.contentWindow?.document?.body
    return (
        <iframe width="100%" height="100%" style={{
            display: "block",       /* iframes are inline by default */
            border: "none",        /* Reset default border */
            height: "50vh",        /* Viewport-relative units */
            width: "99vw"
        }} {...props} ref={setContentRef}>
            {mountNode && createPortal(children, mountNode)}
        </iframe>
    )
}
const position = {x: 0, y: 0};
const edgeType = 'smoothstep';
const reactFLowData = {
    initialNodes: [
        {
            id: '1',
            // type: 'input',
            data: {label: 'node 1'},
            position,
        },
        {
            id: '2',
            data: {label: 'node 2'},
            position,
        },
        {
            id: '2a',
            data: {label: 'node 2a'},
            position,
        },
        {
            id: '3',
            data: {label: 'node 3'},
            position,
        },

    ],
    initialEdges: [
        {id: 'e12', source: '1', target: '2', type: edgeType, animated: true},
        {id: 'e13', source: '1', target: '3', type: edgeType, animated: true},
        {id: 'e22a', source: '2', target: '2a', type: edgeType, animated: false},
        {id: 'e22b', source: '2', target: '2b', type: edgeType, animated: false},
    ],
    nodeWidth: 172,
    nodeHeight: 36
}

const App = () => {

    // create groups
    var numberOfGroups = 3;
    var groups = []
    for (var i = 0; i < numberOfGroups; i++) {
        groups.push({
            id: i,
            content: 'Truck ' + i
        })
    }

    // create items
    var numberOfItems = 3;
    var items = [];
    var itemsPerGroup = Math.round(numberOfItems/numberOfGroups);
    for (var truck = 0; truck < numberOfGroups; truck++) {
        var date = new Date();
        for (var order = 0; order < itemsPerGroup; order++) {
            date.setHours(date.getHours() +  4 * (Math.random() < 0.2));
            var start = new Date(date);
            date.setHours(date.getHours() + 2 + Math.floor(Math.random()*4));
            var end = new Date(date);
            items.push({
                id: order + itemsPerGroup * truck,
                group: truck,
                start: start,
                end: end,
                content: 'Order ' + order
            });
        }
    }

    // const [data, setData] = React.useState();
    const [data, setData] = React.useState(
        {
            "value": "Example |=\"{{B}}\"",
            "list": [
                {"id": "A", "display": "A"},
                {"id": "B", "display": "B"},
                {"id": "C", "display": "C"},
                {"id": "D", "display": "D"}
            ],
            "buttonText": "Run",
            "items":items,
            "groups":groups,
        }
    );
    const updateData = (newData) => {
        setData({...data, ...newData});
        console.log("update data", data)
    }
    const runQuery = (query) => {
        console.log("run query", query)
    }
    return (
        <div>
            <h1>Vis timline with React</h1>
            <VisTimeline data={data} updateData={updateData} runQuery={runQuery}/>
            <h2>Input Data:</h2>

            <TextareaAutosize
                style={{
                    width: "100%",
                }}
                placeholder="Input Data"
                value={JSON.stringify(data, null, 2)}
                onChange={(e) => {
                    //setData()
                    console.log(e.target.value)
                    try {
                        setData(JSON.parse(e.target.value))
                    } catch (e) {
                        setData(e.target?.value)
                    }
                }}
            />


            <h1>Download Zip</h1>
            <DownloadZip data={data}/>
            <h1>React Flow</h1>
            <IFrame width="100%" height="400">
                {/*<ReactFlowDiagram data={reactFLowData}/>*/}
                <ReactFlowDiagram data={GenerateListDataFlow({
                    parameters: {summaryOnly: true}
                })}/>
            </IFrame>
            <h1>Conversation History</h1>
            <IFrame width="100%" height="400">
                <ConversationHistory data={ChatHistory}/>
            </IFrame>
            <h1>Chat Component with Tailwind Css</h1>
            <IFrame width="100%" height="400">
                <ChatWithTailwind/>
            </IFrame>
            {/*<h1>Basic Primitives Diagrams for React</h1>*/}
            {/*<PrimitivesDiagrams/>*/}
            {/*Error after use jsdelivr from esm.sh*/}
            <h1>Retejs Basic</h1>
            {/*<RetejsBasic/>*/}
            <h1>ReactAutocompleteInput</h1>
            <ReactAutocompleteInput
                updateData={(data) => {
                    updateData(data)
                }}
                data={data}
                runQuery={runQuery}
            />
            <h1>Timer</h1>
            <Timer
                updateData={updateData}
                data={data}
                runQuery={runQuery}
            />
            <h1>Example ESM.sh</h1>
            <EsmSh
                updateData={updateData}
                data={data}
                runQuery={runQuery}
            />
            <h2>MyCustomComponent</h2>

            <MyCustomComponent
                updateData={updateData}
                data={data}
                runQuery={runQuery}
            />

            <h2>Dynamic Input</h2>

            <DynamicInput
                updateData={(data) => {
                    updateData(data)
                }}
                data={data}
                runQuery={runQuery}
            />

            <DateTimeLocal
                updateData={(data) => {
                    updateData(data)
                }}
                data={data}
                runQuery={runQuery}
            />
        </div>
    );
}


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home"/>);

// ReactDOM.render(<App/>, document.getElementById("root"));
