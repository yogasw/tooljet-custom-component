import * as React from "https://cdn.jsdelivr.net/npm/react@18.2.0/+esm";
import {FiPlus, FiTrash} from "https://cdn.jsdelivr.net/npm/react-icons@5.4.0/fi/+esm";
const HeadTailwind = () => /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("link", {
  href: "https://cdn.jsdelivr.net/npm/daisyui@5",
  rel: "stylesheet",
  type: "text/css"
}), /* @__PURE__ */ React.createElement("script", {
  src: "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
}));
const DynamicInput = ({data, updateData, runQuery}) => {
  const {useEffect} = React;
  const ALPHA_NUMERIC_DASH_REGEX = /^[a-zA-Z0-9\_]+$/;
  const inputList = () => {
    if (!data?.inputList) {
      return [{key: "test", value: "test"}];
    }
    return data?.inputList;
  };
  const adjustHeightTextarea = (textarea) => {
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };
  const setInputList = (inputList2) => {
    updateData({inputList: inputList2});
  };
  const handleInputChange = (e, index) => {
    const {name, value} = e.target;
    const list = [...inputList()];
    list[index][name] = value;
    setInputList(list);
  };
  useEffect(() => {
    if (data) {
      updateData(data);
    } else {
      updateData([{key: "", value: ""}]);
    }
  }, []);
  const handleRemoveClick = (index) => {
    const list = [...inputList()];
    list.splice(index, 1);
    setInputList(list);
  };
  const handleAddClick = () => {
    setInputList([...inputList(), {key: "", value: ""}]);
  };
  useEffect(() => {
    updateData({reload: false});
  }, [data?.reload === true]);
  if (data?.reload === true)
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(HeadTailwind, null), /* @__PURE__ */ React.createElement("p", {
    style: {marginLeft: 10},
    className: "italic"
  }, "*key only a-z, 0-9 and _"), inputList()?.map((x, i) => {
    return /* @__PURE__ */ React.createElement("div", {
      style: stylesDynamicInput.box,
      key: i
    }, /* @__PURE__ */ React.createElement("input", {
      type: "text",
      name: "key",
      value: x.key,
      placeholder: "Enter Key",
      required: true,
      className: "input w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
      style: {alignSelf: "center", flex: "1 1 auto"},
      onKeyDown: (event) => {
        if (!ALPHA_NUMERIC_DASH_REGEX.test(event.key)) {
          event.preventDefault();
        }
      },
      onChange: (e) => handleInputChange(e, i)
    }), /* @__PURE__ */ React.createElement("a", {
      style: {
        alignSelf: "center",
        marginRight: "10px",
        marginLeft: "10px"
      }
    }, ":"), /* @__PURE__ */ React.createElement("textarea", {
      name: "value",
      placeholder: "Enter Value",
      value: x.value,
      onChange: (e) => {
        handleInputChange(e, i);
        adjustHeightTextarea(e.target);
      },
      className: "textarea w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2\n                focus:ring-blue-500",
      style: {flex: "1 1 auto", minHeight: "2.5rem", height: "auto"}
    }), /* @__PURE__ */ React.createElement("div", {
      style: stylesDynamicInput.btn_box
    }, inputList().length !== 1 && /* @__PURE__ */ React.createElement(FiTrash, {
      style: {
        marginRight: "5px"
      },
      onClick: () => handleRemoveClick(i),
      fontSize: "medium"
    }), inputList().length - 1 === i && /* @__PURE__ */ React.createElement(FiPlus, {
      onClick: handleAddClick,
      fontSize: "medium"
    })));
  }), /* @__PURE__ */ React.createElement("div", {
    style: {marginTop: 20, marginLeft: 10}
  }, JSON.stringify(inputList)));
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
