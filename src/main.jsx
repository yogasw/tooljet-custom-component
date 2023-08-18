import React, {useState} from 'https://esm.sh/react';
import ReactDOMClient from 'https://esm.sh/stable/react-dom/client';
import {createPortal} from 'https://esm.sh/stable/react-dom';
import DynamicInput from "./components/dynamic-input";
import DateTimeLocal from "./components/date-time-local";
import MyCustomComponent from "./components/my-custom-component";
import TextareaAutosize from 'https://cdn.esm.sh/@mui/material/TextareaAutosize';
import ReactAutocompleteInput from "./components/react-autocomplete-input";
import EsmSh from "./components/esm-sh";
import Timer from "./components/timer";
import RetejsBasic from "./components/retejs-basic";
import PrimitivesDiagrams from "./components/primitives-diagrams";
import ChatWithTailwind from "./components/chat-with-tailwind";

export const IFrame = ({
                           children,
                           ...props
                       }) => {
    const [contentRef, setContentRef] = useState(null)
    const mountNode =
        contentRef?.contentWindow?.document?.body
    return (
        <iframe {...props} ref={setContentRef}>
            {mountNode && createPortal(children, mountNode)}
        </iframe>
    )
}

const App = () => {

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
            <h1>Chat Component with Tailwind Css</h1>
            <IFrame width="100%" height="400">
                <ChatWithTailwind/>
            </IFrame>
            <h1>Basic Primitives Diagrams for React</h1>
            <PrimitivesDiagrams/>
            <h1>Retejs Basic</h1>
            <RetejsBasic/>
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

const {createRoot} = ReactDOMClient;
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home"/>);

// ReactDOM.render(<App/>, document.getElementById("root"));
