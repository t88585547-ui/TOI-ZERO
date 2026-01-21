import PromptSync from "prompt-sync";

const prompt = PromptSync({sigint: true});

let num1;
let num2;
let num3;

while (true) {
    try {
        const input1 = prompt(": ");
        
        num1 = Number(input1);

        if (input1.trim() === "" || isNaN(input1)) {
           throw new Error("กรอกตัวเลข");
        } ;

        const input2 = prompt(": ");

        num2 = Number(input2);

        if (input2.trim() === "" || isNaN(input2)) {
            throw new Error("กรอกตัวเลข");
        };

        const input3 = prompt(": ");

        num3 = Number(input3);

        if (input3.trim() === "" || isNaN(input3)) {
            throw new Error("กรอกตัวเลข");
        };

        break;
    } catch (error) {
        console.log(`Error: ${error.message}`);
    };

}