import React, { useState, useEffect } from "https://esm.sh/react";
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
// import {createRoot} from 'https://esm.sh/react-dom@18.2.0';
// const ConnectedComponent = Tooljet.connectComponent(Timer);
// createRoot(document.body).render(<ConnectedComponent/>);
