let h1 = document.querySelectorAll("h1");

let h2 = document.querySelectorAll("h2");
let section = document.querySelectorAll("section");

for(let elem of h1){
    const fullName = elem.innerHTML;
    elem.innerHTML = elem.innerHTML[0];
    let index = 1;
    let interval = () => window.setTimeout(() => {
        elem.innerHTML += fullName[index];
        index++;
        if(index >= fullName.length){
            anim_h2();
            return true;
        }
        interval();
    },100)
    interval();
}

let anim_h2 = () => {
    for(let elem of h2){
        const letterList = elem.innerHTML.split("");
        elem.innerHTML = "";
        let x = Math.random();
        for(let letter of letterList){
            let span = document.createElement("span");
            span.innerHTML = letter;
            elem.appendChild(span);
            let interval = (pos) => window.setTimeout(() => {
                span.style.opacity = (Math.abs(Math.cos(pos) * 100)).toString() + "%";
                pos += 0.009;
                interval(pos);
            },20);
            interval(x);
            x+=0.1;
        }
    }
}

let index = 0;
for(let elem of section){
    let arrow = document.createElement("h3");
    arrow.innerHTML = "<i class='fas fa-arrow-right'></i>";
    elem.appendChild(arrow);
    let elemTitle = elem.getElementsByTagName("h2")[0];
    if(elemTitle){
        const content = elem.parentNode.querySelectorAll("section > *:not(h2, h3)")[index];
        elem.innerHTML = "";
        elem.appendChild(elemTitle);
        elem.dataset.show = "false";
        elem.addEventListener("click", () => {
            if(elem.dataset.show === "false"){
                elem.appendChild(content);
                elem.dataset.show = "true";

            }
            else{
                elem.innerHTML = "";
                elem.appendChild(elemTitle);
                elem.dataset.show = "false";
            }
        })
    }


}