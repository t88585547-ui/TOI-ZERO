import PromptSync from "prompt-sync"
const prompt = PromptSync({sigint: true})

const name1 = prompt("Enter your name: ")
const name2 = prompt("Enter your name: ")

console.log("Hello", name1 , name2)
console.log(name1.slice(0, 2) + name2.slice(0,2))