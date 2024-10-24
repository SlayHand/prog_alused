import rl from "../prax2/util/input.js";
rl.question('Taringute arv: ', taringuteArv =>  {
for (let kord = 1; kord <= taringuteArv; kord++) {
console.log(Math.ceil(Math.random() * 6))
}
rl.close()
})
