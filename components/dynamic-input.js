import * as React from "https://esm.sh/react";
import TextField from "https://cdn.esm.sh/@mui/material/TextField";
import Typography from "https://cdn.esm.sh/@mui/material/Typography";
import {FiPlus, FiTrash} from "https://cdn.esm.sh/react-icons/fi";
const DynamicInput = ({data, updateData, runQuery}) => {
  const {useEffect} = React;
  const ALPHA_NUMERIC_DASH_REGEX = /^[a-zA-Z0-9\_]+$/;
  const inputList = () => {
    if (!data?.inputList) {
      return [{key: "", value: ""}];
    }
    return data?.inputList;
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
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Typography, {
    style: {marginLeft: 10},
    variant: "caption",
    display: "block",
    gutterBottom: true
  }, "*key only a-z, 0-9 and _"), inputList()?.map((x, i) => {
    return /* @__PURE__ */ React.createElement("div", {
      style: styles.box,
      key: i
    }, /* @__PURE__ */ React.createElement(TextField, {
      variant: "outlined",
      required: true,
      name: "key",
      style: {
        alignSelf: "center",
        flex: "1 1 auto"
      },
      placeholder: "Enter Key",
      value: x.key,
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
    }, ":"), /* @__PURE__ */ React.createElement(TextField, {
      style: {
        flex: "1 1 auto"
      },
      multiline: true,
      name: "value",
      placeholder: "Enter Value",
      variant: "outlined",
      value: x.value,
      onChange: (e) => handleInputChange(e, i)
    }), /* @__PURE__ */ React.createElement("div", {
      style: styles.btn_box
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
export default DynamicInput;
