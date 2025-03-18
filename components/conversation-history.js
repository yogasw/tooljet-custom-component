import React, {useState, useEffect, useCallback} from "https://cdn.jsdelivr.net/npm/react@18.2.0/+esm";
import moment from "https://cdn.jsdelivr.net/npm/moment@2.30.0/+esm";
import {LuFileJson2} from "https://cdn.jsdelivr.net/npm/react-icons@4/lu/+esm";
const HeadConversationHistory = () => /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("link", {
  href: "https://cdn.jsdelivr.net/npm/tailwindcss@v2.2.19/dist/tailwind.min.css",
  rel: "stylesheet"
}));
const KEY_NAME_ESC = "Escape";
const KEY_EVENT_TYPE = "keyup";
function useEscapeKey(handleClose) {
  const handleEscKey = useCallback((event) => {
    if (event.key === KEY_NAME_ESC) {
      handleClose();
    }
  }, [handleClose]);
  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);
    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
    };
  }, [handleEscKey]);
}
const Left = ({message}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full mt-2 space-x-3 max-w-2xl"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-shrink-0 h-10 w-10 rounded-full"
  }, /* @__PURE__ */ React.createElement(AvatarBot, null)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-300 p-3 rounded-r-lg rounded-bl-lg"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-sm"
  }, message))));
};
const Right = ({message}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full mt-2 space-x-3 max-w-2xl ml-auto justify-end"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-sm"
  }, message))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-shrink-0 h-10 w-10 rounded-full justify-end"
  }, /* @__PURE__ */ React.createElement(AvatarHuman, null)));
};
const BlockCode = (code) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rounded-md bg-gray-900 p-4 text-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-2 flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-400"
  }, "Code:"), /* @__PURE__ */ React.createElement("button", {
    className: "code rounded-md bg-gray-800 px-3 py-1 text-gray-300 hover:bg-gray-700",
    onClick: () => {
      navigator.clipboard.writeText(code).catch((err) => {
        console.log(err.message);
      });
    }
  }, "Copy")), /* @__PURE__ */ React.createElement("div", {
    className: "overflow-x-auto"
  }, /* @__PURE__ */ React.createElement("pre", {
    id: "code",
    className: "text-gray-300"
  }, /* @__PURE__ */ React.createElement("code", null, code ? code : "")))));
};
const Modal = ({isOpen, showModal, children, cssModal}) => {
  useEscapeKey(() => showModal(false));
  return /* @__PURE__ */ React.createElement("div", {
    id: "modelConfirm",
    className: `fixed ${isOpen ? "" : "hidden"} z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 `
  }, /* @__PURE__ */ React.createElement("div", {
    className: `relative top-5 mx-auto shadow-xl rounded-md bg-white ${cssModal != null || cssModal !== "" ? cssModal : "max-w-2xl"}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-end p-2"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => showModal(false),
    type: "button",
    className: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    "fill-rule": "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    "clip-rule": "evenodd"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "p-6"
  }, children)));
};
const ConversationHistory = ({data, updateData, runQuery}) => {
  const [isOpen, showModal] = useState(false);
  const [childrenModal, setChildrenModal] = useState(false);
  const [cssModal, setCssModal] = useState(null);
  let total = data?.interactions?.length;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(HeadConversationHistory, null), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col min-h-screen"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col flex-grow w-full bg-white shadow-xl rounded-lg overflow-hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col flex-grow h-0 p-4 overflow-auto"
  }, data?.interactions?.toReversed()?.map((d, n) => {
    const {inputContexts, v2Response} = d;
    const {queryText, fulfillmentText, intent, outputContexts} = v2Response.queryResult;
    let mStartTime = moment.utc(d.responseTime);
    mStartTime.utcOffset("+07:00");
    let bg = {};
    if (n % 2 === 0) {
      bg = {backgroundColor: "#f3f4f6"};
    }
    const strInputContexts = inputContexts?.map((context) => `${context.name.split("/").pop()} (${context.lifespanCount})`)?.join(", ");
    const strOutputContexts = outputContexts?.map((context) => `${context.name.split("/").pop()} (${context.lifespanCount})`)?.join(", ");
    const fStartTime = mStartTime.format("YYYY-MM-DD HH:mm:ss");
    return /* @__PURE__ */ React.createElement("div", {
      style: bg,
      className: "p-2 rounded"
    }, /* @__PURE__ */ React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flex: 1
      }
    }, /* @__PURE__ */ React.createElement("div", {
      className: "font-bold text-white rounded-full bg-blue-600 flex items-center justify-center font-mono",
      style: {height: 20, width: 20, fontSize: 10}
    }, total - n, "."), /* @__PURE__ */ React.createElement("span", {
      className: "text-xs text-gray-500 leading-none p-1"
    }, intent?.displayName)), /* @__PURE__ */ React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
      }
    }, /* @__PURE__ */ React.createElement("div", {
      style: {
        flexDirection: "row",
        flex: 1
      }
    }, /* @__PURE__ */ React.createElement(Left, {
      message: fulfillmentText
    })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", {
      className: "text-xs text-gray-500 leading-none"
    }, fStartTime), /* @__PURE__ */ React.createElement("div", {
      className: "p-3 flex",
      style: {justifyContent: "flex-end"}
    }, /* @__PURE__ */ React.createElement("button", {
      onClick: () => {
        showModal(true);
        setChildrenModal(BlockCode(JSON.stringify(d, null, 2)));
      },
      type: "button",
      className: "m-1 inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
    }, /* @__PURE__ */ React.createElement(LuFileJson2, {
      className: "h-5 w-5",
      "aria-hidden": "true"
    }))))), /* @__PURE__ */ React.createElement(Right, {
      message: queryText
    }), /* @__PURE__ */ React.createElement("div", {
      style: {display: "flex", flexDirection: "column", lineHeight: "11px"}
    }, /* @__PURE__ */ React.createElement("span", {
      className: "text-gray-500",
      style: {fontSize: "0.7em", display: "inline-block"}
    }, "Input Contexts: ", strInputContexts), /* @__PURE__ */ React.createElement("span", {
      className: "text-gray-500",
      style: {fontSize: "0.7em", display: "inline-block"}
    }, "Output Contexts: ", strOutputContexts), /* @__PURE__ */ React.createElement("span", {
      className: "text-gray-500",
      style: {fontSize: "0.7em", display: "inline-block"}
    }, "Webhook Status: ", v2Response?.webhookStatus?.message)));
  })))), /* @__PURE__ */ React.createElement(Modal, {
    isOpen,
    children: childrenModal,
    showModal,
    cssModal
  }));
};
const AvatarBot = (props) => /* @__PURE__ */ React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 30,
  height: 30,
  style: {
    shapeRendering: "geometricPrecision",
    textRendering: "geometricPrecision",
    imageRendering: "optimizeQuality",
    fillRule: "evenodd",
    clipRule: "evenodd"
  },
  viewBox: "0 0 30 30",
  ...props
}, /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 0.972
  },
  fill: "#020203",
  d: "M29.97 27.51v1.23a3.504 3.504 0 0 0 -0.234 0.381 2.118 2.118 0 0 1 -0.411 0.234c-2.226 0.039 -4.452 0.039 -6.681 0a0.438 0.438 0 0 1 -0.294 -0.381c0.09 -0.363 0.324 -0.519 0.702 -0.468h2.403a10.74 10.74 0 0 0 -4.452 -6.651 35.883 35.883 0 0 0 -2.052 -0.03c-3.339 -0.009 -6.681 0 -10.02 0.03A12.537 12.537 0 0 0 6.06 24.726a0.543 0.543 0 0 1 -0.528 0.03 0.711 0.711 0 0 1 -0.177 -0.381 1.5 1.5 0 0 1 0.351 -0.585 3.525 3.525 0 0 0 -1.758 0.204c-1.563 0.543 -2.568 1.617 -3.018 3.222a5.937 5.937 0 0 0 -0.087 1.29H2.016c0.528 0.018 1.056 0 1.581 -0.06a11.532 11.532 0 0 1 0.909 -2.694 0.516 0.516 0 0 1 0.615 -0.117c0.156 0.12 0.204 0.276 0.147 0.468a10.194 10.194 0 0 0 -0.792 2.403h5.976c-0.009 -0.996 0 -1.992 0.03 -2.988a2.673 2.673 0 0 1 2.022 -2.022l2.403 -0.03c0.9 -0.006 1.8 0.021 2.694 0.087a2.616 2.616 0 0 1 1.845 1.962c0.03 0.996 0.039 1.992 0.03 2.988 0.468 -0.009 0.939 0 1.407 0.03 0.204 0.078 0.303 0.225 0.294 0.438 0.03 0.195 -0.048 0.321 -0.234 0.381 -6.777 0.039 -13.554 0.039 -20.331 0a0.936 0.936 0 0 1 -0.645 -0.615v-1.23C0.456 25.092 1.902 23.58 4.302 22.965a25.113 25.113 0 0 1 2.109 -0.117 12.663 12.663 0 0 1 1.056 -0.996c-1.932 -0.33 -3.093 -1.452 -3.486 -3.369a46.899 46.899 0 0 1 -0.03 -2.343c-0.645 0.009 -1.29 0 -1.935 -0.03a1.341 1.341 0 0 1 -1.026 -0.792 14.316 14.316 0 0 1 -0.06 -2.52 1.23 1.23 0 0 1 0.966 -0.966c0.684 -0.03 1.368 -0.039 2.052 -0.03 -0.009 -0.78 0 -1.563 0.03 -2.343 0.399 -1.944 1.581 -3.066 3.546 -3.369 3.222 -0.009 6.444 -0.039 9.669 -0.087a2.772 2.772 0 0 1 2.052 -1.875 1.44 1.44 0 0 0 0.03 -0.702c-0.969 -0.531 -1.203 -1.293 -0.702 -2.286 0.576 -0.624 1.251 -0.753 2.022 -0.381 0.621 0.48 0.807 1.095 0.558 1.845a1.794 1.794 0 0 1 -0.879 0.819 1.44 1.44 0 0 0 0.03 0.702c1.05 0.279 1.755 0.933 2.109 1.962 1.962 0.303 3.144 1.425 3.546 3.369 0.03 0.78 0.039 1.563 0.03 2.343 0.663 -0.009 1.329 0 1.992 0.03a1.23 1.23 0 0 1 0.966 0.966 14.139 14.139 0 0 1 -0.06 2.52 1.341 1.341 0 0 1 -1.026 0.792c-0.624 0.03 -1.251 0.039 -1.875 0.03 0.009 0.78 0 1.563 -0.03 2.343 -0.393 1.917 -1.554 3.039 -3.486 3.369a7.764 7.764 0 0 1 0.996 0.966c2.07 -0.192 3.816 0.453 5.244 1.935a6.15 6.15 0 0 1 1.26 2.754Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#ece6f1",
  d: "M19.542 1.437c0.615 -0.06 0.879 0.213 0.792 0.819 -0.18 0.3 -0.444 0.408 -0.792 0.321 -0.465 -0.384 -0.465 -0.765 0 -1.143Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#f7f4f7",
  d: "M19.893 5.01a3.198 3.198 0 0 1 0.702 1.056 24.654 24.654 0 0 1 -2.403 -0.06 1.677 1.677 0 0 1 1.698 -0.996Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#ede6f4",
  d: "M19.893 5.01a1.629 1.629 0 0 1 1.464 0.939 1.293 1.293 0 0 1 -0.762 0.117 3.198 3.198 0 0 0 -0.702 -1.056Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#b5b2b7",
  d: "M21.357 5.946c0.054 0.042 0.072 0.099 0.06 0.177 -1.095 0.021 -2.187 0 -3.282 -0.06 0.006 -0.036 0.027 -0.054 0.06 -0.06a24.654 24.654 0 0 0 2.403 0.06 1.293 1.293 0 0 0 0.762 -0.117Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#eee8f6",
  d: "m23.76 7.53 0.087 0.351c0.039 3.243 0.039 6.483 0 9.726a2.496 2.496 0 0 1 -1.905 2.079c-5.508 0.048 -11.016 0.039 -16.524 -0.03a2.523 2.523 0 0 1 -0.558 -1.407 330.202 330.202 0 0 1 0 -8.79c0.357 -1.365 1.227 -2.196 2.607 -2.49 4.98 -0.039 9.96 -0.039 14.94 0a3 3 0 0 1 1.347 0.558Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#e3d4f3",
  d: "M23.76 7.53a2.967 2.967 0 0 1 1.317 1.935 330.202 330.202 0 0 1 0 8.79c-0.243 1.434 -1.074 2.322 -2.49 2.667 -5.118 0.039 -10.233 0.039 -15.351 0a2.964 2.964 0 0 1 -1.815 -1.26 784.047 784.047 0 0 0 16.524 0.03 2.502 2.502 0 0 0 1.905 -2.079c0.039 -3.243 0.039 -6.483 0 -9.726l-0.087 -0.351Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#050505",
  d: "M6.357 9.111c0.675 -0.075 0.96 0.216 0.849 0.879 -0.183 0.342 -0.468 0.468 -0.849 0.381 -0.54 -0.426 -0.54 -0.846 0 -1.26Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#030303",
  d: "M21.183 12.276a0.513 0.513 0 0 1 -0.528 -0.03 6.138 6.138 0 0 0 -4.101 -2.052 31.848 31.848 0 0 0 -3.339 0.03c-2.514 0.345 -4.203 1.713 -5.067 4.101a4.521 4.521 0 0 0 -0.177 2.286 2.16 2.16 0 0 0 1.671 1.524 313.248 313.248 0 0 0 10.488 0.03c1.056 -0.177 1.692 -0.792 1.905 -1.845a5.946 5.946 0 0 0 -0.558 -2.841 0.45 0.45 0 0 1 0.234 -0.381c0.21 -0.093 0.396 -0.054 0.558 0.117 0.642 1.257 0.78 2.565 0.411 3.927a3 3 0 0 1 -2.139 1.845 528.558 528.558 0 0 1 -11.133 0c-1.569 -0.495 -2.349 -1.569 -2.343 -3.222 0.297 -3.168 1.956 -5.238 4.98 -6.21a11.814 11.814 0 0 1 0.939 -0.177 67.845 67.845 0 0 1 3.984 0 6.681 6.681 0 0 1 4.365 2.373 0.519 0.519 0 0 1 -0.147 0.528Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#9cc5fa",
  d: "M13.212 10.224c0.702 -0.009 1.407 0 2.109 0.03a6.067 6.067 0 0 1 3.339 3.252 9.873 9.873 0 0 0 -0.351 0.117 1.569 1.569 0 0 0 -1.377 1.23c-0.084 0.939 0.318 1.572 1.2 1.905a2.148 2.148 0 0 0 0.819 -0.03c0.057 -0.003 0.099 0.027 0.117 0.087a2.58 2.58 0 0 1 -0.939 1.29c-2.832 0.03 -5.664 0.039 -8.496 0.03a2.157 2.157 0 0 1 -1.671 -1.524 4.491 4.491 0 0 1 0.177 -2.286c0.864 -2.391 2.553 -3.756 5.067 -4.101Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#8ca8dc",
  d: "M13.212 10.224a31.848 31.848 0 0 1 3.339 -0.03 6.114 6.114 0 0 1 4.101 2.052 0.513 0.513 0 0 0 0.528 0.03 2.28 2.28 0 0 1 0.528 0.819 0.45 0.45 0 0 0 -0.234 0.381c0.42 0.9 0.603 1.848 0.558 2.841 -0.213 1.053 -0.846 1.668 -1.905 1.845a313.25 313.25 0 0 1 -10.488 -0.03c2.832 0.009 5.664 0 8.496 -0.03a2.601 2.601 0 0 0 0.939 -1.29c-0.021 -0.06 -0.06 -0.09 -0.117 -0.087 0.894 -0.36 1.254 -1.023 1.083 -1.992 -0.306 -0.792 -0.882 -1.164 -1.728 -1.113a9.873 9.873 0 0 1 0.351 -0.117 6.066 6.066 0 0 0 -3.339 -3.252 37.959 37.959 0 0 0 -2.109 -0.03Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#080809",
  d: "M6.417 11.163c0.636 0 0.9 0.315 0.792 0.939 -0.213 0.366 -0.516 0.474 -0.909 0.321 -0.495 -0.471 -0.456 -0.891 0.117 -1.26Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#f0e8f8",
  d: "M2.901 12.687c0.009 0.333 0 0.666 -0.03 0.996 -0.201 0.447 -0.543 0.642 -1.026 0.585v-1.29a0.402 0.402 0 0 1 0.177 -0.264 6.618 6.618 0 0 1 0.879 -0.03Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#e0d2f0",
  d: "M2.901 12.687h1.056v2.577c-0.624 0.009 -1.251 0 -1.875 -0.03a0.408 0.408 0 0 1 -0.204 -0.147 5.616 5.616 0 0 1 -0.087 -1.113c0 -0.342 0.021 -0.675 0.06 -0.996v1.29c0.483 0.057 0.825 -0.138 1.026 -0.585 0.03 -0.33 0.039 -0.663 0.03 -0.996Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#f0e9f8",
  d: "M25.986 12.687h1.173a8.499 8.499 0 0 1 -0.03 0.996c-0.228 0.48 -0.609 0.675 -1.143 0.585v-1.581Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#e2d3f2",
  d: "M27.159 12.687a3.57 3.57 0 0 1 0.645 0.03 0.675 0.675 0 0 1 0.264 0.204 17.949 17.949 0 0 1 0 2.052 0.324 0.324 0 0 1 -0.264 0.234h-1.815V14.268c0.531 0.09 0.912 -0.105 1.143 -0.585 0.03 -0.33 0.039 -0.663 0.03 -0.996Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#030405",
  d: "M10.986 13.623c1.308 -0.126 1.983 0.459 2.022 1.758 -0.234 1.011 -0.867 1.47 -1.905 1.377 -0.978 -0.324 -1.377 -0.996 -1.2 -2.022a2.031 2.031 0 0 1 1.083 -1.113Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#040405",
  d: "M18.312 13.623c0.846 -0.051 1.422 0.321 1.728 1.113 0.171 0.969 -0.192 1.632 -1.083 1.992a2.184 2.184 0 0 1 -0.819 0.03c-0.882 -0.33 -1.284 -0.966 -1.2 -1.905a1.569 1.569 0 0 1 1.377 -1.23Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#f3f0f3",
  d: "M11.22 14.442c0.849 0.039 1.113 0.447 0.792 1.23a0.873 0.873 0 0 1 -0.966 0.147c-0.507 -0.537 -0.45 -0.996 0.177 -1.377Zm7.089 0c0.654 -0.018 0.957 0.294 0.909 0.939 -0.195 0.456 -0.537 0.621 -1.026 0.498 -0.36 -0.225 -0.489 -0.549 -0.381 -0.966a1.152 1.152 0 0 1 0.498 -0.468Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#787180",
  d: "M25.986 12.687v2.52h1.815a15.522 15.522 0 0 1 -1.875 0.06 28.401 28.401 0 0 1 0.06 -2.577Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#f7f4f7",
  d: "M18.954 21.825a11.499 11.499 0 0 1 4.071 6.153c0.03 0.174 0.039 0.351 0.03 0.528 -0.378 -0.051 -0.612 0.108 -0.702 0.468H21.18c0.009 -0.216 -0.087 -0.363 -0.294 -0.438 -0.468 -0.03 -0.936 -0.039 -1.407 -0.03 0.009 -0.996 0 -1.992 -0.03 -2.988a2.61 2.61 0 0 0 -1.845 -1.962 33.003 33.003 0 0 0 -2.694 -0.087l-2.403 0.03a2.673 2.673 0 0 0 -2.022 2.022c-0.03 0.996 -0.039 1.992 -0.03 2.988h-5.976a10.194 10.194 0 0 1 0.792 -2.403c0.057 -0.192 0.009 -0.348 -0.147 -0.468a0.126 0.126 0 0 0 -0.06 -0.087 16.443 16.443 0 0 0 0.468 -0.792 0.543 0.543 0 0 0 0.528 -0.03 12.537 12.537 0 0 1 2.871 -2.871c3.339 -0.03 6.681 -0.039 10.02 -0.03Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#efe8f7",
  d: "M18.954 21.825c0.684 -0.009 1.368 0 2.052 0.03a10.725 10.725 0 0 1 4.452 6.651h-2.403a2.397 2.397 0 0 0 -0.03 -0.528 11.514 11.514 0 0 0 -4.071 -6.153ZM5.535 24.756a16.443 16.443 0 0 1 -0.468 0.792 0.138 0.138 0 0 1 0.06 0.087 0.516 0.516 0 0 0 -0.615 0.117 11.532 11.532 0 0 0 -0.909 2.694 10.728 10.728 0 0 1 -1.581 0.06 14.424 14.424 0 0 1 2.052 -4.452 0.108 0.108 0 0 0 -0.117 -0.06 3.525 3.525 0 0 1 1.758 -0.204 1.542 1.542 0 0 0 -0.351 0.585 0.69 0.69 0 0 0 0.177 0.381Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#f7f4f7",
  d: "M24.873 23.76c1.821 1.044 2.76 2.628 2.814 4.746a7.803 7.803 0 0 1 -1.347 -0.06 12.036 12.036 0 0 0 -2.109 -4.659 3.57 3.57 0 0 1 0.645 -0.03Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#eee7f6",
  d: "M24.873 23.76c1.812 0.201 3.111 1.119 3.897 2.754 0.279 0.636 0.384 1.299 0.321 1.992H27.684c-0.054 -2.118 -0.99 -3.702 -2.814 -4.746Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#f6f3f6",
  d: "M3.954 23.994c0.051 -0.009 0.09 0.012 0.117 0.06a14.456 14.456 0 0 0 -2.052 4.452H0.846a5.937 5.937 0 0 1 0.087 -1.29c0.45 -1.605 1.455 -2.679 3.018 -3.222Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#eee7f6",
  d: "M16.494 24.288a2.457 2.457 0 0 1 0.849 1.347c0.03 0.957 0.039 1.914 0.03 2.871H11.28c-0.009 -0.918 0 -1.836 0.03 -2.754a1.971 1.971 0 0 1 1.377 -1.437c1.269 -0.03 2.538 -0.039 3.81 -0.03Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#e1d2f1",
  d: "M16.494 24.288c1.11 -0.084 1.824 0.405 2.139 1.464 0.03 0.918 0.039 1.836 0.03 2.754h-1.29c0.009 -0.957 0 -1.914 -0.03 -2.871a2.472 2.472 0 0 0 -0.849 -1.347Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#040504",
  d: "M12.687 25.575c0.822 -0.009 1.641 0 2.46 0.03 0.81 0.264 1.134 0.822 0.966 1.671a1.329 1.329 0 0 1 -0.966 0.849 23.439 23.439 0 0 1 -2.343 0c-0.81 -0.264 -1.134 -0.822 -0.966 -1.671a1.689 1.689 0 0 1 0.849 -0.879Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#a1d3ab",
  d: "M15.03 26.454a1.149 1.149 0 0 0 -0.351 0.321l-0.351 0.177c-0.546 0.03 -1.092 0.039 -1.641 0.03 -0.09 -0.24 -0.012 -0.426 0.234 -0.558a12.665 12.665 0 0 1 2.109 0.03Z"
}), /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#76cd8e",
  d: "M15.03 26.454c0.366 0.228 0.387 0.489 0.06 0.792a21.156 21.156 0 0 1 -2.226 0 0.402 0.402 0 0 1 -0.177 -0.264c0.546 0.009 1.095 0 1.641 -0.03l0.351 -0.177a1.11 1.11 0 0 1 0.351 -0.321Z"
}));
const AvatarHuman = (props) => /* @__PURE__ */ React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "30px",
  height: "30px",
  style: {
    shapeRendering: "geometricPrecision",
    textRendering: "geometricPrecision",
    imageRendering: "optimizeQuality",
    fillRule: "evenodd",
    clipRule: "evenodd"
  },
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 30px 30px",
  ...props
}, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 0.997
  },
  fill: "#83cff6",
  d: "M25.928 24.17c-0.041 -0.13 -0.119 -0.237 -0.234 -0.322 -0.846 -0.779 -1.764 -1.453 -2.754 -2.021 -1.08 -2.279 -1.305 -4.642 -0.674 -7.09a22.433 22.433 0 0 0 -0.117 -4.453c-0.635 -2.998 -2.441 -4.863 -5.42 -5.596 -2.867 -0.568 -5.298 0.204 -7.295 2.314 -0.634 0.819 -1.064 1.737 -1.289 2.754 -0.447 2.348 -0.428 4.692 0.059 7.031 0.093 1.744 -0.229 3.404 -0.967 4.98 -1.157 0.638 -2.212 1.419 -3.164 2.344C0.485 19.678 -0.208 14.814 1.992 9.521 3.554 5.987 6.084 3.399 9.58 1.758c4.692 -1.81 9.165 -1.38 13.418 1.289 4.721 3.434 6.781 8.073 6.182 13.916 -0.389 2.731 -1.473 5.133 -3.252 7.207Z"
})), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#2d2d2d",
  d: "M22.939 21.826a15.813 15.813 0 0 0 -2.93 -1.172c-0.042 -0.053 -0.1 -0.072 -0.176 -0.059 -0.281 -0.1 -0.574 -0.178 -0.879 -0.234a8.09 8.09 0 0 1 -0.938 -0.205 2.773 2.773 0 0 1 -0.293 -0.967c1.164 -1.028 2.004 -2.278 2.52 -3.75 0.326 0.167 0.639 0.138 0.938 -0.088 0.718 -0.711 0.825 -1.502 0.322 -2.373 -0.236 -0.223 -0.499 -0.281 -0.791 -0.176 -0.663 -0.019 -1.288 -0.185 -1.875 -0.498a43.34 43.34 0 0 1 -4.16 -2.344c-0.882 -0.522 -1.829 -0.844 -2.842 -0.967 -1.085 0.059 -1.876 0.567 -2.373 1.523 -0.202 0.728 -0.28 1.47 -0.234 2.227 -0.397 -0.051 -0.68 0.106 -0.85 0.469 -0.326 0.861 -0.141 1.594 0.557 2.197 0.259 0.182 0.522 0.191 0.791 0.029 0.53 1.492 1.38 2.761 2.549 3.809l-0.117 0.586c-0.039 0.096 -0.078 0.194 -0.117 0.293a27.474 27.474 0 0 1 -0.996 0.234 14.275 14.275 0 0 0 -0.82 0.234 14.06 14.06 0 0 0 -2.988 1.172c0.737 -1.576 1.06 -3.237 0.967 -4.98 -0.487 -2.339 -0.506 -4.683 -0.059 -7.031 0.225 -1.017 0.655 -1.935 1.289 -2.754 1.997 -2.111 4.428 -2.882 7.295 -2.314 2.979 0.732 4.785 2.598 5.42 5.596a22.433 22.433 0 0 1 0.117 4.453c-0.631 2.448 -0.406 4.811 0.674 7.09Z"
})), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#b98c79",
  d: "M20.713 12.803c0.051 -0.008 0.09 0.012 0.117 0.059 -0.036 0.262 -0.075 0.516 -0.117 0.762 -0.361 0.015 -0.732 -0.034 -1.113 -0.146 -1.453 -0.531 -2.781 -1.273 -3.984 -2.227a23.856 23.856 0 0 0 -3.105 -1.699c-0.799 -0.211 -1.541 -0.094 -2.227 0.352a10.668 10.668 0 0 1 -0.82 0.615c0.497 -0.957 1.288 -1.465 2.373 -1.523 1.013 0.123 1.96 0.445 2.842 0.967a43.34 43.34 0 0 0 4.16 2.344c0.587 0.313 1.212 0.479 1.875 0.498Z"
})), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#e9b097",
  d: "M20.713 13.623a8.868 8.868 0 0 1 -0.469 1.816c-0.515 1.472 -1.355 2.722 -2.52 3.75 -1.805 1.381 -3.621 1.4 -5.449 0.059 -1.169 -1.047 -2.019 -2.317 -2.549 -3.809 -0.269 0.162 -0.532 0.152 -0.791 -0.029 -0.698 -0.604 -0.883 -1.336 -0.557 -2.197 0.17 -0.363 0.453 -0.519 0.85 -0.469 -0.046 -0.757 0.032 -1.499 0.234 -2.227a10.668 10.668 0 0 0 0.82 -0.615c0.685 -0.445 1.427 -0.562 2.227 -0.352a23.856 23.856 0 0 1 3.105 1.699c1.203 0.953 2.531 1.696 3.984 2.227 0.382 0.113 0.753 0.161 1.113 0.146Z"
})), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#a27b6a",
  d: "M20.713 12.803c0.292 -0.106 0.555 -0.047 0.791 0.176 0.503 0.871 0.396 1.662 -0.322 2.373 -0.299 0.226 -0.611 0.255 -0.938 0.088a8.868 8.868 0 0 0 0.469 -1.816c0.042 -0.246 0.081 -0.5 0.117 -0.762 -0.027 -0.047 -0.066 -0.066 -0.117 -0.059Z"
})), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#ba8d79",
  d: "M17.725 19.189a2.773 2.773 0 0 0 0.293 0.967 8.09 8.09 0 0 0 0.938 0.205l-2.402 2.109 -0.117 0.059c-1.239 -0.092 -2.314 -0.571 -3.223 -1.436a10.587 10.587 0 0 1 -1.055 -1.26l0.117 -0.586c1.828 1.342 3.645 1.322 5.449 -0.059Z"
})), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#e7af96",
  d: "M12.158 19.834a10.587 10.587 0 0 0 1.055 1.26c0.909 0.865 1.983 1.343 3.223 1.436a44.711 44.711 0 0 1 -1.436 1.23 339.955 339.955 0 0 1 -3.955 -3.398 27.474 27.474 0 0 0 0.996 -0.234c0.039 -0.099 0.079 -0.197 0.117 -0.293Z"
})), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#7c221b",
  d: "M11.045 20.361a339.955 339.955 0 0 0 3.955 3.398 44.711 44.711 0 0 0 1.436 -1.23l0.117 -0.059a3.55 3.55 0 0 0 1.289 -0.352c0.036 0.007 0.055 0.027 0.059 0.059a59.441 59.441 0 0 1 -2.9 2.52 206.962 206.962 0 0 1 -4.424 -3.896 1.766 1.766 0 0 0 -0.352 -0.205 14.275 14.275 0 0 1 0.82 -0.234Z"
})), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#631c16",
  d: "M18.955 20.361c0.305 0.057 0.598 0.135 0.879 0.234a7.97 7.97 0 0 0 -1.523 1.289 2.399 2.399 0 0 0 -0.41 0.293c-0.004 -0.032 -0.023 -0.051 -0.059 -0.059a3.55 3.55 0 0 1 -1.289 0.352l2.402 -2.109Z"
})), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 0.997
  },
  fill: "#a9392d",
  d: "M10.225 20.596a1.766 1.766 0 0 1 0.352 0.205 206.962 206.962 0 0 0 4.424 3.896 59.441 59.441 0 0 0 2.9 -2.52 2.399 2.399 0 0 1 0.41 -0.293c0.555 -0.301 1.043 -0.691 1.465 -1.172 0.07 -0.054 0.148 -0.074 0.234 -0.059a15.813 15.813 0 0 1 2.93 1.172c0.99 0.569 1.908 1.243 2.754 2.021 0.115 0.085 0.193 0.192 0.234 0.322 -2.868 3.313 -6.511 5.013 -10.928 5.098 -3.76 -0.128 -7.012 -1.456 -9.756 -3.984 -0.064 -0.122 -0.161 -0.2 -0.293 -0.234a3.368 3.368 0 0 1 -0.527 -0.527c-0.034 -0.132 -0.112 -0.229 -0.234 -0.293 -0.059 -0.02 -0.098 -0.059 -0.117 -0.117 0.953 -0.925 2.007 -1.706 3.164 -2.344a14.06 14.06 0 0 1 2.988 -1.172Z"
})), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 1
  },
  fill: "#8a2e24",
  d: "M19.834 20.596c0.076 -0.014 0.134 0.006 0.176 0.059 -0.087 -0.015 -0.165 0.004 -0.234 0.059 -0.421 0.481 -0.91 0.871 -1.465 1.172a7.97 7.97 0 0 1 1.523 -1.289Z"
})), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 0.898
  },
  fill: "#ae6e77",
  d: "M4.189 24.229c0.122 0.064 0.2 0.161 0.234 0.293 -0.122 -0.064 -0.2 -0.161 -0.234 -0.293Z"
})), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
  style: {
    opacity: 0.945
  },
  fill: "#a76c74",
  d: "M4.951 25.049c0.132 0.034 0.229 0.112 0.293 0.234 -0.132 -0.034 -0.229 -0.112 -0.293 -0.234Z"
})));
export default ConversationHistory;
