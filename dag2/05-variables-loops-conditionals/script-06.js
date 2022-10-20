/*

Dan zijn er nog loops, hiermee kun je iets meerdere keren uitvoeren. Je
gebruikt loops van in combinatie met arrays. Bijvoorbeeld zo:

*/
let nummers = [1, 2, 3];

nummers.forEach((nummer, i, array) => {
   render(Math.pow(nummer, 4))
});
// for (let nummer of nummers) {≈
// }

/*
Er zijn ook andere manieren om over een array te loopen.

Laten we een loop schrijven die alle nummers verdubbelt.
*/
