import { AssignmentLogs, AvailabilityViewer } from "./assignmentlogs"
import moment from 'https://cdn.jsdelivr.net/npm/moment@2.30.0/+esm';


let agentsAvailabilityLogs = AvailabilityViewer
let agentAssignmentLogs = AssignmentLogs
let filter = []
let showLoginOrLogout = false
let showRoomAssignmentLogs = true

function dateConverter(dateString) {
    // Buang 'Z', lalu parse manual
    const [datePart, timePart] = dateString.replace('Z', '').split('T');
    const [year, month, day] = datePart.split('-').map(Number);
    let [hour, minute, second] = timePart.split(':').map(Number);
    // second = 0; // Set second to 0 as per your requirement

    // Buat Date object sebagai waktu lokal (bukan UTC)
    const localDate = new Date(year, month - 1, day, hour, minute, second);
    return localDate;
}

// Function to convert AssignmentLogs to 2D graph data
const convertAssignmentLogsTo2dData = (assignmentLogs) => {
    const items = [];
    const agentCounts = new Map(); // Track current count per agent
    const groupsMap = new Map(); // Track groups for 2D graph

    // Sort logs by Assigned At time to process chronologically
    const sortedLogs = assignmentLogs.slice().sort((a, b) => {
        const timeA = dateConverter(a["Assigned At"]);

        const timeB = dateConverter(b["Assigned At"]);
        return timeA - timeB;
    });

    sortedLogs.forEach((log) => {
        const agentName = log["Agent Name"];
        const assignedAt = log["Assigned At"];

        // Skip if no agent name
        if (!agentName) return;

        // Filter logic: if filter has content and agent name is not in filter, skip
        if (filter.length > 0 && !filter.includes(agentName)) {
            return;
        }

        // Convert time to timestamp (keep as UTC)
        const assignedTime = dateConverter(assignedAt);

        // Add agent to groups if not already present
        if (!groupsMap.has(agentName)) {
            groupsMap.set(agentName, {
                id: agentName,
                content: agentName
            });
        }

        // Increment count untuk agent ini (+1)
        const currentCount = agentCounts.get(agentName) || 0;
        const newCount = currentCount + 1;
        agentCounts.set(agentName, newCount);

        // Add data point untuk assignment
        items.push({
            x: assignedTime,
            y: newCount,
            group: agentName,
            label: {
                content: `${newCount}`,
                xOffset: 0,
                yOffset: 3
            },
            title: `${agentName}: ${newCount} ${log["Room ID"]} assignments`,
            content: `${newCount}`
        });
    });

    // Convert groups map to array
    const groups = Array.from(groupsMap.values());

    console.log("Assignment trend data points:", items.length);
    console.log("Agent counts:", Object.fromEntries(agentCounts));

    return {
        items: items,
        groups: groups
    };
};

function parsingData() {
    let groups = []
    let allGroups = [];
    let listGroupsByName = {}

    function getTime(time) {
        let m = moment(time)
        return m.format('HH:mm:ss')
    }

    function isShow(group) {
        if (filter.length === 0) {
            return true
        } else {
            return filter.includes(group)
        }
    }

    function getContent(item) {
        return `${getTime(item.start)} - ${getTime(item.end)}`
    }

    let dateFormat = 'YYYY-MM-DDTHH:mm:ss'
    //reverse array
    let agentAvailability = agentsAvailabilityLogs.map((item, index) => {
        return agentsAvailabilityLogs[agentsAvailabilityLogs.length - index - 1]
    })

    let list_agent = {}

    let id = 0
    for (let i = 0; i < agentAvailability.length; i++) {
        let content = agentAvailability[i]["User Name"]
        if (list_agent[content] !== undefined) {
            continue
        } else {
            if (!isShow(content)) {
                continue
            }

            id += 1
            list_agent[content] = {
                id: id, content: content,
            }
        }
    }

    for (let i in list_agent) {
        let g = list_agent[i]
        allGroups.push(g)

        if (listGroupsByName[g.content] === undefined) {
            listGroupsByName[g.content] = g.id
        }
    }

    let items = []
    let no = 0
    for (let i = 0; i < allGroups.length; i++) {
        const { id, content } = allGroups[i]
        let addGroup = false
        let item = {
            id: null, content: content, group: id, start: null, end: null,
        }
        for (let j = 0; j < agentAvailability.length; j++) {
            const {
                "Activity": activity,
                "User Name": userName,
                "Params": params,
                "Event Time": eventTime,
                "Availability": availability
            } = agentAvailability[j]
            let formattedDate = eventTime // Format the date
            if (userName === content) {
                // console.log(`userName: ${userName}, event time: ${eventTime}, content: ${content}, activity: ${activity}, availability: ${availability}`)

                if (activity !== "SET_AVAILABILITY") {
                    if (activity === "LOG_IN" || activity === "LOG_OUT") {
                        if (showLoginOrLogout) {
                            addGroup = true
                            no = no + 1
                            items.push({
                                id: no,
                                content: activity,
                                title: eventTime,
                                group: id,
                                start: formattedDate,
                                type: "point"
                            })
                        }
                    } else {
                        addGroup = true
                        no = no + 1
                        items.push({
                            id: no, content: activity, title: eventTime, group: id, start: formattedDate, type: "point"
                        })
                    }
                }

                if (availability === "not available" && item.start == null) continue
                if (availability === "available" && item.start != null) continue

                if (availability === "available") {
                    item.start = formattedDate
                } else if (availability === "not available") {
                    item.end = formattedDate
                }

                if (item.start != null && item.end != null) {
                    addGroup = true
                    no = no + 1
                    item.content = getContent(item)
                    item.title = `${content} Online ${item.start} - ${item.end}`
                    item.id = no
                    items.push({ ...item })
                    item.start = null
                    item.end = null
                }
                addGroup = true
            }
        }
        if (item.start != null && item.end == null) {
            no = no + 1
            item.id = no
            let now = moment().utc();
            now.add(7, 'hours');
            item.end = now.format(dateFormat)
            item.content = getContent(item)
            item.title = `${content} Online ${item.start} - ${item.end}`
            items.push({ ...item })
            item.start = null
            item.end = null
        }
        if (addGroup) {
            groups.push(allGroups[i])
        }
    }


    // handle assignment logs
    if (showRoomAssignmentLogs) {
        if (agentAssignmentLogs.length > 0) {
            var assignmentLogs = agentAssignmentLogs.map((item, index) => {
                return agentAssignmentLogs[agentAssignmentLogs.length - index - 1]
            })
            assignmentLogs.forEach(al => {
                console.log(al)
                no = no + 1
                items.push({
                    id: no,
                    title: `Assign ${typeof al["Room ID"] === 'string' ? al["Room ID"].replaceAll(".", "") : al["Room ID"]}\n Status: ${al["Session Status"]} Customer Name: ${al["Customer Name"]} Channel Name: ${al["Channel Name"]}`,
                    content: `Assign ${typeof al["Room ID"] === 'string' ? al["Room ID"].replaceAll(".", "") : al["Room ID"]}`,
                    group: listGroupsByName[al["Agent Name"]],
                    start: dateConverter(al["Assigned At"]),
                    // end: al["Deleted At"],
                    type: "point"
                })
            })
        }
    }
    let data2d = convertAssignmentLogsTo2dData(agentAssignmentLogs);

    return {
        items, groups, listData: agentAvailability,
        groupGraph2d: data2d.groups,
        itemGraph2d: data2d.items,
    }
}

// let data = parsingData()
// return data

export const ParseSampleData = parsingData