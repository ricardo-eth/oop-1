
class Human {
    constructor(firstName, lastName, age, language) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.language = language
    }
    printInfo() {
      console.log(`first name: ${this.firstName}`)
      console.log(`last name: ${this.lastName}`)
      console.log(`age: ${this.age}`)
      this.language.forEach((elem) => {
      console.log(`\t${elem}`)
      })
    }
    canVote() {
      console.log(this.age >= 18)
    }
    mostSkilledDev(user2) {
      let userOne = this.language.length
      let userTwo = user2.language.length

      if (userOne > userTwo) {
        return `${this.firstName} of the person who knows the most programming languages.`
      } else if (userOne < userTwo) {
        return `${user2.firstName} of the person who knows the most programming languages.`
      } else {
        return `Both people know the same amount of programming languages.`
      }
    }
}

// User for mostSkilledDev test
// const alice = new Human('Alice', 'Liddell', 28, ['PHP','Ruby','Java','Python', 'GO'])
// const bob = new Human('Bob', 'Lemon', 30, ['JavaScript','HTML/CSS','Swift','C++'])
// const charlie = new Human('Charlie', 'Charlot', 8, ['HTML/CSS','PHP','GO'])

// printInfo test
// --> Exemple d'utilisation: bob.printInfo()

// canVote test
// --> Exemple d'utilisation: alice.canVote()



// mostSkilledDev test
// --> Exemple d'utilisation: console.log(charlie.mostSkilledDev(bob))

exports.Human = Human