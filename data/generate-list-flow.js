import {ChatHistory} from "./chat-history.js";
import {ListIntents} from "./list-intent.js";
export const GenerateListDataFlow = ({parameters}) => {
  const position = {x: 0, y: 0};
  const edgeType = "smoothstep";
  let nodeWidth = 200;
  let nodeHeight = 30;
  let initialNodes = [];
  let initialEdges = [];
  const listIntent = new Map();
  let interactions = new Map();
  let first = false;
  ChatHistory?.interactions?.forEach(({v2Response}, n) => {
    let intent = v2Response?.queryResult?.intent?.name?.split("/").pop();
    if (interactions[intent]) {
      interactions[intent].count = interactions[intent].count + 1;
      interactions[intent].history = `${interactions[intent].history},${n + 1}`;
    } else {
      interactions[intent] = {
        count: 1,
        history: `${n + 1}`
      };
      if (!first) {
        first = true;
        interactions[intent].first = true;
      }
    }
  });
  ListIntents?.forEach(({name}) => {
    listIntent.set(name?.split("/").pop(), "intent");
  });
  ListIntents?.forEach((intent, index) => {
    let intentId = intent.name.split("/").pop();
    let source = intent?.parentFollowupIntentName?.split("/").pop();
    if (!listIntent.has(source) && source) {
      return;
    }
    let history = "";
    let style = "";
    let active = false;
    let styleLine = {};
    let interaction = interactions[intentId];
    if (interaction) {
      history = ` (${interaction.history})`;
      style = {
        backgroundColor: "#e6e6e9",
        borderColor: "#ddd",
        border: 1
      };
      if (interaction) {
        active = true;
        styleLine = {
          strokeWidth: 2,
          stroke: "#FF0072"
        };
      }
    }
    if (parameters.summaryOnly) {
      if (!interactions.has(source) && !active) {
        return;
      }
    }
    const node = {
      id: intentId,
      data: {label: `${intent.displayName}${history}`, data: intent},
      position,
      style
    };
    if (interaction?.first) {
      node.first = true;
    }
    initialNodes.push(node);
    const edge = {
      id: `e${index}`,
      source,
      target: intentId,
      type: edgeType,
      animated: active,
      style: styleLine
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
