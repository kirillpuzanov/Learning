module.exports = function () {

  if(!Array.prototype.myMap) {
    Array.prototype.myMap = function(callback) {
      if(typeof callback !== 'function') {
          throw new TypeError('callback mast be a function')
      }
      if(!Array.isArray(this) && typeof this !== 'string') {
        throw new TypeError('myMap is not a function')
      }
      if(this.length === 0 || !this.length) {
        return [];
      }

      const result = [];
      for(let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
      }
      return result;
    }
  }


}
