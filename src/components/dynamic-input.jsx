import React, {useState, useEffect} from "https://cdn.skypack.dev/react";
import {TextField, Typography} from "https://cdn.skypack.dev/@material-ui/core";
import {FiPlus, FiTrash} from "https://cdn.skypack.dev/react-icons/fi";

const DynamicInput = ({data, updateData, runQuery}) => {
    const ALPHA_NUMERIC_DASH_REGEX = /^[a-zA-Z0-9\_]+$/;

    const inputList = () => {
        if (!data?.inputList) {
            return [{key: "", value: ""}]
        }
        return data?.inputList
    }

    const setInputList = (inputList) => {
        updateData({inputList: inputList})
    }

    // handle input change
    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList()];
        list[index][name] = value
        setInputList(list);
    };

    useEffect(() => {
        if (data) {
            updateData(data);
        } else {
            updateData([{key: "", value: ""}]);
        }
    }, []);

    // handle click event of the Remove button
    const handleRemoveClick = (index) => {
        const list = [...inputList()];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList(), {key: "", value: ""}]);
    };

    return (<div>
        <Typography style={{marginLeft: 10}} variant="caption" display="block" gutterBottom>
            *key only a-z, 0-9 and _
        </Typography>
        {inputList()?.map((x, i) => {
            return (<div style={styles.box} key={i}>
                <TextField
                    variant="outlined"
                    required={true}
                    name="key"
                    style={{
                        alignSelf: "center", flex: "1 1 auto"
                    }}
                    placeholder="Enter Key"
                    value={x.key}
                    onKeyDown={(event) => {
                        if (!ALPHA_NUMERIC_DASH_REGEX.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                    onChange={(e) => handleInputChange(e, i)}
                />
                <a
                    style={{
                        alignSelf: "center", marginRight: "10px", marginLeft: "10px"
                    }}
                >
                    :
                </a>

                <TextField
                    style={{
                        flex: "1 1 auto"
                    }}
                    multiline
                    name="value"
                    placeholder="Enter Value"
                    variant="outlined"
                    value={x.value}
                    onChange={(e) => handleInputChange(e, i)}
                />
                <div style={styles.btn_box}>
                    {inputList().length !== 1 && (<FiTrash
                        style={{
                            marginRight: "5px",
                        }}
                        onClick={() => handleRemoveClick(i)}
                        fontSize={"medium"}
                    />)}
                    {inputList().length - 1 === i && (<FiPlus onClick={handleAddClick} fontSize={"medium"}/>)}

                </div>
            </div>);
        })}
        <div style={{marginTop: 20, marginLeft: 10}}>{JSON.stringify(inputList)}</div>
    </div>);
};

const styles = {
    box: {
        marginBottom: "10px",
        marginTop: "10px",
        marginLeft: "10px",
        marginRight: "10px",
        display: "flex",
        flexDirection: "row"
    },
    btn_box: {
        width: "45px",
        marginLeft: "10px",
        display: "inline-block",
        alignSelf: "center"
    },
    ml10: {
        marginLeft: "10px"
    },
    mr10: {
        marginRight: "10px"
    }
};

// for development
export default DynamicInput;

// //for toolJet
// import ReactDOM from 'https://cdn.skypack.dev/react-dom';
//
// const ConnectedComponent = Tooljet.connectComponent(DynamicInput);
// ReactDOM.render(<ConnectedComponent/>, document.body);


