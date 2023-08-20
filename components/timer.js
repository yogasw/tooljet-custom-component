import React, {useState, useEffect} from "https://cdn.jsdelivr.net/npm/react@18.2.0/+esm";
const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count2) => count2 + 1);
    }, 1e3);
  }, [count]);
  return /* @__PURE__ */ React.createElement("h1", null, "I have rendered ", count, " times!");
};
export default Timer;
