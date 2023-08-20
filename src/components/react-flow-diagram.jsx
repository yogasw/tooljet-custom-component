import React, {useCallback} from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import ReactFlow, {
    addEdge,
    ConnectionLineType,
    useNodesState,
    useEdgesState,
} from "https://cdn.jsdelivr.net/npm/reactflow/+esm";
import dagre from 'https://cdn.jsdelivr.net/npm/@dagrejs/dagre/+esm';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const HeadReactFlow = () => (
    <head>
        <link href="https://cdn.jsdelivr.net/npm/reactflow/dist/style.css" rel="stylesheet"/>
    </head>
);

const getLayoutedElements = (nodes, edges, nodeWidth, nodeHeight, direction = 'LR') => {
    const isHorizontal = direction === 'LR';
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
        node.targetPosition = isHorizontal ? 'left' : 'top';
        node.sourcePosition = isHorizontal ? 'right' : 'bottom';

        // We are shifting the dagre node position (anchor=center center) to the top left
        // so it matches the React Flow node anchor point (top left).
        node.position = {
            x: nodeWithPosition.x - nodeWidth / 2,
            y: nodeWithPosition.y - nodeHeight / 2,
        };

        return node;
    });

    return {nodes, edges};
};

const ReactFlowDiagram = ({data}) => {
    const {initialNodes, initialEdges, nodeWidth, nodeHeight} = data;
    const {nodes: layoutedNodes, edges: layoutedEdges} = getLayoutedElements(
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
                addEdge({...params, type: ConnectionLineType.SmoothStep, animated: true}, eds)
            ),
        []
    );

    return (
        <div>
            <HeadReactFlow/>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                connectionLineType={ConnectionLineType.SmoothStep}
                fitView
                onNodeClick={(event, element) => console.log('click', element)}
            >
            </ReactFlow>
        </div>
    );
};

export default ReactFlowDiagram;

//for tooljet
// import {createRoot} from 'https://cdn.jsdelivr.net/npm/react-dom';
// const ConnectedComponent = Tooljet.connectComponent(MyCustomComponent);
// createRoot(document.body).render(<ConnectedComponent/>);
