/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {

    let timesUsed = new Array(n).fill(0);

    meetings.sort((a, b) => a[0] - b[0]);

    console.log(meetings);

    let freeMeetingRooms = new Array(n);
    for (let i = 0; i < n; i++) {
        freeMeetingRooms[i] = i;
    }

    let currentRunningMeetings = new Array();

    let time = 0;

    while (meetings.length > 0) {
        for (let i = 0; i < currentRunningMeetings.length; i++) {
            if (currentRunningMeetings[i][1] == time) {
                const endedMeeting = currentRunningMeetings.splice(i, 1)[0];
                i++;
                freeMeetingRooms.push(endedMeeting[0]);
                freeMeetingRooms.sort();
            }
        }

        if (freeMeetingRooms.length > 0 && meetings[0][0] <= time) {
            const meeting = meetings.shift();
            const availableRoom = freeMeetingRooms.sort((a, b) => a - b).shift();
            currentRunningMeetings.push([availableRoom, meeting[1] - meeting[0] + time]);
            timesUsed[availableRoom]++;
        }

        time++;
    }

    return timesUsed.indexOf(Math.max(...timesUsed));
};

/*console.log(mostBooked(2, [[0, 10], [1, 5], [2, 7], [3, 4]]));
console.log(mostBooked(3, [[1, 20], [2, 10], [3, 5], [4, 9], [6, 8]]));
console.log(mostBooked(100, [[0, 5], [1, 6], [2, 7], [3, 8], [4, 9], [5, 10], [6, 11], [7, 12], [8, 13], [9, 14], [10, 15], [11, 16], [12, 17], [13, 18], [14, 19], [15, 20], [16, 21], [17, 22], [18, 23], [19, 24], [20, 25], [21, 26], [22, 27], [23, 28], [24, 29], [25, 30], [26, 31], [27, 32], [28, 33], [29, 34]]));
console.log(mostBooked(2, [[16, 962], [85, 695], [6, 706], [53, 716], [21, 82], [58, 634], [51, 617], [87, 442], [15, 84], [19, 265], [72, 1064], [90, 731], [57, 689], [30, 317], [69, 955], [54, 227], [56, 357], [11, 369], [99, 800], [9, 114], [36, 314], [96, 435], [41, 839], [28, 664], [34, 364], [95, 518], [77, 971], [75, 781], [32, 335], [2, 664], [66, 1005], [83, 989], [37, 452], [88, 189], [42, 700], [97, 197], [76, 931], [84, 203], [60, 776], [45, 930], [93, 740], [61, 111], [55, 906], [43, 343], [29, 184], [92, 140], [25, 474], [18, 462], [86, 449], [44, 315], [94, 216], [3, 440], [26, 289], [47, 177], [78, 659], [91, 1026], [65, 968], [50, 1042], [12, 256], [49, 180], [10, 72], [73, 1033], [17, 745], [4, 341], [71, 968], [31, 933], [40, 834], [5, 475], [80, 928], [8, 124], [22, 767], [81, 421], [24, 164], [20, 948], [89, 282], [27, 274], [7, 473], [59, 541], [13, 717], [82, 386], [46, 403], [1, 483], [38, 720], [23, 387], [62, 830], [70, 315], [48, 449], [79, 424], [68, 949], [52, 977], [14, 832], [39, 479], [64, 1002], [63, 277], [33, 690], [35, 434], [74, 262], [98, 466], [67, 450]]));
console.log(mostBooked(3, [[0, 10], [1, 9], [2, 8], [3, 7], [4, 6]]));
console.log(mostBooked(2, [[0, 10], [1, 2], [12, 14], [13, 15]]));*/
console.log(mostBooked(2, [
    [1, 8], [11, 47],
    [23, 41], [29, 30],
    [30, 33], [34, 36],
    [43, 44], [45, 48]
]));