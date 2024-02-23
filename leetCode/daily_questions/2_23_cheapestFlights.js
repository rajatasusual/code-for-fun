/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    const adj = new Map();
    for (const [from, to, price] of flights) {
        if (!adj.has(from)) adj.set(from, []);
        adj.get(from).push([to, price]);
    }

    const dest = new Array(n).fill(Infinity);
    dest[src] = 0;

    const queue = [[src, 0]];
    let stops = 0;

    while (queue.length && stops <= k) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [node, distance] = queue.shift();

            if (!adj.has(node)) continue;

            for (const [neighbour, price] of adj.get(node)) {
                if (price + distance >= dest[neighbour]) continue;
                dest[neighbour] = price + distance;
                queue.push([neighbour, dest[neighbour]]);
            }
        }
        stops++;
    }

    return dest[dst] === Infinity ? -1 : dest[dst];
};
