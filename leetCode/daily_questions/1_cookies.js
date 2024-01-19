var findContentChildren = function(g, s) {
    // g is an array with number of children and their greed. s is the array with the size of cookies
    // return the number of children that can eat the cookies
    
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let i = 0;
    let j = 0;

    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            i++;
            j++;
        } else {
            j++;
        }

        if (i === g.length) {
            return i;
        }
    }

    return i;
};