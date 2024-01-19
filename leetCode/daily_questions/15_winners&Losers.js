/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let winners = {};
    let losers = {};

    for(let i = 0; i < matches.length; i++){
        let winner = matches[i][0];
        let loser = matches[i][1];

        if(!winners[winner]){
            winners[winner] = 1;
        } else {
            winners[winner]++;
        }

        if(!losers[loser]){
            losers[loser] = 1;
        } else {
            losers[loser]++;
        }
    }

    let result = [];

    let noLosses = Object.keys(winners).filter(winner => !losers[winner]);
    let oneLoss = Object.keys(losers).filter(loser => losers[loser] === 1);

    result.push(noLosses);
    result.push(oneLoss);

    return result;
};

console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]));
console.log(findWinners([[2,3],[1,3],[5,4],[6,4]]));