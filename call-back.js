//sending a function as parameter, here greeetHandler is a function in line 1
function welcomeNote(name, greetHandler) {
    greetHandler(name);
}

// const name = "Shakil";
// const name = ["Showrab Bin habib", "Yamin ", "Sakib"];
function greetMorning(name) {
    console.log("Good Morning", name);
}
function greetAfternoon(name) {
    console.log("Good Afternoon", name);
}
function greetEvening(name) {
    console.log("Good Evening", name);
}
function greetNight(name) {
    console.log("Good Night", name);
}

welcomeNote("Tom Hanks", greetMorning);
welcomeNote("Yasa Rahman", greetAfternoon);
welcomeNote("Yamin Rahman", greetEvening);
welcomeNote("Kayes Bin Habib", greetNight);
welcomeNote("Showrab Bin habib", greetMorning);
