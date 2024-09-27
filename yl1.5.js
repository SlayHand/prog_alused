const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Sisestage ainepunktide arv:', punktid => {
    rl.question('Sisestage nädalate arv:', nädalad => {
        let result =Math.round(punktid * 26 /nädalad)
        console.log(result)
        rl.close()
    })
  })