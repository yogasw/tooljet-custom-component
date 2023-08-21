import React, {useCallback, useState, useEffect} from "https://cdn.jsdelivr.net/npm/react@18.2.0/+esm";
import ReactFlow, {
  addEdge,
  ConnectionLineType,
  useNodesState,
  useEdgesState
} from "https://cdn.jsdelivr.net/npm/reactflow/+esm";
import dagre from "https://cdn.jsdelivr.net/npm/@dagrejs/dagre/+esm";
import {createPortal} from "https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm";
const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));
const KEY_NAME_ESC = "Escape";
const KEY_EVENT_TYPE = "keyup";
const HeadReactFlow = () => /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("link", {
  href: "https://cdn.jsdelivr.net/npm/reactflow/dist/style.css",
  rel: "stylesheet"
}), /* @__PURE__ */ React.createElement("link", {
  href: "https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css",
  rel: "stylesheet"
}));
const getLayoutedElements = (nodes, edges, nodeWidth, nodeHeight, direction = "LR") => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({rankdir: direction});
  nodes?.forEach((node) => {
    dagreGraph.setNode(node.id, {width: nodeWidth, height: nodeHeight});
  });
  edges?.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });
  dagre.layout(dagreGraph);
  nodes?.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? "left" : "top";
    node.sourcePosition = isHorizontal ? "right" : "bottom";
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2
    };
    return node;
  });
  return {nodes, edges};
};
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
const DetailIntent = (data) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "bg-white shadow overflow-hidden sm:rounded-lg"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-4 py-5 sm:px-6"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-lg leading-6 font-medium text-gray-900"
  }, "Intent Detail"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-1 max-w-2xl text-sm text-gray-500"
  }, "Personal details and application.")), /* @__PURE__ */ React.createElement("div", {
    className: "border-t border-gray-200 px-4 py-5 sm:px-6"
  }, /* @__PURE__ */ React.createElement("dl", {
    className: "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:col-span-1"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Full name"), /* @__PURE__ */ React.createElement("dd", {
    className: "mt-1 text-sm text-gray-900"
  }, "Margot Foster")), /* @__PURE__ */ React.createElement("div", {
    className: "sm:col-span-1"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Application for"), /* @__PURE__ */ React.createElement("dd", {
    className: "mt-1 text-sm text-gray-900"
  }, "Backend Developer")), /* @__PURE__ */ React.createElement("div", {
    className: "sm:col-span-1"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Email address"), /* @__PURE__ */ React.createElement("dd", {
    className: "mt-1 text-sm text-gray-900"
  }, "margotfoster@example.com")), /* @__PURE__ */ React.createElement("div", {
    className: "sm:col-span-1"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Salary expectation"), /* @__PURE__ */ React.createElement("dd", {
    className: "mt-1 text-sm text-gray-900"
  }, "$120,000")), /* @__PURE__ */ React.createElement("div", {
    className: "sm:col-span-2"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "About"), /* @__PURE__ */ React.createElement("dd", {
    className: "mt-1 text-sm text-gray-900"
  }, "Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.")), /* @__PURE__ */ React.createElement("div", {
    className: "sm:col-span-2"
  }, /* @__PURE__ */ React.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Attachments"), /* @__PURE__ */ React.createElement("dd", {
    className: "mt-1 text-sm text-gray-900"
  }, /* @__PURE__ */ React.createElement("ul", {
    role: "list",
    className: "border border-gray-200 rounded-md divide-y divide-gray-200"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "pl-3 pr-4 py-3 flex items-center justify-between text-sm"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-0 flex-1 flex items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "ml-2 flex-1 w-0 truncate"
  }, "resume_back_end_developer.pdf")), /* @__PURE__ */ React.createElement("div", {
    className: "ml-4 flex-shrink-0"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, "Download"))), /* @__PURE__ */ React.createElement("li", {
    className: "pl-3 pr-4 py-3 flex items-center justify-between text-sm"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-0 flex-1 flex items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "ml-2 flex-1 w-0 truncate"
  }, "coverletter_back_end_developer.pdf")), /* @__PURE__ */ React.createElement("div", {
    className: "ml-4 flex-shrink-0"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, "Download")))))))));
};
const ReactFlowDiagram = ({data}) => {
  const {initialNodes, initialEdges, nodeWidth, nodeHeight} = data;
  if (!initialNodes || !initialEdges || !nodeWidth || !nodeHeight) {
    return null;
  }
  const [isOpen, showModal] = useState(false);
  const [childrenModal, setChildrenModal] = useState(false);
  const [cssModal, setCssModal] = useState("max-w-lg");
  const {nodes: layoutedNodes, edges: layoutedEdges} = getLayoutedElements(initialNodes, initialEdges, nodeWidth, nodeHeight);
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge({...params, type: ConnectionLineType.SmoothStep, animated: true}, eds)), []);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(HeadReactFlow, null), /* @__PURE__ */ React.createElement(Modal, {
    isOpen,
    children: childrenModal,
    showModal,
    cssModal
  }), /* @__PURE__ */ React.createElement(ReactFlow, {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    connectionLineType: ConnectionLineType.SmoothStep,
    fitView: true,
    onNodeClick: (event, element) => {
      setChildrenModal(DetailIntent());
      showModal(true);
    }
  }));
};
const IFrame = ({
  children,
  ...props
}) => {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef?.contentWindow?.document?.body;
  return /* @__PURE__ */ React.createElement("iframe", {
    ...props,
    ref: setContentRef
  }, mountNode && createPortal(children, mountNode));
};
export default ReactFlowDiagram;
