import PromptSync from "prompt-sync";

const prompt = PromptSync({sigint: true});

let num;
let numde;

const get_input = () => {
    while (true) {
        try {
            const input1 = prompt(": ");

            num = Number(input1);

            if (input1.trim() === "" || isNaN(input1)) {
                throw new Error("????")
            };

            break;

        } catch (error) {
            console.log(error.message);
        };
    };

    while (true) {
        try {
            const input2 = prompt(": ");

            numde = Number(input2);

            if (input2.trim() === "" || isNaN(input2)) {
                throw new Error("OOOOOO")
            };

            break;
        } catch (error) {
            console.log(error.message);
        };
    };

    return num, numde

};

const main = (num, numde) => {
    if (num % numde == 0) {
        console.log("ลงตัว")
    } else {
        console.log("ไม่ลงตัว")
    }
};

num, numde = get_input();
main(num,numde)
