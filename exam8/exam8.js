import PromptSync from "prompt-sync";

const prompt = PromptSync({sigint: true});

let text;

const get_input = () => {
    const input = prompt(": ");
    text = String(input);
    return text;
};

const main = (text) => {
    if (text === "a" || text === "e" || text === "i" || text === "o" || text === "u") {
        console.log("yes")
    } else {
        console.log("no")
    }
};

text = get_input()
main(text);