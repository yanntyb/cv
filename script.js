const req = new XMLHttpRequest();
req.open('POST', "api.php");
req.onload = () => {
    const datas = JSON.parse(req.responseText);
    for(let data of datas){
        const section = document.querySelectorAll("section")[data.section_id - 1]
        if(data.balise !== "table"){
            section.innerHTML = ""
            const title = document.createElement("h2");
            section.appendChild(title);
            title.innerHTML = data.title;
        }
        let child = document.createElement(data.balise);
        section.appendChild(child);
        section.dataset.id = data.section_id;
        section.dataset.content_id = data.content_id;
        child = section.querySelector(data.balise);
        if(data.balise === "ul"){
            for(let line of data.content.split("\n")){
                let li = document.createElement("li");
                child.appendChild(li);
                li.innerHTML = line;
            }
        }
        if(data.balise === "table"){
            const table = section.querySelector("table");
            const tbody = document.createElement("tbody");
            table.appendChild(tbody);
            for(let row of data.content.split("\n")){
                let tr = document.createElement("tr");
                tbody.appendChild(tr);
                for(let col of row.split("|")){
                    let td = document.createElement("td");
                    td.innerHTML = col;
                    tr.appendChild(td);
                }
            }
            section.removeChild(section.lastChild);
        }
        else{
            child.innerHTML = data.content;
        }
    }
}
req.send();