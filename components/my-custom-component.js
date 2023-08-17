import * as React from "https://esm.sh/react";
import Button from "https://cdn.esm.sh/@mui/material/Button";
import Container from "https://cdn.esm.sh/@mui/material/Container";
const MyCustomComponent = ({data, updateData, runQuery}) => /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("h1", null, data?.title), /* @__PURE__ */ React.createElement(Button, {
  color: "primary",
  variant: "outlined",
  onClick: () => {
    updateData({title: "Hello World!!"});
  }
}, data?.buttonText));
export default MyCustomComponent;
