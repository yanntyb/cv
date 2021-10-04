const h1 = $("h1");
const h2 = $("h2");
const section = $("section");
const label = $("label");
const fig = $("#fig");
fig.data("run","false");
fig.data("action","false");
const comp_elem = $("#comp dl")
const coord_elem = $("#coord ul")

const h1_content = h1.html();
h1.html("");
let interval = window.setInterval(()=>{
    if(h1.html().length < h1_content.length){
        h1.html(h1.html() + h1_content[h1.html().length]);
    }
    else{
        anim_h2();
        clearInterval(interval);

    }
},100)

let anim_h2 = () => {
    for(let elem of h2){
        const letterList = $(elem).html().split("");
        $(elem).html("");
        let x = Math.random();
        for(let letter of letterList){
            let span = $(`<span>${letter}</span>`);
            $(elem).append(span);
            let interval = (pos) => window.setTimeout(() => {
                span.css("opacity", Math.abs(Math.cos(pos) * 100).toString() + "%");
                pos += 0.009;
                interval(pos);
            },20);
            interval(x);
            x+=0.1;
        }
    }
}

for(let elem of section){
    elem = $(elem);
    let elemTitle = elem.find("h2")[0];
    const content = elem.parent().find("section > *:not(h2, h3)")[0];
    elem.html("").append(elemTitle).data("show","false").click(() => {
        if(elem.data("show") === "false"){
            elem.append(content).data("show","true");
        }
        else{
            elem.html("").append(elemTitle).data("show","false");
        }
    })
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

fig.mouseover(() => {
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
        let dt = $("dt");
        dt.innerHTML = comp[0];
        let dd = document.createElement("dd");
        dd.innerHTML = comp[1];
        comp_elem.append(dt);
        comp_elem.append(dd);
    }
    for(let coord of json["coord"]){
        let li = document.createElement("li");
        li.innerHTML = coord;
        coord_elem.append(li);
    }
});