class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {

    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error("OutOfBounds");
    } else {
    return this.items[pos];
    }
  }

  max() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    } else {
       return Math.max(...this.items);
    }
  }

  min() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(... this.items);
    }
  }

  sum() {
    if(!this.items.length) {
      return 0;
    } else {
      return this.items.reduce((total, item) => total + item, 0);
    }
  }

  avg() {
    if(!this.items.length) {
      throw new Error("EmptySortedList"); 
    } else {
      const average = this.items.reduce((total, item) => total + item, 0);
     return average / this.items.length;
    }
  }
}

module.exports = SortedList;
