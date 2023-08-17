import React, {useState, useEffect} from "https://esm.sh/react";
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
