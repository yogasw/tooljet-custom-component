import * as React from "https://esm.sh/react@18.2.0";
import JSZip from "https://esm.sh/jszip@3.6.0";
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
    }, /* @__PURE__ */ React.createElement("button", {
      onClick: this.createZip,
      style: {padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer"}
    }, "Download Backup"));
  }
}
export default DownloadZip;
