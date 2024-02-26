import * as React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';

import Button from 'https://cdn.jsdelivr.net/npm/@mui/material@5.15.0/Button/+esm';

class EsmSh extends React.Component {
    render() {
        return <Button variant="contained">Hello world</Button>;
    }
}

export default EsmSh;
// //for tooljet
// import {createRoot} from 'https://cdn.jsdelivr.net/npm/react-dom';
// const ConnectedComponent = Tooljet.connectComponent(DateTimeLocal);
// createRoot(document.body).render(<EsmSh/>);
