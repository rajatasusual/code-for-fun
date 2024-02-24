/**
 * @param {number} n - Total number of people.
 * @param {number[][]} meetings - Array of meetings represented as [person1, person2, time].
 * @param {number} firstPerson - The person who initially knows the secret.
 * @return {number[]} - Array of people who know the secret.
 */
var findAllPeople = function(n, meetings, firstPerson) {
    // Initialize a set to keep track of people who know the secret.
    let knownSet = new Set([0, firstPerson]);
    
    // Sort meetings by time to optimize traversal.
    meetings.sort((a, b) => a[2] - b[2]);

    // Initialize an array to group meetings by time.
    let sortedMeetings = [];
    let seenTime = new Set(); // Set to keep track of seen times.
    
    // Group meetings by time.
    for (let meeting of meetings) {
        if (!seenTime.has(meeting[2])) {
            seenTime.add(meeting[2]);
            sortedMeetings.push([]);
        }
        sortedMeetings[sortedMeetings.length - 1].push([meeting[0], meeting[1]]);
    }

    // Iterate through each group of meetings.
    for (let meetingGroup of sortedMeetings) {
        let peopleKnowSecret = new Set(); // Set to store people who know the secret in this group.
        let graph = {}; // Graph to represent connections between people.
        
        // Populate the graph and people who know the secret in this group.
        for (let [p1, p2] of meetingGroup) {
            if (!graph[p1]) graph[p1] = [];
            if (!graph[p2]) graph[p2] = [];
            
            graph[p1].push(p2);
            graph[p2].push(p1);
            
            if (knownSet.has(p1)) peopleKnowSecret.add(p1);
            if (knownSet.has(p2)) peopleKnowSecret.add(p2);
        }
        
        // Perform BFS to propagate the knowledge of the secret.
        let queue = [...peopleKnowSecret];
        while (queue.length > 0) {
            let curr = queue.shift();
            knownSet.add(curr); // Add the current person to the known set.
            for (let neigh of graph[curr]) {
                if (!knownSet.has(neigh)) {
                    knownSet.add(neigh);
                    queue.push(neigh);
                }
            }
        }
    }

    // Convert the set of known people to an array and return.
    return [...knownSet];
};