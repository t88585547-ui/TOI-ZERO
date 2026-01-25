import PromptSync from "prompt-sync";

const prompt = PromptSync({sigint: true});

let score1;
let score2;
let score3;

while (true) {
    try {
        const input1 = prompt(": ");

        score1 = Number(input1);

        if (input1.trim() === "" || isNaN(input1)) {
            throw new Error("ValueError")
        };

        if (score1 <= 10) {
            break;
        };

    } catch (error) {
        console.log(`Error: ${error.message}`);
    };
};

while (true) {
    try {
        const input2 = prompt(": ");

        score2 = Number(input2);
        
        if (input2.trim() === "" || isNaN(input2)) {
            throw new Error("ValueError");
        };

        if (score2 <= 40) {
            break;
        };

    } catch (error) {
        console.log(`Error: ${error.message}`);
    };
};

while (true) {
    try {
        const input3 = prompt(": ");

        score3 = Number(input3);
        
        if (input3.trim() === "" || isNaN(input3)) {
            throw new Error("ValueError");
        };

        if (score3 <= 50) {
            break;
        };

    } catch (error) {
        console.log(`Error: ${error.message}`);
    };
};

if (score1>= 5 && score2 >= 20 && score3 >= 25) {
    console.log("ผ่าน")
} else{
    console.log("ล้มเหลว")
};
