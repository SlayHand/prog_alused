import rl from "./util/input.js";
rl.question ('Kas soovite ise valida istekoha või loosida?(ise / loos) ', valik =>{
    if (valik == 'ise'){
        rl.question ('Kas soovite istudea akna ääres või mitte? (aken / muu)', koht =>{
            if (koht == 'aken'){
                console.log ('Valisite ise aknakoha.')
            } 
            else if (koht == 'muu'){
                console.log ('Valisite ise . Vahekäigukoht.')
            } 
            rl.close()
        })
    } else if (valik == 'loos'){
        if (Math.ceil(Math.random() *3) ==1){
            console.log ('Koht loositi. Aknakoht.') 
        
    } else{
        console.log ('Koht loositi. Vahekäigukoht.')
    } 
    rl.close()
}
})