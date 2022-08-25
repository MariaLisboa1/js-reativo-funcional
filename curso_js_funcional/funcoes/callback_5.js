Array.prototype.myReduce = function(fn, initialValue) {
    const acc = initialValue;
    for (let i = 0; i < this.length; i++) {
        if (!acc && i === 0) {
            acc = this[i];
            continue;
        }
        acc = fn(acc, this[i], i, this)
    }
    return acc;
}