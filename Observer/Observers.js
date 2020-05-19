function Observers() {
    this.Observers = [];
}

Observers.prototype.add = function (obj) {
    return this.Observers.push(obj);
};

Observers.prototype.count = function () {
    return this.Observers.length;
};

Observers.prototype.get = function (index) {
    if (index > -1 && index < this.Observers.length) {
        return this.Observers[index];
    }
};

Observers.prototype.indexOf = function (obj, startIndex) {
    var i = startIndex;

    while (i < this.Observers.length) {
        if (this.Observers[i] === obj) {
            return i;
        }
        i++;
    }

    return -1;
};

Observers.prototype.removeAt = function (index) {
    this.Observers.splice(index, 1);
};