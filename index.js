class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);      
  }  

  get(pos) {
    if (pos > this.length || pos < 0) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.at(-1);
    }

  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }

  }

  sum() {
    if (this.length === 0) {
      return 0;
    } 
    return this.items.reduce((a, b) => a + b); 
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } 
    return this.items.reduce((a, b) => a + b) / this.length; 
  }
  }


module.exports = SortedList;
