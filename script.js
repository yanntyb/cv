const req = new XMLHttpRequest();
req.open('POST', "api.php");
req.onload = () => {
    const datas = JSON.parse(req.responseText);
    console.log(datas);
    for(let data of datas){
        const section = document.createElement("section");
        if(data["side"] === 0){
            document.getElementById("left").appendChild(section);
        }
        else{
            document.getElementById("right").appendChild(section);
        }
        const title = document.createElement("h2");
        section.appendChild(title);
        title.innerHTML = data["title"];

    }
}
req.send();