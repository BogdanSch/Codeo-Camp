/*

Alleen maar variabelen renderen is natuurlijk een beetje saai. Vaak wil je
net iets anders doen afhankelijk van de waarde in de variabele. Dit kan je
doen met conditionals. Dit klinkt ingewikkeld, maar is niks anders dan
een soort regel voor wat er moet gebeuren.

Laten we beginnen met een voorbeeld, dan snap je het vanzelf.

*/
let naam = "Bohdan";

if (naam.length < 10) {
  render('Het is een goede naam 🤘');
}
else if(naam.length >= 10 && naam.length <= 20){
  render("Het is een grote naam!")
}
else{
  render("OMG! Wat een grote naam!\n");
  render(naam);
}
/*

Je kan ook andere dingen vergelijken, bijvoorbeeld strings of integers.

*/