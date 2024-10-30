import rl from "./util/input.js";
rl.question ('Sisestage kirja suurus: ' , suurus => {
    rl.question ('Sisestage kirja teema pealkiri(jäta tühjaks kui pole) : ' , pealkiri =>{
        rl.question ('Kas kirjaga on kaasas fail(jah/ei): ' , fail =>{
            if (pealkiri == 0 || suurus < 1 || fail == 'ei')
              console.log('Kiri on spämm')  
                else if ( pealkiri ==1 || suurus > 1 || fail == 'jah' )
                    console.log('Kiri pole spämm')

                rl.close()
        })
    })
}) 