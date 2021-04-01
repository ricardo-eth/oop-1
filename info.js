const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
  language: ['PHP','Ruby','Java','Python', 'GO']
}

const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language: ['JavaScript','HTML/CSS','Swift','C++']
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['HTML/CSS','PHP','GO']
}

const printInfo = (person) => {
  console.log(`first name: ${person.firstName}`)
  console.log(`last name: ${person.lastName}`)
  console.log(`age: ${person.age}`)
  person.language.forEach((elem) => {
  console.log(`\t${elem}`)
  })
}

const canVote = (person) => {
  console.log(person.age > 18)
}


const mostSkilledDev = (user1, user2) => {

let userOne = user1.language.length
let userTwo = user2.language.length

  if (userOne > userTwo) {
    return `${user1.firstName} of the person who knows the most programming languages.`
  } else if (userOne < userTwo) {
    return `${user2.firstName} of the person who knows the most programming languages.`
  } else {
    return `Both people know the same amount of programming languages.`
  }
}

console.log(mostSkilledDev(bob, charlie))
