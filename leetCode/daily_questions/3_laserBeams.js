/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let totalBeams = 0;
    let previousBeams = { row: 0, count: 0 };

    for (let i = 0; i < bank.length; i++) {
        let currentBeams = { row: 0, count: 0 };
        //find all 1s in bank[i]
        for (let j = 0; j < bank[i].length; j++) {
            if (bank[i][j] === '1') {
                currentBeams.row = i;
                currentBeams.count++;
            }
        }
        totalBeams += currentBeams.count * previousBeams.count;

        console.log("row: " + currentBeams.row + " count: " + currentBeams.count + " totalBeams: " + totalBeams);

        if (currentBeams.count > 0)
            previousBeams = { ...currentBeams };

    }

    console.log(totalBeams);
    return totalBeams;
};

numberOfBeams(["011001", "000000", "010100", "001000"]);