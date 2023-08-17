import * as React from 'https://esm.sh/react';
import Button from 'https://cdn.esm.sh/@mui/material/Button';
import Container from 'https://cdn.esm.sh/@mui/material/Container';

const MyCustomComponent = ({data, updateData, runQuery}) => (
    <Container>
        <h1>{data?.title}</h1>
        <Button
            color="primary"
            variant="outlined"
            onClick={() => {
                updateData({title: 'Hello World!!'})
            }}
        >
            {data?.buttonText}
        </Button>
    </Container>
);

export default MyCustomComponent;

//for tooljet
// import {createRoot} from 'https://esm.sh/react-dom@18.2.0';
// const ConnectedComponent = Tooljet.connectComponent(MyCustomComponent);
// createRoot(document.body).render(<ConnectedComponent/>);
