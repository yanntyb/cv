let h1 = document.querySelectorAll("h1");
let h2 = document.querySelectorAll("h2");
let section = document.querySelectorAll("section");
let label = document.querySelectorAll("label");
let fig = document.querySelector("#fig");
fig.dataset.run = "false";
fig.dataset.action = "false";
let comp_elem = document.querySelector("#comp dl")
let coord_elem = document.querySelector("#coord ul")

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

for(let elem of section){
    let arrow = document.createElement("h3");
    arrow.innerHTML = "<i class='fas fa-arrow-right'></i>";
    elem.appendChild(arrow);
    let elemTitle = elem.getElementsByTagName("h2")[0];
    if(elemTitle){
        const content = elem.parentNode.querySelectorAll("section > *:not(h2, h3)")[0];
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

for(let elem of label){
    const letterList = elem.innerHTML.split("");
    elem.innerHTML = "";
    let x = Math.random();
    for(let letter of letterList){
        let span = document.createElement("span");
        span.innerHTML = letter;
        elem.appendChild(span);
        let interval = (pos) => window.setTimeout(() => {
            span.style.color = "rgb(" + (Math.abs(Math.cos(pos) * 255)).toString() + "," +   + (Math.abs(Math.sin(pos) * 255)).toString() + "," +  + (Math.abs(Math.cos(pos) * 100)).toString() + ")";
            pos += 0.1;
            interval(pos);
        },20);
        interval(x);
        x+=0.1;
    }
}

fig.addEventListener("mouseover", () => {
    let front = fig.querySelector("#front");
    if(fig.dataset.run === "false"){
        if(fig.dataset.action === "false"){
            fig.dataset.action = "true";
            fig.dataset.run = "true";
            let interval = (deg) => {
                window.setTimeout(() => {
                    fig.style.transform = "rotateY(" + deg + "deg)";
                    deg ++;
                    if(deg < 90){
                        front.style.zIndex = "-1";
                    }
                    if(deg < 180){
                        interval(deg);
                    }
                    else{
                        fig.dataset.run = "false";
                    }
                },10)
            }
            interval(0);

        }
        else{
            fig.dataset.action = "false";
            fig.dataset.run = "true";
            let interval = (deg) => {
                window.setTimeout(() => {
                    fig.style.transform = "rotateY(" + deg + "deg)";
                    deg --;
                    if(deg < 90) {
                        front.style.zIndex = "1";
                    }
                    if(deg > 0){
                        interval(deg);
                    }
                    else{
                        fig.dataset.run = "false";
                    }
                },10)
            }
            interval(180);
        }
    }


})

fetch("comp.json")
.then(resp => resp.json())
.then(json => {
    for(let comp of json["comp"]){
        let dt = document.createElement("dt");
        dt.innerHTML = comp[0];
        let dd = document.createElement("dd");
        dd.innerHTML = comp[1];
        comp_elem.appendChild(dt);
        comp_elem.appendChild(dd);
    }
    for(let coord of json["coord"]){
        let li = document.createElement("li");
        li.innerHTML = coord;
        coord_elem.appendChild(li);
    }
});