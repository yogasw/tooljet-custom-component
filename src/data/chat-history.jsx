export const ChatHistory = {
    "startTime": "2023-08-21T05:35:43.561Z",
    "endTime": "2023-08-21T05:35:52.156Z",
    "interactions": [
        {
            "name": "projects/ariokiasisten/locations/global/agent/environments/draft/sessions/7f7e2433cf68b803cce18777a4f8450400028ed9745eecb896d22f073023497d/conversations/1692595687895/interactions/18a169785c9-d725c",
            "inputContexts": [
                {
                    "name": "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/__system_counters__",
                    "lifespanCount": 1,
                    "parameters": {
                        "intent_action": "input.unknown",
                        "no-match": "1.0",
                        "no-input": "0.0"
                    }
                }
            ],
            "originalRequestSource": "DIALOGFLOW_CONSOLE",
            "v2Response": {
                "responseId": "bfe068dc-e7e0-4f11-b9ea-d136031c1511-2316b108",
                "queryResult": {
                    "queryText": "halo",
                    "parameters": {},
                    "allRequiredParamsPresent": true,
                    "fulfillmentText": "Halo",
                    "fulfillmentMessages": [
                        {
                            "text": {
                                "text": [
                                    "Halo"
                                ]
                            }
                        }
                    ],
                    "outputContexts": [
                        {
                            "name": "projects/ariokiasisten/agent/sessions/1c359803-0d8c-e674-2192-1bca06ac8264/contexts/halo",
                            "lifespanCount": 5
                        },
                        {
                            "name": "projects/ariokiasisten/agent/sessions/1c359803-0d8c-e674-2192-1bca06ac8264/contexts/halo-followup",
                            "lifespanCount": 2
                        },
                        {
                            "name": "projects/ariokiasisten/agent/sessions/1c359803-0d8c-e674-2192-1bca06ac8264/contexts/__system_counters__",
                            "lifespanCount": 1,
                            "parameters": {
                                "no-input": "0.0",
                                "no-match": "0.0"
                            }
                        }
                    ],
                    "intent": {
                        "name": "projects/ariokiasisten/agent/intents/6c6a18cf-495c-42d8-93f2-24dc33222751",
                        "displayName": "Halo"
                    },
                    "intentDetectionConfidence": 1,
                    "languageCode": "id",
                    "sentimentAnalysisResult": {
                        "queryTextSentiment": {
                            "score": 0.2,
                            "magnitude": 0.2
                        }
                    }
                },
                "agentId": "aaf1a9ec-8f04-44db-9b9b-12079a516c19"
            },
            "responseTime": "2023-08-21T05:35:43.561Z",
            "deleteTime": "2024-09-24T05:35:43.561Z",
            "logType": "DEFAULT",
            "conversationResponseJson": "{\n  \"queryText\": \"halo\",\n  \"parameters\": {\n  },\n  \"fulfillmentText\": \"Halo\",\n  \"fulfillmentMessages\": [{\n    \"text\": {\n      \"text\": [\"Halo\"]\n    },\n    \"lang\": \"id\"\n  }],\n  \"outputContexts\": [{\n    \"name\": \"halo\",\n    \"lifespanCount\": 5\n  }, {\n    \"name\": \"halo-followup\",\n    \"lifespanCount\": 2\n  }, {\n    \"name\": \"__system_counters__\",\n    \"lifespanCount\": 1,\n    \"parameters\": {\n      \"no-input\": \"0.0\",\n      \"no-match\": \"0.0\"\n    },\n    \"lifetime\": \"1200s\",\n    \"createdTimestamp\": \"2023-08-21T05:35:33.647159Z\",\n    \"requestCount\": 2\n  }],\n  \"intent\": {\n    \"id\": \"6c6a18cf-495c-42d8-93f2-24dc33222751\",\n    \"displayName\": \"Halo\",\n    \"priority\": 500000,\n    \"outputContexts\": [{\n      \"name\": \"halo\",\n      \"lifespanCount\": 5\n    }, {\n      \"name\": \"Halo-followup\",\n      \"lifespanCount\": 2\n    }],\n    \"messages\": [{\n      \"text\": {\n        \"text\": [\"Halo\"]\n      },\n      \"lang\": \"id\"\n    }]\n  },\n  \"intentDetectionConfidence\": 1.0,\n  \"languageCode\": \"id\",\n  \"slotfillingMetadata\": {\n    \"allRequiredParamsPresent\": true\n  },\n  \"sentimentAnalysisResult\": {\n    \"queryTextSentiment\": {\n      \"score\": 0.2,\n      \"magnitude\": 0.2\n    }\n  },\n  \"id\": \"bfe068dc-e7e0-4f11-b9ea-d136031c1511-2316b108\",\n  \"sessionId\": \"1c359803-0d8c-e674-2192-1bca06ac8264\",\n  \"timestamp\": \"2023-08-21T05:35:43.558428Z\",\n  \"source\": \"agent\",\n  \"agentEnvironmentId\": {\n    \"agentId\": \"aaf1a9ec-8f04-44db-9b9b-12079a516c19\",\n    \"cloudProjectId\": \"ariokiasisten\"\n  },\n  \"queriedIntentsCount\": 18\n}"
        },
        {
            "name": "projects/ariokiasisten/locations/global/agent/environments/draft/sessions/7f7e2433cf68b803cce18777a4f8450400028ed9745eecb896d22f073023497d/conversations/1692595687895/interactions/18a16978bba-a9928",
            "inputContexts": [
                {
                    "name": "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/halo",
                    "lifespanCount": 5,
                    "parameters": {
                        "intent_action": ""
                    }
                },
                {
                    "name": "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/halo-followup",
                    "lifespanCount": 2,
                    "parameters": {
                        "intent_action": ""
                    }
                },
                {
                    "name": "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/__system_counters__",
                    "lifespanCount": 1,
                    "parameters": {
                        "intent_action": "",
                        "no-input": "0.0",
                        "no-match": "0.0"
                    }
                }
            ],
            "originalRequestSource": "DIALOGFLOW_CONSOLE",
            "v2Response": {
                "responseId": "e938d8a9-dd09-4caf-8869-29bb11fa0a9d-2316b108",
                "queryResult": {
                    "queryText": "1",
                    "action": "Halo.Halo-custom",
                    "parameters": {},
                    "allRequiredParamsPresent": true,
                    "fulfillmentText": "1",
                    "fulfillmentMessages": [
                        {
                            "text": {
                                "text": [
                                    "1"
                                ]
                            }
                        }
                    ],
                    "outputContexts": [
                        {
                            "name": "projects/ariokiasisten/agent/sessions/1c359803-0d8c-e674-2192-1bca06ac8264/contexts/1-followup",
                            "lifespanCount": 2
                        },
                        {
                            "name": "projects/ariokiasisten/agent/sessions/1c359803-0d8c-e674-2192-1bca06ac8264/contexts/halo",
                            "lifespanCount": 4
                        },
                        {
                            "name": "projects/ariokiasisten/agent/sessions/1c359803-0d8c-e674-2192-1bca06ac8264/contexts/halo-followup",
                            "lifespanCount": 1
                        }
                    ],
                    "intent": {
                        "name": "projects/ariokiasisten/agent/intents/f15552b6-7402-4e51-8b33-36949f43c20a",
                        "displayName": "1"
                    },
                    "intentDetectionConfidence": 1,
                    "languageCode": "id",
                    "sentimentAnalysisResult": {
                        "queryTextSentiment": {}
                    }
                },
                "agentId": "aaf1a9ec-8f04-44db-9b9b-12079a516c19"
            },
            "responseTime": "2023-08-21T05:35:45.082Z",
            "deleteTime": "2024-09-24T05:35:45.082Z",
            "logType": "DEFAULT",
            "conversationResponseJson": "{\n  \"queryText\": \"1\",\n  \"action\": \"Halo.Halo-custom\",\n  \"parameters\": {\n  },\n  \"fulfillmentText\": \"1\",\n  \"fulfillmentMessages\": [{\n    \"text\": {\n      \"text\": [\"1\"]\n    },\n    \"lang\": \"id\"\n  }],\n  \"outputContexts\": [{\n    \"name\": \"1-followup\",\n    \"lifespanCount\": 2\n  }, {\n    \"name\": \"halo\",\n    \"lifespanCount\": 4,\n    \"lifetime\": \"1200s\",\n    \"createdTimestamp\": \"2023-08-21T05:35:43.558951Z\",\n    \"requestCount\": 1\n  }, {\n    \"name\": \"halo-followup\",\n    \"lifespanCount\": 1,\n    \"lifetime\": \"1200s\",\n    \"createdTimestamp\": \"2023-08-21T05:35:43.558962Z\",\n    \"requestCount\": 1\n  }],\n  \"intent\": {\n    \"id\": \"f15552b6-7402-4e51-8b33-36949f43c20a\",\n    \"displayName\": \"1\",\n    \"priority\": 500000,\n    \"inputContextNames\": [\"halo\", \"Halo-followup\"],\n    \"action\": \"Halo.Halo-custom\",\n    \"outputContexts\": [{\n      \"name\": \"1-followup\",\n      \"lifespanCount\": 2\n    }],\n    \"messages\": [{\n      \"text\": {\n        \"text\": [\"1\"]\n      },\n      \"lang\": \"id\"\n    }, {\n      \"text\": {\n      },\n      \"lang\": \"en\"\n    }],\n    \"rootFollowupIntentId\": \"6c6a18cf-495c-42d8-93f2-24dc33222751\",\n    \"parentFollowupIntentId\": \"6c6a18cf-495c-42d8-93f2-24dc33222751\"\n  },\n  \"intentDetectionConfidence\": 1.0,\n  \"languageCode\": \"id\",\n  \"slotfillingMetadata\": {\n    \"allRequiredParamsPresent\": true\n  },\n  \"sentimentAnalysisResult\": {\n    \"queryTextSentiment\": {\n    }\n  },\n  \"id\": \"e938d8a9-dd09-4caf-8869-29bb11fa0a9d-2316b108\",\n  \"sessionId\": \"1c359803-0d8c-e674-2192-1bca06ac8264\",\n  \"timestamp\": \"2023-08-21T05:35:45.078537Z\",\n  \"source\": \"agent\",\n  \"agentEnvironmentId\": {\n    \"agentId\": \"aaf1a9ec-8f04-44db-9b9b-12079a516c19\",\n    \"cloudProjectId\": \"ariokiasisten\"\n  },\n  \"queriedIntentsCount\": 18\n}"
        },
        {
            "name": "projects/ariokiasisten/locations/global/agent/environments/draft/sessions/7f7e2433cf68b803cce18777a4f8450400028ed9745eecb896d22f073023497d/conversations/1692595687895/interactions/18a16979049-e6a00",
            "inputContexts": [
                {
                    "name": "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/1-followup",
                    "lifespanCount": 2,
                    "parameters": {
                        "intent_action": "Halo.Halo-custom"
                    }
                },
                {
                    "name": "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/halo",
                    "lifespanCount": 4,
                    "parameters": {
                        "intent_action": "Halo.Halo-custom"
                    }
                },
                {
                    "name": "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/halo-followup",
                    "lifespanCount": 1,
                    "parameters": {
                        "intent_action": "Halo.Halo-custom"
                    }
                }
            ],
            "originalRequestSource": "DIALOGFLOW_CONSOLE",
            "v2Response": {
                "responseId": "093a6bec-4741-4a02-8306-44f121d96788-2316b108",
                "queryResult": {
                    "queryText": "2",
                    "action": "Halo.Halo-custom.1-custom",
                    "parameters": {},
                    "allRequiredParamsPresent": true,
                    "fulfillmentText": "2",
                    "fulfillmentMessages": [
                        {
                            "text": {
                                "text": [
                                    "2"
                                ]
                            }
                        }
                    ],
                    "outputContexts": [
                        {
                            "name": "projects/ariokiasisten/agent/sessions/1c359803-0d8c-e674-2192-1bca06ac8264/contexts/2-followup",
                            "lifespanCount": 1
                        },
                        {
                            "name": "projects/ariokiasisten/agent/sessions/1c359803-0d8c-e674-2192-1bca06ac8264/contexts/1-followup",
                            "lifespanCount": 1
                        },
                        {
                            "name": "projects/ariokiasisten/agent/sessions/1c359803-0d8c-e674-2192-1bca06ac8264/contexts/halo",
                            "lifespanCount": 3
                        }
                    ],
                    "intent": {
                        "name": "projects/ariokiasisten/agent/intents/5c08ab89-39d4-41d8-9957-aa91324cc16e",
                        "displayName": "2"
                    },
                    "intentDetectionConfidence": 1,
                    "languageCode": "id",
                    "sentimentAnalysisResult": {
                        "queryTextSentiment": {
                            "score": -0.1,
                            "magnitude": 0.1
                        }
                    }
                },
                "agentId": "aaf1a9ec-8f04-44db-9b9b-12079a516c19"
            },
            "responseTime": "2023-08-21T05:35:46.249Z",
            "deleteTime": "2024-09-24T05:35:46.249Z",
            "logType": "DEFAULT",
            "conversationResponseJson": "{\n  \"queryText\": \"2\",\n  \"action\": \"Halo.Halo-custom.1-custom\",\n  \"parameters\": {\n  },\n  \"fulfillmentText\": \"2\",\n  \"fulfillmentMessages\": [{\n    \"text\": {\n      \"text\": [\"2\"]\n    },\n    \"lang\": \"id\"\n  }],\n  \"outputContexts\": [{\n    \"name\": \"2-followup\",\n    \"lifespanCount\": 1\n  }, {\n    \"name\": \"1-followup\",\n    \"lifespanCount\": 1,\n    \"lifetime\": \"1200s\",\n    \"createdTimestamp\": \"2023-08-21T05:35:45.079327Z\",\n    \"requestCount\": 1\n  }, {\n    \"name\": \"halo\",\n    \"lifespanCount\": 3,\n    \"lifetime\": \"1200s\",\n    \"createdTimestamp\": \"2023-08-21T05:35:43.558951Z\",\n    \"requestCount\": 2\n  }],\n  \"intent\": {\n    \"id\": \"5c08ab89-39d4-41d8-9957-aa91324cc16e\",\n    \"displayName\": \"2\",\n    \"priority\": 500000,\n    \"inputContextNames\": [\"1-followup\"],\n    \"action\": \"Halo.Halo-custom.1-custom\",\n    \"outputContexts\": [{\n      \"name\": \"2-followup\",\n      \"lifespanCount\": 1\n    }],\n    \"messages\": [{\n      \"text\": {\n        \"text\": [\"2\"]\n      },\n      \"lang\": \"id\"\n    }, {\n      \"text\": {\n      },\n      \"lang\": \"en\"\n    }],\n    \"rootFollowupIntentId\": \"6c6a18cf-495c-42d8-93f2-24dc33222751\",\n    \"parentFollowupIntentId\": \"f15552b6-7402-4e51-8b33-36949f43c20a\"\n  },\n  \"intentDetectionConfidence\": 1.0,\n  \"languageCode\": \"id\",\n  \"slotfillingMetadata\": {\n    \"allRequiredParamsPresent\": true\n  },\n  \"sentimentAnalysisResult\": {\n    \"queryTextSentiment\": {\n      \"score\": -0.1,\n      \"magnitude\": 0.1\n    }\n  },\n  \"id\": \"093a6bec-4741-4a02-8306-44f121d96788-2316b108\",\n  \"sessionId\": \"1c359803-0d8c-e674-2192-1bca06ac8264\",\n  \"timestamp\": \"2023-08-21T05:35:46.24564Z\",\n  \"source\": \"agent\",\n  \"agentEnvironmentId\": {\n    \"agentId\": \"aaf1a9ec-8f04-44db-9b9b-12079a516c19\",\n    \"cloudProjectId\": \"ariokiasisten\"\n  },\n  \"queriedIntentsCount\": 18\n}"
        },
        {
            "name": "projects/ariokiasisten/locations/global/agent/environments/draft/sessions/7f7e2433cf68b803cce18777a4f8450400028ed9745eecb896d22f073023497d/conversations/1692595687895/interactions/18a16979601-10448",
            "inputContexts": [
                {
                    "name": "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/2-followup",
                    "lifespanCount": 1,
                    "parameters": {
                        "intent_action": "Halo.Halo-custom.1-custom"
                    }
                },
                {
                    "name": "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/1-followup",
                    "lifespanCount": 1,
                    "parameters": {
                        "intent_action": "Halo.Halo-custom.1-custom"
                    }
                },
                {
                    "name": "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/halo",
                    "lifespanCount": 3,
                    "parameters": {
                        "intent_action": "Halo.Halo-custom.1-custom"
                    }
                }
            ],
            "originalRequestSource": "DIALOGFLOW_CONSOLE",
            "v2Response": {
                "responseId": "8c294c8e-32a1-49bf-8c35-f939ad1c2741-2316b108",
                "queryResult": {
                    "queryText": "3",
                    "action": "Halo.Halo-custom.1-custom.2-custom",
                    "parameters": {},
                    "allRequiredParamsPresent": true,
                    "fulfillmentText": "3",
                    "fulfillmentMessages": [
                        {
                            "text": {
                                "text": [
                                    "3"
                                ]
                            }
                        }
                    ],
                    "outputContexts": [
                        {
                            "name": "projects/ariokiasisten/agent/sessions/1c359803-0d8c-e674-2192-1bca06ac8264/contexts/halo",
                            "lifespanCount": 2
                        }
                    ],
                    "intent": {
                        "name": "projects/ariokiasisten/agent/intents/0fc77ec2-1648-4ce5-861a-5dbc26d834f1",
                        "displayName": "3"
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
                "agentId": "aaf1a9ec-8f04-44db-9b9b-12079a516c19"
            },
            "responseTime": "2023-08-21T05:35:47.713Z",
            "deleteTime": "2024-09-24T05:35:47.713Z",
            "logType": "DEFAULT",
            "conversationResponseJson": "{\n  \"queryText\": \"3\",\n  \"action\": \"Halo.Halo-custom.1-custom.2-custom\",\n  \"parameters\": {\n  },\n  \"fulfillmentText\": \"3\",\n  \"fulfillmentMessages\": [{\n    \"text\": {\n      \"text\": [\"3\"]\n    },\n    \"lang\": \"id\"\n  }],\n  \"outputContexts\": [{\n    \"name\": \"halo\",\n    \"lifespanCount\": 2,\n    \"lifetime\": \"1200s\",\n    \"createdTimestamp\": \"2023-08-21T05:35:43.558951Z\",\n    \"requestCount\": 3\n  }],\n  \"intent\": {\n    \"id\": \"0fc77ec2-1648-4ce5-861a-5dbc26d834f1\",\n    \"displayName\": \"3\",\n    \"priority\": 500000,\n    \"inputContextNames\": [\"2-followup\"],\n    \"action\": \"Halo.Halo-custom.1-custom.2-custom\",\n    \"messages\": [{\n      \"text\": {\n        \"text\": [\"3\"]\n      },\n      \"lang\": \"id\"\n    }, {\n      \"text\": {\n      },\n      \"lang\": \"en\"\n    }],\n    \"rootFollowupIntentId\": \"6c6a18cf-495c-42d8-93f2-24dc33222751\",\n    \"parentFollowupIntentId\": \"5c08ab89-39d4-41d8-9957-aa91324cc16e\"\n  },\n  \"intentDetectionConfidence\": 1.0,\n  \"languageCode\": \"id\",\n  \"slotfillingMetadata\": {\n    \"allRequiredParamsPresent\": true\n  },\n  \"sentimentAnalysisResult\": {\n    \"queryTextSentiment\": {\n      \"score\": 0.1,\n      \"magnitude\": 0.1\n    }\n  },\n  \"id\": \"8c294c8e-32a1-49bf-8c35-f939ad1c2741-2316b108\",\n  \"sessionId\": \"1c359803-0d8c-e674-2192-1bca06ac8264\",\n  \"timestamp\": \"2023-08-21T05:35:47.710847Z\",\n  \"source\": \"agent\",\n  \"agentEnvironmentId\": {\n    \"agentId\": \"aaf1a9ec-8f04-44db-9b9b-12079a516c19\",\n    \"cloudProjectId\": \"ariokiasisten\"\n  },\n  \"queriedIntentsCount\": 18\n}"
        },
        {
            "name": "projects/ariokiasisten/locations/global/agent/environments/draft/sessions/7f7e2433cf68b803cce18777a4f8450400028ed9745eecb896d22f073023497d/conversations/1692595687895/interactions/18a1697a75c-aee9e",
            "inputContexts": [
                {
                    "name": "projects/ariokiasisten/locations/global/agent/sessions/-/contexts/halo",
                    "lifespanCount": 2,
                    "parameters": {
                        "intent_action": "Halo.Halo-custom.1-custom.2-custom"
                    }
                }
            ],
            "originalRequestSource": "DIALOGFLOW_CONSOLE",
            "v2Response": {
                "responseId": "f4071396-2b8c-4ebb-a7e9-3d62f63b689b-2316b108",
                "queryResult": {
                    "queryText": "1",
                    "parameters": {
                        "number": "1.0"
                    },
                    "allRequiredParamsPresent": true,
                    "fulfillmentText": "Anda Memilih Bahasa indonesia",
                    "fulfillmentMessages": [
                        {
                            "text": {
                                "text": [
                                    "Anda Memilih Bahasa indonesia"
                                ]
                            }
                        }
                    ],
                    "outputContexts": [
                        {
                            "name": "projects/ariokiasisten/agent/sessions/1c359803-0d8c-e674-2192-1bca06ac8264/contexts/halo",
                            "lifespanCount": 5,
                            "parameters": {
                                "number.original": "1",
                                "number": "1.0"
                            }
                        },
                        {
                            "name": "projects/ariokiasisten/agent/sessions/1c359803-0d8c-e674-2192-1bca06ac8264/contexts/greeting",
                            "lifespanCount": 5,
                            "parameters": {
                                "number": "1.0",
                                "number.original": "1"
                            }
                        },
                        {
                            "name": "projects/ariokiasisten/agent/sessions/1c359803-0d8c-e674-2192-1bca06ac8264/contexts/greeting-followup",
                            "lifespanCount": 2,
                            "parameters": {
                                "number": "1.0",
                                "number.original": "1"
                            }
                        }
                    ],
                    "intent": {
                        "name": "projects/ariokiasisten/agent/intents/96334cd9-a0fd-4775-9b9b-dcee0fef4ac9",
                        "displayName": "Greeting"
                    },
                    "intentDetectionConfidence": 1,
                    "languageCode": "id",
                    "sentimentAnalysisResult": {
                        "queryTextSentiment": {}
                    }
                },
                "agentId": "aaf1a9ec-8f04-44db-9b9b-12079a516c19"
            },
            "responseTime": "2023-08-21T05:35:52.156Z",
            "deleteTime": "2024-09-24T05:35:52.156Z",
            "logType": "DEFAULT",
            "conversationResponseJson": "{\n  \"queryText\": \"1\",\n  \"parameters\": {\n    \"number\": \"1.0\"\n  },\n  \"fulfillmentText\": \"Anda Memilih Bahasa indonesia\",\n  \"fulfillmentMessages\": [{\n    \"text\": {\n      \"text\": [\"Anda Memilih Bahasa indonesia\"]\n    },\n    \"lang\": \"id\"\n  }],\n  \"outputContexts\": [{\n    \"name\": \"halo\",\n    \"lifespanCount\": 5,\n    \"parameters\": {\n      \"number\": \"1.0\",\n      \"number.original\": \"1\"\n    }\n  }, {\n    \"name\": \"greeting\",\n    \"lifespanCount\": 5,\n    \"parameters\": {\n      \"number\": \"1.0\",\n      \"number.original\": \"1\"\n    }\n  }, {\n    \"name\": \"greeting-followup\",\n    \"lifespanCount\": 2,\n    \"parameters\": {\n      \"number\": \"1.0\",\n      \"number.original\": \"1\"\n    }\n  }],\n  \"intent\": {\n    \"id\": \"96334cd9-a0fd-4775-9b9b-dcee0fef4ac9\",\n    \"displayName\": \"Greeting\",\n    \"priority\": 500000,\n    \"inputContextNames\": [\"halo\"],\n    \"outputContexts\": [{\n      \"name\": \"halo\",\n      \"lifespanCount\": 5\n    }, {\n      \"name\": \"greeting\",\n      \"lifespanCount\": 5\n    }, {\n      \"name\": \"Greeting-followup\",\n      \"lifespanCount\": 2\n    }],\n    \"parameters\": [{\n      \"id\": \"1591ae7f-3061-4428-a766-1c68c3b87e3d\",\n      \"displayName\": \"number\",\n      \"value\": \"$number\",\n      \"entityTypeDisplayName\": \"@sys.number\"\n    }],\n    \"messages\": [{\n      \"text\": {\n        \"text\": [\"Anda Memilih Bahasa indonesia\"]\n      },\n      \"lang\": \"id\"\n    }, {\n      \"text\": {\n        \"text\": [\"Anda Memilih Bahasa inggris\"]\n      },\n      \"lang\": \"en\"\n    }]\n  },\n  \"intentDetectionConfidence\": 1.0,\n  \"languageCode\": \"id\",\n  \"slotfillingMetadata\": {\n    \"allRequiredParamsPresent\": true\n  },\n  \"sentimentAnalysisResult\": {\n    \"queryTextSentiment\": {\n    }\n  },\n  \"id\": \"f4071396-2b8c-4ebb-a7e9-3d62f63b689b-2316b108\",\n  \"sessionId\": \"1c359803-0d8c-e674-2192-1bca06ac8264\",\n  \"timestamp\": \"2023-08-21T05:35:52.151893Z\",\n  \"source\": \"agent\",\n  \"agentEnvironmentId\": {\n    \"agentId\": \"aaf1a9ec-8f04-44db-9b9b-12079a516c19\",\n    \"cloudProjectId\": \"ariokiasisten\"\n  },\n  \"queriedIntentsCount\": 18\n}"
        }
    ],
    "name": "projects/ariokiasisten/locations/global/agent/environments/draft/sessions/7f7e2433cf68b803cce18777a4f8450400028ed9745eecb896d22f073023497d/conversations/1692595687895"
}
