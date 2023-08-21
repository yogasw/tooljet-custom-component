import {ChatHistory} from "./chat-history.js";
import {ListIntent} from "./list-intent.js";
export const GenerateListDataFlow = () => {
  const position = {x: 0, y: 0};
  const edgeType = "smoothstep";
  let nodeWidth = 172;
  let nodeHeight = 36;
  let initialNodes = [];
  let initialEdges = [];
  const listIntent = new Map();
  let interactions = {};
  ChatHistory.interactions.forEach(({v2Response}, n) => {
    let intent = v2Response?.queryResult?.intent?.name?.split("/").pop();
    if (interactions[intent]) {
      interactions[intent].count = interactions[intent].count + 1;
      interactions[intent].history = `${interactions[intent].history},${n + 1}`;
    } else {
      interactions[intent] = {
        count: 1,
        history: `${n + 1}`
      };
    }
  });
  ListIntent.intents.forEach(({name}) => {
    listIntent.set(name?.split("/").pop(), "intent");
  });
  console.log(listIntent);
  ListIntent.intents.forEach((intent, index) => {
    let intentId = intent.name.split("/").pop();
    let source = intent?.parentFollowupIntentName?.split("/").pop();
    if (!listIntent.has(source) && source) {
      return;
    }
    if (intent.displayName === "become_reseller_ensubmit") {
      console.log("masuk", intent);
      console.log("masuk", listIntent.has(intentId));
    }
    let history = "";
    let style = "";
    let active = false;
    if (interactions[intentId]) {
      history = ` (${interactions[intentId].history})`;
      style = {
        backgroundColor: "#e6e6e9",
        borderColor: "#ddd",
        border: 1
      };
      if (interactions[source]) {
        active = true;
      }
    }
    const node = {
      id: intentId,
      data: {label: `${intent.displayName}${history}`},
      position,
      style
    };
    initialNodes.push(node);
    const edge = {
      id: `e${index}`,
      source,
      target: intentId,
      type: edgeType,
      animated: active
    };
    initialEdges.push(edge);
  });
  return {
    initialNodes,
    initialEdges,
    nodeWidth,
    nodeHeight
  };
};
