module.exports = function () {
	if (!Array.prototype.myMap) {
		Array.prototype.myMap = function (callback) {
			if (typeof callback !== 'function') {
				throw new TypeError('callback mast be a function')
			}
			if (!(Array.isArray(this) || this instanceof String)) {
				throw new TypeError('myMap is not a function')
			}
			if (this.length === 0 || !this.length) {
				return []
			}

			const result = []
			for (let i = 0; i < this.length; i++) {
				result.push(callback(this[i], i, this))
			}
			return result
		}
	}

	if (!Array.prototype.myReduce) {
		Array.prototype.myReduce = function (callback, initAcc) {
			if (typeof callback !== 'function') {
				throw new TypeError('callback mast be a function')
			}

			if (!(Array.isArray(this) || this instanceof String)) {
				console.log('-- typeof this  -->', typeof this)
				throw new TypeError('myReduce is not a function')
			}

			let acc = arguments.length >= 2 ? initAcc : this[0]
			let startIdx = arguments.length >= 2 ? 0 : 1

			for (let i = startIdx; i < this.length; i++) {
				acc = callback(acc, this[i], i, this)
			}
			return acc
		}
	}
}
