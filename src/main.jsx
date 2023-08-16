import React, {useState} from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import DynamicInput from "./components/dynamic-input";
import DateTimeLocal from "./components/date-time-local";
import MyCustomComponent from "./components/my-custom-component";
import {TextareaAutosize} from 'https://cdn.skypack.dev/@material-ui/core';
import ReactAutocompleteInput from "./components/react-autocomplete-input";

const App = () => {
    const [data, setData] = useState({"value":"{group=~\"qismo_elixir_stable|qismo_elixir_stable_longtimeout|qismo_php_stable\"} |=\"{{ROOM_ID}}\"","list":[{"id":"USER_ID","display":"USER_ID"},{"id":"ROOM_ID","display":"ROOM_ID"},{"id":"AGENT_ID","display":"AGENT_ID"},{"id":"APP_CODE","display":"APP_CODE"}]});
    const updateData = (newData) => {
        setData({...data,...newData});
        console.log("update data", data)
    }
    const runQuery = (query) => {
        console.log("run query", query)
    }

    return (
        <div>
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
            <ReactAutocompleteInput
                updateData={(data) => {
                    updateData(data)
                }}
                data={data}
                runQuery={runQuery}
            />

        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));
