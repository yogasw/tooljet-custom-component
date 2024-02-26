import * as React from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import Button from 'https://cdn.jsdelivr.net/npm/@mui/material@5.15.0/Button/+esm';
import Container from 'https://cdn.jsdelivr.net/npm/@mui/material@5.15.0/Container/+esm';

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
// import {createRoot} from 'https://cdn.jsdelivr.net/npm/react-dom';
// const ConnectedComponent = Tooljet.connectComponent(MyCustomComponent);
// createRoot(document.body).render(<ConnectedComponent/>);
