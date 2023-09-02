const dino = document.querySelector("#dino img");
const cactus = document.querySelector("#cactus img");

document.addEventListener("keydown", (e) => {
    jump()
})

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    } 
        setTimeout(() => {
            dino.classList.remove("jump")
        }, 300)
    
}

let dinoLive = setInterval(() => {
    let dinoT = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusL = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    console.log("dinoT:", dinoT);
    console.log("cactusL:", cactusL);

    if (cactusL < 50 && cactusL > 0 && dinoT >= 140) {
        
        alert("Game Over");
    }
}, 10);
