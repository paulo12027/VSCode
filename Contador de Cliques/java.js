const t1 = document.querySelector("#primeiro");
const t2 = document.querySelector("#segundo");
const t3 = document.querySelector("#terceiro");

let c1 = 0;
let c2 = 0;
let c3 = 0;

function texto1() {
    c1++;
    t1.innerText = c1;
}

function texto2() {
    c2++;
    t2.innerText = c2;
}

function texto3() {
    c3++;
    t3.innerText = c3;
}
