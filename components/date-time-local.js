import * as React from "https://cdn.jsdelivr.net/npm/react@18.2.0/+esm";
const styleDateTime = {
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  dateTimeInput: {
    fontSize: "15px",
    padding: "10px",
    borderWidth: 0
  }
};
const {useState, useEffect} = React;
const DateTimeLocal = ({data, updateData, runQuery}) => {
  const [datetime, setDatetime] = useState();
  useEffect(() => {
    if (datetime) {
      updateData({value: datetime});
      runQuery("convert_custom_date_time");
    }
  }, datetime);
  function handleChange(ev) {
    if (!ev.target["validity"].valid)
      return;
    const dt = ev.target["value"];
    setDatetime(dt);
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: styleDateTime.root
  }, /* @__PURE__ */ React.createElement("input", {
    value: (datetime || "").toString(),
    onChange: handleChange,
    style: styleDateTime.dateTimeInput,
    type: "datetime-local",
    step: "1",
    name: "input-date-time"
  }));
};
export default DateTimeLocal;
