import * as React from 'https://esm.sh/react';

import Button from 'https://cdn.esm.sh/@mui/material/Button';

class EsmSh extends React.Component {
    render() {
        return <Button variant="contained">Hello world</Button>;
    }
}

export default EsmSh;
// //for tooljet
// import {createRoot} from 'https://esm.sh/react-dom@18.2.0';
// const ConnectedComponent = Tooljet.connectComponent(DateTimeLocal);
// createRoot(document.body).render(<EsmSh/>);
