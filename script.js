const sketch_cont = document.querySelector(".sketch-container");
const btn_size = document.querySelector(".btn.size");
const btn_clear = document.querySelector(".btn.clear");
let resolution = 16

btn_size.addEventListener("click",()=>{
    resolution = parseInt(prompt("Resize canvas"));

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

function drawGrid(res = 16){
    sketch_cont.innerHTML= "";

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
                    if (block.style.backgroundColor ===""){
                        block.style.backgroundColor = "rgba(0,0,0,0.1)";
                    }
                    else{
                        alpha = parseFloat(block.style.backgroundColor.slice(-4,-1)); 
                        
                        if (alpha < 1){
                            alpha += 0.1;
                        }

                        block.style.backgroundColor = `rgba(0,0,0,${alpha})`
                    }
                }
            })

            
            block.addEventListener("mousedown",()=>{
                if (block.style.backgroundColor ===""){
                    block.style.backgroundColor = "rgba(0,0,0,0.1)";
                }
                else{
                    alpha = parseFloat(block.style.backgroundColor.slice(-4,-1)); 
                    
                    if (alpha < 1){
                        alpha += 0.1;
                    }

                    block.style.backgroundColor = `rgba(0,0,0,${alpha})`
                }
            })
    
            row.appendChild(block);
        }
    
        sketch_cont.appendChild(row);
    }

}

drawGrid(16);

btn_clear.onclick = () =>{

    drawGrid(resolution);
}