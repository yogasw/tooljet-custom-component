import React, { useState, useEffect } from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    },[count]);

    return <h1>I have rendered {count} times!</h1>;
}

export default Timer;

// //for tooljet
// import {createRoot} from 'https://cdn.jsdelivr.net/npm/react-dom';
// const ConnectedComponent = Tooljet.connectComponent(Timer);
// createRoot(document.body).render(<ConnectedComponent/>);
