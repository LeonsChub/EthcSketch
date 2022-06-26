const sketch_cont = document.querySelector(".sketch-container");
const btn_size = document.querySelector(".btn-size");

btn_size.addEventListener("click",()=>{
    sketch_cont.innerHTML= "";


    let resolution = parseInt(prompt("Resize canvas leave blank to clear"));

    if (resolution >= 64){
        resolution = 64;
    }

    if(isNaN(resolution)){
        resolution = 16;
    }
    
    drawGrid(resolution);
})

let mouseDown = false;
document.body.onmousedown = () =>{
    mouseDown = true;
};
document.body.onmouseup = () =>{
    mouseDown = false;
};

color = "aqua"

function drawGrid(res = 16){

    for(let i = 0 ; i < res ; i++){
        let row = document.createElement("div");
        row.classList.add('row');
        row.setAttribute("style","flex : 1   auto; display : flex;");
    
        for(let i = 0 ; i < res ; i++){
            let block = document.createElement("div");
            block.classList.add('block');
            block.setAttribute("style","flex : 1 1 auto");
    
            block.addEventListener("mouseenter",()=>{
                if(mouseDown){
                    block.style.backgroundColor = "rgba(0,0,0,0.1)";
                }
            })
            block.addEventListener("mousedown",()=>{
                block.style.backgroundColor = "rgba(0,0,0,0.1)";
            })
    
            row.appendChild(block);
        }
    
        sketch_cont.appendChild(row);
    }

}

drawGrid(16);