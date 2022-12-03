import React, {useState} from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import DynamicInput from "./components/dynamic-input";
import MyCustomComponent from "./components/my-custom-component";
import {TextareaAutosize} from 'https://cdn.skypack.dev/@material-ui/core';

const App = () => {
    const [data, setData] = useState({title: 'Hi! There', buttonText: 'Update Title'});
    const updateData = (newData) => {
        setData({...data,...newData});
        console.log("update data", data)
    }
    const runQuery = (query) => {
        console.log("run query", query)
    }

    return (
        <div>
            <h2>Input Data : </h2>
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


        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));
