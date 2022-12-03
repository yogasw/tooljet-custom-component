import React from 'https://cdn.skypack.dev/react';
import {Button, Container} from 'https://cdn.skypack.dev/@material-ui/core';

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

//for tooljet
export default MyCustomComponent;

// import ReactDOM from 'https://cdn.skypack.dev/react-dom';
// const ConnectedComponent = Tooljet.connectComponent(MyCustomComponent);
// ReactDOM.render(<ConnectedComponent />, document.body);
