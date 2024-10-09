import rl from "./util/input.js";

rl. question ('Sisestage enda vanus: ', vanus =>{
    rl.question ('Sisestage enda sugu (M või m / N või n): ', sugu =>{
        if (sugu != 'M'&& sugu !='m' && sugu !='n'&& sugu!='N'){
            console.log('Sisestatud sugu pole õige')
            rl.close()
            return
         }  
        rl.question ('Sisestage treeningu tüüp (1, 2 või 3):', trenn =>{ 
let pulss

            if (sugu == 'm'||sugu =='M'){
pulss = 220 - vanus
} 
else if (sugu == 'n'||sugu =='N'){
    pulss = 206 - vanus * 0.88
    } 
   
let minPulss
let maxPulss

if(trenn == 1){
    minPulss = 0.5 * pulss
    maxPulss = 0.7 * pulss
 } 
 if(trenn == 2){
    minPulss = 0.7 * pulss
    maxPulss = 0.8 * pulss
 } 
 if(trenn == 3){
    minPulss = 0.8 * pulss
    maxPulss = 0.87 * pulss
 } 
 else{
    console.log('Sisestatud number pole õige')
    rl.close ()
    return
 }  
 console.log(`Pulsisagedus peab olema ${minPulss} kuni ${maxPulss} `)
 rl.close()
        })
     })
})