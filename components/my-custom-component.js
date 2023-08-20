import * as React from "https://cdn.jsdelivr.net/npm/react@18.2.0/+esm";
import Button from "https://cdn.jsdelivr.net/npm/@mui/material/Button/+esm";
import Container from "https://cdn.jsdelivr.net/npm/@mui/material/Container/+esm";
const MyCustomComponent = ({data, updateData, runQuery}) => /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("h1", null, data?.title), /* @__PURE__ */ React.createElement(Button, {
  color: "primary",
  variant: "outlined",
  onClick: () => {
    updateData({title: "Hello World!!"});
  }
}, data?.buttonText));
export default MyCustomComponent;
