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
    let xa = Math.pow(this.x, 2)
    let xb = Math.pow(value2.x, 2)
    let ya = Math.pow(this.y, 2) // = this.y * this.y
    let yb = Math.pow(value2.y, 2)

     return (Math.sqrt((xb - xa) + (yb - ya)))

  }
} 

exports.Point = Point