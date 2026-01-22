import PromptSync from "prompt-sync";

const prompt = PromptSync({sigint: true});

let monny;

while (true) {
    try {
        const input = prompt(": ");

        monny = Number(input);

        if (input.trim() === "" || isNaN(input)) {
            throw new Error("กรอกตัวเลข")
        };

        break;

    } catch (error) {
        console.log(`Error ${error.message}`);
    };
};

let count10 = 0
let count5 = 0
let count2 = 0
let count1 = 0

while (monny > 0) {
    if (monny >= 10) {
        monny -= 10;
        count10++;
    } else if (monny >= 5) {
        monny -= 5;
        count5++;
    } else if (monny >= 2) {
        monny -= 2;
        count2++;
    } else {
        monny -= 1;
        count1++;
    };
        
};

console.log(count10)
console.log(count5)
console.log(count2)
console.log(count1)