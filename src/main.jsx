import React, {useState} from 'https://cdn.jsdelivr.net/npm/react@18.2.0/+esm';
import {createPortal, createRoot} from 'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/+esm';
import DynamicInput from "./components/dynamic-input";
import DateTimeLocal from "./components/date-time-local";
import MyCustomComponent from "./components/my-custom-component";
import TextareaAutosize from 'https://cdn.jsdelivr.net/npm/@mui/material/TextareaAutosize/+esm';
import ReactAutocompleteInput from "./components/react-autocomplete-input";
import EsmSh from "./components/esm-sh";
import Timer from "./components/timer";
// import RetejsBasic from "./components/retejs-basic";
import PrimitivesDiagrams from "./components/primitives-diagrams";
import ChatWithTailwind from "./components/chat-with-tailwind";
import ConversationHistory from "./components/conversation-history";
import ReactFlowDiagram from "./components/react-flow-diagram";

export const IFrame = ({
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
const ChatHistory = {
    "hasNomatchInteraction": true,
    "startTime": "2023-08-18T15:21:15.953Z",
    "endTime": "2023-08-18T15:21:42.995Z",
    "interactions": [
        {
            "name": "projects/ABC/locations/global/agent/environments/draft/sessions/0d62557fae218f226e2e8f22cf41c70de47126faf69bb9079b952b52b3ef78c4/conversations/1692372075953/interactions/18a093c85b1-311d0",
            "originalRequestSource": "DIALOGFLOW_CONSOLE",
            "v2Response": {
                "responseId": "03be5e2e-43f5-4fd6-8ca9-169a2be6d8b9-2316b108",
                "queryResult": {
                    "queryText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "parameters": {},
                    "allRequiredParamsPresent": true,
                    "fulfillmentText": "Cindy Kranz, President & Chief Executive Officer\n" +
                        "\n" +
                        "Telephone: 416-366-1085\n" +
                        "\n" +
                        "Email: ckranz@paresis.ca\n" +
                        "\n" +
                        "Jim Gordon, Interim Chief Financial Officer\n" +
                        "\n" +
                        "Telephone: 416-366-1086\n" +
                        "\n" +
                        "Email: jgordon@paresis.ca",
                    "fulfillmentMessages": [
                        {
                            "text": {
                                "text": [
                                    "Terima kasih."
                                ]
                            }
                        }
                    ],
                    "outputContexts": [
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage",
                            "lifespanCount": 2
                        },
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-followup",
                            "lifespanCount": 2
                        },
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/_firstmessage_",
                            "lifespanCount": 2
                        },
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/__system_counters__",
                            "lifespanCount": 1,
                            "parameters": {
                                "no-input": "0.0",
                                "no-match": "1.0"
                            }
                        }
                    ],
                    "intent": {
                        "name": "projects/ABC/agent/intents/9f87a104-d094-4daf-ad18-d9444a8578aa",
                        "displayName": "[firstmessage]",
                        "isFallback": true
                    },
                    "intentDetectionConfidence": 1,
                    "languageCode": "id",
                    "sentimentAnalysisResult": {
                        "queryTextSentiment": {
                            "score": 0.1,
                            "magnitude": 0.1
                        }
                    }
                },
                "agentId": "f3259b42-4e78-418b-a5ab-ffdd78c0988a"
            },
            "responseTime": "2023-08-18T15:21:15.953Z",
            "deleteTime": "2024-09-21T15:21:15.953Z",
            "logType": "DEFAULT",
            "conversationResponseJson": "{\n  \"queryText\": \",\",\n  \"parameters\": {\n  },\n  \"fulfillmentText\": \"Terima kasih.\",\n  \"fulfillmentMessages\": [{\n    \"text\": {\n      \"text\": [\"Terima kasih.\"]\n    },\n    \"lang\": \"id\"\n  }],\n  \"outputContexts\": [{\n    \"name\": \"firstmessage\",\n    \"lifespanCount\": 2\n  }, {\n    \"name\": \"firstmessage-followup\",\n    \"lifespanCount\": 2\n  }, {\n    \"name\": \"_firstmessage_\",\n    \"lifespanCount\": 2\n  }, {\n    \"name\": \"__system_counters__\",\n    \"lifespanCount\": 1,\n    \"parameters\": {\n      \"no-input\": \"0.0\",\n      \"no-match\": \"1.0\"\n    },\n    \"requestCount\": 1\n  }],\n  \"intent\": {\n    \"id\": \"9f87a104-d094-4daf-ad18-d9444a8578aa\",\n    \"displayName\": \"[firstmessage]\",\n    \"priority\": 500000,\n    \"isFallback\": true,\n    \"events\": [\"firstmessage\"],\n    \"outputContexts\": [{\n      \"name\": \"firstmessage\",\n      \"lifespanCount\": 2\n    }, {\n      \"name\": \"firstmessage-followup\",\n      \"lifespanCount\": 2\n    }, {\n      \"name\": \"_firstmessage_\",\n      \"lifespanCount\": 2\n    }],\n    \"messages\": [{\n      \"text\": {\n        \"text\": [\"Terima kasih.\"]\n      },\n      \"lang\": \"id\"\n    }, {\n      \"text\": {\n        \"text\": [\"I didn\\u0027t get that. Can you say it again?\", \"I missed what you said. What was that?\", \"Sorry, could you say that again?\", \"Sorry, can you say that again?\", \"Can you say that again?\", \"Sorry, I didn\\u0027t get that. Can you rephrase?\", \"Sorry, what was that?\", \"One more time?\", \"What was that?\", \"Say that one more time?\", \"I didn\\u0027t get that. Can you repeat?\", \"I missed that, say that again?\"]\n      },\n      \"lang\": \"en\"\n    }]\n  },\n  \"intentDetectionConfidence\": 1.0,\n  \"languageCode\": \"id\",\n  \"slotfillingMetadata\": {\n    \"allRequiredParamsPresent\": true\n  },\n  \"sentimentAnalysisResult\": {\n    \"queryTextSentiment\": {\n      \"score\": 0.1,\n      \"magnitude\": 0.1\n    }\n  },\n  \"id\": \"03be5e2e-43f5-4fd6-8ca9-169a2be6d8b9-2316b108\",\n  \"sessionId\": \"98bcc833-3521-7ecc-8ba7-b1ef963151cb\",\n  \"timestamp\": \"2023-08-18T15:21:15.950288Z\",\n  \"source\": \"agent\",\n  \"webhookStatus\": {\n    \"webhookEnabledForAgent\": true\n  },\n  \"agentEnvironmentId\": {\n    \"agentId\": \"f3259b42-4e78-418b-a5ab-ffdd78c0988a\",\n    \"cloudProjectId\": \"ABC\"\n  },\n  \"queriedIntentsCount\": 1624\n}"
        },
        {
            "name": "projects/ABC/locations/global/agent/environments/draft/sessions/0d62557fae218f226e2e8f22cf41c70de47126faf69bb9079b952b52b3ef78c4/conversations/1692372075953/interactions/18a093c85bc-8ab70",
            "originalRequestSource": "DIALOGFLOW_CONSOLE",
            "v2Response": {
                "responseId": "a47ed869-cac4-4ee1-92c0-b034bc68dde4-2316b108",
                "queryResult": {
                    "queryText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "parameters": {},
                    "allRequiredParamsPresent": true,
                    "fulfillmentText": "Terima kasih.",
                    "fulfillmentMessages": [
                        {
                            "text": {
                                "text": [
                                    "Terima kasih sudah menghubungi * Customer Care*,"
                                ]
                            }
                        }
                    ],
                    "outputContexts": [
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage",
                            "lifespanCount": 2
                        },
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-followup",
                            "lifespanCount": 2
                        },
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/_firstmessage_",
                            "lifespanCount": 2
                        },
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/__system_counters__",
                            "lifespanCount": 1,
                            "parameters": {
                                "no-match": "1.0",
                                "no-input": "0.0"
                            }
                        }
                    ],
                    "intent": {
                        "name": "projects/ABC/agent/intents/9f87a104-d094-4daf-ad18-d9444a8578aa",
                        "displayName": "[firstmessage]",
                        "isFallback": true
                    },
                    "intentDetectionConfidence": 1,
                    "languageCode": "id",
                    "sentimentAnalysisResult": {
                        "queryTextSentiment": {
                            "score": 0.1,
                            "magnitude": 0.1
                        }
                    }
                },
                "agentId": "f3259b42-4e78-418b-a5ab-ffdd78c0988a"
            },
            "responseTime": "2023-08-18T15:21:15.964Z",
            "deleteTime": "2024-09-21T15:21:15.964Z",
            "logType": "DEFAULT",
            "conversationResponseJson": "{\n  \"queryText\": \",\",\n  \"parameters\": {\n  },\n  \"fulfillmentText\": \"Terima kasih.\",\n  \"fulfillmentMessages\": [{\n    \"text\": {\n      \"text\": [\"Terima kasih.\"]\n    },\n    \"lang\": \"id\"\n  }],\n  \"outputContexts\": [{\n    \"name\": \"firstmessage\",\n    \"lifespanCount\": 2\n  }, {\n    \"name\": \"firstmessage-followup\",\n    \"lifespanCount\": 2\n  }, {\n    \"name\": \"_firstmessage_\",\n    \"lifespanCount\": 2\n  }, {\n    \"name\": \"__system_counters__\",\n    \"lifespanCount\": 1,\n    \"parameters\": {\n      \"no-input\": \"0.0\",\n      \"no-match\": \"1.0\"\n    },\n    \"requestCount\": 1\n  }],\n  \"intent\": {\n    \"id\": \"9f87a104-d094-4daf-ad18-d9444a8578aa\",\n    \"displayName\": \"[firstmessage]\",\n    \"priority\": 500000,\n    \"isFallback\": true,\n    \"events\": [\"firstmessage\"],\n    \"outputContexts\": [{\n      \"name\": \"firstmessage\",\n      \"lifespanCount\": 2\n    }, {\n      \"name\": \"firstmessage-followup\",\n      \"lifespanCount\": 2\n    }, {\n      \"name\": \"_firstmessage_\",\n      \"lifespanCount\": 2\n    }],\n    \"messages\": [{\n      \"text\": {\n        \"text\": [\"Terima kasih.\"]\n      },\n      \"lang\": \"id\"\n    }, {\n      \"text\": {\n        \"text\": [\"I didn\\u0027t get that. Can you say it again?\", \"I missed what you said. What was that?\", \"Sorry, could you say that again?\", \"Sorry, can you say that again?\", \"Can you say that again?\", \"Sorry, I didn\\u0027t get that. Can you rephrase?\", \"Sorry, what was that?\", \"One more time?\", \"What was that?\", \"Say that one more time?\", \"I didn\\u0027t get that. Can you repeat?\", \"I missed that, say that again?\"]\n      },\n      \"lang\": \"en\"\n    }]\n  },\n  \"intentDetectionConfidence\": 1.0,\n  \"languageCode\": \"id\",\n  \"slotfillingMetadata\": {\n    \"allRequiredParamsPresent\": true\n  },\n  \"sentimentAnalysisResult\": {\n    \"queryTextSentiment\": {\n      \"score\": 0.1,\n      \"magnitude\": 0.1\n    }\n  },\n  \"id\": \"a47ed869-cac4-4ee1-92c0-b034bc68dde4-2316b108\",\n  \"sessionId\": \"98bcc833-3521-7ecc-8ba7-b1ef963151cb\",\n  \"timestamp\": \"2023-08-18T15:21:15.961572Z\",\n  \"source\": \"agent\",\n  \"webhookStatus\": {\n    \"webhookEnabledForAgent\": true\n  },\n  \"agentEnvironmentId\": {\n    \"agentId\": \"f3259b42-4e78-418b-a5ab-ffdd78c0988a\",\n    \"cloudProjectId\": \"ABC\"\n  },\n  \"queriedIntentsCount\": 1624\n}"
        },
        {
            "name": "projects/ABC/locations/global/agent/environments/draft/sessions/0d62557fae218f226e2e8f22cf41c70de47126faf69bb9079b952b52b3ef78c4/conversations/1692372075953/interactions/18a093cedb5-7769e",
            "inputContexts": [
                {
                    "name": "projects/ABC/locations/global/agent/sessions/-/contexts/firstmessage",
                    "lifespanCount": 2,
                    "parameters": {
                        "intent_action": ""
                    }
                },
                {
                    "name": "projects/ABC/locations/global/agent/sessions/-/contexts/firstmessage-followup",
                    "lifespanCount": 2,
                    "parameters": {
                        "intent_action": ""
                    }
                },
                {
                    "name": "projects/ABC/locations/global/agent/sessions/-/contexts/_firstmessage_",
                    "lifespanCount": 2,
                    "parameters": {
                        "intent_action": ""
                    }
                },
                {
                    "name": "projects/ABC/locations/global/agent/sessions/-/contexts/__system_counters__",
                    "lifespanCount": 1,
                    "parameters": {
                        "no-match": "1.0",
                        "intent_action": "",
                        "no-input": "0.0"
                    }
                }
            ],
            "originalRequestSource": "DIALOGFLOW_CONSOLE",
            "v2Response": {
                "responseId": "7d8cca7a-f167-48e9-a647-746053f92f9e-2316b108",
                "queryResult": {
                    "queryText": "1",
                    "action": "biodata.select_menu",
                    "parameters": {
                        "menu": "welcome"
                    },
                    "allRequiredParamsPresent": true,
                    "fulfillmentMessages": [
                        {
                            "text": {
                                "text": [
                                    ""
                                ]
                            }
                        }
                    ],
                    "outputContexts": [
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-select_menu-followup",
                            "lifespanCount": 2,
                            "parameters": {
                                "menu.original": "1",
                                "menu": "welcome"
                            }
                        },
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage",
                            "lifespanCount": 1,
                            "parameters": {
                                "menu": "welcome",
                                "menu.original": "1"
                            }
                        },
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-followup",
                            "lifespanCount": 1,
                            "parameters": {
                                "menu.original": "1",
                                "menu": "welcome"
                            }
                        },
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/_firstmessage_",
                            "lifespanCount": 1,
                            "parameters": {
                                "menu": "welcome",
                                "menu.original": "1"
                            }
                        },
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/__system_counters__",
                            "lifespanCount": 1,
                            "parameters": {
                                "menu": "welcome",
                                "menu.original": "1",
                                "no-input": "0.0",
                                "no-match": "0.0"
                            }
                        }
                    ],
                    "intent": {
                        "name": "projects/ABC/agent/intents/697e11fb-056a-4a0c-9716-6d9bf570c830",
                        "displayName": "[firstmessage] - select_menu"
                    },
                    "intentDetectionConfidence": 1,
                    "diagnosticInfo": {
                        "webhook_latency_ms": "1712.0",
                        "original_webhook_payload": "{\n  \"responseId\": \"7d8cca7a-f167-48e9-a647-746053f92f9e-2316b108\",\n  \"queryResult\": {\n    \"queryText\": \"1\",\n    \"action\": \"biodata.select_menu\",\n    \"parameters\": {\n      \"menu\": \"welcome\"\n    },\n    \"allRequiredParamsPresent\": true,\n    \"fulfillmentMessages\": [{\n      \"text\": {\n        \"text\": [\"\"]\n      }\n    }],\n    \"outputContexts\": [{\n      \"name\": \"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-select_menu-followup\",\n      \"lifespanCount\": 2,\n      \"parameters\": {\n        \"menu\": \"welcome\",\n        \"menu.original\": \"1\"\n      }\n    }, {\n      \"name\": \"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage\",\n      \"lifespanCount\": 1,\n      \"parameters\": {\n        \"menu\": \"welcome\",\n        \"menu.original\": \"1\"\n      }\n    }, {\n      \"name\": \"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-followup\",\n      \"lifespanCount\": 1,\n      \"parameters\": {\n        \"menu\": \"welcome\",\n        \"menu.original\": \"1\"\n      }\n    }, {\n      \"name\": \"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/_firstmessage_\",\n      \"lifespanCount\": 1,\n      \"parameters\": {\n        \"menu\": \"welcome\",\n        \"menu.original\": \"1\"\n      }\n    }, {\n      \"name\": \"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/__system_counters__\",\n      \"lifespanCount\": 1,\n      \"parameters\": {\n        \"no-input\": 0.0,\n        \"no-match\": 0.0,\n        \"menu\": \"welcome\",\n        \"menu.original\": \"1\"\n      }\n    }],\n    \"intent\": {\n      \"name\": \"projects/ABC/agent/intents/697e11fb-056a-4a0c-9716-6d9bf570c830\",\n      \"displayName\": \"[firstmessage] - select_menu\"\n    },\n    \"intentDetectionConfidence\": 1.0,\n    \"languageCode\": \"id\"\n  },\n  \"originalDetectIntentRequest\": {\n    \"source\": \"DIALOGFLOW_CONSOLE\",\n    \"payload\": {\n    }\n  },\n  \"session\": \"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb\"\n}"
                    },
                    "languageCode": "id",
                    "sentimentAnalysisResult": {
                        "queryTextSentiment": {}
                    }
                },
                "webhookStatus": {
                    "code": 14,
                    "message": "Webhook call failed. Error: UNAVAILABLE, State: URL_UNREACHABLE, Reason: UNREACHABLE_5xx, HTTP status code: 503."
                },
                "agentId": "f3259b42-4e78-418b-a5ab-ffdd78c0988a"
            },
            "responseTime": "2023-08-18T15:21:42.581Z",
            "deleteTime": "2024-09-21T15:21:42.581Z",
            "logType": "DEFAULT",
            "conversationResponseJson": "{\n  \"queryText\": \"1\",\n  \"action\": \"biodata.select_menu\",\n  \"parameters\": {\n    \"menu\": \"welcome\"\n  },\n  \"fulfillmentMessages\": [{\n    \"text\": {\n      \"text\": [\"\"]\n    },\n    \"lang\": \"id\"\n  }],\n  \"outputContexts\": [{\n    \"name\": \"firstmessage-select_menu-followup\",\n    \"lifespanCount\": 2,\n    \"parameters\": {\n      \"menu\": \"welcome\",\n      \"menu.original\": \"1\"\n    }\n  }, {\n    \"name\": \"firstmessage\",\n    \"lifespanCount\": 1,\n    \"parameters\": {\n      \"menu\": \"welcome\",\n      \"menu.original\": \"1\"\n    },\n    \"lifetime\": \"1200s\",\n    \"createdTimestamp\": \"2023-08-18T15:21:15.962105Z\",\n    \"requestCount\": 1\n  }, {\n    \"name\": \"firstmessage-followup\",\n    \"lifespanCount\": 1,\n    \"parameters\": {\n      \"menu\": \"welcome\",\n      \"menu.original\": \"1\"\n    },\n    \"lifetime\": \"1200s\",\n    \"createdTimestamp\": \"2023-08-18T15:21:15.962116Z\",\n    \"requestCount\": 1\n  }, {\n    \"name\": \"_firstmessage_\",\n    \"lifespanCount\": 1,\n    \"parameters\": {\n      \"menu\": \"welcome\",\n      \"menu.original\": \"1\"\n    },\n    \"lifetime\": \"1200s\",\n    \"createdTimestamp\": \"2023-08-18T15:21:15.962119Z\",\n    \"requestCount\": 1\n  }, {\n    \"name\": \"__system_counters__\",\n    \"lifespanCount\": 1,\n    \"parameters\": {\n      \"menu\": \"welcome\",\n      \"menu.original\": \"1\",\n      \"no-input\": \"0.0\",\n      \"no-match\": \"0.0\"\n    },\n    \"lifetime\": \"1200s\",\n    \"createdTimestamp\": \"2023-08-18T15:21:15.962122Z\",\n    \"requestCount\": 2\n  }],\n  \"intent\": {\n    \"id\": \"697e11fb-056a-4a0c-9716-6d9bf570c830\",\n    \"displayName\": \"[firstmessage] - select_menu\",\n    \"priority\": 500000,\n    \"webhookState\": \"WEBHOOK_STATE_ENABLED\",\n    \"inputContextNames\": [\"firstmessage\"],\n    \"action\": \"biodata.select_menu\",\n    \"outputContexts\": [{\n      \"name\": \"firstmessage-select_menu-followup\",\n      \"lifespanCount\": 2\n    }],\n    \"parameters\": [{\n      \"id\": \"4bde5146-694f-4f3b-8830-287aac8ede53\",\n      \"displayName\": \"menu\",\n      \"value\": \"$menu\",\n      \"entityTypeDisplayName\": \"@firstmessage_menu\"\n    }],\n    \"messages\": [{\n      \"text\": {\n      },\n      \"lang\": \"id\"\n    }, {\n      \"text\": {\n      },\n      \"lang\": \"en\"\n    }],\n    \"rootFollowupIntentId\": \"9f87a104-d094-4daf-ad18-d9444a8578aa\",\n    \"parentFollowupIntentId\": \"9f87a104-d094-4daf-ad18-d9444a8578aa\"\n  },\n  \"intentDetectionConfidence\": 1.0,\n  \"diagnosticInfo\": {\n    \"webhook_latency_ms\": \"1712.0\",\n    \"original_webhook_payload\": \"{\\n  \\\"responseId\\\": \\\"7d8cca7a-f167-48e9-a647-746053f92f9e-2316b108\\\",\\n  \\\"queryResult\\\": {\\n    \\\"queryText\\\": \\\"1\\\",\\n    \\\"action\\\": \\\"biodata.select_menu\\\",\\n    \\\"parameters\\\": {\\n      \\\"menu\\\": \\\"welcome\\\"\\n    },\\n    \\\"allRequiredParamsPresent\\\": true,\\n    \\\"fulfillmentMessages\\\": [{\\n      \\\"text\\\": {\\n        \\\"text\\\": [\\\"\\\"]\\n      }\\n    }],\\n    \\\"outputContexts\\\": [{\\n      \\\"name\\\": \\\"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-select_menu-followup\\\",\\n      \\\"lifespanCount\\\": 2,\\n      \\\"parameters\\\": {\\n        \\\"menu\\\": \\\"welcome\\\",\\n        \\\"menu.original\\\": \\\"1\\\"\\n      }\\n    }, {\\n      \\\"name\\\": \\\"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage\\\",\\n      \\\"lifespanCount\\\": 1,\\n      \\\"parameters\\\": {\\n        \\\"menu\\\": \\\"welcome\\\",\\n        \\\"menu.original\\\": \\\"1\\\"\\n      }\\n    }, {\\n      \\\"name\\\": \\\"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-followup\\\",\\n      \\\"lifespanCount\\\": 1,\\n      \\\"parameters\\\": {\\n        \\\"menu\\\": \\\"welcome\\\",\\n        \\\"menu.original\\\": \\\"1\\\"\\n      }\\n    }, {\\n      \\\"name\\\": \\\"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/_firstmessage_\\\",\\n      \\\"lifespanCount\\\": 1,\\n      \\\"parameters\\\": {\\n        \\\"menu\\\": \\\"welcome\\\",\\n        \\\"menu.original\\\": \\\"1\\\"\\n      }\\n    }, {\\n      \\\"name\\\": \\\"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/__system_counters__\\\",\\n      \\\"lifespanCount\\\": 1,\\n      \\\"parameters\\\": {\\n        \\\"no-input\\\": 0.0,\\n        \\\"no-match\\\": 0.0,\\n        \\\"menu\\\": \\\"welcome\\\",\\n        \\\"menu.original\\\": \\\"1\\\"\\n      }\\n    }],\\n    \\\"intent\\\": {\\n      \\\"name\\\": \\\"projects/ABC/agent/intents/697e11fb-056a-4a0c-9716-6d9bf570c830\\\",\\n      \\\"displayName\\\": \\\"[firstmessage] - select_menu\\\"\\n    },\\n    \\\"intentDetectionConfidence\\\": 1.0,\\n    \\\"languageCode\\\": \\\"id\\\"\\n  },\\n  \\\"originalDetectIntentRequest\\\": {\\n    \\\"source\\\": \\\"DIALOGFLOW_CONSOLE\\\",\\n    \\\"payload\\\": {\\n    }\\n  },\\n  \\\"session\\\": \\\"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb\\\"\\n}\"\n  },\n  \"languageCode\": \"id\",\n  \"slotfillingMetadata\": {\n    \"allRequiredParamsPresent\": true\n  },\n  \"sentimentAnalysisResult\": {\n    \"queryTextSentiment\": {\n    }\n  },\n  \"id\": \"7d8cca7a-f167-48e9-a647-746053f92f9e-2316b108\",\n  \"sessionId\": \"98bcc833-3521-7ecc-8ba7-b1ef963151cb\",\n  \"timestamp\": \"2023-08-18T15:21:40.842919Z\",\n  \"source\": \"agent\",\n  \"webhookStatus\": {\n    \"webhookEnabledForAgent\": true,\n    \"webhookStatus\": {\n      \"code\": 14,\n      \"message\": \"Webhook call failed. Error: UNAVAILABLE, State: URL_UNREACHABLE, Reason: UNREACHABLE_5xx, HTTP status code: 503.\"\n    }\n  },\n  \"agentEnvironmentId\": {\n    \"agentId\": \"f3259b42-4e78-418b-a5ab-ffdd78c0988a\",\n    \"cloudProjectId\": \"ABC\"\n  },\n  \"queriedIntentsCount\": 1624\n}"
        },
        {
            "name": "projects/ABC/locations/global/agent/environments/draft/sessions/0d62557fae218f226e2e8f22cf41c70de47126faf69bb9079b952b52b3ef78c4/conversations/1692372075953/interactions/18a093cef0b-3e27d",
            "inputContexts": [
                {
                    "name": "projects/ABC/locations/global/agent/sessions/-/contexts/firstmessage",
                    "lifespanCount": 2,
                    "parameters": {
                        "intent_action": ""
                    }
                },
                {
                    "name": "projects/ABC/locations/global/agent/sessions/-/contexts/firstmessage-followup",
                    "lifespanCount": 2,
                    "parameters": {
                        "intent_action": ""
                    }
                },
                {
                    "name": "projects/ABC/locations/global/agent/sessions/-/contexts/_firstmessage_",
                    "lifespanCount": 2,
                    "parameters": {
                        "intent_action": ""
                    }
                },
                {
                    "name": "projects/ABC/locations/global/agent/sessions/-/contexts/__system_counters__",
                    "lifespanCount": 1,
                    "parameters": {
                        "no-input": "0.0",
                        "intent_action": "",
                        "no-match": "1.0"
                    }
                }
            ],
            "originalRequestSource": "DIALOGFLOW_CONSOLE",
            "v2Response": {
                "responseId": "6d5dfc30-4bcf-40e2-9790-ecfb76f48a6c-2316b108",
                "queryResult": {
                    "queryText": "1",
                    "action": "biodata.select_menu",
                    "parameters": {
                        "menu": "welcome"
                    },
                    "allRequiredParamsPresent": true,
                    "fulfillmentMessages": [
                        {
                            "text": {
                                "text": [
                                    ""
                                ]
                            }
                        }
                    ],
                    "outputContexts": [
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-select_menu-followup",
                            "lifespanCount": 2,
                            "parameters": {
                                "menu": "welcome",
                                "menu.original": "1"
                            }
                        },
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage",
                            "lifespanCount": 1,
                            "parameters": {
                                "menu.original": "1",
                                "menu": "welcome"
                            }
                        },
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-followup",
                            "lifespanCount": 1,
                            "parameters": {
                                "menu": "welcome",
                                "menu.original": "1"
                            }
                        },
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/_firstmessage_",
                            "lifespanCount": 1,
                            "parameters": {
                                "menu": "welcome",
                                "menu.original": "1"
                            }
                        },
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/__system_counters__",
                            "lifespanCount": 1,
                            "parameters": {
                                "menu": "welcome",
                                "menu.original": "1",
                                "no-input": "0.0",
                                "no-match": "0.0"
                            }
                        }
                    ],
                    "intent": {
                        "name": "projects/ABC/agent/intents/697e11fb-056a-4a0c-9716-6d9bf570c830",
                        "displayName": "[firstmessage] - select_menu"
                    },
                    "intentDetectionConfidence": 1,
                    "diagnosticInfo": {
                        "webhook_latency_ms": "1705.0",
                        "original_webhook_payload": "{\n  \"responseId\": \"6d5dfc30-4bcf-40e2-9790-ecfb76f48a6c-2316b108\",\n  \"queryResult\": {\n    \"queryText\": \"1\",\n    \"action\": \"biodata.select_menu\",\n    \"parameters\": {\n      \"menu\": \"welcome\"\n    },\n    \"allRequiredParamsPresent\": true,\n    \"fulfillmentMessages\": [{\n      \"text\": {\n        \"text\": [\"\"]\n      }\n    }],\n    \"outputContexts\": [{\n      \"name\": \"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-select_menu-followup\",\n      \"lifespanCount\": 2,\n      \"parameters\": {\n        \"menu\": \"welcome\",\n        \"menu.original\": \"1\"\n      }\n    }, {\n      \"name\": \"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage\",\n      \"lifespanCount\": 1,\n      \"parameters\": {\n        \"menu\": \"welcome\",\n        \"menu.original\": \"1\"\n      }\n    }, {\n      \"name\": \"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-followup\",\n      \"lifespanCount\": 1,\n      \"parameters\": {\n        \"menu\": \"welcome\",\n        \"menu.original\": \"1\"\n      }\n    }, {\n      \"name\": \"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/_firstmessage_\",\n      \"lifespanCount\": 1,\n      \"parameters\": {\n        \"menu\": \"welcome\",\n        \"menu.original\": \"1\"\n      }\n    }, {\n      \"name\": \"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/__system_counters__\",\n      \"lifespanCount\": 1,\n      \"parameters\": {\n        \"no-input\": 0.0,\n        \"no-match\": 0.0,\n        \"menu\": \"welcome\",\n        \"menu.original\": \"1\"\n      }\n    }],\n    \"intent\": {\n      \"name\": \"projects/ABC/agent/intents/697e11fb-056a-4a0c-9716-6d9bf570c830\",\n      \"displayName\": \"[firstmessage] - select_menu\"\n    },\n    \"intentDetectionConfidence\": 1.0,\n    \"languageCode\": \"id\"\n  },\n  \"originalDetectIntentRequest\": {\n    \"source\": \"DIALOGFLOW_CONSOLE\",\n    \"payload\": {\n    }\n  },\n  \"session\": \"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb\"\n}"
                    },
                    "languageCode": "id",
                    "sentimentAnalysisResult": {
                        "queryTextSentiment": {}
                    }
                },
                "webhookStatus": {
                    "code": 14,
                    "message": "Webhook call failed. Error: UNAVAILABLE, State: URL_UNREACHABLE, Reason: UNREACHABLE_5xx, HTTP status code: 503."
                },
                "agentId": "f3259b42-4e78-418b-a5ab-ffdd78c0988a"
            },
            "responseTime": "2023-08-18T15:21:42.923Z",
            "deleteTime": "2024-09-21T15:21:42.923Z",
            "logType": "DEFAULT",
            "conversationResponseJson": "{\n  \"queryText\": \"1\",\n  \"action\": \"biodata.select_menu\",\n  \"parameters\": {\n    \"menu\": \"welcome\"\n  },\n  \"fulfillmentMessages\": [{\n    \"text\": {\n      \"text\": [\"\"]\n    },\n    \"lang\": \"id\"\n  }],\n  \"outputContexts\": [{\n    \"name\": \"firstmessage-select_menu-followup\",\n    \"lifespanCount\": 2,\n    \"parameters\": {\n      \"menu\": \"welcome\",\n      \"menu.original\": \"1\"\n    }\n  }, {\n    \"name\": \"firstmessage\",\n    \"lifespanCount\": 1,\n    \"parameters\": {\n      \"menu\": \"welcome\",\n      \"menu.original\": \"1\"\n    },\n    \"lifetime\": \"1200s\",\n    \"createdTimestamp\": \"2023-08-18T15:21:15.962105Z\",\n    \"requestCount\": 1\n  }, {\n    \"name\": \"firstmessage-followup\",\n    \"lifespanCount\": 1,\n    \"parameters\": {\n      \"menu\": \"welcome\",\n      \"menu.original\": \"1\"\n    },\n    \"lifetime\": \"1200s\",\n    \"createdTimestamp\": \"2023-08-18T15:21:15.962116Z\",\n    \"requestCount\": 1\n  }, {\n    \"name\": \"_firstmessage_\",\n    \"lifespanCount\": 1,\n    \"parameters\": {\n      \"menu\": \"welcome\",\n      \"menu.original\": \"1\"\n    },\n    \"lifetime\": \"1200s\",\n    \"createdTimestamp\": \"2023-08-18T15:21:15.962119Z\",\n    \"requestCount\": 1\n  }, {\n    \"name\": \"__system_counters__\",\n    \"lifespanCount\": 1,\n    \"parameters\": {\n      \"menu\": \"welcome\",\n      \"menu.original\": \"1\",\n      \"no-input\": \"0.0\",\n      \"no-match\": \"0.0\"\n    },\n    \"lifetime\": \"1200s\",\n    \"createdTimestamp\": \"2023-08-18T15:21:15.962122Z\",\n    \"requestCount\": 2\n  }],\n  \"intent\": {\n    \"id\": \"697e11fb-056a-4a0c-9716-6d9bf570c830\",\n    \"displayName\": \"[firstmessage] - select_menu\",\n    \"priority\": 500000,\n    \"webhookState\": \"WEBHOOK_STATE_ENABLED\",\n    \"inputContextNames\": [\"firstmessage\"],\n    \"action\": \"biodata.select_menu\",\n    \"outputContexts\": [{\n      \"name\": \"firstmessage-select_menu-followup\",\n      \"lifespanCount\": 2\n    }],\n    \"parameters\": [{\n      \"id\": \"4bde5146-694f-4f3b-8830-287aac8ede53\",\n      \"displayName\": \"menu\",\n      \"value\": \"$menu\",\n      \"entityTypeDisplayName\": \"@firstmessage_menu\"\n    }],\n    \"messages\": [{\n      \"text\": {\n      },\n      \"lang\": \"id\"\n    }, {\n      \"text\": {\n      },\n      \"lang\": \"en\"\n    }],\n    \"rootFollowupIntentId\": \"9f87a104-d094-4daf-ad18-d9444a8578aa\",\n    \"parentFollowupIntentId\": \"9f87a104-d094-4daf-ad18-d9444a8578aa\"\n  },\n  \"intentDetectionConfidence\": 1.0,\n  \"diagnosticInfo\": {\n    \"webhook_latency_ms\": \"1705.0\",\n    \"original_webhook_payload\": \"{\\n  \\\"responseId\\\": \\\"6d5dfc30-4bcf-40e2-9790-ecfb76f48a6c-2316b108\\\",\\n  \\\"queryResult\\\": {\\n    \\\"queryText\\\": \\\"1\\\",\\n    \\\"action\\\": \\\"biodata.select_menu\\\",\\n    \\\"parameters\\\": {\\n      \\\"menu\\\": \\\"welcome\\\"\\n    },\\n    \\\"allRequiredParamsPresent\\\": true,\\n    \\\"fulfillmentMessages\\\": [{\\n      \\\"text\\\": {\\n        \\\"text\\\": [\\\"\\\"]\\n      }\\n    }],\\n    \\\"outputContexts\\\": [{\\n      \\\"name\\\": \\\"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-select_menu-followup\\\",\\n      \\\"lifespanCount\\\": 2,\\n      \\\"parameters\\\": {\\n        \\\"menu\\\": \\\"welcome\\\",\\n        \\\"menu.original\\\": \\\"1\\\"\\n      }\\n    }, {\\n      \\\"name\\\": \\\"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage\\\",\\n      \\\"lifespanCount\\\": 1,\\n      \\\"parameters\\\": {\\n        \\\"menu\\\": \\\"welcome\\\",\\n        \\\"menu.original\\\": \\\"1\\\"\\n      }\\n    }, {\\n      \\\"name\\\": \\\"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-followup\\\",\\n      \\\"lifespanCount\\\": 1,\\n      \\\"parameters\\\": {\\n        \\\"menu\\\": \\\"welcome\\\",\\n        \\\"menu.original\\\": \\\"1\\\"\\n      }\\n    }, {\\n      \\\"name\\\": \\\"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/_firstmessage_\\\",\\n      \\\"lifespanCount\\\": 1,\\n      \\\"parameters\\\": {\\n        \\\"menu\\\": \\\"welcome\\\",\\n        \\\"menu.original\\\": \\\"1\\\"\\n      }\\n    }, {\\n      \\\"name\\\": \\\"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/__system_counters__\\\",\\n      \\\"lifespanCount\\\": 1,\\n      \\\"parameters\\\": {\\n        \\\"no-input\\\": 0.0,\\n        \\\"no-match\\\": 0.0,\\n        \\\"menu\\\": \\\"welcome\\\",\\n        \\\"menu.original\\\": \\\"1\\\"\\n      }\\n    }],\\n    \\\"intent\\\": {\\n      \\\"name\\\": \\\"projects/ABC/agent/intents/697e11fb-056a-4a0c-9716-6d9bf570c830\\\",\\n      \\\"displayName\\\": \\\"[firstmessage] - select_menu\\\"\\n    },\\n    \\\"intentDetectionConfidence\\\": 1.0,\\n    \\\"languageCode\\\": \\\"id\\\"\\n  },\\n  \\\"originalDetectIntentRequest\\\": {\\n    \\\"source\\\": \\\"DIALOGFLOW_CONSOLE\\\",\\n    \\\"payload\\\": {\\n    }\\n  },\\n  \\\"session\\\": \\\"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb\\\"\\n}\"\n  },\n  \"languageCode\": \"id\",\n  \"slotfillingMetadata\": {\n    \"allRequiredParamsPresent\": true\n  },\n  \"sentimentAnalysisResult\": {\n    \"queryTextSentiment\": {\n    }\n  },\n  \"id\": \"6d5dfc30-4bcf-40e2-9790-ecfb76f48a6c-2316b108\",\n  \"sessionId\": \"98bcc833-3521-7ecc-8ba7-b1ef963151cb\",\n  \"timestamp\": \"2023-08-18T15:21:41.195778Z\",\n  \"source\": \"agent\",\n  \"webhookStatus\": {\n    \"webhookEnabledForAgent\": true,\n    \"webhookStatus\": {\n      \"code\": 14,\n      \"message\": \"Webhook call failed. Error: UNAVAILABLE, State: URL_UNREACHABLE, Reason: UNREACHABLE_5xx, HTTP status code: 503.\"\n    }\n  },\n  \"agentEnvironmentId\": {\n    \"agentId\": \"f3259b42-4e78-418b-a5ab-ffdd78c0988a\",\n    \"cloudProjectId\": \"ABC\"\n  },\n  \"queriedIntentsCount\": 1624\n}"
        },
        {
            "name": "projects/ABC/locations/global/agent/environments/draft/sessions/0d62557fae218f226e2e8f22cf41c70de47126faf69bb9079b952b52b3ef78c4/conversations/1692372075953/interactions/18a093cef53-9c8e6",
            "inputContexts": [
                {
                    "name": "projects/ABC/locations/global/agent/sessions/-/contexts/firstmessage",
                    "lifespanCount": 2,
                    "parameters": {
                        "intent_action": ""
                    }
                },
                {
                    "name": "projects/ABC/locations/global/agent/sessions/-/contexts/firstmessage-followup",
                    "lifespanCount": 2,
                    "parameters": {
                        "intent_action": ""
                    }
                },
                {
                    "name": "projects/ABC/locations/global/agent/sessions/-/contexts/_firstmessage_",
                    "lifespanCount": 2,
                    "parameters": {
                        "intent_action": ""
                    }
                },
                {
                    "name": "projects/ABC/locations/global/agent/sessions/-/contexts/__system_counters__",
                    "lifespanCount": 1,
                    "parameters": {
                        "intent_action": "",
                        "no-input": "0.0",
                        "no-match": "1.0"
                    }
                }
            ],
            "originalRequestSource": "DIALOGFLOW_CONSOLE",
            "v2Response": {
                "responseId": "d36b3c99-31d0-49bc-a0ff-06f1c5102fbb-2316b108",
                "queryResult": {
                    "queryText": "1",
                    "action": "biodata.select_menu",
                    "parameters": {
                        "menu": "welcome"
                    },
                    "allRequiredParamsPresent": true,
                    "fulfillmentMessages": [
                        {
                            "text": {
                                "text": [
                                    ""
                                ]
                            }
                        }
                    ],
                    "outputContexts": [
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-select_menu-followup",
                            "lifespanCount": 2,
                            "parameters": {
                                "menu": "welcome",
                                "menu.original": "1"
                            }
                        },
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage",
                            "lifespanCount": 1,
                            "parameters": {
                                "menu.original": "1",
                                "menu": "welcome"
                            }
                        },
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-followup",
                            "lifespanCount": 1,
                            "parameters": {
                                "menu": "welcome",
                                "menu.original": "1"
                            }
                        },
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/_firstmessage_",
                            "lifespanCount": 1,
                            "parameters": {
                                "menu": "welcome",
                                "menu.original": "1"
                            }
                        },
                        {
                            "name": "projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/__system_counters__",
                            "lifespanCount": 1,
                            "parameters": {
                                "no-match": "0.0",
                                "no-input": "0.0",
                                "menu": "welcome",
                                "menu.original": "1"
                            }
                        }
                    ],
                    "intent": {
                        "name": "projects/ABC/agent/intents/697e11fb-056a-4a0c-9716-6d9bf570c830",
                        "displayName": "[firstmessage] - select_menu"
                    },
                    "intentDetectionConfidence": 1,
                    "diagnosticInfo": {
                        "original_webhook_payload": "{\n  \"responseId\": \"d36b3c99-31d0-49bc-a0ff-06f1c5102fbb-2316b108\",\n  \"queryResult\": {\n    \"queryText\": \"1\",\n    \"action\": \"biodata.select_menu\",\n    \"parameters\": {\n      \"menu\": \"welcome\"\n    },\n    \"allRequiredParamsPresent\": true,\n    \"fulfillmentMessages\": [{\n      \"text\": {\n        \"text\": [\"\"]\n      }\n    }],\n    \"outputContexts\": [{\n      \"name\": \"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-select_menu-followup\",\n      \"lifespanCount\": 2,\n      \"parameters\": {\n        \"menu\": \"welcome\",\n        \"menu.original\": \"1\"\n      }\n    }, {\n      \"name\": \"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage\",\n      \"lifespanCount\": 1,\n      \"parameters\": {\n        \"menu\": \"welcome\",\n        \"menu.original\": \"1\"\n      }\n    }, {\n      \"name\": \"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-followup\",\n      \"lifespanCount\": 1,\n      \"parameters\": {\n        \"menu\": \"welcome\",\n        \"menu.original\": \"1\"\n      }\n    }, {\n      \"name\": \"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/_firstmessage_\",\n      \"lifespanCount\": 1,\n      \"parameters\": {\n        \"menu\": \"welcome\",\n        \"menu.original\": \"1\"\n      }\n    }, {\n      \"name\": \"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/__system_counters__\",\n      \"lifespanCount\": 1,\n      \"parameters\": {\n        \"no-input\": 0.0,\n        \"no-match\": 0.0,\n        \"menu\": \"welcome\",\n        \"menu.original\": \"1\"\n      }\n    }],\n    \"intent\": {\n      \"name\": \"projects/ABC/agent/intents/697e11fb-056a-4a0c-9716-6d9bf570c830\",\n      \"displayName\": \"[firstmessage] - select_menu\"\n    },\n    \"intentDetectionConfidence\": 1.0,\n    \"languageCode\": \"id\"\n  },\n  \"originalDetectIntentRequest\": {\n    \"source\": \"DIALOGFLOW_CONSOLE\",\n    \"payload\": {\n    }\n  },\n  \"session\": \"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb\"\n}",
                        "webhook_latency_ms": "1776.0"
                    },
                    "languageCode": "id",
                    "sentimentAnalysisResult": {
                        "queryTextSentiment": {}
                    }
                },
                "webhookStatus": {
                    "code": 14,
                    "message": "Webhook call failed. Error: UNAVAILABLE, State: URL_UNREACHABLE, Reason: UNREACHABLE_5xx, HTTP status code: 503."
                },
                "agentId": "f3259b42-4e78-418b-a5ab-ffdd78c0988a"
            },
            "responseTime": "2023-08-18T15:21:42.995Z",
            "deleteTime": "2024-09-21T15:21:42.995Z",
            "logType": "DEFAULT",
            "conversationResponseJson": "{\n  \"queryText\": \"1\",\n  \"action\": \"biodata.select_menu\",\n  \"parameters\": {\n    \"menu\": \"welcome\"\n  },\n  \"fulfillmentMessages\": [{\n    \"text\": {\n      \"text\": [\"\"]\n    },\n    \"lang\": \"id\"\n  }],\n  \"outputContexts\": [{\n    \"name\": \"firstmessage-select_menu-followup\",\n    \"lifespanCount\": 2,\n    \"parameters\": {\n      \"menu\": \"welcome\",\n      \"menu.original\": \"1\"\n    }\n  }, {\n    \"name\": \"firstmessage\",\n    \"lifespanCount\": 1,\n    \"parameters\": {\n      \"menu\": \"welcome\",\n      \"menu.original\": \"1\"\n    },\n    \"lifetime\": \"1200s\",\n    \"createdTimestamp\": \"2023-08-18T15:21:15.962105Z\",\n    \"requestCount\": 1\n  }, {\n    \"name\": \"firstmessage-followup\",\n    \"lifespanCount\": 1,\n    \"parameters\": {\n      \"menu\": \"welcome\",\n      \"menu.original\": \"1\"\n    },\n    \"lifetime\": \"1200s\",\n    \"createdTimestamp\": \"2023-08-18T15:21:15.962116Z\",\n    \"requestCount\": 1\n  }, {\n    \"name\": \"_firstmessage_\",\n    \"lifespanCount\": 1,\n    \"parameters\": {\n      \"menu\": \"welcome\",\n      \"menu.original\": \"1\"\n    },\n    \"lifetime\": \"1200s\",\n    \"createdTimestamp\": \"2023-08-18T15:21:15.962119Z\",\n    \"requestCount\": 1\n  }, {\n    \"name\": \"__system_counters__\",\n    \"lifespanCount\": 1,\n    \"parameters\": {\n      \"menu\": \"welcome\",\n      \"menu.original\": \"1\",\n      \"no-input\": \"0.0\",\n      \"no-match\": \"0.0\"\n    },\n    \"lifetime\": \"1200s\",\n    \"createdTimestamp\": \"2023-08-18T15:21:15.962122Z\",\n    \"requestCount\": 2\n  }],\n  \"intent\": {\n    \"id\": \"697e11fb-056a-4a0c-9716-6d9bf570c830\",\n    \"displayName\": \"[firstmessage] - select_menu\",\n    \"priority\": 500000,\n    \"webhookState\": \"WEBHOOK_STATE_ENABLED\",\n    \"inputContextNames\": [\"firstmessage\"],\n    \"action\": \"biodata.select_menu\",\n    \"outputContexts\": [{\n      \"name\": \"firstmessage-select_menu-followup\",\n      \"lifespanCount\": 2\n    }],\n    \"parameters\": [{\n      \"id\": \"4bde5146-694f-4f3b-8830-287aac8ede53\",\n      \"displayName\": \"menu\",\n      \"value\": \"$menu\",\n      \"entityTypeDisplayName\": \"@firstmessage_menu\"\n    }],\n    \"messages\": [{\n      \"text\": {\n      },\n      \"lang\": \"id\"\n    }, {\n      \"text\": {\n      },\n      \"lang\": \"en\"\n    }],\n    \"rootFollowupIntentId\": \"9f87a104-d094-4daf-ad18-d9444a8578aa\",\n    \"parentFollowupIntentId\": \"9f87a104-d094-4daf-ad18-d9444a8578aa\"\n  },\n  \"intentDetectionConfidence\": 1.0,\n  \"diagnosticInfo\": {\n    \"webhook_latency_ms\": \"1776.0\",\n    \"original_webhook_payload\": \"{\\n  \\\"responseId\\\": \\\"d36b3c99-31d0-49bc-a0ff-06f1c5102fbb-2316b108\\\",\\n  \\\"queryResult\\\": {\\n    \\\"queryText\\\": \\\"1\\\",\\n    \\\"action\\\": \\\"biodata.select_menu\\\",\\n    \\\"parameters\\\": {\\n      \\\"menu\\\": \\\"welcome\\\"\\n    },\\n    \\\"allRequiredParamsPresent\\\": true,\\n    \\\"fulfillmentMessages\\\": [{\\n      \\\"text\\\": {\\n        \\\"text\\\": [\\\"\\\"]\\n      }\\n    }],\\n    \\\"outputContexts\\\": [{\\n      \\\"name\\\": \\\"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-select_menu-followup\\\",\\n      \\\"lifespanCount\\\": 2,\\n      \\\"parameters\\\": {\\n        \\\"menu\\\": \\\"welcome\\\",\\n        \\\"menu.original\\\": \\\"1\\\"\\n      }\\n    }, {\\n      \\\"name\\\": \\\"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage\\\",\\n      \\\"lifespanCount\\\": 1,\\n      \\\"parameters\\\": {\\n        \\\"menu\\\": \\\"welcome\\\",\\n        \\\"menu.original\\\": \\\"1\\\"\\n      }\\n    }, {\\n      \\\"name\\\": \\\"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/firstmessage-followup\\\",\\n      \\\"lifespanCount\\\": 1,\\n      \\\"parameters\\\": {\\n        \\\"menu\\\": \\\"welcome\\\",\\n        \\\"menu.original\\\": \\\"1\\\"\\n      }\\n    }, {\\n      \\\"name\\\": \\\"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/_firstmessage_\\\",\\n      \\\"lifespanCount\\\": 1,\\n      \\\"parameters\\\": {\\n        \\\"menu\\\": \\\"welcome\\\",\\n        \\\"menu.original\\\": \\\"1\\\"\\n      }\\n    }, {\\n      \\\"name\\\": \\\"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb/contexts/__system_counters__\\\",\\n      \\\"lifespanCount\\\": 1,\\n      \\\"parameters\\\": {\\n        \\\"no-input\\\": 0.0,\\n        \\\"no-match\\\": 0.0,\\n        \\\"menu\\\": \\\"welcome\\\",\\n        \\\"menu.original\\\": \\\"1\\\"\\n      }\\n    }],\\n    \\\"intent\\\": {\\n      \\\"name\\\": \\\"projects/ABC/agent/intents/697e11fb-056a-4a0c-9716-6d9bf570c830\\\",\\n      \\\"displayName\\\": \\\"[firstmessage] - select_menu\\\"\\n    },\\n    \\\"intentDetectionConfidence\\\": 1.0,\\n    \\\"languageCode\\\": \\\"id\\\"\\n  },\\n  \\\"originalDetectIntentRequest\\\": {\\n    \\\"source\\\": \\\"DIALOGFLOW_CONSOLE\\\",\\n    \\\"payload\\\": {\\n    }\\n  },\\n  \\\"session\\\": \\\"projects/ABC/agent/sessions/98bcc833-3521-7ecc-8ba7-b1ef963151cb\\\"\\n}\"\n  },\n  \"languageCode\": \"id\",\n  \"slotfillingMetadata\": {\n    \"allRequiredParamsPresent\": true\n  },\n  \"sentimentAnalysisResult\": {\n    \"queryTextSentiment\": {\n    }\n  },\n  \"id\": \"d36b3c99-31d0-49bc-a0ff-06f1c5102fbb-2316b108\",\n  \"sessionId\": \"98bcc833-3521-7ecc-8ba7-b1ef963151cb\",\n  \"timestamp\": \"2023-08-18T15:21:41.19315Z\",\n  \"source\": \"agent\",\n  \"webhookStatus\": {\n    \"webhookEnabledForAgent\": true,\n    \"webhookStatus\": {\n      \"code\": 14,\n      \"message\": \"Webhook call failed. Error: UNAVAILABLE, State: URL_UNREACHABLE, Reason: UNREACHABLE_5xx, HTTP status code: 503.\"\n    }\n  },\n  \"agentEnvironmentId\": {\n    \"agentId\": \"f3259b42-4e78-418b-a5ab-ffdd78c0988a\",\n    \"cloudProjectId\": \"ABC\"\n  },\n  \"queriedIntentsCount\": 1624\n}"
        }
    ],
    "name": "projects/ABC/locations/global/agent/environments/draft/sessions/0d62557fae218f226e2e8f22cf41c70de47126faf69bb9079b952b52b3ef78c4/conversations/1692372075953",
    "conversationResponse": {
        "queryText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "parameters": {},
        "fulfillmentText": "Terima kasih sudah menghubungi * Customer Care*, ",
        "fulfillmentMessages": [
            {
                "text": {
                    "text": [
                        "Terima kasih sudah menghubungi * Customer Care*,"
                    ]
                },
                "lang": "id"
            }
        ],
        "outputContexts": [
            {
                "name": "firstmessage",
                "lifespanCount": 2
            },
            {
                "name": "firstmessage-followup",
                "lifespanCount": 2
            },
            {
                "name": "_firstmessage_",
                "lifespanCount": 2
            },
            {
                "name": "__system_counters__",
                "lifespanCount": 1,
                "parameters": {
                    "no-input": "0.0",
                    "no-match": "1.0"
                },
                "requestCount": 1
            }
        ],
        "intent": {
            "id": "9f87a104-d094-4daf-ad18-d9444a8578aa",
            "displayName": "[firstmessage]",
            "priority": 500000,
            "isFallback": true,
            "events": [
                "firstmessage"
            ],
            "outputContexts": [
                {
                    "name": "firstmessage",
                    "lifespanCount": 2
                },
                {
                    "name": "firstmessage-followup",
                    "lifespanCount": 2
                },
                {
                    "name": "_firstmessage_",
                    "lifespanCount": 2
                }
            ],
            "messages": [
                {
                    "text": {
                        "text": [
                            "Terima kasih."
                        ]
                    },
                    "lang": "id"
                },
                {
                    "text": {
                        "text": [
                            "I didn't get that. Can you say it again?",
                            "I missed what you said. What was that?",
                            "Sorry, could you say that again?",
                            "Sorry, can you say that again?",
                            "Can you say that again?",
                            "Sorry, I didn't get that. Can you rephrase?",
                            "Sorry, what was that?",
                            "One more time?",
                            "What was that?",
                            "Say that one more time?",
                            "I didn't get that. Can you repeat?",
                            "I missed that, say that again?"
                        ]
                    },
                    "lang": "en"
                }
            ]
        },
        "intentDetectionConfidence": 1,
        "languageCode": "id",
        "slotfillingMetadata": {
            "allRequiredParamsPresent": true
        },
        "sentimentAnalysisResult": {
            "queryTextSentiment": {
                "score": 0.1,
                "magnitude": 0.1
            }
        },
        "id": "03be5e2e-43f5-4fd6-8ca9-169a2be6d8b9-2316b108",
        "sessionId": "98bcc833-3521-7ecc-8ba7-b1ef963151cb",
        "timestamp": "2023-08-18T15:21:15.950288Z",
        "source": "agent",
        "webhookStatus": {
            "webhookEnabledForAgent": true
        },
        "agentEnvironmentId": {
            "agentId": "f3259b42-4e78-418b-a5ab-ffdd78c0988a",
            "cloudProjectId": "ABC"
        },
        "queriedIntentsCount": 1624
    },
    "no": 1
}


