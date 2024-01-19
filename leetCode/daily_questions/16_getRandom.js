
var RandomizedSet = function () {
    this.set = {};
    this.size = 0;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.set[val]) return false;
    this.set[val] = true;
    this.size += 1;
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if(!this.set[val]) return false;
    delete this.set[val];
    this.size -= 1;
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    const random = Math.floor(Math.random() * (this.size));
    return Object.keys(this.set)[random];
};