const sections = document.querySelectorAll("section:not(.notthissection)");
const submit = document.querySelector("#submit");

window.setTimeout(() =>{
    for(let section of sections){
        let type = section.lastElementChild;
        let ajout = document.createElement("i");
        section.appendChild(ajout);
        ajout.innerHTML = "<i class=\"fas fa-plus\"></i>";
        ajout.addEventListener("click", () => {
            if(section.dataset.modif !== "true"){
                if(type.nodeName === "P"){
                    section.dataset.modif = "true";
                    let textarea = document.createElement("textarea");
                    textarea.value = type.innerHTML;
                    section.replaceChild(textarea, type);
                }
                if(type.nodeName === "UL"){
                    section.dataset.modif = "true";
                    let input = document.createElement("input");
                    input.setAttribute("type","text");
                    type.appendChild(input);
                }
                if(type.nodeName === "TABLE"){
                    let tdcount = section.querySelectorAll("thead > tr th");
                    console.log(section);
                    let tbody = section.getElementsByTagName("tbody")[0];
                    let tr = document.createElement("tr");
                    tbody.appendChild(tr);
                    for(let index = 0; index < tdcount.length; index++){
                        section.dataset.modif = "true";
                        console.log(index);
                        let td = document.createElement("td");
                        let input = document.createElement("input")
                        tr.appendChild(td);
                        td.appendChild(input);
                        input.className = "notthisinput";
                    }
                }
            }
        })
    }
    submit.addEventListener("click",() => {
        let data = [];
        let last;
        for (let section of sections) {
            section.removeChild(section.lastElementChild);
            if (section.lastElementChild.lastElementChild !== null) {
                last = section.lastElementChild.lastElementChild
            }
            else{
                last = section.lastElementChild;
            }
            if (last.tagName === "INPUT" || "TEXTAREA") {
                data.push({
                    "id": section.dataset.content_id,
                    "content": last.value
                })
            }
            if(last.tagName === "TBODY"){
                let content = [];
                last = last.lastElementChild;
                if(last.firstElementChild.firstElementChild !== null){
                    if(last.firstElementChild.firstElementChild.tagName === "INPUT"){
                        for(let elem of last.childNodes){
                            content.push(elem.firstChild.value);
                        }
                    }
                }
                data.push({
                    "id": section.dataset.content_id,
                    "content": content,
                })
            }
        }
        console.log(data);
        let req = new XMLHttpRequest();
        req.open("POST", "api_envoie.php");
        req.send(JSON.stringify(data));
    })
},1000)
