let title = document.querySelectorAll("h1, h2");

for(let elem of title){
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