import React, {useCallback} from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import ReactFlow, {useNodesState, useEdgesState, addEdge} from "https://cdn.jsdelivr.net/npm/reactflow/+esm";

const HeadReactFlow = () => (
    <head>
        <link href="https://cdn.jsdelivr.net/npm/reactflow/dist/style.css" rel="stylesheet"/>
    </head>
);


const initialNodes = [
    {
        id: 'horizontal-1',
        sourcePosition: 'right',
        type: 'input',
        data: {label: 'Input'},
        position: {x: 0, y: 80},
    },
    {
        id: 'horizontal-2',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: {label: 'A Node'},
        position: {x: 250, y: 0},
    },
    {
        id: 'horizontal-3',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: {label: 'Node 3'},
        position: {x: 250, y: 160},
    },
    {
        id: 'horizontal-4',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: {label: 'Node 4'},
        position: {x: 500, y: 0},
    },
    {
        id: 'horizontal-5',
        sourcePosition: 'top',
        targetPosition: 'bottom',
        data: {label: 'Node 5'},
        position: {x: 500, y: 100},
    },
    {
        id: 'horizontal-6',
        sourcePosition: 'bottom',
        targetPosition: 'top',
        data: {label: 'Node 6'},
        position: {x: 500, y: 230},
    },
    {
        id: 'horizontal-7',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: {label: 'Node 7'},
        position: {x: 750, y: 50},
    },
    {
        id: 'horizontal-8',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: {label: 'Node 8'},
        position: {x: 750, y: 300},
    },
];

const initialEdges = [
    {
        id: 'horizontal-e1-2',
        source: 'horizontal-1',
        type: 'smoothstep',
        target: 'horizontal-2',
        animated: true,
    },
    {
        id: 'horizontal-e1-3',
        source: 'horizontal-1',
        type: 'smoothstep',
        target: 'horizontal-3',
        animated: true,
    },
    {
        id: 'horizontal-e1-4',
        source: 'horizontal-2',
        type: 'smoothstep',
        target: 'horizontal-4',
        label: 'edge label',
    },
    {
        id: 'horizontal-e3-5',
        source: 'horizontal-3',
        type: 'smoothstep',
        target: 'horizontal-5',
        animated: true,
    },
    {
        id: 'horizontal-e3-6',
        source: 'horizontal-3',
        type: 'smoothstep',
        target: 'horizontal-6',
        animated: true,
    },
    {
        id: 'horizontal-e5-7',
        source: 'horizontal-5',
        type: 'smoothstep',
        target: 'horizontal-7',
        animated: true,
    },
    {
        id: 'horizontal-e6-8',
        source: 'horizontal-6',
        type: 'smoothstep',
        target: 'horizontal-8',
        animated: true,
    },
];

const ReactFlowDiagram = ({data, updateData, runQuery}) => {
    const [nodes, _, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params) => setEdges((els) => addEdge(params, els)), []);

    return (
        <div>
            <HeadReactFlow/>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                attributionPosition="bottom-left"
            />
        </div>
    )
};

export default ReactFlowDiagram;

//for tooljet
// import {createRoot} from 'https://cdn.jsdelivr.net/npm/react-dom';
// const ConnectedComponent = Tooljet.connectComponent(MyCustomComponent);
// createRoot(document.body).render(<ConnectedComponent/>);
