import React, {useCallback, useState, useEffect} from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import ReactFlow, {
    addEdge,
    ConnectionLineType,
    useNodesState,
    useEdgesState,
    Controls, Background
} from "https://cdn.jsdelivr.net/npm/reactflow@11.11.2/+esm";
import dagre from 'https://cdn.jsdelivr.net/npm/@dagrejs/dagre@1.1.2/+esm';
import {createPortal} from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));
const KEY_NAME_ESC = 'Escape';
const KEY_EVENT_TYPE = 'keyup';

const HeadReactFlow = () => (
    <head>
        <link href="https://cdn.jsdelivr.net/npm/reactflow/dist/style.css" rel="stylesheet"/>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css" rel="stylesheet"/>
    </head>
);

const getLayoutedElements = (nodes, edges, nodeWidth, nodeHeight, direction = 'LR') => {
    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({rankdir: direction});
    let firstNoteActive = null;
    nodes?.forEach((node) => {
        dagreGraph.setNode(node.id, {width: nodeWidth, height: nodeHeight});
    });

    edges?.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });

    dagre.layout(dagreGraph);

    nodes?.forEach((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        node.targetPosition = isHorizontal ? 'left' : 'top';
        node.sourcePosition = isHorizontal ? 'right' : 'bottom';
        // We are shifting the dagre node position (anchor=center center) to the top left
        // so it matches the React Flow node anchor point (top left).
        node.position = {
            x: nodeWithPosition.x - nodeWidth / 2,
            y: nodeWithPosition.y - nodeHeight / 2,
        };

        if (node?.first) {
            firstNoteActive = node;
        }
        return node;
    });

    return {nodes, edges, firstNoteActive};
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
    return (
        <div id="modelConfirm"
             className={`fixed ${isOpen ? '' : "hidden"} z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 `}>
            <div
                className={"relative top-5 mx-auto shadow-xl rounded-md bg-white " + `${cssModal != null || cssModal !== "" ? cssModal : 'max-w-2xl'}`}>
                <div className="flex justify-end p-2">
                    <button onClick={() => showModal(false)} type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>

                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
}

const DetailIntent = (data) => {
    const {label, data: intent} = data;
    const {
        action,
        displayName,
        inputContextNames,
        messages,
        name,
        outputContexts,
        parentFollowupIntentName,
        rootFollowupIntentName
    } = intent;
    console.log("data intent: ", intent)
    let arrName = name.split("/")
    let projectName = arrName[1];
    let id = arrName[arrName.length - 1];
    let url = `https://dialogflow.cloud.google.com/#/agent/${projectName}/editIntent/${id}/`
    let listInputContext = ""
    let listOutputContext = ""
    if (inputContextNames) {
        inputContextNames?.forEach((name) => {
            let nameStr = name.split("/").pop()
            listInputContext += `${nameStr} `
        })
    }

    if (outputContexts) {
        outputContexts?.forEach(({name,lifespanCount}) => {
            let nameStr = name.split("/").pop()
            listOutputContext += `${nameStr}(${lifespanCount}) `
        })
    }
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{displayName}</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    <a target="_blank" rel="noopener noreferrer" href={url}>Link Dialogflow</a>
                </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Input Context</dt>
                        <dd className="mt-1 text-sm text-gray-900">{listInputContext}</dd>
                    </div>
                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Output Context</dt>
                        <dd className="mt-1 text-sm text-gray-900">{listOutputContext}</dd>
                    </div>
                    <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">Action</dt>
                        <dd className="mt-1 text-sm text-gray-900">{action}</dd>
                    </div>
                    <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500"></dt>
                        <dd className="mt-1 text-sm text-gray-900 gray">{name}</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

const ReactFlowDiagram = ({data}) => {
    const {initialNodes, initialEdges, nodeWidth, nodeHeight} = data;
    if (!initialNodes || !initialEdges || !nodeWidth || !nodeHeight) {
        return null;
    }
    const [isOpen, showModal] = useState(false)
    const [childrenModal, setChildrenModal] = useState(false)
    const [cssModal, setCssModal] = useState("max-w-lg")

    const {nodes: layoutedNodes, edges: layoutedEdges, firstNoteActive} = getLayoutedElements(
        initialNodes,
        initialEdges,
        nodeWidth,
        nodeHeight
    );

    const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

    const onConnect = useCallback(
        (params) =>
            setEdges((eds) =>
                addEdge({...params, type: ConnectionLineType.SmoothStep}, eds)
            ),
        []
    );
    return (
        <div>
            <HeadReactFlow/>
            <Modal isOpen={isOpen} children={childrenModal} showModal={showModal} cssModal={cssModal}/>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                connectionLineType={ConnectionLineType.SmoothStep}
                // fitView
                onNodeClick={(event, element) => {
                    const {data} = element;
                    setChildrenModal(DetailIntent(data))
                    showModal(true)
                }}
                zoomOnScroll={false}
                panOnScroll={true}
                snapToGrid={true}
                attributionPosition="top-right"
                minZoom={0.0}>
                <Controls/>
                <Background color="#aaa" gap={16}/>
            </ReactFlow>
        </div>
    );
};

const IFrame = ({
                    children,
                    ...props
                }) => {
    const [contentRef, setContentRef] = useState(null)
    const mountNode =
        contentRef?.contentWindow?.document?.body
    return (
        <iframe {...props} ref={setContentRef}>
            {mountNode && createPortal(children, mountNode)}
        </iframe>
    )
}

export default ReactFlowDiagram;

// for tooljet
// const Result = ({data}) => {
//     return <IFrame width="100%" height="100%" style={{
//         display: "block",       /* iframes are inline by default */
//         border: "none",        /* Reset default border */
//         height: "100vh",        /* Viewport-relative units */
//         width: "100vw"
//     }}><ReactFlowDiagram data={data}/></IFrame>
// }
// import {createRoot} from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';
// const ConnectedComponent = Tooljet.connectComponent(Result);
// createRoot(document.body).render(<ConnectedComponent/>);
