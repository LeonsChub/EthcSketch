const sketch_cont = document.querySelector(".sketch-container");

let mouseDown = false;
document.body.onmousedown = () =>{
    mouseDown = true;
};
document.body.onmouseup = () =>{
    mouseDown = false;
};

let resolution = 64;

for(let i = 0 ; i < resolution ; i ++){

    let row = document.createElement("div");
    row.classList.add('row');
    row.setAttribute("style","flex : 1 1 auto; display : flex;");

    for(let i = 0 ; i < resolution ; i ++){
        let block = document.createElement("div");
        block.classList.add('block');
        block.setAttribute("style","flex : 1 1 auto");

        block.addEventListener("mouseenter",()=>{
            if(mouseDown){
                block.classList.add("black");
            }
            
        })

        row.appendChild(block);

        

    }

    sketch_cont.appendChild(row);
}