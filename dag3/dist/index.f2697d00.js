/*
We gaan het vierkantje van gister bewegen met de toetsen op je keyboard. Dit lijkt een beetje
op wat we gister gemaakt hebben met het klikken van de muis.

Hiervoor hebben we nodig:
- Query selector om het rode vierkant te selecteren
- Een event listener om naar te luisteren wanneer je op een toets drukt
- Een stukje style om het rode rode vierkant te verplaatsen

Bonus: 
- Zet het vierkant elke keer dat je op enter drukt terug in de linker bovenhoek
- Maak van het vierkant een rechthoek, en draai het 90 graden elke keer dat je op spatie drukt
*/ const box = document.querySelector(".box");
let step = 100;
let angle = 0;
box.style.left = "0px";
box.style.top = "0px";
let colors = [
    "rgb(255, 221, 0)",
    "rgb(0, 255, 81)",
    "rgb(0, 128, 255)",
    "rgb(128, 0, 255)",
    "rgb(0, 255, 60)"
];
//let boxWidth = 300//parseInt(box.style.width);
//let boxHeight = 100//parseInt(box.style.height);
let nummer = 0;
function ChooseColor() {
    nummer++;
    if (nummer > colors.length - 1) nummer = 0;
    return colors[nummer];
}
document.addEventListener("keydown", (e)=>{
    // let width = $(document).width();
    // let height = $(document).height();
    if (e.key === "ArrowRight") box.style.left = parseInt(box.style.left) + step + "px";
    if (e.key === "ArrowLeft") box.style.left = parseInt(box.style.left) - step + "px";
    if (e.key === "ArrowUp") box.style.top = parseInt(box.style.top) - step + "px";
    if (e.key === "ArrowDown") box.style.top = parseInt(box.style.top) + step + "px";
    if (e.key === " ") {
        angle += 90;
        box.style.transform = `rotate(${angle}deg)`;
    }
    if (e.key === "c") box.style.background = ChooseColor();
});

//# sourceMappingURL=index.f2697d00.js.map
