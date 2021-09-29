let h1 = document.querySelectorAll("h1");
let h2 = document.querySelectorAll("h2");


for(let elem of h1){
    const fullName = elem.innerHTML;
    elem.innerHTML = elem.innerHTML[0];
    let index = 1;
    let interval = () => window.setTimeout(() => {
        elem.innerHTML += fullName[index];
        index++;
        if(index >= fullName.length){
            return true;
        }
        interval();
    },100)
    interval();
}

for(let elem of h2){
    const letterList = elem.innerHTML.split("");
    elem.innerHTML = "";
    let x = Math.random();
    for(let letter of letterList){
        let span = document.createElement("span");
        span.innerHTML = letter;
        elem.appendChild(span);
        let interval = (pos) => window.setTimeout(() => {
            span.style.fontSize = (Math.abs(Math.cos(pos) * 100)).toString() + "%";
            pos += 0.005;
            interval(pos);
        },20);
        interval(x);
        x+=0.1;
    }
}