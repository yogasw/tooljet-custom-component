import {ChatHistory} from "./chat-history.js";
export const GenerateListDataFlow = () => {
  const position = {x: 0, y: 0};
  const edgeType = "smoothstep";
  let nodeWidth = 172;
  let nodeHeight = 36;
  let initialNodes = [];
  let initialEdges = [];
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
  console.log("interactions", interactions);
  ListIntent.intents.forEach((intent, index) => {
    let history = "";
    let style = "";
    let active = false;
    let intentId = intent.name.split("/").pop();
    let source = intent?.parentFollowupIntentName?.split("/").pop();
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
export const ListIntent = {
  intents: [
    {
      name: "projects/ariokiasisten/locations/global/agent/intents/027e8335-1ad1-4e00-8c26-6213a2e2855f",
      displayName: "Greeting - fallback - custom - yes",
      priority: 5e5,
      mlEnabled: true,
      inputContextNames: [
        "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/Greeting-fallback-custom-followup"
      ],
      action: "Greeting.Greeting-fallback.Greeting-fallback-custom.Greeting-fallback-custom-yes",
      outputContexts: [
        {
          name: "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/Greeting-fallback-custom-yes-followup",
          lifespanCount: 2
        }
      ],
      messages: [
        {
          text: {}
        }
      ],
      rootFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/96334cd9-a0fd-4775-9b9b-dcee0fef4ac9",
      parentFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/67c9ada1-480d-41e0-8e98-339624ef5637"
    },
    {
      name: "projects/ariokiasisten/locations/global/agent/intents/0fc77ec2-1648-4ce5-861a-5dbc26d834f1",
      displayName: "3",
      priority: 5e5,
      mlEnabled: true,
      inputContextNames: [
        "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/2-followup"
      ],
      action: "Halo.Halo-custom.1-custom.2-custom",
      messages: [
        {
          text: {
            text: [
              "3"
            ]
          }
        }
      ],
      rootFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/6c6a18cf-495c-42d8-93f2-24dc33222751",
      parentFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/5c08ab89-39d4-41d8-9957-aa91324cc16e"
    },
    {
      name: "projects/ariokiasisten/locations/global/agent/intents/2a37aeab-de7c-41da-93fa-dba0dd313e0e",
      displayName: "Fallback",
      priority: 5e5,
      isFallback: true,
      mlEnabled: true,
      action: "input.unknown",
      messages: [
        {
          text: {
            text: [
              "Saya tidak mengerti. Bisa diulangi?",
              "Saya tidak dengar Anda bilang apa. Bisa ulangi lagi?",
              "Maaf, bisa ulangi lagi?",
              "Maaf, bisa diulangi?",
              "Bisa ulangi lagi?",
              "Maaf, saya tidak mengerti.",
              "Maaf, tadi bilang apa?",
              "Sekali lagi?",
              "Bilang apa tadi?",
              "Bisa diulangi?",
              "Saya tidak mengerti.",
              "Saya tidak dengar."
            ]
          }
        }
      ]
    },
    {
      name: "projects/ariokiasisten/locations/global/agent/intents/4b3cc19a-de21-445b-a05b-6850144e03d9",
      displayName: "Halo - custom - custom-2",
      priority: 5e5,
      mlEnabled: true,
      inputContextNames: [
        "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/Halo-custom-followup"
      ],
      action: "Halo.Halo-custom.Halo-custom-custom-2",
      outputContexts: [
        {
          name: "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/Halo-custom-custom-2-followup",
          lifespanCount: 2
        }
      ],
      messages: [
        {
          text: {}
        }
      ],
      rootFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/6c6a18cf-495c-42d8-93f2-24dc33222751",
      parentFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/8186dbf9-3755-407a-a4df-34e7240fcee9"
    },
    {
      name: "projects/ariokiasisten/locations/global/agent/intents/5c08ab89-39d4-41d8-9957-aa91324cc16e",
      displayName: "2",
      priority: 5e5,
      mlEnabled: true,
      inputContextNames: [
        "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/1-followup"
      ],
      action: "Halo.Halo-custom.1-custom",
      outputContexts: [
        {
          name: "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/2-followup",
          lifespanCount: 1
        }
      ],
      messages: [
        {
          text: {
            text: [
              "2"
            ]
          }
        }
      ],
      rootFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/6c6a18cf-495c-42d8-93f2-24dc33222751",
      parentFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/f15552b6-7402-4e51-8b33-36949f43c20a"
    },
    {
      name: "projects/ariokiasisten/locations/global/agent/intents/5cc23967-94eb-4bcf-9cba-b0d951ca687c",
      displayName: "Halo - custom",
      priority: 5e5,
      mlEnabled: true,
      inputContextNames: [
        "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/halo",
        "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/Halo-followup"
      ],
      action: "Halo.Halo-custom",
      messages: [
        {
          text: {}
        }
      ],
      rootFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/6c6a18cf-495c-42d8-93f2-24dc33222751",
      parentFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/6c6a18cf-495c-42d8-93f2-24dc33222751"
    },
    {
      name: "projects/ariokiasisten/locations/global/agent/intents/67c9ada1-480d-41e0-8e98-339624ef5637",
      displayName: "Greeting - fallback - custom",
      priority: 5e5,
      mlEnabled: true,
      inputContextNames: [
        "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/Greeting-fallback-followup"
      ],
      action: "Greeting.Greeting-fallback.Greeting-fallback-custom",
      outputContexts: [
        {
          name: "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/Greeting-fallback-custom-followup",
          lifespanCount: 2
        }
      ],
      messages: [
        {
          text: {}
        }
      ],
      rootFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/96334cd9-a0fd-4775-9b9b-dcee0fef4ac9",
      parentFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/985560d9-27a5-47f9-adfd-328d49b1cde9"
    },
    {
      name: "projects/ariokiasisten/locations/global/agent/intents/6c6a18cf-495c-42d8-93f2-24dc33222751",
      displayName: "Halo",
      priority: 5e5,
      mlEnabled: true,
      outputContexts: [
        {
          name: "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/halo",
          lifespanCount: 5
        },
        {
          name: "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/Halo-followup",
          lifespanCount: 2
        }
      ],
      messages: [
        {
          text: {
            text: [
              "Halo"
            ]
          }
        }
      ]
    },
    {
      name: "projects/ariokiasisten/locations/global/agent/intents/6d3111d6-c61d-4773-9209-4447b75088bf",
      displayName: "Greeting - fallback - custom - yes - later",
      priority: 5e5,
      mlEnabled: true,
      inputContextNames: [
        "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/Greeting-fallback-custom-yes-followup"
      ],
      action: "Greeting.Greeting-fallback.Greeting-fallback-custom.Greeting-fallback-custom-yes.Greeting-fallback-custom-yes-later",
      messages: [
        {
          text: {}
        }
      ],
      rootFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/96334cd9-a0fd-4775-9b9b-dcee0fef4ac9",
      parentFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/027e8335-1ad1-4e00-8c26-6213a2e2855f"
    },
    {
      name: "projects/ariokiasisten/locations/global/agent/intents/8754b66e-6b13-4239-abb2-17e828732dea",
      displayName: "2 - custom-2",
      priority: 5e5,
      mlEnabled: true,
      inputContextNames: [
        "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/2-followup"
      ],
      action: "Halo.Halo-custom.1-custom.2-custom-2",
      messages: [
        {
          text: {}
        }
      ],
      rootFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/6c6a18cf-495c-42d8-93f2-24dc33222751",
      parentFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/5c08ab89-39d4-41d8-9957-aa91324cc16e"
    },
    {
      name: "projects/ariokiasisten/locations/global/agent/intents/96334cd9-a0fd-4775-9b9b-dcee0fef4ac9",
      displayName: "Greeting",
      priority: 5e5,
      mlEnabled: true,
      inputContextNames: [
        "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/halo"
      ],
      outputContexts: [
        {
          name: "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/halo",
          lifespanCount: 5
        },
        {
          name: "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/greeting",
          lifespanCount: 5
        },
        {
          name: "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/Greeting-followup",
          lifespanCount: 2
        }
      ],
      parameters: [
        {
          name: "1591ae7f-3061-4428-a766-1c68c3b87e3d",
          displayName: "number",
          value: "$number",
          entityTypeDisplayName: "@sys.number"
        }
      ],
      messages: [
        {
          text: {
            text: [
              "Anda Memilih Bahasa indonesia"
            ]
          }
        }
      ]
    },
    {
      name: "projects/ariokiasisten/locations/global/agent/intents/985560d9-27a5-47f9-adfd-328d49b1cde9",
      displayName: "Greeting - fallback",
      priority: 5e5,
      isFallback: true,
      inputContextNames: [
        "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/halo",
        "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/greeting",
        "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/Greeting-followup"
      ],
      action: "Greeting.Greeting-fallback",
      outputContexts: [
        {
          name: "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/Greeting-fallback-followup",
          lifespanCount: 2
        }
      ],
      messages: [
        {
          text: {
            text: [
              "Maaf saya tidak mengerti"
            ]
          }
        }
      ],
      rootFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/96334cd9-a0fd-4775-9b9b-dcee0fef4ac9",
      parentFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/96334cd9-a0fd-4775-9b9b-dcee0fef4ac9",
      mlDisabled: true
    },
    {
      name: "projects/ariokiasisten/locations/global/agent/intents/9ca48ac7-d9c7-45f3-aa52-d6808ad14227",
      displayName: "1 - custom",
      priority: 5e5,
      mlEnabled: true,
      inputContextNames: [
        "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/1-followup"
      ],
      action: "Halo.Halo-custom.1-custom",
      messages: [
        {
          text: {}
        }
      ],
      rootFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/6c6a18cf-495c-42d8-93f2-24dc33222751",
      parentFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/f15552b6-7402-4e51-8b33-36949f43c20a"
    },
    {
      name: "projects/ariokiasisten/locations/global/agent/intents/d16cdfeb-52c8-4d9d-9ee3-cecdc982ce9c",
      displayName: "Halo - custom-2",
      priority: 5e5,
      mlEnabled: true,
      inputContextNames: [
        "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/halo",
        "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/Halo-followup"
      ],
      action: "Halo.Halo-custom-2",
      messages: [
        {
          text: {}
        }
      ],
      rootFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/6c6a18cf-495c-42d8-93f2-24dc33222751",
      parentFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/6c6a18cf-495c-42d8-93f2-24dc33222751"
    },
    {
      name: "projects/ariokiasisten/locations/global/agent/intents/de92cff6-649b-4910-ac19-cbecc31bc74f",
      displayName: "Greeting - fallback - custom - no",
      priority: 5e5,
      mlEnabled: true,
      inputContextNames: [
        "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/Greeting-fallback-custom-followup"
      ],
      action: "Greeting.Greeting-fallback.Greeting-fallback-custom.Greeting-fallback-custom-no",
      messages: [
        {
          text: {}
        }
      ],
      rootFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/96334cd9-a0fd-4775-9b9b-dcee0fef4ac9",
      parentFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/67c9ada1-480d-41e0-8e98-339624ef5637"
    },
    {
      name: "projects/ariokiasisten/locations/global/agent/intents/f15552b6-7402-4e51-8b33-36949f43c20a",
      displayName: "1",
      priority: 5e5,
      mlEnabled: true,
      inputContextNames: [
        "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/halo",
        "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/Halo-followup"
      ],
      action: "Halo.Halo-custom",
      outputContexts: [
        {
          name: "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/1-followup",
          lifespanCount: 2
        }
      ],
      messages: [
        {
          text: {
            text: [
              "1"
            ]
          }
        }
      ],
      rootFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/6c6a18cf-495c-42d8-93f2-24dc33222751",
      parentFollowupIntentName: "projects/ariokiasisten/locations/global/agent/intents/6c6a18cf-495c-42d8-93f2-24dc33222751"
    }
  ]
};
