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
    let xa = this.x * this.x
    let xb = value2.x * value2.x
    let ya = this.y * this.y
    let yb = value2.y * value2.y

     return (Math.sqrt((xb - xa) + (yb - ya)))
  }
} 

const p1 = new Point(1, 2)
const p2 = new Point(10, 11)

console.log(p1.distance(p2))