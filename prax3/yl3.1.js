import rl from "../prax2/util/input.js";
rl.question ('Sisestage mitu korda aratada: ', mituKorda =>{
    for (let kord = 1; kord <= mituKorda; kord++){
     console.log ('Touse ja sara!')  
    } 
    console.log ('---')
    let kord = 1
    while(kord <= mituKorda){
        console.log('Touse ja sara!')
        kord++
    } 
  rl.close()
})