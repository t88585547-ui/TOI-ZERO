import PromptSync from "prompt-sync";

const prompt = PromptSync({sigint: true})

let fr;

while (true) {
    try {
        const fren = prompt(": ")

        fr = Number(fren)

        if (fren.trim === "" || isNaN(fr)) {
            throw new Error("ต้องกรอกเป็นตัวเลขเท่านั้น!");
        } 
        break;

    } catch (error) {
        console.log(`Error: ${error.message}`);
        
    };
    
};


const C = (fr - 32) * 5 / 9


console.log(C)