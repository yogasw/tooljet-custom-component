import * as React from "https://cdn.jsdelivr.net/npm/react@18.2.0/+esm";
import Button from "https://cdn.jsdelivr.net/npm/@mui/material/Button/+esm";
import JSZip from "https://cdn.jsdelivr.net/npm/jszip/+esm";
class DownloadZip extends React.Component {
  createZip = () => {
    const zip = new JSZip();
    const {data} = this.props;
    data.forEach((value) => {
      const {id, name} = value;
      let title = `${name}-${id}.json`;
      const str = JSON.stringify(value, null, 2);
      zip.file(title, str);
    });
    zip.generateAsync({type: "nodebuffer"}).then(function(content) {
      const blob = new Blob([content], {type: "application/zip"});
      const link = document.createElement("a");
      link.download = "omniform-backup.zip";
      link.href = window.URL.createObjectURL(blob);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log("client.zip created successfully.");
    }).catch(function(error) {
      console.error("Error creating client.zip:", error);
    });
  };
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      style: {width: 500, height: 200, backgroundColor: "transparent"}
    }, /* @__PURE__ */ React.createElement(Button, {
      variant: "contained",
      onClick: this.createZip
    }, "Download Backup"));
  }
}
export default DownloadZip;
