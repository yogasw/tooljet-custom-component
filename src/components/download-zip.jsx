import * as React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import Button from 'https://cdn.jsdelivr.net/npm/@mui/material/Button/+esm';
import JSZip from 'https://cdn.jsdelivr.net/npm/jszip/+esm';
import MemoryFileSystem from 'https://cdn.jsdelivr.net/npm/memory-fs@0.5.0/+esm'

class DownloadZip extends React.Component {
    createZip = () => {
        var fs = new MemoryFileSystem();
        const zip = new JSZip();
        const exampleTxtContent = 'This is the content of the example.txt file.';
        zip.file('example.txt', exampleTxtContent);
        zip.generateAsync({type: 'nodebuffer'})
            .then(function (content) {
                const blob = new Blob([content], {type: 'application/zip'});
                const link = document.createElement('a');
                link.download = 'backup.zip';
                link.href = window.URL.createObjectURL(blob);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                console.log('client.zip created successfully.');
            })
            .catch(function (error) {
                console.error('Error creating client.zip:', error);
            });
    }

    render() {
        return <div style={{width:500, height:200, backgroundColor:"transparent"}}>
            <Button variant="contained" onClick={this.createZip}>Download Backup</Button>
        </div>;
    }
}

export default DownloadZip;
//for tooljet
// import {createRoot} from 'https://cdn.jsdelivr.net/npm/react-dom/+esm';
// const ConnectedComponent = Tooljet.connectComponent(DownloadZip);
// createRoot(document.body).render(<ConnectedComponent/>);
