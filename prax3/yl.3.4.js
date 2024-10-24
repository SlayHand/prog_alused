import rl from "../prax2/util/input.js";
rl.question('Mitu poialpoissi tahab ounu: ', poialpoisid => {
    let ountearv = 14
    for(let poialpoiss = 1; poialpoiss <= poialpoisid; poialpoiss++){
       let  ounadPoistele = Math.ceil(Math.random() * 2)
       console.log(ounadPoistele)
       ountearv = ountearv - ounadPoistele
    }
      console.log(`Lumivalgekesele jai ${ountearv}`)  
      rl.close()
})