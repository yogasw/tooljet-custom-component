import * as React from "https://cdn.jsdelivr.net/npm/react@18.2.0/+esm";
import {Mention, MentionsInput} from "https://cdn.jsdelivr.net/npm/react-mentions/+esm";
const {useState, useEffect} = React;
const defaultStyle = {
  control: {
    backgroundColor: "#fff",
    fontSize: 14,
    fontWeight: "normal"
  },
  highlighter: {
    overflow: "hidden"
  },
  input: {
    margin: 0,
    overflow: "auto",
    height: 30
  },
  "&multiLine": {
    control: {
      fontFamily: "monospace",
      border: "1px solid silver",
      borderRadius: 5
    },
    highlighter: {
      padding: 20
    },
    input: {
      padding: 20,
      minHeight: 3,
      outline: 0,
      border: 0
    }
  },
  "&singleLine": {
    control: {
      fontFamily: "monospace",
      border: "1px solid silver",
      borderRadius: 5
    },
    highlighter: {
      padding: 10,
      paddingLeft: 18
    },
    input: {
      padding: 20,
      minHeight: 3,
      outline: 0,
      border: 0
    }
  },
  suggestions: {
    bottom: "0",
    top: "unset",
    marginBottom: "5px",
    list: {
      backgroundColor: "white",
      border: "1px solid rgba(0,0,0,0.15)",
      fontSize: 14,
      float: "left"
    },
    item: {
      padding: "5px 15px",
      borderBottom: "1px solid rgba(0,0,0,0.15)",
      float: "left",
      "&focused": {
        backgroundColor: "#cee4e5"
      }
    }
  }
};
const defaultMentionStyle = {
  backgroundColor: "#cee4e5"
};
const style = {
  container: {
    width: "100%",
    flex: 1
  }
};
const ReactAutocompleteInput = ({data, updateData, runQuery}) => {
  if (!data?.list) {
    data = {
      value: "",
      list: [
        {
          id: "1...",
          display: "1..."
        },
        {
          id: "2",
          display: "2"
        },
        {
          id: "3",
          display: "4"
        }
      ]
    };
  }
  const [value, setValue] = useState("");
  const [mentions, setMentions] = useState([]);
  const handleChange = (event) => {
    const value2 = event.target.value;
    console.log("event: ", value2);
    const regex = /[^{}]+(?=})/g;
    const mentions2 = value2.match(regex);
    console.log("mentions: ", mentions2);
    setValue(event.target.value);
  };
  const onAdd = (id) => {
    console.log("added a new mention", id);
    this.setState({mentions: [...this.state.mentions, id]});
  };
  useEffect(() => {
    if (value) {
      updateData({value});
    }
  }, [value]);
  useEffect(() => {
    if (data?.value !== value) {
      setValue(data?.value);
    }
  }, [data?.value]);
  console.log("state: ", value);
  return /* @__PURE__ */ React.createElement("div", {
    style: style.container
  }, /* @__PURE__ */ React.createElement(MentionsInput, {
    value,
    singleLine: true,
    onChange: handleChange,
    style: defaultStyle
  }, /* @__PURE__ */ React.createElement(Mention, {
    displayTransform: (id, display) => `{{${display}}}`,
    trigger: "{{}}",
    markup: "{{__display__}}",
    data: data?.list,
    style: defaultMentionStyle
  })));
};
export default ReactAutocompleteInput;
