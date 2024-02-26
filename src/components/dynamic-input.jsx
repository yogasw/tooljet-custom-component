import * as React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import TextField from 'https://cdn.jsdelivr.net/npm/@mui/material@5.15.0/TextField/+esm';
import Typography from 'https://cdn.jsdelivr.net/npm/@mui/material@5.15.0/Typography/+esm';
import {FiPlus, FiTrash} from "https://cdn.jsdelivr.net/npm/react-icons/fi/+esm";

const DynamicInput = ({data, updateData, runQuery}) => {
    const {useEffect} = React;
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
    useEffect(() => {
        updateData({reload: false});
    }, [data?.reload === true])

    if (data?.reload === true) return <></>

    return (<div>
        <Typography style={{marginLeft: 10}} variant="caption" display="block" gutterBottom>
            *key only a-z, 0-9 and _
        </Typography>
        {inputList()?.map((x, i) => {
            return (<div style={stylesDynamicInput.box} key={i}>
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
                <div style={stylesDynamicInput.btn_box}>
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

const stylesDynamicInput = {
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
export default DynamicInput;

/*//for tooljet
import {createRoot} from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';
const ConnectedComponent = Tooljet.connectComponent(DynamicInput);
createRoot(document.body).render(<ConnectedComponent/>);*/
