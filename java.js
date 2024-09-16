
// const body=document.getElementsByTagName("body")[0]
// const h1=document.getElementById("java")

// function salom(){


// }
// setInterval(salom,100)



const hour = document.getElementById("hour")
const minut = document.getElementById("minut")
const sec = document.getElementById("sec")
const btn3 = document.getElementById("btn3")
const btn1 = document.getElementById("btn1")

let h = 0;
let m = 0;
let s = 0;

function time() {
    if (s == 59) {
        m++;
        s = 0;
    }
    
    if (m == 59) {
        m = 0;
        h++;
    }

    hour.textContent = h;
    minut.textContent = m;
    sec.textContent = s;
    s++
}
setInterval(time, 1000)
 
