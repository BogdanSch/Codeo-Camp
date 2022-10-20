/*
We gaan elke keer dat je op het scherm klikt het rode vierkant naar 
je muispositie verplaatsen.

Hiervoor hebben we nodig:
- Event listener om naar de muisklik te luisteren
- Query selector om het rode vierkant te selecteren
- CSS om het rode rode vierkant te verplaatsen

Bonus: 
- We kunnen het verplaatsen van het vierkant ook animeren
- We kunnen het vierkant ook elke keer dat we klikken een andere kleur geven
*/

document.addEventListener("click", (event) => {
    const vierkant = document.querySelector(".box");
    //vierkant.style = `left: ${event.clientX}px; top: ${event.clientY}px;`;
    let speed = Math.random() * 2;
    console.log(speed);
    vierkant.style = `transition: all ${speed}s ease;`;
    vierkant.style = `transform: translate(${event.clientX}px, ${event.clientY}px);`;
});
