import * as React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';

const HeadTailwind = () => (
    <head>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css"/>
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    </head>
);

const DynamicInput = ({data, updateData, runQuery}) => {
    const {useEffect} = React;
    const ALPHA_NUMERIC_DASH_REGEX = /^[a-zA-Z0-9\_]+$/;

    const inputList = () => {
        if (!data?.inputList) {
            return [{key: "test", value: "test"}]
        }
        return data?.inputList
    }
    const adjustHeightTextarea = (textarea) => {
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

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
        <HeadTailwind/>
        <p style={{marginLeft: 10}} className={"italic"}>
            *key only a-z, 0-9 and _
        </p>
        {inputList()?.map((x, i) => {
            return (<div style={stylesDynamicInput.box} key={i}>
                <input
                    type="text"
                    name="key"
                    value={x.key}
                    placeholder="Enter Key"
                    required
                    className="input w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{alignSelf: 'center', flex: '1 1 auto'}}
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

                <textarea
                    name="value"
                    placeholder="Enter Value"
                    value={x.value}
                    onChange={(e) => {
                        handleInputChange(e, i)
                        adjustHeightTextarea(e.target);
                    }}
                    className="textarea w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2
                focus:ring-blue-500"
                    style={{flex: '1 1 auto', minHeight: '2.5rem', height: 'auto'}}
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
//
// //for tooljet
// import {createRoot} from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';
// const ConnectedComponent = Tooljet.connectComponent(DynamicInput);
// createRoot(document.body).render(<ConnectedComponent/>);

function FiPlus(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width={props.size || 24}
            height={props.size || 24}
            {...props}
        >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
    );
}


function FiTrash({ size = 24, onClick, style }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width={size}
            height={size}
            onClick={onClick}
            style={style}
        >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
    );
}
