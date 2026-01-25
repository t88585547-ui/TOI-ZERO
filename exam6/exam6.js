import PromptSync from "prompt-sync";

const prompt = PromptSync({sigint: true});

let chose;

while (true) {
    const TR = prompt(": ")
    chose = String(TR)
    if (TR === "T") {
        break;
    } else if (TR === "R") {
        break;
    } else {
        console.log("{{{{{{{")
    };

};

let y;
let h;

while (true) {
    try {
        const input1 = prompt(": ");

        y = Number(input1);

        if (input1.trim() === "" || isNaN(input1)) {
            throw new Error(">>>>")
        };

        const input2 = prompt(": ");
        
        h = Number(input2);

        if (input2.trim() === "" || isNaN(input2)) {
            throw new Error("???")
        };

        break;
    } catch (error) {
        console.log(`Error: ${error.message}`)
    };
};

if (chose === "T") {
    const area = 0.5 * y * h;
    console.log(area);
} else {
    const area1 = y * h;
    console.log(area1)
};

