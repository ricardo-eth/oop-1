class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  show() {
    console.log(`(${this.x}, ${this.y})`)
  }
  isEqual(point) {
    return this.x === point.x && this.y === point.y ? true : false
  }
  distance(value2) {

    // Math.pow(base, exponent)
    return Math.sqrt((Math.pow((value2.x-this.x),2))+(Math.pow((value2.y-this.y),2)))

  }
} 

exports.Point = Point