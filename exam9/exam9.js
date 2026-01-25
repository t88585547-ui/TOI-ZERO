import PromptSync from "prompt-sync";

const prompt = PromptSync({sigint: true});

let pw;

const get_input = () => {


    const input = prompt(": ");


    pw = input;

    return pw;

};

const main = (pw) => {
    try {
        const numV = BigInt(Math.round(Number(pw)));

        const strNum = numV.toString();

        if (strNum.length === 13) {
            console.log("yes");
        } else {
            console.log("no");
        };

    } catch (error) {
        console.log("no")
    };
};

pw = get_input();
main(pw);