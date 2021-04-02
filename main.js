const { Human } = require('./classInfo')
const { Point } = require('./point')

// Users
const alice = new Human('Alice', 'Liddell', 28, ['PHP','Ruby','Java','Python', 'GO'])
const bob = new Human('Bob', 'Lemon', 30, ['JavaScript','HTML/CSS','Swift','C++'])
const charlie = new Human('Charlie', 'Charlot', 8, ['HTML/CSS','PHP','GO'])

console.log(alice.mostSkilledDev(bob))

// test distance between 2 points
const p1 = new Point(1, 2)
const p2 = new Point(10, 11)

// call function distance and add toFixed to have only 2 decimal
console.log(p1.distance(p2).toFixed(2))