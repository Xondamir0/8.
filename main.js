
const pupils = ["non", "banana", "avtomobil", "asal", "olma", "aziza", "Gul"];

const Nbilan = [];
const Nsiz = [];

for (const item of pupils) {
    if (item.includes("n")) {
        Nbilan.push(item);
    } else {
        Nsiz.push(item);
    }
}

console.log(Nbilan, "'n' harfi ishtirok etgan so'zlar");
console.log(Nsiz, "'n' harfi ishtirok etmagan so'zlar");