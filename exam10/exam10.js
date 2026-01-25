import PromptSync from "prompt-sync";

const prompt = PromptSync({sigint: true});

let s1;
let s2;

const get_input = () => {
    while (true) {
        try {
            const input1 = prompt(": ");

            s1 = Number(input1);

            if (input1.trim() === "" || isNaN(input1)) {
                throw new Error("Enter num");
            };

            break;
        } catch (error) {
            console.log(error.message);
        };
    };

    while (true) {
        try {
            const input2 = prompt(": ");

            s2 = Number(input2);

            if (input2.trim() === "" || isNaN(input2)) {
                throw new Error("Enter num");
            };

            break;
        } catch (error) {
            console.log(error.message);
        };
    };

    return s1,s2;
};


const main = (s1,s2) => {
    const total = s1 + s2;

    if (total >= 50) {
        console.log(total);
        console.log("ผ่าน");
    } else {
        console.log(total);
        console.log("ไม่ผ่าน");
    };

};

s1,s2 = get_input();
main(s1,s2);