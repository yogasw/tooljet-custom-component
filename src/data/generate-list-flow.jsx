import {ChatHistory} from "./chat-history";
import {ListIntent} from "./list-intent";

export const GenerateListDataFlow = () => {
    const position = {x: 0, y: 0};
    const edgeType = 'smoothstep';
    let nodeWidth = 172;
    let nodeHeight = 36;
    let initialNodes = []
    let initialEdges = []

    let interactions = {}
    ChatHistory.interactions.forEach(({v2Response}, n) => {
        let intent = v2Response?.queryResult?.intent?.name?.split('/').pop()
        if (interactions[intent]) {
            interactions[intent].count = interactions[intent].count + 1
            interactions[intent].history = `${interactions[intent].history},${n + 1}`
        } else {
            interactions[intent] = {
                count: 1,
                history: `${n + 1}`
            }
        }
    })
    console.log("interactions", interactions)

    ListIntent.intents.forEach((intent, index) => {
        let history = ''
        let style = ''
        let active = false
        let intentId = intent.name.split('/').pop()
        let source = intent?.parentFollowupIntentName?.split('/').pop()

        if (interactions[intentId]) {
            history = ` (${interactions[intentId].history})`
            style = {
                backgroundColor: "#e6e6e9",
                borderColor: '#ddd',
                border: 1
            }

            if (interactions[source]) {
                active = true
            }
        }


        const node = {
            id: intentId,
            data: {label: `${intent.displayName}${history}`},
            position,
            style
        }
        initialNodes.push(node)
        const edge = {
            id: `e${index}`,
            source: source,
            target: intentId,
            type: edgeType,
            animated: active
        }
        initialEdges.push(edge)
    })

    return {
        initialNodes,
        initialEdges,
        nodeWidth,
        nodeHeight
    }
}