const App = () => {

    // const [data, setData] = React.useState();
    const [data, setData] = React.useState(
        {
            "value": "Example |=\"{{B}}\"",
            "list": [
                {"id": "A", "display": "A"},
                {"id": "B", "display": "B"},
                {"id": "C", "display": "C"},
                {"id": "D", "display": "D"}
            ],
            "buttonText": "Run",
        }
    );
    const updateData = (newData) => {
        setData({...data, ...newData});
        console.log("update data", data)
    }
    const runQuery = (query) => {
        console.log("run query", query)
    }
    return (
        <div>
            <h1>Conversation History</h1>
            <IFrame width="100%" height="400">
                <ConversationHistory data={ChatHistory}/>
            </IFrame>
            <h1>React Flow</h1>
            <IFrame width="100%" height="400">
                <ReactFlowDiagram/>
            </IFrame>
            <h1>Chat Component with Tailwind Css</h1>
            <IFrame width="100%" height="400">
                <ChatWithTailwind/>
            </IFrame>
            <h1>Basic Primitives Diagrams for React</h1>
            <PrimitivesDiagrams/>
            {/*Error after use jsdelivr from esm.sh*/}
            {/*<h1>Retejs Basic</h1>*/}
            {/*<RetejsBasic/>*/}
            <h1>ReactAutocompleteInput</h1>
            <ReactAutocompleteInput
                updateData={(data) => {
                    updateData(data)
                }}
                data={data}
                runQuery={runQuery}
            />
            <h1>Timer</h1>
            <Timer
                updateData={updateData}
                data={data}
                runQuery={runQuery}
            />
            <h1>Example ESM.sh</h1>
            <EsmSh
                updateData={updateData}
                data={data}
                runQuery={runQuery}
            />
            <h2>Input Data:</h2>
            <TextareaAutosize
                style={{
                    width: "100%",
                }}
                placeholder="Input Data"
                value={JSON.stringify(data, null, 2)}
                onChange={(e) => {
                    //setData()
                    console.log(e.target.value)
                    try {
                        setData(JSON.parse(e.target.value))
                    } catch (e) {
                        setData(e.target?.value)
                    }
                }}
            />

            <h2>MyCustomComponent</h2>

            <MyCustomComponent
                updateData={updateData}
                data={data}
                runQuery={runQuery}
            />

            <h2>Dynamic Input</h2>

            <DynamicInput
                updateData={(data) => {
                    updateData(data)
                }}
                data={data}
                runQuery={runQuery}
            />

            <DateTimeLocal
                updateData={(data) => {
                    updateData(data)
                }}
                data={data}
                runQuery={runQuery}
            />
        </div>
    );
}


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home"/>);

// ReactDOM.render(<App/>, document.getElementById("root"));
