const readline = require("readline")
const cmd = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function soma(value) {
    const parsedValue = parseInt(value);
    let s = 0;

    for (let i = 0; i < parsedValue; i++) {
   
        if (!(i % 3) || !(i % 5)) {     
            s += i;
        }
    }

    return s;
}

cmd.question("Digite o numero", function(val) {
    
    const res = soma(val)
    console.log(

        "A soma dos números multiplos por 5 e 3 menores que " + val + " é " + res + "."
    )
    cmd.close()
});