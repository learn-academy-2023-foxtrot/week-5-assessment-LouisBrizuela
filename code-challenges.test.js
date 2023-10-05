// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.


describe("deCoder", () => {
    it("takes in a string and returns a string with a coded message. The coded message converts a to 4, e to 3, i to 1, and o to 0", () => {
        
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        expect(deCoder(secretCodeWord1)).toEqual("L4ck4d41s1c4l")

        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        expect(deCoder(secretCodeWord2)).toEqual("G0bbl3dyg00k")

        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(deCoder(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// b) Create the function that makes the test pass.

const deCoder = (string) => { // function will take a string as a parameter
  return string.replace(/a|A/g, 4).replace(/e|E/g, 3).replace(/i|I/g, 1).replace(/o|O/g, 0) // i chained together the replace method in order to use less lines of code
}
// Pseudo code:
// name : deCoder
// input : string
// output : string
// process : takes in a string and use the replace method to change the selected symbols

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.



// b) Create the function that makes the test pass.

describe("letterFruit", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {

        
        const filterLetterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        expect(letterFruit(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
        
        const filterLetterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
        expect(letterFruit(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
// Pseudo code:
// name : letterFruit
// input : array and string
// output : array
// process : a function that will iterate through the array and check if the letter is included in the string and lower case it 

const letterFruit = (array, string) => { // will take an array and string as a parameter
   return array.filter((value) => value.toLowerCase().includes(string)) // will ise filter to check if the letter is in the string, will also change theh string to lower case 
}
// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.


describe("userHand", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
        
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        expect(userHand(hand1)).toEqual(true)
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        expect(userHand(hand2)).toEqual(false)
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        expect(userHand(hand3)).toEqual(false)
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true
        expect(userHand(hand4)).toEqual(true)
    })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// name : userHand
// input : array
// output : array
// process : separate the duplicates and place them in an array, then check the number of the duplicates to see if they add up to 5 by 2 and 3

const userHand = (array) => { // this takes an array as a parameter
    const dupArray = [...new Set(array)] // this will gather the duplicates and place then in an array
    return dupArray.length === 2 && (array.filter(value => value === dupArray[0]).length === 3 || array.filter(value => value === dupArray[1]).length === 3) // this will check if the length of the duplicates is 2 and 3 
}