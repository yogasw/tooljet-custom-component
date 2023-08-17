import * as React from "https://esm.sh/react";
const classes = {
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
    className: classes.root
  }, /* @__PURE__ */ React.createElement("input", {
    value: (datetime || "").toString(),
    onChange: handleChange,
    style: classes.dateTimeInput,
    type: "datetime-local",
    step: "1",
    name: "input-date-time"
  }));
};
export default DateTimeLocal;
