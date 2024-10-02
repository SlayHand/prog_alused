import rl from "./util/input.js"
rl.question('Sisesta õhutemperatuur:', temp =>{
if (temp > 4.0) {
    console.log('Ei ole jäätumise ohtu')
} else {
    console.log('On Jäätumise oht')
} 
rl.close()
})
